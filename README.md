# templateimpl
Demonstration of Openchs implementation setup

Please have a secrets.json file in the parent directory. With the following content.

```json
{
  "dev": {
    "serverUrl": "http://localhost:8021"
  }
}
```

install dependencies
```
make
```

to deploy refdata/metadata to the local server
```
make deploy-dev-all
```
