# d_clot_fab_qty_statum_print

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
         cistdconf, 
		isnull(items.itumusr,'') as itumusr,
		isnull(items.itconvusr,0) as itconvusr,
		(select max(isnull(upper(itumusr),'')) 
			from mfghead, items, clotfinit
			where mhitem = itcode and
				mhitem = ciitem and
				cityp = 'I' and
				ciperiod = :Period and 
				mhclosdat between :Start_date and :Stop_date ) as itumusrmax,
		(select min(isnull(upper(itumusr),'')) 
			from mfghead, items, clotfinit
			where mhitem = itcode and
				mhitem = ciitem and
				cityp = 'I' and
				ciperiod = :Period and 
				mhclosdat between :Start_date and :Stop_date ) as itumusrmin 
	 from mfghead, items, clotfinit
	where mhitem = itcode and
			mhitem = ciitem and
			cityp = 'I' and
			ciperiod = :Period and 
			mhclosdat between :Start_date and :Stop_date 
group by mhitem, itname, itum , cistdconf, itumusr, itconvusr 
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
| clotfinit_cistdconf |
| itumusr |
| itconvusr |
| itumusrmax |
| itumusrmin |

