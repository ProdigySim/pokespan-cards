# Pokéspan Card Generator
## Prerequisite
Install [this branch](https://github.com/AEPSchmitt/cards.py) of cards.py

## Running
Edit `data/pokemon.csv` to change card titles and text

Then use 
```
python makecards.py
```
to re-generate cards.

or
```
cards make "data/pokemon.csv" -d defs.csv -o "Pokemon" --card-size=standard_small
```
to change parameters like output folder, csv-file or card size
