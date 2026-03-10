# d_qry_qc_crosstab_print

- **Type**: DataWindow
- **Style**: Composite
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT locations.lccode,   
         lots.locode,   
         qcctrlline.qlrslt,   
         qcctrlline.qltestdat,   
         qctest.qtname,   
         lots.loitem,   
         lots.lostock,   
         qcctrlhead.qhtyp,
			qcctrlline.qlmin,
			qcctrlline.qlmax,
			qcctrlline.qlum,
			qcctrlline.qlrsltval
    FROM locations,   
         lots,   
         qcctrlline,   
         stocks,   
         qctest,   
         qcctrlhead  
   WHERE stocks.stitem = lots.loitem and  
         stocks.stloc = locations.lccode and  
         stocks.stlot = lots.locode and  
         qcctrlline.qlctrlid = lots.losampleid and  
         qctest.qttestid = qcctrlline.qltestid and  
         qcctrlhead.qhctrlid = qcctrlline.qlctrlid and  
         qctest.qttyp = :test_type and  
         qcctrlline.qlflag = 'S' and
         date(qcctrlline.qltestdat) between :start_date and :stop_date and
			qcctrlhead.qhtyp = :control_type
```

## Colonnes
| Colonne |
|---------|
| loitem |
| locode |
| lccode |
| lostock |
| val |

