# d_qcrslts

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT qcctrlhead.qhtyp as IP_typ,
		qcctrlhead.qhctrlid as IP_ID,
		0 as IP_replicat,
		'N°éch.: ' + string(qcctrlhead.qhctrlid),    
         qcctrlline.qldesc,   
         qcctrlline.qlrsltval,   
         qcctrlline.qlum,   
         qcctrlline.qlrslt,   
         qcctrlline.qlchoiceid,   
         qcctrlline.qlchoiceseq,   
         qcctrlline.qlchdesc, 
		Isnull((Select qctchoice.qcrslt from qctchoice where (qctchoice.qcchoiceid = qcctrlline.qlchoiceid) and (qctchoice.qcseq = qcctrlline.qlchoiceseq)),'E') as choice_validate,  
      	'' as text_value,  
		qcctrlline.qlrsltrange,   
         qcctrlline.qlmax,   
         qcctrlline.qlmin,
		(Select qctest.qttyp from qctest where qctest.qttestid = qcctrlline.qltestid) as typ,   
         qcctrlline.qlcmnt
    FROM qcctrlhead,   
         qcctrlline  
   WHERE ( qcctrlline.qlctrlid = qcctrlhead.qhctrlid ) and  
         ( ( qcctrlhead.qhlot = :ras_locode ) ) AND  
         ( ( IP_typ IN (:ras_qhtyp) ) )    AND
		( qcctrlhead.qhactiv = 'Y' ) AND
		( IP_typ <> 'M')

UNION ALL

SELECT 'M' as IP_typ,
		qcctrlhead.qhordno as IP_ID,
		0 as IP_replicat,
		'N°éch.: ' + string(qcctrlhead.qhctrlid),    
         qcctrlline.qldesc,   
         qcctrlline.qlrsltval,   
         qcctrlline.qlum,   
         qcctrlline.qlrslt,   
         qcctrlline.qlchoiceid,   
         qcctrlline.qlchoiceseq,   
         qcctrlline.qlchdesc, 
		Isnull((Select qctchoice.qcrslt from qctchoice where (qctchoice.qcchoiceid = qcctrlline.qlchoiceid) and (qctchoice.qcseq = qcctrlline.qlchoiceseq)),'E') as choice_validate,  
      	'' as text_value,  
		qcctrlline.qlrsltrange,   
         qcctrlline.qlmax,   
         qcctrlline.qlmin,
		(Select qctest.qttyp from qctest where qctest.qttestid = qcctrlline.qltestid) as typ,   
         qcctrlline.qlcmnt
    FROM qcctrlhead,   
         qcctrlline  
   WHERE ( qcctrlline.qlctrlid = qcctrlhead.qhctrlid ) and  
         ( ( qcctrlhead.qhordno = (Select 
```

## Colonnes
| Colonne |
|---------|
| qcctrlhead_ip_typ |
| qcctrlhead_ip_id |
| ip_replicat |
| nr |
| qcctrlline_qldesc |
| qcctrlline_qlrsltval |
| qcctrlline_qlum |
| qcctrlline_qlrslt |
| qcctrlline_qlchoiceid |
| qcctrlline_qlchoiceseq |
| qcctrlline_qlchdesc |
| choice_validate |
| text_value |
| qcctrlline_qlrsltrange |
| qcctrlline_qlmax |
| qcctrlline_qlmin |
| typ |
| qcctrlline_qlcmnt |

