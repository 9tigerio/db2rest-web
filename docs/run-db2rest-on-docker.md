---
sidebar_position: 2
---

# Run on Docker

This tutorial shows how you can get started with **DB2Rest in less than 10 minutes** on Docker.

## Minimum System Requirements

    - Java 21
    - 4-8 GB RAM/Memory.

## 1. Install Docker

To download the Docker desktop browse to this [link](https://www.docker.com/get-started/). This page then shows options
to download Docker for Mac, Windows, and Linux. Please click on the link for your operating system (OS) to start the download.
After the download is completed, follow the steps outlined [here](https://docs.docker.com/desktop/) pertinent to your OS, to install and test the Docker desktop.

## 2. Run DB2Rest

Now launch a terminal window to run the DB2Rest docker image. DB2Rest docker image is available on [Dockerhub](https://hub.docker.com/repository/docker/kdhrubo/db2rest/general).
It is assumed that a MySQL server has already been installed, started, and populated with Sakila database objects and data. MySQL Community Edition (CE) is available for download [here](https://dev.mysql.com/downloads/).

Now in the terminal window run the following command:

```Shell
$ docker run -e DB_URL=[DB URL] -e DB_USER=[User] -e DB_PASSWORD=[Password] kdhrubo/db2rest:latest
``` 


| Sl# | Parameter Name | Description                | Example                                                                                                                                                  |
|-----|----------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.  | DB URL         | JDBC URL conneciton string | - MySQL : jdbc:mysql://host.docker.internal:3306/sakila     <br/> - PostgreSQL : jdbc:postgresql://host.docker.internal:5432/sakila?currentSchema=public |
| 2.  | DB_USER        | Database user              |                                                                                                                                                          |
| 3.  | DB_PASSWORD    | Database password          |                                                                                                                                                          |     

This will start DB2Rest within seconds ready with to server API requests on the MySQL database. 
