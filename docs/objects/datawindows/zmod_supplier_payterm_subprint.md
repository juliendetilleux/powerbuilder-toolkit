# zmod_supplier_payterm_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  Select choices.chname  
    From choices,   
         purhead  
   Where ( choices.chcode    = purhead.phsupppay ) And  
         ( purhead.phcode    = :ran_PurOrder     ) And  
         ( purhead.phsupppay = choices.chcode    ) And  
         ( choices.chtype    = 'PAYM'            )   

Union All

  Select choices.chname  
    From choices,   
         purghead  
   Where ( choices.chcode     = purghead.phsupppay ) And  
         ( purghead.phcode    = :ran_PurOrder      ) And  
         ( purghead.phsupppay = choices.chcode     ) And  
         ( choices.chtype     = 'PAYM'             )    

```

## Colonnes
| Colonne |
|---------|
| choices_chname |

