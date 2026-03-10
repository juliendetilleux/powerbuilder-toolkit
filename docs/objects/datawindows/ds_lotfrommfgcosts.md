# ds_lotfrommfgcosts

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT hsitem, hslot, sum( hsqty ) as chsqty
    FROM histostock
  WHERE hscode in ( 'DLMO','RTMO' ) AND
		hsordno = :al_of AND
		hsordlin = :al_seq
 GROUP BY hsitem, hslot
```

## Colonnes
| Colonne |
|---------|
| hsitem |
| hslot |
| chsqty |

