# d_clot_fab_qty_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT mhitem,
			itname, 
			itum, 
			sum(mhreqqty) launch_qty, 
			sum(mhmfgqty) reel_qty , 
			sum(mhmfgqty * cistdconf ) reel_stdpur , 
         cistdconf
	 from mfghead, items, clotfinit
	where mhitem = itcode and
			mhitem = ciitem and
			cityp = 'I' and
			ciperiod = :Period and 
			mhclosdat between :Start_date and :Stop_date 
group by mhitem, itname, itum , cistdconf 
order by mhitem asc 
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhitem |
| items_itname |
| items_itum |
| claunch_qty |
| creel_qty |
| creel_stdpur |
| mfgcosts_cistdconf |

