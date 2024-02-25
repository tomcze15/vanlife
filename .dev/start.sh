#!/bin/bash

if [ ! -f .env ]; then
  echo "The environment file does not exist"
  exit 1
fi

docker compose up --build