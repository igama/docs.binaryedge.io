# RSYNC

The RSYNC module attempts to connect to an RSYNC server anonymously and list the available modules (list the contents at the root directory).

## RSYNC Request Example

```
curl -v -L https://api.binaryedge.io/v1/tasks -d '{"type":"scan", "options":[{"targets":["X.X.X.X"], "ports":[{"port":873, "protocol":"tcp", "modules":["rsync"]}]}]}' -H "X-Token:<Token>"
```

## Schema

### RSYNC Event Schema

```json
{
   "result":{
      "data":{
        "modules": [{
          "status": "string",
          "module": "string"
        }],
        "status": "string",
        "banner": "string",
        "version": "string"
      }
   },
   ...
}
```

### Contents of the fields:

* modules - List of modules (folders) on the RSYNC server
    * status - Status of the access to the module
    * module - Name of the module
* status - General status of the access to the RSYNC server
* banner - Server banner, if any
* version - RSYNC protocol version

## RSYNC Event Example

```json
{
   "result":{
      "data": {
          "modules": [{
            "status": "@RSYNCD: AUTHREQD",
            "module": "Downloads"
          }, {
            "status": "@RSYNCD: AUTHREQD",
            "module": "homes"
          }, {
            "status": "@RSYNCD: AUTHREQD",
            "module": "Icebird"
          }, {
            "status": "@RSYNCD: AUTHREQD", 
            "module": "Local Archiving Storage 1"
          }, {
            "status": "@RSYNCD: AUTHREQD",
            "module": "music"
          }, {
            "status": "@RSYNCD: AUTHREQD",
            "module": "Naturhigia"
          }, {
            "status": "@RSYNCD: AUTHREQD",
            "module": "NetBackup"
          }, {
            "status": "@RSYNCD: AUTHREQD",
            "module": "photo"
          }, {
            "status": "@RSYNCD: AUTHREQD",
            "module": "surveillance"
          }, {
            "status": "@RSYNCD: AUTHREQD",
            "module": "video"
          }, {
            "status": "@RSYNCD: AUTHREQD",
            "module": "web"
          }, {
            "status": "@RSYNCD: AUTHREQD",
            "module": "xcloud"
          }, {
            "status": "@RSYNCD: AUTHREQD",
            "module": "home"
          }],
          "status": "protected",
          "banner": "",
          "version": "30.0"
      }
   },
   ...
}
```
