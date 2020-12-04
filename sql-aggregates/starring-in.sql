select "categories"."name" as "Category Name",
       count("filmId") as "Number of movies"
  from "filmCategory"
  join "films" using ("filmId")
  join "categories" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa' and "lastName" = 'Monroe'
  group by "categoryId";
