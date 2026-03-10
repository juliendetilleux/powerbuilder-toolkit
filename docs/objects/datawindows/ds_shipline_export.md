# ds_shipline_export

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT shiphead.shcode,
		shiphead.shcust,
		shiphead.shshipto,
		shiphead.shdate,
		shiphead.shcomment,
		isnull(shiphead.shmccode, '##########' ) as shmccode,
		shipline.slline,
		shipline.slsalorder,
		shipline.slsalline,
		shipline.slitem,
		shipline.sllot,
		shipline.slqty,
		shipline.slcomment,
		shipline.slcustpc,
		isnull((select lots.loorgcode from lots where locode = shipline.sllot ), '') as loorgcode,
		isnull((select lots.loexpdat from lots where locode = shipline.sllot ), '') as loexpdat
    FROM shiphead, shipline
   WHERE shiphead.shcode = shipline.slcode AND
		shiphead.shcode = IsNull(:al_shiphead, shiphead.shcode) AND
		shipline.slline >= ISNull(:al_firstshipline , shipline.slline)
order by shipline.slcode, shipline.slline
```

## Colonnes
| Colonne |
|---------|
| shiphead_shcode |
| shiphead_shcust |
| shiphead_shshipto |
| shiphead_shdate |
| shiphead_shcomment |
| shmccode |
| shipline_slline |
| shipline_slsalorder |
| shipline_slsalline |
| shipline_slitem |
| shipline_sllot |
| shipline_slqty |
| shipline_slcomment |
| shipline_slcustpc |
| loorgcode |
| loexpdat |

