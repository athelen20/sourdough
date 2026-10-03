# Snow � a sourdough starter

Instructions for reviving dried sourdough starter flakes, keeping the culture alive,
and baking with it.

**Live site: https://athelen20.github.io/sourdough/**

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

## Card

`card/card.html` is a printable card: four cards to a US Letter sheet, double-sided,
with a QR code pointing at the live site. Open it in a browser and print at 100% scale
with background graphics enabled.

`card/table-sign.html` is a one-page Letter sign for the table the packets sit on. It
carries both QR codes, clearly labelled: the instructions site and `aka.ms/give`.

A local copy at `card/card-print.html` carries personal contact details and is
deliberately git-ignored, so those details are never published.

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
