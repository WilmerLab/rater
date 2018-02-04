# Rater

## Requirements

 - Node
 - Local Mongo DB running

## Setup

Install and run the API:

    cd /rater/api && npm install && npm start

Install and run the UI in development (port 3000):

    cd /rater/ui && npm install && npm start

Install and run the UI in production:

    cd /rater/ui && npm install && npm run deploy


### deploy with pm2

```
pm2 start npm --name "Your APP Name" -- start
```

### env vars

```
# api
PORT
ORIGIN
INDEX

# ui
REACT_APP_API
REACT_APP_ROUTER

```
