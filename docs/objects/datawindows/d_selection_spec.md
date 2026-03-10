# d_selection_spec

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
         qcspechead.qhapprodat,   
         qcspechead.qhapprousr ,
         ( select adresses.adname from adresses where adresses.adcode = qcspechead.qhadcode ) as adname
    FROM qcspechead  
   WHERE ( qcspechead.qhactiv = 'Y' ) AND  
         ( qcspechead.qhappro = 'Y' ) AND  
         ( qcspechead.qhitem = :as_Item )   
ORDER BY qcspechead.qhitem ASC,   
         qcspechead.qhtyp ASC,   
         qcspechead.qhadcode ASC,   
         qcspechead.qhversn ASC   

```

## Colonnes
| Colonne |
|---------|
| qhitem |
| qhtyp |
| qhadcode |
| qhversn |
| qhapprodat |
| qhapprousr |
| adname |

