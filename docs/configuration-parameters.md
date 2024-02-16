---
sidebar_position: 13
---

# Configuration Parameters

| Sl#  | Parameter Name        | Description                                                                  | Allowed Values/Examples                                                                                                                       |
|------|-----------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| 1.   | ALLOW_SAFE_DELETE     | Allow deletion of table rows without a filter criteria.                      | <ul><li>true(default)</li><li>false</li></ul>                                                                                                 |
| 2.   | DB_URL                | Database connection URL in JDBC format.                                      | <ul><li> jdbc:mysql://DB_SERVER_HOST:DB_PORT/DB_NAME (MySQL)</li><li> jdbc:postgresql://DB_SERVER_HOST:DB_PORT/DB_NAME (PostgreSQL)</li></ul> |
| 3.   | DB_USER               | Database user name                                                           | -                                                                                                                                             |
| 4.   | DB_PASSWORD           | Database password                                                            | -                                                                                                                                             |
| ~5.~ | ~DB_SCHEMAS~          | ~A comma separated list of allowed schemas~                                  | ~e.g - SAKILA,WORLD~                                                                                                                          |
| 6.   | MULTI_TENANCY_ENABLED | Run in multi tenancy mode. DB_SCHEMAS will be ignored if multi-tenancy is ON | <ul><li>true</li><li>false (default)</li></ul>                                                                                                |
| 7.   | MULTI_TENANCY_MODE    | Multi-tenancy mode                                                           | <ul><li>TENANT_ID [] </li><li>SCHEMA [x]</li><li>DB []</li><li>NONE[]</li></ul>                                                               |
