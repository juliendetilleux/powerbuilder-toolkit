# d_crm_company_label2_print

- **Type**: DataWindow
- **Style**: Tabular
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
select itcode,itname,itean,rlval from items, rateline where items.itcode= rateline.rlitem and itactiv='Y' and itsale='Y' and itcode not like '###%' and rateline.rlcode=1 
```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itean |
| rateline_rlval |

