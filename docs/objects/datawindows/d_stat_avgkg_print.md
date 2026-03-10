# d_stat_avgkg_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
select salhead.shcust, adresses.adname, salhead.shsalesman, Round(AVG(slqtyord),2)
from salline,items, salhead,adresses
where salhead.shcode = salline.slcode
and items.itcode = salline.slitem
and items.itum = 'KG'
and adresses.adcode = salhead.shcust
and adresses.adcode like IsNull(:as_adcode, '%')
and salhead.shdatcrea BETWEEN :ad_debut AND :ad_fin
GROUP BY salhead.shcust,adresses.adname,salhead.shsalesman
```

## Colonnes
| Colonne |
|---------|
| salhead_shcust |
| adresses_adname |
| salhead_shsalesman |
| compute_0004 |

