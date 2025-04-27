#!/bin/bash

if [ $? -eq 0 ]; then
    echo "Generating Cards..."
    cards make "data/cards.csv" -d defs.csv -o "Pokemon" --card-size=standard
    python -m http.server 1337
else
    echo "Failed to download the file."
    exit 1
fi
