# d_qcctrlline_of

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT qcctrlline.qlseq,   
         qcctrlline.qltestid,   
         qcctrlline.qlum,   
         qcctrlline.qlrslt,   
         qcctrlline.qlvalid,   
         qcctrlline.qlline,   
         qcctrlline.qlctrlid,   
         qctest.qttyp,   
         qcctrlline.qldesc,   
         qcctrlline.qlcmnt,   
         qcctrlline.qlusrid,   
         qcctrlline.qltestdat,   
         qcctrlline.qlflag,   
         qcctrlline.qlrsltrange,   
         qcctrlline.qlchoiceid,   
         qcctrlline.qlchoiceseq,   
         qcctrlline.qlchdesc,   
         qcctrlline.qlmin,   
         qcctrlline.qlmax,   
         qcctrlline.qlrsltval  
    FROM qcctrlline,   
         qctest,
		qcctrlhead  
   WHERE qctest.qttestid = qcctrlline.qltestid and  
         qcctrlline.qlctrlid = qcctrlhead.qhctrlid and
	    qcctrlhead.qhordno = :al_of and
		qcctrlhead.qhtyp = 'M' 
ORDER BY qcctrlhead.qhctrlid  ,
		qcctrlline.qlseq ASC,   
         qcctrlline.qlline ASC   

```

## Colonnes
| Colonne |
|---------|
| qlseq |
| qltestid |
| qlum |
| qlrslt |
| qlvalid |
| qlline |
| qlctrlid |
| qctest_qttyp |
| qcctrlline_qldesc |
| qcctrlline_qlcmnt |
| qcctrlline_qlusrid |
| qcctrlline_qltestdat |
| qlflag |
| qlrsltrange |
| qcctrlline_qlchoiceid |
| qcctrlline_qlchoiceseq |
| qcctrlline_qlchdesc |
| qlmin |
| qlmax |
| qlrsltval |

