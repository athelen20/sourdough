/* Recipe scaling.
   Progressive enhancement: with JavaScript off, the written quantities
   stand and no controls appear.

   One control per page scales every marked table together, because
   "half batch" means half of everything, not half of one table. */
(function () {
  'use strict';

  var tables = [].slice.call(document.querySelectorAll('table[data-scale]'));
  if (!tables.length) { return; }

  var STEPS = [
    { f: 0.5, label: 'Half' },
    { f: 1,   label: 'Single' },
    { f: 2,   label: 'Double' }
  ];

  var FRACTIONS = { '0.25': '\u00bc', '0.5': '\u00bd', '0.75': '\u00be' };

  // Things you cannot meaningfully cut in half without weighing them.
  var COUNTABLE = /\b(egg|eggs|yolk|yolks|white|whites)\b/i;

  var cells = [];
  tables.forEach(function (table) {
    [].slice.call(table.querySelectorAll('td.num')).forEach(function (td) {
      if (!td.hasAttribute('data-base')) {
        td.setAttribute('data-base', td.textContent.trim());
      }
      td.classList.add('scaled');
      var row = td.closest('tr');
      var name = row ? row.cells[0].textContent : '';
      cells.push({ td: td, countable: COUNTABLE.test(name) });
    });
  });

  if (!cells.length) { return; }

  function round(n) {
    if (n >= 100) { return Math.round(n / 5) * 5; }
    if (n >= 20)  { return Math.round(n); }
    if (n >= 1)   { return Math.round(n * 2) / 2; }
    return Math.round(n * 20) / 20;
  }

  function fmt(n) {
    var whole = Math.floor(n);
    var frac = +(n - whole).toFixed(2);
    var key = frac.toString();
    if (FRACTIONS[key]) {
      // Mixed numbers set tight: 5 1/2 reads as "5 1/2", not "5  1/2"
      return (whole ? String(whole) : '') + FRACTIONS[key];
    }
    return (Math.round(n * 100) / 100).toString();
  }

  var anchor = tables[0];
  var wrap = document.createElement('div');
  wrap.className = 'scale';

  var lbl = document.createElement('span');
  lbl.className = 'lbl';
  lbl.id = 'scale-label';
  lbl.textContent = 'Batch size:';
  wrap.appendChild(lbl);

  var group = document.createElement('div');
  group.className = 'group';
  group.setAttribute('role', 'group');
  group.setAttribute('aria-labelledby', 'scale-label');

  var note = document.createElement('p');
  note.className = 'scalenote';
  note.setAttribute('aria-live', 'polite');

  function apply(factor, label) {
    var awkward = false;

    cells.forEach(function (c) {
      var base = c.td.getAttribute('data-base');

      // A range such as "1-2 tbsp": scale both ends, not just the first.
      var range = base.match(/^([\d.]+)\s*([\u2013\u2014-])\s*([\d.]+)(\s*)(.*)$/);
      if (range) {
        var lo = round(parseFloat(range[1], 10) * factor);
        var hi = round(parseFloat(range[3], 10) * factor);
        c.td.textContent = fmt(lo) + '\u2013' + fmt(hi) + range[4] + range[5];
        return;
      }

      var m = base.match(/^([\d.]+)(\s*)(.*)$/);
      if (!m) { return; }           // "a pinch", "to taste" - left alone
      var value = parseFloat(m[1], 10) * factor;
      if (c.countable && Math.abs(value - Math.round(value)) > 0.01) {
        awkward = true;
      }
      c.td.textContent = fmt(round(value)) + m[2] + m[3];
    });

    [].slice.call(group.children).forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.label === label ? 'true' : 'false');
    });

    if (factor === 1) {
      note.textContent = 'Showing the standard batch.';
    } else {
      note.textContent = 'Showing a ' + label.toLowerCase()
        + ' batch. Timings, oven temperature and tin size do not scale '
        + '\u2014 use your eyes, and a smaller tin.'
        + (awkward ? ' For part of an egg, beat one whole egg and weigh out '
                   + 'what you need: a large egg is about 50\u00a0g.' : '');
    }
  }

  STEPS.forEach(function (s) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = s.label;
    b.dataset.label = s.label;
    b.setAttribute('aria-pressed', s.f === 1 ? 'true' : 'false');
    b.addEventListener('click', function () { apply(s.f, s.label); });
    group.appendChild(b);
  });

  wrap.appendChild(group);

  var target = anchor.closest('.scroller') || anchor;
  target.parentNode.insertBefore(wrap, target);
  target.parentNode.insertBefore(note, target.nextSibling);

  apply(1, 'Single');
})();
