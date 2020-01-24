#!/bin/sh

docker-compose -f docker-compose.build.yml build || exit 1
./test.sh || exit 1

if [ [$MASTER = true] ];
then
    docker login --username $DOCKER_USERNAME  --password $DOCKER_PASSWORD
    docker push bahatron/mercurios_http
else
    echo "no master, skipping push"
fi

