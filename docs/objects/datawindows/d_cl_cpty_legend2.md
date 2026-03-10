# d_cl_cpty_legend2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
  SELECT 1 as type,
		choiceline.clcval,   
         choiceline.clname,
		choiceline.clsort  
    FROM choiceline  
   WHERE ( choiceline.clcode = 'CPTY' ) AND  
         ( choiceline.clactiv = 'Y' )   
 
UNION ALL 
 
  SELECT 2 as type,
		'F2',   
         'Alimenter solde', 
		1
    FROM dummy
 
UNION ALL 
 
  SELECT 2 as type,
		'F9',   
         'Ouverture du tiroir caisse', 
		2
    FROM dummy
 
UNION ALL 
 
  SELECT 2 as type,
		'F10',   
         'Sans paiement ou paiement partiel', 
		3
    FROM dummy
 
UNION ALL 
 
  SELECT 2 as type,
		'F11',   
         'Annulation complète', 
		4
    FROM dummy
 
UNION ALL 
 
  SELECT 2 as type,
		'F12',   
         'Sauvegarde', 
		5
    FROM dummy
  
ORDER BY type, 4 ASC   

```

## Colonnes
| Colonne |
|---------|
| type |
| clcval |
| clname |
| clsort |

