---
sidebar_position: 2
---

# Install and Run DB2Rest on Docker

Let's discover **DB2 in less than 10 minutes**.

### 1. Install Docker

To download the Docker desktop browse to this [link](https://www.docker.com/get-started/). This page then shows options
to download Docker for Mac, Windows, and Linux. Please click on the link for your operating system (OS) to start the download.
After the download is completed, follow the steps outlined [here]https://docs.docker.com/desktop/ pertinent to your OS, to install and test the Docker desktop.

### 2. Run DB2Rest

Now launch a terminal window to run the DB2Rest docker image. DB2Rest docker image is available on [Dockerhub](https://hub.docker.com/repository/docker/kdhrubo/db2rest/general).
It is assumed that a MySQL server has already been installed, started, and populated with Sakila database objects and data. MySQL Community Edition (CE) is available for download [here](https://dev.mysql.com/downloads/).

Now in the terminal window run the following command:

```Shell
$ docker run -e SPRING_PROFILES_ACTIVE=local -e DB_URL=jdbc:mysql://host.docker.internal:3306/sakila -e DB_USER=[DATABASE_USER] -e DB_PASSWORD=[DATABASE_PASSWORD] -e DB_SCHEMAS=sakila kdhrubo/db2rest:latest
``` 

This will start DB2Rest within seconds ready with to server API requests on the MySQL database. 
