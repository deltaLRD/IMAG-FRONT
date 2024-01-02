FROM nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY ./IMAG-FRONT /workspace/IMAG-FRONT
# COPY ./node-v16.20.2-linux-x64.tar.xz /workspace/node-v16.20.2-linux-x64.tar.xz
# COPY ./cron_config.txt /var/spool/cron/root
# RUN apt-get update && \
#     apt-get install cron -y && \
#     apt-get install xz-utils -y && \
#     apt-get install vim -y

# RUN echo '# The PAM configuration file for the cron daemon\n\
# \n\
# @include common-auth\n\
# \n\
# # Sets the loginuid process attribute\n\
# #session    required     pam_loginuid.so\n\
# \n\
# # Read environment variables from pam_env's default files, /etc/environment\n\
# # and /etc/security/pam_env.conf.\n\
# session       required   pam_env.so\n\
# \n\
# # In addition, read system locale information\n\
# session       required   pam_env.so envfile=/etc/default/locale\n\
# \n\
# @include common-account\n\
# @include common-session-noninteractive \n\
# \n\
# # Sets up user limits, please define limits for cron tasks\n\
# # through /etc/security/limits.conf\n\
# session    required   pam_limits.so\n' > /etc/pam.d/cron

# RUN mkdir /usr/local/lib/nodejs 
# RUN tar -xJvf /workspace/node-v16.20.2-linux-x64.tar.xz -C /usr/local/lib/nodejs

# ENV PATH="/usr/local/lib/nodejs/node-v16.20.2-linux-x64/bin:${PATH}"
# ENV NODE_MAJOR=16

# RUN touch /var/log/cron.log
EXPOSE 80
# CMD [ "nginx", "-g", "daemon off;"]