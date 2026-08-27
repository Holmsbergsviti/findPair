# Find Pair 🃏

A browser-based memory matching game built in vanilla JavaScript. Cards start face-down; flip them two at a time and try to find all the matching pairs. Card positions are shuffled on reveal so no two games play out the same way.

## How to play

1. Click a card to flip it over.
2. Flip a second card.
3. If the two images match, the pair stays revealed; if not, they flip back.
4. Clear the board by matching every pair.

## Pairs

Eight image pairs are used: Ball, Basketball, Bee, Cat, Coin, Dog, Fish, and Telephone.

## Tech stack

- Vanilla **JavaScript**
- **HTML** + **CSS**
- No dependencies, no build step

## Project structure

```
Index.html      # board markup
css/style.css   # styling
js/script.js    # flip, shuffle, and match logic
img/            # card face images
```

## Running

Open `Index.html` in any browser, or serve the folder over HTTP:

```bash
python -m http.server 8000
# then visit http://localhost:8000/Index.html
```
