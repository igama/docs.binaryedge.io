# Web

Extract Web technologies information and headers.


*DEPRECATED - Please refer to the [WebV2](https://docs.binaryedge.io/modules/webv2/) module*


## Web Request Example

```
curl -v -L https://api.binaryedge.io/v1/tasks -d '{"type":"scan", "options":[{"targets":["X.X.X.X"], "ports":[{"port":80, "protocol":"tcp", "modules":["web"], "config":{}}]}]}' -H "X-Token:<Token>"
```

### Web Request Options

These are optional parameters that can alter the behaviour of the module. These options can be inserted into the "config" object on the request.

* https - Whether to use HTTPS instead of HTTP
    * "config":{"https":true}
* screenshot - Whether to take a screenshot of the website
    * "config":{"screenshot":true}

## Schema

### Web Event Schema

```json
{
  ...
  "result": {
    "data": {
      "apps": [{
          "name": "string",
          "confidence": "int",
          "version": "string",
          "categories": [{
              "name": "string",
              "priority": "string"
            }]
        }]
      },
      "headers": {
      	"string": "string"
      },
      "html": "string",
      "screenshot": "string"
    }
  }
}
```

### Contents of the fields:

* apps - Request made by the module
  	* name - Name of the technology
  	* confidence - Confidence level for the match
    * version - Version of the technology
    * categories - Categories of the technology
        * name - Name of the category
        * priority - Priority (importance) of the category
* headers - Headers from the web server
* html - URL link to the html code of the web page
* screenshot - URL link to the screenshot of the web page

## Web Event Example

```json
{
...
  "result": {
    "data": {
      "apps": [
        {
          "name": "Apache",
          "confidence": 100,
          "version": "2.2.26",
          "categories": [
            {
              "name": "Web Servers",
              "priority": 7
            }
          ]
        },
        {
          "name": "OpenSSL",
          "confidence": 100,
          "version": "0.9.8e",
          "categories": [
            {
              "name": "Web Server Extensions",
              "priority": "5"
            }
          ]
        },
        {
          "name": "UNIX",
          "confidence": 100,
          "version": "",
          "categories": [
            {
              "name": "Operating Systems",
              "priority": "5"
            }
          ]
        },
        {
          "name": "mod_ssl",
          "confidence": 100,
          "version": "2.2.26",
          "categories": [
            {
              "name": "Web Server Extensions",
              "priority": "5"
            }
          ]
        }
      ],
      "headers": {
        "date": "Fri, 08 Jul 2016 16:40:05 GMT",
        "server": "Apache/2.2.26 (Unix) mod_ssl/2.2.26 OpenSSL/0.9.8e-fips-rhel5 mod_bwlimited/1.4",
        "last-modified": "Wed, 12 Feb 2014 07:42:45 GMT",
        "etag": "\"25de0f5-6f-4f230b7eda740\"",
        "accept-ranges": "bytes",
        "content-length": "111",
        "keep-alive": "timeout=5, max=100",
        "connection": "Keep-Alive",
        "content-type": "text/html"
      }
    }
  }
}
```
