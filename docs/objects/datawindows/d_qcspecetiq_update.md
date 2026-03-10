# d_qcspecetiq_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT qcspecetiq.qeitem,   
         qcspecetiq.qetyp,   
         qcspecetiq.qeadcode,   
         qcspecetiq.qeversn,   
         qcspecetiq.qeline,   
         qcspecetiq.qenbetiq,   
         qcspecetiq.qecmnt  
    FROM qcspecetiq   
  WHERE qcspecetiq.qeitem = :as_qeitem AND 
         qcspecetiq.qetyp = :as_qetyp AND
         qcspecetiq.qeadcode = :as_qeadcode AND   
         qcspecetiq.qeversn = :al_qeversn
    
 ORDER BY qcspecetiq.qeline 
```

## Colonnes
| Colonne |
|---------|
| qeitem |
| qetyp |
| qeadcode |
| qeversn |
| qeline |
| qenbetiq |
| qecmnt |

