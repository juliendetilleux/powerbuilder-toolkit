# Vue: zv_item_comments

## Description

Vue des commentaires/remarques associes aux articles.

## SQL

```sql
create view "dba"."zv_item_comments"( "iclang",
  "icitem",
  "ictab",
  "icprpur",
  "icprsa1",
  "icprsa2",
  "icprinv",
  "iccmnt" ) as
  select(select "adresses"."adlang" from "dba"."adresses" where "adresses"."adcode" = '##########'),
    "comments"."cokey",
    "comments"."cotab",
    "comments"."coprpur",
    "comments"."coprsa1",
    "comments"."coprsa2",
    "comments"."coprinv",
    "comments"."cocmnt"
    from "dba"."comments" where(
    "comments"."cotype" = 'ICMT') union all
  select "comments_lang"."colang",
    "comments_lang"."cokey",
    "comments_lang"."cotab",
    "comments_lang"."coprpur",
    "comments_lang"."coprsa1",
    "comments_lang"."coprsa2",
    "comments_lang"."coprinv",
    "comments_lang"."cocmnt"
    from "dba"."comments_lang" where(
    "comments_lang"."cotype" = 'ICMT')
```

## Tables source

- Aucune table identifiee

## Colonnes

| Colonne | Description |
|---------|-------------|
| *(pas d'alias identifies)* | - |
