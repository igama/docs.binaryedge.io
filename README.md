# site-docs.binaryedge.io


Build using [mkdocs](https://www.mkdocs.org/)

```
pip3 install --no-cache-dir -r requirements.txt
```

## In Development mode

```
$ mkdocs serve
INFO    -  Building documentation...
INFO    -  Cleaning site directory
[I 160402 15:50:43 server:271] Serving on http://127.0.0.1:8000
[I 160402 15:50:43 handlers:58] Start watching changes
[I 160402 15:50:43 handlers:60] Start detecting changes
```


## Build

```
$ mkdocs build
$ cd site
$ python3 -m http.server
```

or if you have Docker running

```
$ ./build.sh
$ cd site
$ python3 -m http.server
```
