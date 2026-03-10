# d_salhead_prepall

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,   
         salhead.shcust,   
         salhead.shcustref,   
         salhead.shcurr,   
         salhead.shcmnt,   
         salhead.shdatcrea,   
         salhead.shdatreq,   
         salhead.shautho,   
         adresses.adname,   
         turnhead.thdesc,   
         salhead.shstatus,   
         choices.chname,
         (SELECT choices.chname 
			
FROM choices 
			
WHERE choices.chtype = 'SALA' 
				AND choices.chcode = salhead.shautho ) as autorisation
    FROM salhead left outer joIN turnhead on salhead.shturnid = turnhead.thid ,   
         adresses,   
         choices
   WHERE ( adresses.adcode = salhead.shcust ) AND
         ( salhead.shstatus < '5' ) AND
         ( salhead.shstatus = choices.chcode ) AND  
         ( choices.chtype = 'CUSS' ) AND
         isnull((SELECT sum(if salline.slqtyreq -  salline.slqtyreal - salline.slqtyalloc < 0 then 0 
						else salline.slqtyreq -  salline.slqtyreal - salline.slqtyalloc endif)
			
FROM salline, items 
              
WHERE salline.slcode = salhead.shcode AND
 				salline.slstatus < '5'  AND
				items.itcode = salline.slitem AND
				(isnull(items.itisumtarif,'') <> 'Y' OR isnull((SELECT ppvalue 
FROM progparam 
WHERE ppcode = 'ITUMTRF'),'') = '' /*os2751*/ ) ),0) > 0 AND
			salhead.shautho > '0'

```

## Colonnes
| Colonne |
|---------|
| shcode |
| shcust |
| shcustref |
| shcurr |
| shcmnt |
| shdatcrea |
| shdatreq |
| shautho |
| adresses_adname |
| turnhead_thdesc |
| salhead_shstatus |
| choices_chname |
| autorisation |

