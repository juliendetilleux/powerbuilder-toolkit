# d_qcctrl_cust

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
	SELECT qcctrlhead.qhctrlid,   
         	qcctrlhead.qhitem,   
         	qcctrlhead.qhtyp,   
		qcctrlhead.qhadcode,   
      	qcctrlhead.qhappro,   
         	qcctrlhead.qhlot,   
          qcctrlhead.qhversn,   
          qcctrlhead.qhactiv,   
          qcctrlhead.qhcreadat,   
		adresses.adname
	FROM qcctrlhead , adresses
	WHERE (	( qcctrlhead.qhadcode = :as_adcode AND 
						qcctrlhead.qhappro = 'Y' AND
						qcctrlhead.qhlot = (select qcctrlhead.qhlot from qcctrlhead where qcctrlhead.qhctrlid = :QCNum) )
						OR qcctrlhead.qhctrlid = :QCNum) 
		AND 
		 adresses.adcode = qcctrlhead.qhadcode  
```

## Colonnes
| Colonne |
|---------|
| qhctrlid |
| qhitem |
| qhtyp |
| qhadcode |
| qhappro |
| qhlot |
| qhversn |
| qhactiv |
| qhcreadat |
| adresses_adname |

