# d_prf_itemship_exp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT (salline.slitem + ' - ' + items.itname + ' (en ' + items.itum + ')')as Article,
			itstat1.imdesc as Famille,   
        		 itstat2.isdesc as Sous_famille,   
        		 Sum(salline.slqtyreq ) as qty
    FROM items,   
         itstat1,   
         itstat2,   
         salline  
   WHERE ( salline.slitem = items.itcode )    and
			( itstat1.imcode = items.itstat1 ) and
			(itstat2.iscode2 = items.itstat2 ) and
			( itstat2.iscode = items.itstat1 ) and
			(  salline.sldatship between :radt_date1 and :radt_date2 )
GROUP BY Famille, Sous_famille, Article

```

## Colonnes
| Colonne |
|---------|
| article |
| itstat1_famille |
| itstat2_sous_famille |
| qty |

