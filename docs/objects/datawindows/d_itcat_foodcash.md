# d_itcat_foodcash

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_food
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1.imcode,   
         	itstat1.imdesc,   
         	itstat1.im_orderby ,
			itstat1.imcolor
    FROM itstat1
	where im_orderby > 1

```

## Colonnes
| Colonne |
|---------|
| imcode |
| imdesc |
| im_orderby |
| imcolor |

