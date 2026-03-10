# d_qry_qc_head

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT qcctrlhead.qhctrlid,   
         qcctrlhead.qhtyp,   
         qcctrlhead.qhadcode,   
         qcctrlhead.qhversn,   
         qcctrlhead.qhapprousr,   
         qcctrlhead.qhlot,   
         qcctrlhead.qhapprodat,   
         qcctrlhead.qhappro,   
         qcctrlhead.qhcreadat,   
         qcctrlhead.qhcreausr,   
         adresses.adgrsupp,   
         qcctrlhead.qhitem,   
         items.itname,
         lots.loorgcode,
         if qcctrlhead.qhtyp= 'M' then
				 (select mhcode from mfghead where mfghead.mhqcip = qcctrlhead.qhctrlid) else null endif as mfg,
         adresses.adname
    FROM qcctrlhead,   
         adresses,   
         items,
         lots  
   WHERE ( qcctrlhead.qhadcode = adresses.adcode ) and  
         ( qcctrlhead.qhitem = items.itcode ) and  
         ( qcctrlhead.qhlot = lots.locode ) and  
         ( ( qcctrlhead.qhappro between :MinStatus and :MaxStatus ) AND  
         ( qcctrlhead.qhcreadat between :StartDat and :EndDat ) )    

```

## Colonnes
| Colonne |
|---------|
| qhctrlid |
| qhtyp |
| qhadcode |
| qhversn |
| qhapprousr |
| qcctrlhead_qhlot |
| qhapprodat |
| qhappro |
| qhcreadat |
| qhcreausr |
| adresses_adgrsupp |
| qhitem |
| items_itname |
| lots_loorgcode |
| cmfg |
| adresses_adname |

