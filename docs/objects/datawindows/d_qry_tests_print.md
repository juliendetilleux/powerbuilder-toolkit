# d_qry_tests_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT distinct qctest.qttestid,
		qctest.qtname,
		items.itcode,   
         items.itname as Articles,    
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

SELECT  distinct qctest.qttestid,
		qctest.qtname,
		routline.rlcode,  
         items.itname as Articles, 
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
| qctest_qttestid |
| qctest_qtname |
| items_itcode |
| items_articles |
| version |
| statut |
| qcspechead_typ |

