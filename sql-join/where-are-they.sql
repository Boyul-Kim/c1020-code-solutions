select "line1",
    "cities"."name" as "city name",
    "district",
    "countries"."name" as "country name"
  from "cities"
  join "addresses" using ("cityId")
  join "countries" using ("countryId");
