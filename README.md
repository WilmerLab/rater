![rater_logo](https://i.imgur.com/Pzv1yq7.png)

Content submission / rating service.

### Development

#### Requirements

 - Node (8+)
 - MongoDB
 - yarn

#### Install

`make`

#### Start API Server

`INDEX=<mongo_index_name> make server`

#### Start Web App

`REACT_APP_API=<api_url> make client`

#### Deploy API Server

`INDEX=<mongo_index_name> make deploy-api`

#### Deploy Web App

`REACT_APP_API=<api_url> make deploy-ui`

#### env vars

```
# api
PORT <-- api port (defaults to :8080)
ORIGIN <-- allowed cors requestors
INDEX <-- mongodb namespace
SECRET <-- for jwt handshakes

# ui
REACT_APP_API <-- url of api (defaults to localhost:8080)
REACT_APP_ROUTER <-- history strategy (defaults to hash to facilitate github pages)

```
