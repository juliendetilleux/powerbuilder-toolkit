# dd_choices_polo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
select choices.chcode,  
		 choices.chname 
  from choices 
 where choices.chtype='POLO' 
   and choices.chactiv='Y' 

```

## Colonnes
| Colonne |
|---------|
| chcode |
| chname |

