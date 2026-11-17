#!/bin/zsh
cd "$(dirname "$0")"
PORT=8087
echo "Iniciando Entrenador de Naturkunde 5. Klasse en http://localhost:$PORT ..."
(sleep 1 && open "http://localhost:$PORT") &
python3 -m http.server $PORT
