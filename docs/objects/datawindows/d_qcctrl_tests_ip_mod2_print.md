# d_qcctrl_tests_ip_mod2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,   
         items.itcode , 
         qcctrlhead.qhlot,   
         qcctrlhead.qhctrlid  ,
         qcctrlline.qldesc, 
         qcctrlhead.qhtyp,
         items.itdefaultlot,
         qcctrlhead.qhordno,
			qcctrlhead.qhtyp,
			( Select mfghead.mhstatus
				 From	mfghead
				Where mfghead.mhqcip = qcctrlhead.qhctrlid ) As MhStatus ,
			( If qcctrlhead.qhtyp = 'M' And MhStatus >= '8' Then 'N' Else 'Y' EndIf ) As IpM  ,
		(select loorgcode from lots where locode = qcctrlhead.qhlot) as loorgcode              
    FROM items,   
         qcctrlhead,   
         qcctrlline
   WHERE ( items.itcode = qcctrlhead.qhitem ) AND  
         ( qcctrlhead.qhctrlid = qcctrlline.qlctrlid ) AND
         ( qcctrlhead.qhappro = 'E' )  AND
         ( qcctrlline.qlrslt = 'E' ) And 
			( IpM = 'Y') 
ORDER BY qcctrlline.qldesc,
         qcctrlhead.qhctrlid


```

## Colonnes
| Colonne |
|---------|
| items_itname |
| items_itcode |
| qcctrlhead_qhlot |
| qcctrlhead_qhctrlid |
| qcctrlline_qldesc |
| qcctrlhead_qhtyp |
| items_itdefaultlot |
| qcctrlhead_qhordno |
| qcctrlhead_qhtyp |
| mhstatus |
| ipm |
| loorgcode |

