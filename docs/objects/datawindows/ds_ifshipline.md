# ds_ifshipline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
SELECT shipline.slcode,   
	    shipline.slline,   
   	 shipline.slsalorder,   
	    shipline.slsalline,   
	    shipline.slitem,   
	    shipline.slitcustnam,   
		 shipline.sllot,   
	    shipline.slqty,   
	    shipline.slinv,   
	    shipline.slinvno,   
	    shipline.slcomment,   
	    shipline.slqcip,   
	    shipline.sltransfered, 
       ( select slwebidhead from salline where slcode = shipline.slsalorder and slline = shipline.slsalline ) custordhead, 
       ( select slwebidline from salline where slcode = shipline.slsalorder and slline = shipline.slsalline ) custordline,
		 ( Select lots.loorgcode 
 			  From lots
			 Where lots.locode = shipline.sllot ) As LotOrg,
		shipline.slcustpc
  FROM shipline   
 WHERE shipline.slcode = :shcode        AND 
	    isnull(Sltransfered, 'N') <> 'Y' And
       shipline.slqty             >  0   and
		 custordhead > 0    
order by 2 asc

```

## Colonnes
| Colonne |
|---------|
| slcode |
| slline |
| slsalorder |
| slsalline |
| slitem |
| slitcustnam |
| sllot |
| slqty |
| slinv |
| slinvno |
| slcomment |
| slqcip |
| sltransfered |
| custordhead |
| custordline |
| lotorg |
| slcustpc |

