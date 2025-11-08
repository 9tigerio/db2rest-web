---
sidebar_position: 2
---

import CodeBlock from '@theme/CodeBlock';


# Run DB2Rest on Docker

This tutorial shows how you can get started with **DB2Rest in less than 10 minutes** on Docker.

## Minimum System Requirements

    - Java 21
    - 4-8 GB RAM/Memory.

## Prerequisite 

    - PostgreSQL/MySQL is installed and running.
    - ```employee``` table is created.

The script for creating the employee table is listed below:

**PostgreSQL**

```sql
CREATE TABLE employee (
    id serial4 NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email varchar(255) NOT NULL,
    created_on timestamp NOT NULL,
    CONSTRAINT employee_email_key UNIQUE (email),
    CONSTRAINT employee_pkey PRIMARY KEY (id)
);
```

**MySQL**

```sql
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

You can use your favorite SQL client to execute these scripts.

## 1. Install Docker

To download the Docker desktop browse to this [link](https://www.docker.com/get-started/). This page then shows options
to download Docker for Mac, Windows, and Linux. Please click on the link for your operating system (OS) to start the download.
After the download is completed, follow the steps outlined [here](https://docs.docker.com/desktop/) pertinent to your OS, to install and test the Docker desktop.

## 2. Run DB2Rest

Now launch a terminal window to run the DB2Rest docker image. DB2Rest docker image is available on [Dockerhub](https://hub.docker.com/repository/docker/kdhrubo/db2rest/general).
In the terminal run the following command:

```shell
$ docker run -p 8080:8080 -e DB_URL=[DB_URL] -e DB_USER=[DB_USER] -e DB_PASSWORD=[DB_PASSWORD] kdhrubo/db2rest:latest
```

:::info

DB2Rest internally starts on port 8080 by default, but is not exposed automatically on startup.
To expose the default service port 8080, use the `-p` option on docker run, such as `-p 8080:8080` or an alternative port such as `-p 1234:8080`

:::

| Sl# | Parameter Name | Description                | Example                                                                                                                                                  |
|-----|----------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.  | DB_URL         | JDBC URL conneciton string | - MySQL : jdbc:mysql://host.docker.internal:3306/sakila     <br/> - PostgreSQL : jdbc:postgresql://host.docker.internal:5432/sakila?currentSchema=public |
| 2.  | DB_USER        | Database user              |                                                                                                                                                          |
| 3.  | DB_PASSWORD    | Database password          |                                                                                                                                                          |     

Once this command is executed, within a few seconds, DB2Rest is ready to service your data access requests.

### Verify DB2Rest Installation

The actuator endpoint can be used to test the installation.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
    <TabItem value="cURL" label="cURL" default>
        ```bash

        curl --request GET \
        --url http://[IP_ADDRESS]:[PORT]/actuator/health \
        --header 'User-Agent: insomnia/8.6.1'


        ```
    </TabItem>
    <TabItem value="httpie" label="HTTPie">
        ```bash

        http GET http://[IP_ADDRESS]:[PORT]/actuator/health \
        User-Agent:insomnia/8.6.1

        ```
    </TabItem>

</Tabs>


The actuator health check service in DB2Rest will return the following response:


```http
HTTP/1.1 200
Content-Type: application/json
Transfer-Encoding: chunked

{
	"status": "UP"
}

```
The `status` value of `UP` confirms that the service is up and running.


## Test Drive DB2Rest

### Insert Row

<Tabs>
    <TabItem value="cURL" label="cURL" default>
        ```bash

        curl --request POST \
        --url http://[IP_ADDRESS]:[PORT]/v1/rdbms/db/employee \
        --header 'Content-Type: application/json' \
        --header 'User-Agent: insomnia/8.6.1' \
        --data '{
        "first_name" : "Salman",
        "last_name" : "Khan",
        "email" : "sk@skfilms.com",
        "created_on" : "2015-04-14T11:07:36.639Z"
    }'


        ```
    </TabItem>
    <TabItem value="httpie" label="HTTPie">
        ```bash

        echo '{

        "first_name" : "Salman",
        "last_name" : "Khan",
        "email" : "sk@skfilms.com",
        "created_on" : "2015-04-14T11:07:36.639Z"

    }' |  \
        http POST http://[IP_ADDRESS]:[PORT]/v1/rdbms/db/employee \
        Content-Type:application/json \
        User-Agent:insomnia/8.6.1
        ```
    </TabItem>

</Tabs>

#### HTTP Response
```json lines
{
	"row": 1,
	"keys": {
		"id": 1
	}
}

```

### Read Row


<Tabs>
    <TabItem value="cURL" label="cURL" default>
        ```bash

        curl --request GET \
        --url http://[IP_ADDRESS]:[PORT]/v1/rdbms/db/employee \
        --header 'User-Agent: insomnia/8.6.1'

        ```
    </TabItem>
    <TabItem value="httpie" label="HTTPie">
        ```bash

        http GET http://[IP_ADDRESS]:[PORT]/v1/rdbms/db/employee \
        User-Agent:insomnia/8.6.1

        ```
    </TabItem>

</Tabs>

#### HTTP Response
```json lines
[
	{
		"id": 1,
		"first_name": "Salman",
		"last_name": "Khan",
		"email": "sk@skfilms.com",
		"created_on": "2015-04-14T11:07:36.639+00:00"
	}
]

```

Finally, refer to the DB2Rest documentation for further learning and exploring API features.

For help, visit us on [Discord](https://discord.gg/gytFPNW656) or our [GitHub Discussions](https://github.com/9tigerio/db2rest/discussions)
