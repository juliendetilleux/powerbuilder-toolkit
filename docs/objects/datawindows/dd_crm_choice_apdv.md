# dd_crm_choice_apdv

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT choices.chname,
         		choices.chcode
    FROM choices  
   WHERE ( choices.chtype = 'APDV' )
```

## Colonnes
| Colonne |
|---------|
| chname |
| chcode |

