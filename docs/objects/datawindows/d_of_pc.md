# d_of_pc

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _cust2
- **Table principale**: 0

## SQL
```sql
  SELECT mfgwcreqs.mwwccode as 'ope',   
         workcenters.wcname as 'opelabel',   
         mfgwcreqs.mwline as 'line',
        workline.wlwkcode as 'worker',
        (SELECT wkname FROM workers WHERE wkcode = workline.wlwkcode) as 'workerlabel',
        String(workline.wldat) as 'datework',
        workline.wlstart as 'hdebut',
        workline.wlend as 'hfin'
    FROM mfgwcreqs LEFT JOIN workline ON wlmfgid = mwcode AND wlwcid = mwwccode AND wlwcreqsline = mfgwcreqs.mwline,   
         workcenters  
   WHERE ( workcenters.wccode = mfgwcreqs.mwwccode ) and  
         ( ( String(mfgwcreqs.mwcode) = :as_mwcode ) )   
ORDER BY mfgwcreqs.mwline, workline.wldat, workline.wlstart, workline.wlend  ASC 
```

## Colonnes
| Colonne |
|---------|
| ope |
| opelabel |
| line |
| worker |
| workerlabel |
| datework |
| hdebut |
| hfin |

