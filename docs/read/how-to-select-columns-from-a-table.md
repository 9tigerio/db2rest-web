---
sidebar_position: 4
---

# Select Columns from Table

The columns that you want to retrieve from the database can be specified in the *select* request parameter. 
An example is shown below:

```cli 
https://db2rest.com/v1/film?select=id,title,year_of_release
```

The *select* request parameter is optional. If it is not found, then all the columns will be included. In this case
all columns from the table *film* will be retrieved. 


