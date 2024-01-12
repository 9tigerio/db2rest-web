```bash
$ echo '       {
       "title" : "Dunki",
        "description" : "Film about illegal immigration" ,
        "release_year" : 2023,
        "language_id" : 1,
        "original_language_id" : null,
        "rental_duration" : 6,
        "rental_rate" : 0.99 ,
        "length" : 150,
        "replacement_cost" : 20.99 ,
        "rating" : "PG-13" ,
        "special_features" : "Commentaries"

}
' | http POST 'http://localhost:8080/film' \
    'Content-Type:application/json;charset=utf-8' \
    'Content-Profile:public' \
    'Accept:application/json'
```