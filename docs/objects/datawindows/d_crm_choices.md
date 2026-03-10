# d_crm_choices

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
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

UNION  all 

SELECT DISTINCT '2',
		choicehead.chcode,
		choicehead.chname,
		'S',
		choicehead.chtype,
		choicehead.chaxs,
		choicehead.chactiv
	FROM choicehead
	WHERE choicehead.chtype = 'C'
	and chcode not like 'ADU%'
	and chcode not like 'CTU%'

UNION  all 

SELECT DISTINCT '2',
		choicehead.chcode,
		choicehead.chname,
		'S',
		choicehead.chtype,
		choicehead.chaxs,
		choicehead.chactiv
	FROM choicehead
	WHERE choicehead.chtype = 'P'
	and chcode IN ('ADCZ','PRIO')

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

