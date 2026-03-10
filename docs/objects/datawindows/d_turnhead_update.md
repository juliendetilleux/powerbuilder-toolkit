# d_turnhead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT  turnhead.thid ,           turnhead.thdesc ,           turnhead.thactiv ,           turnhead.tlcmnt     
        FROM turnhead      
        WHERE ( turnhead.thid = :an_turnh_id )   
```

## Colonnes
| Colonne |
|---------|
| thid |
| thdesc |
| thactiv |
| tlcmnt |

