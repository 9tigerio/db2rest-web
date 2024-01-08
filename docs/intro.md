---
sidebar_position: 1
---

# Getting Started with DB2Rest

Let's discover **DB2 in less than 10 minutes**.

# Installation 

## On Premise / On Virtual Machines (VM) 

DB2Rest needs Java Runtime 21+ to run. This is because it is compiled with Java 21 and makes uses of Java Virtual Thread feature
for high scalability. As a result, DB2Rest is capable of handling very high volume of requests even on a single node. 

In case you are deploying DB2Rest on bare metal box or a VM on any cloud like Amazon EC2 or DigitalOcean Droplet, follow the steps below:

### 1. Install JDK 21+

Download JDK 21 or above. There are many flavors of JDK available from different vendors like Oracle, AWS, OpenJDK. 
Open JDK can be downloaded from here - https://jdk.java.net/21/. This article from https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-install-Java-21 provides a step by step guide to install OpenJDK 21. 


### 2. Download DB2Rest

Now that you have successfully downloaded, installed and verified Java 21, the next step is to get DB2Rest. DB2Rest is shipped as a single executable Java Archive or jar file So its super easy to get up and running under a minute. 

In order to download the latest edition(v-0.0.8) of DB2Rest click [here](https://pub-d494e6f63184463298f75f4d77bde7cb.r2.dev/db2rest-0.0.8.jar "here").

### 3. Run DB2Rest.

DB2Rest is just 60Mb and is immediately runnable. Fire up a terminal and execute the command below:

```Shell
$ java  -DDB_PASSWORD=[DATABASE_PASSWORD] -DDB_SCHEMAS=[COMMA_SEPARATED_LIST_OF_DB_SCHEMAS] -DDB_URL=[JDBC_URL] -DDB_USER=[DATABASE_USER]  -Dspring.profiles.active=local -jar db2rest-0.0.8.jar
``` 
