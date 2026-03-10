# Vue: zv_mfglabel

## Description

Vue des etiquettes de fabrication pour l'impression.

## SQL

```sql
create view --%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  --    Create views
  --%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  "DBA"."zv_mfglabel"( "flag",
  "mfgcode",
  "mfgitem",
  "mfgreqqty",
  "mfgmfgqty",
  "mhlotmfg",
  "mhlotprt",
  "mhexpdat" ) as
  select '1',
    "mfghead"."mhcode",
    "mfghead"."mhitem",
    "mfghead"."mhreqqty",
    "mfghead"."mhmfgqty",
    "mfghead"."mhlotmfg",
    "mfghead"."mhlotprt",
    "mfghead"."mhexpdat"
    from "DBA"."mfghead"
    where "mfghead"."mhtype" <> 'G' union
  select '2',
    "mfgcoitem"."mccode",
    "mfgcoitem"."mcitem",
    "mfgcoitem"."mcreqty",
    "mfgcoitem"."mcmfgqty",
    "mfgcoitem"."mclotmfg",
    "mfgcoitem"."mclotprt",
    "mfgcoitem"."mcexpdat"
    from "DBA"."mfgcoitem"
```

## Tables source

- `mfgcoitem`
- `mfghead`

## Colonnes

| Colonne | Description |
|---------|-------------|
| *(pas d'alias identifies)* | - |
