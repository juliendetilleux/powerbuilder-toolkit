# d_qry_qcgraph

- **Type**: DataWindow
- **Style**: Group
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
         qcctrlline.qlvalid,   
         qcctrlhead.qhappro,   
         qctest.qttyp,
			'          '    
    FROM qcctrlline,   
         qcctrlhead,   
         qctest  
   WHERE ( qcctrlhead.qhctrlid = qcctrlline.qlctrlid ) and  
         ( qctest.qttestid = qcctrlline.qltestid ) and  
         ( ( qcctrlhead.qhappro <> 'E' ) )    

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
| qcctrlline_qlvalid |
| qcctrlhead_qhappro |
| qctest_qttyp |
| compute_0010 |

