#!/usr/bin/env bash

set -x
cd e2e

export HOST="https://angular.io"

docker-compose up --build --abort-on-container-exit --exit-code-from protractor
EXIT_CODE=$?

cd ..

if [ "$EXIT_CODE" != "0" ]; then
    exit -1
fi
