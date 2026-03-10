# d_mfgplan_checkmat

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT matplan.mpreldat,   
         matplan.mpitem,   
         items.itname,   
         items.itum,   
         matplan.mporigin,   
         matplan.mpplduedat,   
         items.itavailtime,   
         matplan.mpordno,   
         matplan.mpplqty,   
         matplan.mpaltrout,   
         matplan.mpplqty * matplan.mpyield / 100,   
         matplan.mpsalord,   
         matplan.mpsalline,
			( SELECT bomhead.bhsubc FROM bomhead  WHERE ( bomhead.bhcode = matplan.mpitem ) AND ( bomhead.bhtype = '0' ) ) as subc,
			'1' as diff,
		CAST( NULL as char(1) ) as matok 
    FROM items,   
         matplan  
   WHERE ( matplan.mpitem = items.itcode ) and  
         ( items.ittyp = 'M' ) and
			( items.itpol <> 'C' )   
 
 UNION ALL
 
  SELECT (select first matplan.mpreldat 
				from matplan 
				where matplan.mpitem = matsal.msitem and
					matplan.mpordno = matsal.msordno ),   
         matsal.msitem,   
         items.itname,   
         items.itum,   
         (select first matplan.mporigin 
				from matplan 
				where matplan.mpitem = matsal.msitem and
					matplan.mpordno = matsal.msordno ),   
         (select first matplan.mpplduedat 
				from matplan 
				where matplan.mpitem = matsal.msitem and
					matplan.mpordno = matsal.msordno ),   
         items.itavailtime,   
         matsal.msordno,   
         matsal.msqty,   
         (select first matplan.mpaltrout
				from matplan 
				where matplan.mpitem = matsal.msitem and
					matplan.mpordno = matsal.msordno ),   
         (select first matsal.msqty * matplan.mpyield / 100
				from matplan 
				where matplan.mpitem = matsal.msitem and
					matplan.mpordno = matsal.msordno ),   
         matsal.mssalord,   
         matsal.mssalline,
			( SELECT bomhead.bhsubc FROM bomhead  WHERE ( bomhead.bhcode = matsal.msitem ) AND ( bomhead.bhtype = '0' ) ) as subc,
			'2' as diff,
		CAST( NULL as char(1) ) as matok 
    FROM items,   
         matsal  
   WHERE ( 
```

## Colonnes
| Colonne |
|---------|
| matplan_mpreldat |
| matplan_mpitem |
| items_itname |
| items_itum |
| matplan_mporigin |
| matplan_mpplduedat |
| items_itavailtime |
| matplan_mpordno |
| matplan_mpplqty |
| matplan_mpaltrout |
| qty2prod |
| matplan_mpsalord |
| matplan_mpsalline |
| csubc |
| cdiff |
| matok |

