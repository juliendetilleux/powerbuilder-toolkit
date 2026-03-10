# d_qry_lot_qcresultat

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT qcctrlhead.qhlot,   
         qcctrlline.qlctrlid,   
         qcctrlline.qltestid,   
         qcctrlline.qlrsltval,   
         qcctrlline.qlum,   
         qcctrlline.qltestdat,   
         qcctrlline.qlrslt,   
     	qcctrlline.qlmax,
         qcctrlhead.qhappro,   
         qctest.qttyp,
			items.itdefaultlot   
    FROM qcctrlline,   
         qcctrlhead,   
         qctest,
			items  
   WHERE ( qcctrlhead.qhctrlid = qcctrlline.qlctrlid ) and  
         ( qctest.qttestid = qcctrlline.qltestid ) and  
         ( ( qcctrlhead.qhappro <> 'E' ) ) AND  
         qcctrlline.qltestid = :as_testid AND  
         qcctrlhead.qhtyp = :as_typ AND  
         qcctrlhead.qhadcode = :as_clifour AND  
         qcctrlhead.qhitem like :as_items AND
         qcctrlhead.qhitem = items.itcode AND
         ((qcctrlline.qltestdat >= :ad_start AND  qcctrlline.qltestdat <= :ad_stop)  OR qcctrlline.qltestdat is null)


```

## Colonnes
| Colonne |
|---------|
| qcctrlhead_qhlot |
| qcctrlline_qlctrlid |
| qcctrlline_qltestid |
| qcctrlline_qlrsltval |
| qcctrlline_qlum |
| qcctrlline_qltestdat |
| qcctrlline_qlrslt |
| qcctrlline_qlmax |
| qcctrlhead_qhappro |
| qctest_qttyp |
| items_itdefaultlot |

