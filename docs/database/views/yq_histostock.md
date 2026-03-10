# Vue: yq_histostock

## Description

Vue de requete sur l'historique des mouvements de stock.

## SQL

```sql
create view "DBA"."yq_histostock"
  as select "histostock"."hsseq" as "transaction_number",
    "histostock"."hscode" as "transaction_code",
    "transactions"."trname" as "transaction_name",
    "date"("histostock"."hsdatim") as "transaction_date",
    convert(char(8),"histostock"."hsdatim",108) as "transaction_hour",
    "items"."itcode" as "item_code",
    "items"."itname" as "item_name",
    "histostock"."hsqty"*"transactions"."trsign" as "transact_quantity",
    "histostock"."hsum" as "transaction_unit",
    "histostock"."hsval"*"transactions"."trsign" as "transaction_value",
    "histostock"."hslot" as "lot",
    "histostock"."hsloc" as "location",
    "histostock"."hsordtyp" as "transact_ordertype",
    "histostock"."hsordno" as "transact_order",
    "histostock"."hsordlin" as "transact_orderline",
    "histostock"."hsord2no" as "transact_order2",
    "histostock"."hsord2lin" as "transact_orderline2",
    "histostock"."hsuser" as "transaction_user",
    "histostock"."hscomment" as "transaction_user_comment",
    "histostock"."hsprgcmnt" as "transaction_prog_comment"
    from "DBA"."histostock","DBA"."transactions","DBA"."items"
    where("histostock"."hscode" = "transactions"."trcode") and(
    "histostock"."hsitem" = "items"."itcode")
```

## Tables source

- `histostock`
- `items`
- `transactions`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `transaction_number` | Transaction number |
| `transaction_code` | Code identifiant |
| `transaction_name` | Nom/designation |
| `transaction_date` | Date |
| `transaction_hour` | Transaction hour |
| `item_code` | Code identifiant |
| `item_name` | Nom/designation |
| `transact_quantity` | Transact quantity |
| `transaction_unit` | Unite |
| `transaction_value` | Transaction value |
| `lot` | Lot |
| `location` | Location |
| `transact_ordertype` | Type |
| `transact_order` | Transact order |
| `transact_orderline` | Numero de ligne |
| `transact_order2` | Transact order2 |
| `transact_orderline2` | Numero de ligne |
| `transaction_user` | Utilisateur |
| `transaction_user_comment` | Commentaire |
| `transaction_prog_comment` | Commentaire |
