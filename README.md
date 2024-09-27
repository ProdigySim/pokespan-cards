# Pokéspan Card Generator
## Prerequisite
Install [this branch](https://github.com/AEPSchmitt/cards.py) of cards.py

## Running
Edit `data/cards.csv` to change texts and titles

Then use 
```
python makecards.py
```
to re-generate cards.

or use
```
cards make "data/cards.csv" -d defs.csv -o "Pokemon" --card-size=standard_mini
```
to change parameters like output folder, csv-file or card size (`standard_mini` or `standard`)

Open `Pokemon/generated/index.html` to view and print your generated cards

[Live Example](https://aepschmitt.dk/boardgames/pokespan/)