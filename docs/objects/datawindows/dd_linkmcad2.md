# dd_linkmcad2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkmcad2.lkadcode,   
         linkmcad2.lkmccode,   
         linkmcad2.lkidcptcust,   
         linkmcad2.lktrfcptcust,   
         linkmcad2.lkactiv,
			adresses.adname   
    FROM linkmcad2, adresses 
   WHERE linkmcad2.lkadcode = :as_cust AND
			linkmcad2.lkmccode = adresses.adcode AND
			linkmcad2.lkactiv = 'Y'
ORDER BY linkmcad2.lkmccode ASC   

```

## Colonnes
| Colonne |
|---------|
| lkadcode |
| lkmccode |
| lkidcptcust |
| lktrfcptcust |
| lkactiv |
| adresses_adname |

