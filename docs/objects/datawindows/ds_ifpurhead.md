# ds_ifpurhead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: purline

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
			purhead.phrcpocmnt, 
         (select min(purline.pldatsup) from purline where purline.plcode = purhead.phcode ) as reqdat    
    FROM purhead   
	WHERE phsupp = :ls_sup and 
         ( select count(plline)
				 from purline, items
				where purline.plitem = items.itcode and
                  purline.plcode = purhead.phcode and 
						items.itif2trf = 'Y' and
						isnull(purline.pltransfered, 'N') <> 'Y' and
						purline.plstatus < '4' ) > 0 
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
| phrcpocmnt |
| reqdat |

