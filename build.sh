docker build -t binaryedge/docs .
docker run --rm -v $(pwd):/usr/src/app binaryedge/docs mkdocs build