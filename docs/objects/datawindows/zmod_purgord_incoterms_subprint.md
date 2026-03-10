# zmod_purgord_incoterms_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT purghead.phcode,   
         purghead.phsupp,   
         purghead.phcurr,   
         purghead.phstatus,   
         purghead.phdatcrea,   
         purghead.phlastline,   
         purghead.phcmnt,   
         purghead.phdlvt,   
         purghead.phdlvtplace, 
         purghead.phfileref,   
         purghead.phfileline,   
         purghead.phpurchaser,
			(select choices.chname from choices where choices.chtype = 'DLVT' and choices.chcode = purghead.phdlvt) as incoterms
    FROM purghead  
   WHERE purghead.phcode = :an_phcode    

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phsupp |
| phcurr |
| phstatus |
| phdatcrea |
| phlastline |
| phcmnt |
| phdlvt |
| phdlvtplace |
| phfileref |
| phfileline |
| phpurchaser |
| incoterms |

