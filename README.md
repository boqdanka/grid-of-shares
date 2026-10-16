# Grid of shares

An interactive grid ("treemap") for data: every sector's area is its share of the whole, and sectors resize, count and animate as the data changes. No build step, no dependencies.

## Run

Open `index.html` in a browser, or serve the folder with any static server.
Fonts (Averia Serif Libre, Special Gothic Condensed One, Roboto Condensed) load from Google Fonts. Self-host them if the platform blocks external requests.

## Files

- `index.html` - the control panel (Data and Design tabs) and the canvas.
- `styles.css` - panel styles and the sector/text typography rules.
- `app.js` - everything else, in one function. Sections, in order:
  - templates and the sector model (`mk`, `TEMPLATES`)
  - number parsing (`parseVal`, `numToken`): "5 500 000", "2,6M", "1.234,5", "-12", "12-15"
  - layout tree (`buildNode`, `place`, `ensureTree`): fixed topology, proportions from weights
  - text layout (`layoutFor`, `adapt`, `fitText`): sticky layout decided from the target size, eased per frame
  - animation loop (`frame`): weights ease, layout recomputed, text adapted
  - history, data table, playback, import, bindings (end of file)

## Data

One sector per line: a name, then one value per column. Tab, `;` or `,` separated. A first line of column names is recognised.
Settings (including the data) are kept in `localStorage` under `gridviz12`.

## Notes

- Sizes come from "the shares I set", "the data, proportionally", or "the data's change vs the first column".
- A template can hold a hand-made layout; any change in the number of sectors switches to the automatic layout.
