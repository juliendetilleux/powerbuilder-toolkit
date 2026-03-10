# d_list_current_cash

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
Select B.chcode,
/*Sum(CASE A.hhcode WHEN 'OOTH' THEN B.hhnb * -1 ELSE CASE WHEN A.hhval < 0 THEN B.hhnb * -1 WHEN A.hhval >= 0 THEN B.hhnb END END) as ~
```

## Colonnes
| Colonne |
|---------|
| histocashchange_chcode |
| hhnb |
| hhvalue |

