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
| `revive.html` | Day-by-day revival of dried flakes |
| `feeding.html` | Long-term maintenance, ratios, storage |
| `method.html` | Technique: folds, bulk ferment, shaping, proofing, scoring, baking, storage |
| `troubleshooting.html` | Hooch, smells, mould, no activity |
| `share.html` | Drying your own flakes to pass on |
| `glossary.html` | Sourdough terminology |
| `contact.html` | Questions, feedback, and credits |
| `recipes/` | Basic loaf, add-ins, discard pancakes, discard crackers |

## Source of the method

The feeding ratios, the loaf and the timings follow the beginners' sourdough workshop the
starter came from, including the student guide handed out on the day. That guide is someone
else's copyrighted work and is **not** reproduced here: everything on these pages is written
fresh, and the workshop is credited on `contact.html`.

## Card

`card/card.html` is a printable card: four cards to a US Letter sheet, double-sided,
with a QR code pointing at the live site. Open it in a browser and print at 100% scale
with background graphics enabled.

A local copy at `card/card-print.html` carries personal contact details and is
deliberately git-ignored, so those details are never published.

## Structure

Plain static HTML with a single stylesheet. No build step, no dependencies, no
JavaScript. Edit a file, commit, and GitHub Pages publishes it.

```
.
+-- index.html
+-- revive.html
+-- feeding.html
+-- method.html
+-- troubleshooting.html
+-- share.html
+-- glossary.html
+-- contact.html
+-- assets/
�   +-- style.css
�   +-- qr.png
+-- recipes/
�   +-- index.html
�   +-- basic-loaf.html
�   +-- inclusions.html
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
