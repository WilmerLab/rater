# Rater

## Requirements

 - Node
 - Mongo DB

## Setup

Install and run the API:

    cd /rater/api && npm install && npm start

Install and run the UI in development (port 3000):

    cd /rater/ui && npm install && npm start

Install and run the UI in production:

    cd /rater/ui && npm install && npm run deploy


### deploy with pm2

```
pm2 start npm --name "api" -- start
```

### env vars

```
# api
PORT <-- api port (defaults to :8080)
ORIGIN <-- allowed cors requestors
INDEX <-- mongodb namespace

# ui
REACT_APP_API <-- url of api
REACT_APP_ROUTER <-- history strategy (defaults to hash to facilitate github pages)

```
