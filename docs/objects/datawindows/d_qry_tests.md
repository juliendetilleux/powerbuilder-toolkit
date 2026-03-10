# d_qry_tests

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname as Articles,   
         qcspecline.qldesc as spec_rout,   
         string(qcspecline.qlversn) as version,     
         qcspechead.qhappro as statut,
		qcspechead.qhtyp as typ
    FROM items,   
         qcspecline,  
         qcspechead,   
         qctest  
   WHERE ( qctest.qttestid = qcspecline.qltestid )    and
			( items.itcode = qcspechead.qhitem ) and
			( qcspecline.qlitem = items.itcode ) and
			( qcspecline.qltyp  = qcspechead.qhtyp ) and
			( qcspecline.qladcode  = qcspechead.qhadcode ) and
			( qcspecline.qlversn  = qcspechead.qhversn ) and
			( qcspecline.qltestid = :ras_testid )
			

UNION ALL

SELECT  routline.rlcode,  
         items.itname as Articles, 
         workcenters.wcname as spec_rout,
		routline.rltype as version,
		'R' as statut,
		'T' as typ
    FROM items,   
		routline,   
         routtest,   
         workcenters,
		qctest
WHERE 	( routline.rltest = routtest.rtcode ) and
			( routline.rlcode = items.itcode ) and
			( routline.rlwccode = workcenters.wccode ) and
			( routtest.rtidtest = qctest.qttestid ) and
			( qctest.qttestid = :ras_testid )
```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| qcspecline_spec_rout |
| version |
| statut |
| qcspechead_typ |

