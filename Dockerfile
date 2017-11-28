FROM ubuntu:14.04

MAINTAINER Andrés Felipe Achury Jaramillo

RUN apt-get update
RUN apt-get -y install apache2

COPY ./webapp/ /var/www/html/

EXPOSE 80

ENTRYPOINT ["apache2ctl"]
CMD ["-DFOREGROUND"]