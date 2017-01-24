# FROM getdirectus/directus-base-layer:v0.0.5
# MAINTAINER Luis Santos "luis@luissantos.pt"


# RUN get-directus 6.3.6
# RUN composer install -o -d /var/www/directus/
# RUN fix-directus-permissions

# # Builds a Docker to deliver dist/
# # This came with the angular starter
# FROM nginx:latest
# COPY dist/ /usr/share/nginx/html