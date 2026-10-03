# Snow � a sourdough starter

Instructions for reviving dried sourdough starter flakes, keeping the culture alive,
and baking with it.

**Live site: https://finandstar.github.io/sourdough/**

Snow is a sourdough culture that came via a Portuguese baker teaching a class in town.
It is maintained on King Arthur bread flour at 100% hydration. Dried flakes of it get
handed out to anyone who wants some; this site is what the card in the packet points to.

## Pages

| Page | What it covers |
| --- | --- |
| `index.html` | Landing page, the short version |
| `about.html` | Where Snow came from, and naming your own starter (generator + Copilot prompt) |
| `revive.html` | Day-by-day revival of dried flakes |
| `feeding.html` | Long-term maintenance, ratios, storage |
| `method.html` | Technique: folds, bulk ferment, shaping, proofing, scoring, baking, storage |
| `troubleshooting.html` | Hooch, smells, mould, no activity |
| `share.html` | Drying your own flakes to pass on |
| `glossary.html` | Sourdough terminology |
| `give.html` | Give Month call to action and charities that feed people |
| `contact.html` | Questions, feedback, and credits |
| `recipes/` | Loaf, add-ins, mini loaves, pita, pizza, pancakes, crackers, cheese crackers, chocolate muffins, cinnamon rolls, tortillas |
| `recipes/new-recipe-prompt.html` | Editable Copilot prompt that writes a new recipe page in the house style |

## Illustrations

`assets/img/*.svg` are original line illustrations drawn for this site, in the site's
palette. No stock images and no third-party assets, so there is nothing to license or
attribute. They are plain SVG — edit them in a text editor or any vector tool.

Use presentation attributes (`fill`, `stroke`) directly on elements rather than a `<style>`
block: some renderers ignore embedded CSS. Only numeric character entities (`&#8212;`) are
valid in SVG, not HTML named ones (`&mdash;`).

`assets/img/scoring.svg` is a deliberate redraw. Scoring patterns themselves are traditional
and functional, so the information is free to use, but existing published charts of them are
copyrighted artwork and are not reproduced here.

## Tested vs collected

Recipes carry a badge. **Tested** means baked repeatedly in my own kitchen. **Collected**
means gathered from a baker whose judgement I trust, rewritten in metric and plain language,
and still on the to-bake list. Move a recipe to tested by swapping `tag-untested` for
`tag-tested`, updating the note at the foot of the page, and changing the label on the
recipes index.

## Source of the method

The feeding ratios, the loaf and the timings follow the beginners' sourdough workshop the
starter came from, including the student guide handed out on the day. That guide is someone
else's copyrighted work and is **not** reproduced here: everything on these pages is written
fresh, and the workshop is credited on `contact.html`.

## Navigation

The top nav carries the nine task-oriented pages. **Glossary and Contact are deliberately
not in it** — at nine items the nav already wraps to three rows on a 390px phone, and two
more would make it four. They live in the footer sitemap instead, which appears on every
page and groups everything into Start here / Keep it going / More.

## Link previews

Every page carries Open Graph and Twitter card meta, so pasting a link into Teams, Slack
or iMessage produces a proper preview card rather than a bare URL. The preview image is
`assets/og.png` (1200×630). To regenerate it, build the layout as HTML and screenshot it
in a browser at that size — rendering the SVG directly loses the gradients.

## Accessibility

Each page starts with a skip link, wraps its content in a `<main id="main">` landmark, and
has a visible focus ring via `:focus-visible`. Keep those if you hand-edit a page.

## Accessibility

Checked against Microsoft's published guidance (Style Guide, Fluent 2, and what Immersive
Reader actually ships) with WCAG 2.1 AA as the target, which is the level Microsoft
recommends for general content.

Worth knowing: **Microsoft does not use a dyslexia-specific typeface.** Immersive Reader
offers Calibri, Sitka and Comic Sans — no OpenDyslexic. The effort goes into size, spacing
and contrast instead, which is what this site does too.

What is in place, and must survive future edits:

| Thing | Rule |
| --- | --- |
| Body text | 19px, line-height 1.65 (WCAG 1.4.12 needs content to survive 1.5) |
| Text contrast | 4.5:1 minimum. `--accent` is text-safe; `--accent-bright` is decorative only |
| Links | Colour **and** underline, never colour alone |
| Headings | Sentence case. No all-caps in text — it destroys the word shapes people scan by |
| Targets | Interactive elements at least 24px, mostly 40px+ |
| Reflow | No horizontal scroll at 320px. Wide tables go in `.scroller` |
| Motion | `prefers-reduced-motion` honoured |
| Alt text | Under 150 characters, starts with a capital, ends with a full stop, never starts with "Image" |

Re-run `sourdough-audit.py` after edits. It checks links, meta, nav, landmarks, alt text,
SVG validity and badge consistency.

## Interactive bits

Both are progressive enhancement — they work, or sensibly do not appear, with JavaScript off.

- **Revival tracker** (`revive.html`): a 12-step checklist stored in `localStorage` under
  `snow-revival-v1`. Per-browser, per-device, never sent anywhere. The progress bar and
  buttons stay `hidden` until the script confirms they work, so nothing dead is ever shown.
  Prints as a plain paper checklist.
- **Recipe scaling** (`assets/scale.js`): add `data-scale` to an ingredient `<table>` whose
  amounts sit in `<td class="num">`. One control per page scales every marked table together.
  Handles ranges (`1–2 tbsp`), formats fractions, leaves "a pinch" alone, and warns about
  half-eggs. With JavaScript off, the written quantities stand and no control appears.

## Printing

`card/card.html` is the gift card: four to a US Letter sheet, double-sided. Print at 100%
scale with background graphics on and margins set to None.

`card/table-sign.html` is a one-page Letter sign for the table the packets sit on, carrying
both QR codes clearly labelled.

Recipe and instruction pages have a print stylesheet — printing one from the browser drops
the nav, footer and background colours, keeps steps from splitting across pages, and spells
out external link targets. Useful for taking a recipe into the kitchen.

A local copy at `card/card-print.html` carries personal contact details and is
deliberately git-ignored, so those details are never published. It is generated from
`card.html`, so regenerate it after editing the card.

## Structure

Plain static HTML with a single stylesheet. No build step, no dependencies, no
JavaScript. Edit a file, commit, and GitHub Pages publishes it.

```
.
+-- index.html
+-- about.html
+-- revive.html
+-- feeding.html
+-- method.html
+-- troubleshooting.html
+-- share.html
+-- glossary.html
+-- give.html
+-- contact.html
+-- assets/
�   +-- style.css
�   +-- qr.png
�   +-- qr-give.png
�   +-- img/
�       +-- jar.svg, loaf.svg, flakes.svg, minis.svg, discard.svg, give.svg
�       +-- name.svg, scoring.svg
+-- recipes/
�   +-- index.html
�   +-- new-recipe-prompt.html
�   +-- basic-loaf.html
�   +-- inclusions.html
�   +-- mini-loaves.html
�   +-- pita.html
�   +-- pizza.html
�   +-- tortillas.html
�   +-- cinnamon-rolls.html
�   +-- chocolate-muffins.html
�   +-- cheese-crackers.html
�   +-- discard-pancakes.html
�   +-- discard-crackers.html
+-- card/
    +-- card.html
```

## Contributing

Found an error, or have a method that works better? Open an issue or a pull request.

## Licence

Content is released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) �
use it, adapt it, pass it on, just credit where it came from.
