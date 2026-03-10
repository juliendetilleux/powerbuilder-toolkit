# d_get_language_item

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _langue
- **Table principale**: 0

## SQL
```sql
  SELECT a.locode,   
         a.lgcode,   
         a.loclass,   
         a.lotrans,   
         a.loinittext,
		b.lotrans as lotrans_prev
    FROM lang_object_item  a, lang_object_item b
   WHERE ( a.lgcode = :as_lgcode ) AND  
         ( a.loclass like :as_loclass + '%' )    
	AND b.lgcode = :as_lgcode_prev
	and b.loclass = a.loclass
	and b.loinittext = a.loinittext

```

## Colonnes
| Colonne |
|---------|
| locode |
| lgcode |
| loclass |
| lotrans |
| loinittext |
| lotrans_prev |

