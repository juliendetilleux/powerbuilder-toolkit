# zmod_purord_incoterms_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcode,   
         purhead.phsupp,   
         purhead.phcurr,   
         purhead.phstatus,   
         purhead.phdatcrea,   
         purhead.phlastline,   
         purhead.phcntid,   
         purhead.phcntref,   
         purhead.phcmnt,   
         purhead.phwithtransp,   
         purhead.phtranspid,   
         purhead.phdlvt,   
         purhead.phdlvtplace,   
         purhead.phtransfered,   
         purhead.phfileref,   
         purhead.phfileline,   
         purhead.phdatsupply,   
         purhead.phpurchaser,
			(select choices.chname from choices where choices.chtype = 'DLVT' and choices.chcode = purhead.phdlvt) as incoterms
    FROM purhead  
   WHERE purhead.phcode = :an_phcode    

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
| phcntid |
| phcntref |
| phcmnt |
| phwithtransp |
| phtranspid |
| phdlvt |
| phdlvtplace |
| phtransfered |
| phfileref |
| phfileline |
| phdatsupply |
| phpurchaser |
| incoterms |

