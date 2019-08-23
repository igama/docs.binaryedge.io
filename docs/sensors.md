# Sensors Data

## Introduction 

We have a distributed network of Sensors (Honeypots), that are "listen-only" machines, collecting data of every connection they receive:

  * Source IPs
  * Target Ports
  * Payloads 

By collecting this data we can answer questions like:

  * Is a specific IP Malicious?
  * As an organization been compromised and their infrastructure being used in Attacks?
  * How long before a vulnerability is revealed that we start seeing people scan for it?
  * Are there spikes in certain ports or payloads being scanned?
  * Are there patterns in scanning?

This data is accessible via:

  * Real Time Data Stream (Enterprise)
  * Portal
  * API

## JSON Event Example

Event type: sinkhole

```json
{
  "origin": {
    "ip": "51.77.52.90", 
    "asn": 16276, 
    "rdns": "ns3138325.ip-51-77-52.eu",
    "type": "sinkhole", 
    "client_id": "sinkhole", 
    "ts": 1550757347864
  }, 
  "target": {
    "ip": "142.93.238.68",
    "port": 22, 
    "protocol": "tcp"
  }, 
  "data": {
    "payload": "SSH-2.0-libssh2_1.4.3\\r\\n",
    "extra": {
      "ssh": {
        "description": "SSH-2.0-libssh2_1.4.3"
      }
    },
    "tags": ["SSH_SCANNER"]
  }
}
```

### Fields Explained

* **origin**: Information about the origin of the payload, i.e, source remote machine that sent the payload
    * **ip**: IP address of the source of the payload
    * **port**: Port of the source of the payload
    * **asn**: AS number associated with the source IP address
    * **rdns**: Reverse DNS of the source IP address
    * **type**: Static field, always "sinkhole", meant to distinguish from other events
    * **client_id**: Static field, always "sinkhole", meant to distinguish from other events
    * **ts**: Timestamp of when the payload was sent

* **target**: Information about the target of the payload, i.e, our machine that received the payload
    * **ip**: IP address of the destination of the payload
    * **port**: Port of the destination of the payload
    * **protocol**: Protocol of the destination of the payload (currently TCP only)

* **data**: Information about the payload
    * **payload**: Raw data that was sent and captured. No additional processing.
    * **extra**: Data extracted after partially processing the payload.
        * **http**: Extra fields related to HTTP payload
            * **headers**: HTTP headers
            * **header_order**: HTTP header order fingerprint string
            * **header_order_hash**: HTTP header order fingerprint hash
            * **method**: HTTP method
            * **path**: HTTP path
            * **version**: HTTP protocol version
        * **ssh**: Extra fields related to SSH payload
            * **description**: SSH identification string
            * **hassh_algorithms**: HASSH algorithms fingerprint string
            * **hassh**: HASSH fingerprint hash
        * **ssl**: Extra fields related to SSL payload
            * **description**: 
            * **ja3**: JA3 fingerprint string
            * **ja3_digest**: JA3 fingerprint hash
    * **tags**: Rule based tagging derived from the payload.


### Schema

```json
{
  "origin":{
    "ip":"string",
    "port":"int",
    "asn":"int",
    "rdns":"string",
    "rdns_parent":"string",
    "type":"string",
    "client_id":"string",
    "ts":"int"
  },
  "target":{
    "ip":"string",
    "port":"int",
    "protocol":"string"
  },
  "data":{
    "payload":"string",
    "extra":{
      "http":{
        "headers":"string",
        "header_order":"string",
        "header_order_hash":"string",
        "method":"string",
        "path":"string",
        "version":"string"
      },
      "ssh":{
        "description":"string",
        "hassh_algorithms":"string",
        "hassh":"string"
      },
      "ssl":{
        "description":"string",
        "ja3":"string",
        "ja3_digest":"string"
      }
    },
    "tags":"list"
  }
}
```

## More Details

  * [Search Sensors Data](sensors-search.md "sensors-search")
  * [Sensors Tags](sensors-tags.md "sensors-tags")