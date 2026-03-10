# d_qcspecline_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT qcspecline.qlitem,   
         qcspecline.qltyp,   
         qcspecline.qladcode,   
         qcspecline.qlline,   
         qcspecline.qlseq,   
         qcspecline.qltestid,   
         qcspecline.qldesc,   
         qcspecline.qlmin,   
         qcspecline.qlmax,   
         qcspecline.qlum,   
         qcspecline.qlcmnt,   
         qcspecline.qlversn,   
         qctest.qttyp,   
         qcspecline.qlrsltrange,   
         qcspecline.qlshowext,   
         qcspecline.qlshowsum,   
         qcspecline.qlreplicat,   
         qcspecline.qlchoiceid,   
         qcspecline.qlexectyp,   
         qcspecline.qlexecqty,   
         qcspecline.qlexecdat,   
         qcspecline.qlexecqtyrem,
         cast(null as  char(22)) as qcspecline_qlexecqty_t
    FROM qcspecline,   
         qctest  
   WHERE ( qctest.qttestid = qcspecline.qltestid ) and  
		    ( qctest.qttyp <> 'T' ) and
         ( ( qcspecline.qlitem = :as_item ) AND  
         ( qcspecline.qltyp = :as_type ) AND  
         ( qcspecline.qladcode = :as_clifour ) AND  
         ( qcspecline.qlversn = :an_version ) AND  
         ( qcspecline.qlline = :an_line ) )    

```

## Colonnes
| Colonne |
|---------|
| qlitem |
| qltyp |
| qladcode |
| qlline |
| qlseq |
| qltestid |
| qldesc |
| qlmin |
| qlmax |
| qlum |
| qlcmnt |
| qlversn |
| qctest_qttyp |
| qlrsltrange |
| qlshowext |
| qlshowsum |
| qlreplicat |
| qlchoiceid |
| qcspecline_qlexectyp |
| qcspecline_qlexecqty |
| qcspecline_qlexecdat |
| qcspecline_qlexecqtyrem |
| cqcspecline_qlexecqty_t |

