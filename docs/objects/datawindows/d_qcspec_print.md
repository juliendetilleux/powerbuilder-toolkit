# d_qcspec_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT qcspechead.qhitem,   
         qcspechead.qhtyp,   
         qcspechead.qhadcode,   
         qcspechead.qhversn,   
         qcspechead.qhappro,   
         qcspechead.qhactiv,   
         qcspechead.qhcmnt,
		qcspechead.qhsmplref,
		qcspechead.qhcreadat,
		(select usname from users where uscode = qcspechead.qhcreausr) as creaname,
		qcspechead.qhapprodat,
		(select usname from users where uscode = qcspechead.qhapprousr) as approname,
         qcspecline.qltestid,   
         qcspecline.qlmin,   
         qcspecline.qlmax,   
         qcspecline.qlum,   
         qcspecline.qlcmnt,   
         qcspecline.qlseq,   
         qcspecline.qlrsltrange,    
         qcspecline.qlchoiceid,   
         qcspecline.qlshowext,   
         qcspecline.qlshowsum,   
         qcspecline.qlexecqty,   
         qcspecline.qlexectyp, 
         qctest.qtnameext,   
         qctest.qtname,   
         qctest.qttyp,  
         items.itname, 
			items.itum, 
			( Select choices.chname
				 From choices
				Where choices.chtype = 'QCFR' 					And
						choices.chcode = qcspecline.qlreplicat 	) As Replication ,
			( Select choices.chname
				 From choices
				Where choices.chtype = 'QCLB' 					And
						choices.chcode = qctest.qtlabo 				) As Labo 
    FROM qcspechead,   
         qcspecline,   
         qctest,   
         items  
   WHERE ( qcspechead.qhitem = qcspecline.qlitem ) and  
         ( qcspechead.qhtyp = qcspecline.qltyp ) and  
         ( qcspechead.qhadcode = qcspecline.qladcode ) and  
         ( qcspechead.qhversn = qcspecline.qlversn ) and  
         ( qctest.qttestid = qcspecline.qltestid ) and  
         ( qcspechead.qhitem = items.itcode ) and  
         ( ( qcspechead.qhitem = :as_SelItem ) AND  
         ( qcspechead.qhtyp = :as_SelTyp ) AND  
         ( qcspechead.qhadcode = :as_SelAdCode ) AND  
         ( qcspechead.qhversn = :an_SelVrsn ) )    

```

## Colonnes
| Colonne |
|---------|
| qcspechead_qhitem |
| qcspechead_qhtyp |
| qcspechead_qhadcode |
| qcspechead_qhversn |
| qcspechead_qhappro |
| qcspechead_qhactiv |
| qcspechead_qhcmnt |
| qcspechead_qhsmplref |
| qcspechead_qhcreadat |
| creaname |
| qcspechead_qhapprodat |
| approname |
| qcspecline_qltestid |
| qcspecline_qlmin |
| qcspecline_qlmax |
| qcspecline_qlum |
| qcspecline_qlcmnt |
| qcspecline_qlseq |
| qcspecline_qlrsltrange |
| qcspecline_qlchoiceid |
| qcspecline_qlshowext |
| qcspecline_qlshowsum |
| qcspecline_qlexecqty |
| qcspecline_qlexectyp |
| qctest_qtnameext |
| qctest_qtname |
| qctest_qttyp |
| items_itname |
| items_itum |
| replication |
| labo |

