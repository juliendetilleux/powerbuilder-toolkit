# d_qry_qcspechead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT qcspechead.qhversn,   
         qcspechead.qhitem,   
         qcspechead.qhtyp,   
         qcspechead.qhadcode,   
         qcspechead.qhactiv,   
         qcspechead.qhappro,   
         qcspechead.qhapprodat,   
         adresses.adname,   
         items.itname,   
         adresses.adgrsupp,   
         adresses.adgrcust  
    FROM qcspechead,   
         adresses,   
         items  
   WHERE ( adresses.adcode = qcspechead.qhadcode ) and  
         ( qcspechead.qhitem = items.itcode ) and  
         ( ( qcspechead.qhappro in ( :as_Arg1,:as_Arg2,:as_Arg3 ) ) AND  
         ( qcspechead.qhapprodat between :adt_Start and :adt_Stop ) )    

```

## Colonnes
| Colonne |
|---------|
| qhversn |
| qhitem |
| qhtyp |
| qhadcode |
| qhactiv |
| qhappro |
| qhapprodat |
| adresses_adname |
| items_itname |
| adresses_adgrsupp |
| adresses_adgrcust |

