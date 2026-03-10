# d_clot_fab_mat_var_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT mcitem,
			itname, 
			itum, 
			sum(mcqalloc) alloc_qty, 
			sum(mcqreal) reel_qty , 
			sum(mcqalloc * mhmfgqty / mhreqqty) theo_qty, 
			sum(mcqreal * cistdconf ) reel_stdpur , 
			sum(mcqalloc * mhmfgqty * cistdconf / mhreqqty) theo_stdpur , 
			reel_qty - theo_qty delta,
         reel_stdpur - theo_stdpur deltacost,
         cistdconf
	 from mfgcosts, mfghead, items, clotfinit
	where mccode = mhcode and
			mcitem = itcode and
			mcitem = ciitem and
         mctype = 'M' and
			cityp = 'I' and
			ciperiod = :Period and 
			mhclosdat between :Start_date and :Stop_date 
group by mcitem, itname, itum , cistdconf 
order by mcitem asc 
```

## Colonnes
| Colonne |
|---------|
| mfgcosts_mcitem |
| items_itname |
| items_itum |
| calloc_qty |
| creel_qty |
| ctheo_qty |
| creel_stdpur |
| ctheo_stdpur |
| cdelta |
| cdeltacost |
| mfgcosts_cistdconf |

