select "releaseYear",
    "categories"."name" as "category name"
  from "filmCategory"
  join "categories" using ("categoryId")
  join "films" using ("filmId")
  where "title" = 'Boogie Amelie';
