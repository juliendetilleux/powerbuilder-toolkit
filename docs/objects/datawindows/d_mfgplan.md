# d_mfgplan

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
		items.itpol,
			isnull(items.itmccode, '##########') as itmccode,
			matplan.mpuse,
		items.itdesc2 ,
		isnull( ( SELECT choiceline.clname FROM choiceline where clcode = 'CTG2'  and clline = items.itstat4 ), '' ) as catof,
		IF isnull(matplan.mpsalord, 0 ) = 0 THEN 
			(select list(distinct string(salline.slcode) + '/' + string(salline.slline)) 
			   from salline, matsal
			 where ( salline.slstatus < '5') and
					IF date(salline.sldatship) < date(now()) THEN date(now()) ELSE date(salline.sldatship) ENDIF = date(matsal.msdatship) and
					(salline.slqtyreq - salline.slqtyalloc - salline.slqtyreal) > 0 and
					salline.slitem = matplan.mpitem and
					matsal.msordno = matplan.mpordno and
					matsal.msitem = matplan.mpitem )
		ELSE
			''
		ENDIF /*os2974*/ as multipl_sales
    FROM items,   
         matplan  
   WHERE ( matplan.mpitem = items.itcode ) and  
         ( items.ittyp = 'M' OR items.italttyp = 'M' /*os2335*/) and
			( items.itpol not in ( 'C'  ) ) 
 
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
| items_itpol |
| itmccode |
| matplan_mpuse |
| items_itdesc2 |
| catof |
| multipl_sales |

