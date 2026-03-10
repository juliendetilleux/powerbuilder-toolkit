# d_purg2ord_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT purghead.phcode,   
         purghead.phsupp,   
         purghead.phcurr,   
         purghead.phdatcrea,   
         purghead.phfileref,   
         purghead.phfileline,   
         purghead.phpurchaser,  
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2568*/
			isnull(phmccode, '##########')
		ELSE
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purghead.phsupp),'##########')
		ENDIF as mcdo 
    FROM purghead  
   WHERE ( purghead.phcode = :Selected_order )    

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phsupp |
| phcurr |
| phdatcrea |
| phfileref |
| phfileline |
| phpurchaser |
| mcdo |

