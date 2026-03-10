# d_importsale_xml

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT CAST('' as varchar(80)) as ID,
		salhead.shdatreq,
		CAST('' as varchar(20)) as ordertype,
		salline.sldatship,
		salhead.shcust,
		salhead.shsalesman,
		 CAST('' as varchar(40)) as CustomerOrderReference,
		salline.slcustref,
		salline.slqtyreq,
		CAST(0 as numeric(8,2)) as freeqty
     FROM salhead,
		salline
   WHERE salhead.shcode = salline.slcode

```

## Colonnes
| Colonne |
|---------|
| id |
| salhead_shdatreq |
| ordertype |
| salline_sldatship |
| salhead_shcust |
| salhead_shsalesman |
| customerorderreference |
| salline_slcustref |
| salline_slqtyreq |
| freeqty |

