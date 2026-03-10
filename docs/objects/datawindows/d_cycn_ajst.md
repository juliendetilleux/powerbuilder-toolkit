# d_cycn_ajst

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT cycntline.clnumcc,   
         cycntline.clstitem,   
         cycntline.clstlot,   
         cycntline.clstloc,   
         isnull(cycntline.clstqty,0) as clstqty,   
         cycntline.clstqtyc,   
         cycntline.clcomment,   
         cycntline.clcycntdate,   
         items.itum,   
         items.itdefaultlot,   
         items.itname,   
		IF cycntline.clajust is null THEN
			IF (select ppvalue from progparam where ppcode = 'CYCLECOUNT') = '2' THEN
				1
			ELSE
				/*os1760 (case when cycntline.clstqty is null then 0 when cycntline.clstqtyc is null then 0 else 1 end ) */
				if cycntline.clstqtyc is null then 0 else 1 endif
			ENDIF 
		ELSE
			cycntline.clajust
		ENDIF as clajust,
         items.itstdpur ,
		cycntline.cldluo ,
		items.itval 
    FROM cycntline,   
         items  
   WHERE ( cycntline.clstitem = items.itcode ) and  
         ( ( cycntline.clnumcc = :numcycn ) AND  
         ( cycntline.clcycntdate is not NULL ) AND  
    /*os1760       IF (select ppvalue from progparam where ppcode = 'CYCLECOUNT') = '2' THEN
			1
		ELSE
			cycntline.clstqty 
		ENDIF is not NULL  AND  */
         ( isnull(cycntline.clstqty,0) <> cycntline.clstqtyc ) )   
ORDER BY cycntline.clstitem ASC   

```

## Colonnes
| Colonne |
|---------|
| clnumcc |
| clstitem |
| clstlot |
| clstloc |
| clstqty |
| clstqtyc |
| clcomment |
| clcycntdate |
| items_itum |
| items_itdefaultlot |
| items_itname |
| tocheck |
| items_itstdpur |
| cycntline_cldluo |
| items_itval |

