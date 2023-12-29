---
sidebar_position: 2
---

# Select Columns

The columns that you want to retrieve from the database can be specified in the *select* request parameter. 
An example is shown below:

```cli 
https://db2rest.com/v1/film?select=id,title,year_of_release
```

The *select* request parameter is optional. If it is not found, then all the columns will be included. In this case
all columns from the table *film* will be retrieved. 


## Retrieving Join Table columns

It is possible to retrieve the columns for a join table. 

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).



```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
