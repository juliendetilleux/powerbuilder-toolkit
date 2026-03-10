# d_link_machines_wc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT machinehead.mhmachineid,   
         machinehead.mhname,   
         machinehead.mhwccode,   
         workcenters.wcname 
    FROM machinehead,   
         workcenters  
   WHERE ( workcenters.wccode = machinehead.mhwccode ) 
ORDER BY  machinehead.mhmachineid  

```

## Colonnes
| Colonne |
|---------|
| machinehead_mhmachineid |
| machinehead_mhname |
| machinehead_mhwccode |
| workcenters_wcname |

