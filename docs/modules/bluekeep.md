# Bluekeep

The Bluekeep module attempts to determine if an RDP server is vulnerable to the Bluekeep vulnerability.

## Bluekeep Request Example

```
curl -v -L https://api.binaryedge.io/v1/tasks -d '{"type":"scan", "options":[{"targets":["X.X.X.X"], "ports":[{"port":3389, "protocol":"tcp", "modules":["bluekeep"]}]}]}' -H "X-Token:<Token>"
```

## Schema

### Bluekeep Event Schema

```json
{
  ...
  "result": {
    "data": {
      "status": "string",
      "reason": "string"
    }
}
```

### Contents of the fields:

* status - Result status of the Bluekeep check
* reason - Reason why the status was identified as such

## Bluekeep Event Example

```json
{
  ...
  "result": {
    "data": {
      "status": "VULNERABLE",
      "reason": "got appid"
    }
  }
}
```
