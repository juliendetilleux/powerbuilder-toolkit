# d_qcspechead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT qcspechead.qhitem,   
         qcspechead.qhtyp,   
         qcspechead.qhadcode,   
         qcspechead.qhversn,   
         qcspechead.qhactiv,   
         qcspechead.qhcmnt,   
         qcspechead.qhcreadat,   
         qcspechead.qhcreausr,   
         qcspechead.qhmodifdat,   
         qcspechead.qhmodifusr,   
         qcspechead.qhapplydat,   
         qcspechead.qhappro,   
         qcspechead.qhapprodat,   
         qcspechead.qhadtyp,   
         qcspechead.qhsmplref
    FROM qcspechead,   
          
   WHERE ( qcspechead.qhitem = :as_item ) AND  
         ( qcspechead.qhtyp = :as_typ ) AND  
         ( qcspechead.qhadcode = :as_clifour ) AND  
         ( qcspechead.qhversn = :an_versn )    

```

## Colonnes
| Colonne |
|---------|
| qhitem |
| qhtyp |
| qhadcode |
| qhversn |
| qhactiv |
| qhcmnt |
| qhcreadat |
| qhcreausr |
| qhmodifdat |
| qhmodifusr |
| qhapplydat |
| qhappro |
| qhapprodat |
| qhadtyp |
| qhsmplref |

