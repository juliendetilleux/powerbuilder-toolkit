# d_qcctrlhead

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
         qcctrlhead.qhapprodat,   
         adresses.adname,   
         items.itname,   
         lots.loorgcode,   
         lots.loadcode,
		qcctrlhead.qhapprousr,
		lots.loalloc
    FROM qcctrlhead,   
         adresses,   
         items,   
         lots  
   WHERE ( adresses.adcode = qcctrlhead.qhadcode ) and  
         ( qcctrlhead.qhitem = items.itcode ) and  
         ( qcctrlhead.qhlot = lots.locode ) and  
         ( ( qcctrlhead.qhappro = 'E' ) AND  
         ( qcctrlhead.qhtyp <> 'M' ) )    

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
| qhapprodat |
| adresses_adname |
| items_itname |
| lots_loorgcode |
| lots_loadcode |
| qhapprousr |
| lots_loalloc |

