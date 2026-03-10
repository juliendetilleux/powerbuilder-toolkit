# d_dvi_option_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode               ,   
         items.itname               ,   
         items.itstdpur             ,
         items.itstat1              , 
         items.itstat2              ,
         items.itum                 ,
         items.ittyp                ,
         1.025 - 1.025 As Quantity  ,
         '0'           As RamType   ,
         ( Select parameters.pmcval  
			    From parameters  
			   Where parameters.pmcode = 'BLALTYP' ) As AllocType ,
         'N'           As SelRow
    FROM items  
   WHERE ( items.itactiv = 'Y' ) AND  
         ( items.itoption = 'Y' )
```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itstdpur |
| itstat1 |
| itstat2 |
| itum |
| ittyp |
| quantity |
| ramtype |
| alloctype |
| selrow |

