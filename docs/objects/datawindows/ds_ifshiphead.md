# ds_ifshiphead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: shiphead

## SQL
```sql
SELECT shiphead.shcode,   
	    shiphead.shcust,   
   	 shiphead.shshipto,   
	    shiphead.shdate,   
       shiphead.shprint,   
	    shiphead.shcomment,   
   	 shiphead.shprseq,   
	    shiphead.shpalnbr,   
   	 shiphead.shgroweight  
FROM 	 shiphead   
WHERE  shiphead.shcust = :adcode  AND 
			(	SELECT count(*) 
				  FROM shipline 
				 WHERE shcode = slcode                  AND 
						 isnull(Sltransfered, 'N') <> 'Y' And
                   shipline.slqty             >  0  and
						 ( select slwebidhead from salline where slcode = shipline.slsalorder and slline = shipline.slsalline ) > 0 ) > 0 
 order by 1 asc
```

## Colonnes
| Colonne |
|---------|
| shcode |
| shcust |
| shshipto |
| shdate |
| shprint |
| shcomment |
| shprseq |
| shpalnbr |
| shgroweight |

