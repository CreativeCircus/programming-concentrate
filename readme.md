# Concentrate Game

Sometimes known as a matching card game. Where you lay out all the cards, face down, in a grid, and take turns flipping 2 at a time, trying to find matching pairs (e.g. 2 of hearts and 2 of diamonds are both red 2s). If you find a matching pair, you take it out of the grid. Repeat til you have them all.

In our version, we'll use LoremFlickr to provide images that are better suited to a coding environment.

We'll also programmatically randomize which images we use, and where the cards are put in the grid.

When a card is flipped, we'll check if it's the first or second to be flipped, and if its the second, does it match the first. It's more complicated than you think.