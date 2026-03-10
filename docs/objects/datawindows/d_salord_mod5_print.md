# d_salord_mod5_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,   
         salhead.shcust,   
         salhead.shcustpay,   
         salhead.shdlvt,   
         salhead.shdlvtplace,  
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2568*/
			isnull(shmccode, '##########')
		ELSE
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########') 
		ENDIF as mcdo 
    FROM salhead  
   WHERE ( salhead.shcode = :Selected_order )    

```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| salhead_shcust |
| shcustpay |
| shdlvt |
| shdlvtplace |
| mcdo |

