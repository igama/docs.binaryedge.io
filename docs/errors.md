# HTTP Status Messages

Performing a malformed query:

```
HTTP/1.1 400 Bad Request
{
    "status": 400,
    "title": "Bad Request",
    "message": "Bad Parameter. Please review your query and try again."
}
```


Sending an invalid Token:

```
HTTP/1.1 401 Unauthorized
{
    "status": 401,
    "title": "Unauthorized",
    "message": "Could not validate token. Please review your token and try again."
}
```


Accessing a page that does not exist:

```
{
    "status": 404,
    "title": "Not Found",
    "message": "Page not found."
}
```


Accessing a feature you don't have permissions:

```
HTTP/1.1 403 Forbidden
{
    "status": 403,
    "title": "Forbidden",
    "message": "Your plan doesn't allow you to access this resource."
}
```