default:
	cd api && npm i
	cd ui && yarn

server:
	cd api && npm start

client:
	cd ui && yarn start

deploy-ui:
	cd ui && yarn deploy

deploy-api:
	cd api && pm2 start npm --name "api" -- start
