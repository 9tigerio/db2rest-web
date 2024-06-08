---
sidebar_position: 2
---

# Filter data with RSQL

DB2Rest uses RSQL or REST SQL to filter data in the database tables. RSQL is very easy to learn and write filtering queries.

RSQL is a query language for parametrized filtering of entries in RESTful APIs. It’s based on [FIQL](https://datatracker.ietf.org/doc/html/draft-nottingham-atompub-fiql-00 "Feed Item Query Language") (Feed Item Query Language) – a URI-friendly syntax for expressing filters across the entries in an Atom Feed. FIQL is great for use in URI; there are no unsafe characters, so URL encoding is not required. On the other side, FIQL’s syntax is not very intuitive and URL encoding is not always a big deal, so RSQL also provides a friendlier syntax for logical operators and some of the comparison operators.

For example, you can query your resource like this: `/movies?query=name=="Kill Bill";year=gt=2003` or `/movies?query=director.lastName==Nolan and year>=2000`. See examples below.

RSQL expressions in both FIQL-like and alternative notation: 

```
- name=="Kill Bill";year=gt=2003
- name=="Kill Bill" and year>2003
- genres=in=(sci-fi,action);(director=='Christopher Nolan',actor==*Bale);year=ge=2000
- genres=in=(sci-fi,action) and (director=='Christopher Nolan' or actor==*Bale) and year>=2000
- director.lastName==Nolan;year=ge=2000;year=lt=2010
- director.lastName==Nolan and year>=2000 and year<2010
- genres=in=(sci-fi,action);genres=out=(romance,animated,horror),director==Que*Tarantino
- genres=in=(sci-fi,action) and genres=out=(romance,animated,horror) or director==Que*Tarantino

```



