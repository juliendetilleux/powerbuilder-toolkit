# d_prgerror_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT progerrors.pedatim,   
         progerrors.penb,   
         progerrors.peref,   
         progerrors.pedetail,   
         progerrors.peuser,   
         progerrors.pepc,   
         progerrors.peos,   
         progerrors.pepmix  
    FROM progerrors  
WHERE progerrors.pedatim > :ad_date 
ORDER BY progerrors.pedatim DESC   

```

## Colonnes
| Colonne |
|---------|
| pedatim |
| penb |
| peref |
| pedetail |
| peuser |
| pepc |
| peos |
| pepmix |

