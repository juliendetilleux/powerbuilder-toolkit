# Vue: yq_offer

## Description

Vue de requete sur les offres/devis commerciaux.

## SQL

```sql
create view "DBA"."yq_offer"
  as select "projhead"."phcode" as "offer_num",
    "projhead"."phstatus" as "offer_statut_num",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'PHST' and "choices"."chcode" = "projhead"."phstatus") as "offer_statut_desc",
    "projhead"."phdatcrea" as "offer_datecrea",
    "projhead"."phdatreq" as "offer_datereq",
    "projhead"."phexpdate" as "offer_datevalidity",
    "adresses"."adcode" as "customer_code",
    "adresses"."adname" as "customer_name",
    "projvrsn"."pvitem" as "item_code",
    "items"."itname" as "item_name",
    "projvrsn"."pvqty" as "line_qty",
    "projvrsn"."pvsalval"/if "projvrsn"."pvqty" = 0 then 1 else "projvrsn"."pvqty" endif as "unit_value",
    "projvrsn"."pvsalval" as "line_tolalvalue",
    "projhead"."phcurr" as "offre_currency"
    from "DBA"."adresses"
      ,"DBA"."projhead"
      ,"DBA"."projvrsn" left outer join "DBA"."items"
      on "projvrsn"."pvitem" = "items"."itcode"
    where "projhead"."phcode" = "projvrsn"."pvphid"
    and "projvrsn"."pvtyp" <> 'M'
    and "projhead"."phadid" = "adresses"."adcode"
```

## Tables source

- `adresses`
- `choices`
- `items`
- `projhead`
- `projvrsn`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `offer_num` | Offer num |
| `offer_statut_num` | Offer statut num |
| `offer_statut_desc` | Description |
| `offer_datecrea` | Date |
| `offer_datereq` | Date |
| `offer_datevalidity` | Date |
| `customer_code` | Code identifiant |
| `customer_name` | Nom/designation |
| `item_code` | Code identifiant |
| `item_name` | Nom/designation |
| `line_qty` | Quantite |
| `unit_value` | Unite |
| `line_tolalvalue` | Numero de ligne |
| `offre_currency` | Devise |
