select count("cityId") as "totalCityByCountry",
      "countries"."name" as "countryName"
  from "cities"
  join "countries" using ("countryId")
  group by "countryId";
