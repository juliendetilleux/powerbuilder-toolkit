# d_method_coststru_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT items.itcode as item_code,
				items.itname as bom_name,
				mvbomtype as bom_typ,
				mvtype as typ,
				items.itwistat as item_netweight,
				items.itum as item_um,
				items.itumusr as item_stat_unit,
				items.itconvusr as item_stat_convers,
				mvcode as line_code1,
				mvcode2 as line_code2,
				mp.itum as line_um,
				CAST((select imdesc from itstat1 where imcode = mp.itstat1) as char(30)) as line_group1,
				(select isdesc from itstat2 where iscode = mp.itstat1 and iscode2 = mp.itstat2) as line_group2,
				mvqty as line_qty,
				mvqty * mvvalue as line_value,
				(select pmdval from parameters where pmcode = 'TMMETHVW') as value_at_time,
				mp.itname as item_name 
			  FROM methodeview,
				items,
				items as mp
			 WHERE methodeview.mvtype = 'I' AND
				methodeview.mvitem = items.itcode AND
				methodeview.mvcode = mp.itcode AND 
				methodeview.mvitem = :as_item AND 
				methodeview.mvbomtype = :as_bomtyp 

		UNION ALL 
			SELECT items.itcode as item_code,
				items.itname as bom_name,
				mvbomtype as bom_typ,
				mvtype as typ,
				items.itwistat as item_netweight,
				items.itum as item_um,
				items.itumusr as item_stat_unit,
				items.itconvusr as item_stat_convers,
				mvcode as line_code1,
				mvcode2 as line_code2,
				'' as line_um,
				mvcode as line_group1, 
				'' as line_group2,
				mvqty as line_qty,
				mvqty * mvvalue as line_value,
				(select pmdval from parameters where pmcode = 'TMMETHVW') as value_at_time,
				line_group1  
			  FROM methodeview,
				items
			 WHERE methodeview.mvtype = 'X' AND
				methodeview.mvitem = items.itcode AND
				methodeview.mvitem = :as_item  AND 
				methodeview.mvbomtype = :as_bomtyp

		UNION ALL 
			SELECT items.itcode as item_code,
				items.itname as bom_name,
				mvbomtype as bom_typ,
				mvtype as typ,
				items.itwistat as item_netweight,
				items.itum as item_um,
				items.itumusr as item_stat_unit,
				items.itconvusr as item_stat
```

## Colonnes
| Colonne |
|---------|
| items_item_code |
| items_bom_name |
| methodeview_bom_typ |
| methodeview_typ |
| items_item_netweight |
| items_item_um |
| items_item_stat_unit |
| items_item_stat_convers |
| methodeview_line_code1 |
| methodeview_line_code2 |
| items_line_um |
| line_group1 |
| line_group2 |
| methodeview_line_qty |
| line_value |
| value_at_time |
| items_item_name |

