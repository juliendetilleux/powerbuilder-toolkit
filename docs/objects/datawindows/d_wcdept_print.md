# d_wcdept_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT  workcenters.wccode ,
           workcenters.wcname ,
           workcenters.wcactiv ,
           department.dpcode ,
           department.dpdesc ,
           machinehead.mhmachineid ,
           machinehead.mhname 
   FROM workcenters, department, machinehead       
 WHERE workcenters.wccode not like '###%' AND
		workcenters.wcdptid = department.dpcode AND
		machinehead.mhwccode = workcenters.wccode   
  
UNION ALL  
  
  SELECT  workcenters.wccode ,
           workcenters.wcname ,
           workcenters.wcactiv ,
           department.dpcode ,
           department.dpdesc ,
           '' ,
           '' 
   FROM workcenters LEFT OUTER JOIN department ON workcenters.wcdptid = department.dpcode 
 WHERE workcenters.wccode not like '###%' AND
		workcenters.wccode NOT IN ( select workcenters.wccode
												   from workcenters, department, machinehead       
												 where workcenters.wccode not like '###%' AND
														workcenters.wcdptid = department.dpcode AND
														machinehead.mhwccode = workcenters.wccode  )
    
ORDER BY 4          ASC,
           1          ASC,
           7          ASC  
```

## Colonnes
| Colonne |
|---------|
| workcenters_wccode |
| workcenters_wcname |
| workcenters_wcactiv |
| department_dpcode |
| department_dpdesc |
| machinehead_mhmachineid |
| machinehead_mhname |

