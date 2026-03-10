# d_qry_boms_ml_st_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
//SQL affichant toute les méthodes de sous-traitance
with recursive methodest( endproduct, level, headitem, type, item, msqty, item_subcontracting, tri) as
(
select bomhead.bhcode,
       1,
       '',
       'H',
       bomhead.bhcode,
       bomhead.bhcoeff,
       bomhead.bhsubc,
       bomhead.bhcode
from bomhead
where bomhead.bhtype = '0' AND
     isnull(bomhead.bhsubc, 'Y') = 'Y' 

UNION ALL 

select methodest.endproduct,
       methodest.level + 1,
       bomline.blcode,
       if (select count(*) from bomline as bl where bl.blcode = bomline.blramcode) > 0 then 'H' else 'L' endif,
       bomline.blramcode,
       bomline.blramqty  * (methodest.msqty / bomhead.bhcoeff) as qty,
       isnull((select bomhead.bhsubc from bomhead where bhtype = '0' and bhcode = bomline.blramcode), 'N'),
       tri + '_' + methodest.headitem + '_' + bomline.blramcode
from bomline join bomhead on bomline.blcode = bomhead.bhcode join methodest ON bomline.blcode = methodest.item
where bomline.bltype = '0' AND
    qty >= 0.001 AND
    bomhead.bhcoeff > 0 and
    methodest.level < 100
)
select methodest.endproduct,
	it2.itname as endproduct_name,
    methodest.level,
    methodest.headitem,
    methodest.type,
    methodest.item, 
	items.itname,
    methodest.msqty,
    item_subcontracting      
 from methodest join items on items.itcode = methodest.item 
	join items as it2 on it2.itcode = methodest.endproduct
order by tri,
    level,
    type, 
    methodest.item 
```

## Colonnes
| Colonne |
|---------|
| endproduct |
| endproduct_name |
| level |
| headitem |
| type |
| item |
| itname |
| msqty |
| item_subcontracting |

