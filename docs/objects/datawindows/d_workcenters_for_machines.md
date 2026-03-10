# d_workcenters_for_machines

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT  workcenters.wccode ,
           workcenters.wcname ,
           workcenters.wcactiv ,
           workcenters.wccolor ,
			  workcenters.wcdptid
        FROM workcenters
			JOIN  link_machine_pdc ON link_machine_pdc.mpworkcenters = workcenters.wccode
        WHERE ( workcenters.wccode <> '########' ) AND
			workcenters.wcadvsched = 'Y' AND
			link_machine_pdc.mpmachine = :al_mcid 
        ORDER BY workcenters.wccode          ASC  
```

## Colonnes
| Colonne |
|---------|
| wccode |
| wcname |
| wcactiv |
| wccolor |
| wcdptid |

