FROM node:16.20.2-alpine3.18
COPY ./cron_config.txt /var/spool/cron/crontabs/root
CMD [ "crond", "-f" ]