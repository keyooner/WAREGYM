FROM mysql/mysql-server:latest

ENV MYSQL_ROOT_HOST=root
ENV MYSQL_DATABASE=waregym
ENV MYSQL_ROOT_PASSWORD=pass
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=pass

COPY ./database.sql /docker-entrypoint-initdb.d/database.sql

EXPOSE 3306

