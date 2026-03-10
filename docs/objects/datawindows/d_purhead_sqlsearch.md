# d_purhead_sqlsearch

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcode,   
         purhead.phsupp,   
         purhead.phstatus,   
         purhead.phlastline,   
         (select adresses.adname from adresses where  adresses.adcode = purhead.phsupp) as adname,   
         (select choices.chname from choices where choices.chtype = 'PURS' and purhead.phstatus = choices.chcode) as chname,   
         purhead.phcurr,   
         (select adresses.adgrading  from adresses where  adresses.adcode = purhead.phsupp) as adgrading,   
         purhead.phcntid,   
         purhead.phcntref,   
         purhead.phdatcrea,   
         (select adresses.adlang from adresses where  adresses.adcode = purhead.phsupp) as adlang,   
         purhead.phdatsupply,   
         isnull(purhead.phaut, ' ') as phaut,
			isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') as APPROBIVY,
		isnull((select count(*) from purline where purline.plcode = purhead.phcode and purline.plstatus >= '3' and purline.plstatus < '9'),0) as confirmed,
		isnull((select count(*) from purline where purline.plcode = purhead.phcode and purline.plstatus < '9'),0) as nbpurline         
    FROM purhead 
   WHERE purhead.phstatus between '0' and '5' 
ORDER BY purhead.phcode DESC   

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phsupp |
| phstatus |
| phlastline |
| adresses_adname |
| choices_chname |
| phcurr |
| adresses_adgrading |
| purhead_phcntid |
| purhead_phcntref |
| purhead_phdatcrea |
| adresses_adlang |
| purhead_phdatsupply |
| phaut |
| capprobivy |
| confirmed |
| nbpurline |

