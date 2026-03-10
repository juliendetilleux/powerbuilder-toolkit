# Vue: yv_linkitad

## Description

Vue des liens articles-adresses (associations article/client ou fournisseur).

## SQL

```sql
create view "DBA"."yv_linkitad" as
  select 'S' as "lktyp",
    "linkitad"."lkitem",
    "adresses"."adcode" as "lkadcode",
    "linkitad"."lkcode",
    "linkitad"."lkcurr",
    "linkitad"."lkactiv",
    "linkitad"."lkum",
    "linkitad"."lkumconv",
    "linkitad"."lkadref",
    "linkitad"."lkleadtime",
    "linkitad"."lkmain",
    "linkitad"."lkremval",
    "linkitad"."lkcmnt",
    "linkitad"."lkadref2",
    "linkitad"."lkean",
    "linkitad"."lkconsinfo",
    "linkitad"."lkean1",
    "linkitad"."lkean2",
    "linkitad"."lkean3",
    "linkitad"."lkeanref",
    "linkitad"."lkeanref2",
    "linkitad"."lkeanref3",
    "linkitad"."lkean2conv",
    "linkitad"."lkean3conv",
    "linkitad"."lklblproc",
    "linkitad"."lkfinalprice",
    "linkitad"."lkcol2",
    "linkitad"."lkprocescrates",
    "linkitad"."lkpcratesregroup",
    "linkitad"."lkcratesweight",
    "linkitad"."lkumean2",
    "linkitad"."lkumean3",
    "linkitad"."lkwithcertif",
    "linkitad"."lkdatecertif",
    "linkitad"."lknbdaycertif",
    "linkitad"."lkcalcdluo",
    "linkitad"."lkcheckpc",
    "linkitad"."lkuseeaninv",
    "linkitad"."lkcustint",
    "linkitad"."lkcreadate",
    "linkitad"."lkmoddate"
    from "DBA"."linkitad" with(index( "ind_typ_adcode" ) ),"DBA"."adresses"
    where "linkitad"."lktyp" = 'A'
    and "linkitad"."lkadcode" = "adresses"."adassort" union all
  select "linkitad"."lktyp",
    "linkitad"."lkitem",
    "linkitad"."lkadcode",
    "linkitad"."lkcode",
    "linkitad"."lkcurr",
    "linkitad"."lkactiv",
    "linkitad"."lkum",
    "linkitad"."lkumconv",
    "linkitad"."lkadref",
    "linkitad"."lkleadtime",
    "linkitad"."lkmain",
    "linkitad"."lkremval",
    "linkitad"."lkcmnt",
    "linkitad"."lkadref2",
    "linkitad"."lkean",
    "linkitad"."lkconsinfo",
    "linkitad"."lkean1",
    "linkitad"."lkean2",
    "linkitad"."lkean3",
    "linkitad"."lkeanref",
    "linkitad"."lkeanref2",
    "linkitad"."lkeanref3",
    "linkitad"."lkean2conv",
    "linkitad"."lkean3conv",
    "linkitad"."lklblproc",
    "linkitad"."lkfinalprice",
    "linkitad"."lkcol2",
    "linkitad"."lkprocescrates",
    "linkitad"."lkpcratesregroup",
    "linkitad"."lkcratesweight",
    "linkitad"."lkumean2",
    "linkitad"."lkumean3",
    "linkitad"."lkwithcertif",
    "linkitad"."lkdatecertif",
    "linkitad"."lknbdaycertif",
    "linkitad"."lkcalcdluo",
    "linkitad"."lkcheckpc",
    "linkitad"."lkuseeaninv",
    "linkitad"."lkcustint",
    "linkitad"."lkcreadate",
    "linkitad"."lkmoddate"
    from "DBA"."linkitad" with(index( "ind_typ_adcode" ) )
    where "linkitad"."lktyp" <> 'A'
```

## Tables source

- `adresses`
- `linkitad`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `lktyp` | Lktyp |
| `lkadcode` | Code identifiant |
