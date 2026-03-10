# d_choices

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT DISTINCT '1',
		choices.chtype,
		choices.chtype,					
		choices.chaxs,
		'' as choicehead_chtype,	
		'' as choicehead_chaxs,
		'' as choicehead_chactiv
	FROM choices  
	WHERE choices.chaxs IN ('U', 'M') 

UNION ALL 

SELECT DISTINCT '2',
		choicehead.chcode,
		choicehead.chname,
		'S',
		choicehead.chtype,
		choicehead.chaxs,
		choicehead.chactiv
	FROM choicehead
	WHERE (choicehead.chtype in ('P','Z')
	OR (choicehead.chtype = 'C' and choicehead.chcode in ('DGR1','DGR2', 'FUNC')))
	and chcode not like 'ADU%' 
	and chcode not in ( 'CAOR' , 'CAPR', 'MGFF', 'RATP', 'TASK' )

Order by 2   

```

## Colonnes
| Colonne |
|---------|
| compute_val |
| chtype |
| chtype |
| chaxs |
| choicehead_chtype |
| choicehead_chaxs |
| choicehead_chactiv |

