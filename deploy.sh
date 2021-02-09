cp -rf /etc/letsencrypt/archive/inklay.net/ ./certificates

docker build --tag server_image .

docker container stop server

docker container rm server

docker container run -d --name "server" -p 80:80 -p 443:443 server_image

docker logs server
