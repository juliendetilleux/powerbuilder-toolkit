# d_techdata_mat

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
with recursive methodest( endproduct, level, headitem, type, item, msqty, decompose_td, tri, coef_tl) as
			(
			select bomhead.bhcode as endproduct,
				1 as level,
				'' as headitem,
				'H' as type,
				bomhead.bhcode as item,
				cast(1 as numeric(1,0)) as msqty,  /*bomhead.bhcoeff*/
				cast(0 as numeric(1,0)) as decompose_td,
				bomhead.bhcode as tri,
				cast(1 as numeric(1,0)) as coef_tl
			from bomhead 
			where bomhead.bhtype = '0' and bomhead.bhcode = :as_item
			
			UNION ALL 
			
			select 	methodest.endproduct as en,
					methodest.level + 1,
					bomline.blcode as item,
					if (select count(*) from bomline as bl where bl.blcode = bomline.blramcode) > 0 then 'H' else 'L' endif as type,
					bomline.blramcode,
					if isnull(bomhead.bhusetdqty,'N') = 'Y' then
						isnull(bomline.bltdqty, bomline.blramqty)
					else 
						bomline.blramqty 
					endif  * (methodest.msqty / bomhead.bhcoeff) * coef_tl as qty,
					items.it_decompose_td,
					tri + '_' + bomline.blramcode,
					if type = 'L' then                  
                        (select sum(tlz.tivalue)from techlink as tlz join techdata as tdz on tlz.ticode = tdz.tdcode where tlz.tiitem = bomline.blramcode and tdz.tdtype = 'I')
                    else
                        1
                    end if as coef_tl
			from bomline join bomhead on bomline.blcode = bomhead.bhcode join items as itbomhead on itbomhead.itcode = bomhead.bhcode join methodest ON bomline.blcode = methodest.item join items ON bomline.blramcode = items.itcode
			where bomline.bltype = '0' AND
				 qty >= 0.001 AND
				 bomhead.bhcoeff > 0 AND
				 methodest.level < 100 AND
				 (itbomhead.it_decompose_td = 0 OR methodest.level + 1 <= 2)
			)
			select methodest.type,
					methodest.item, 
					IF trim( isnull( ( select ildesc from itemlang where ilitcode = items.itcode and illgcode = :as_lgcode ) ,'') ) <> '' THEN
						( select ildesc from itemlang where ilitcode = items.itcode
```

## Colonnes
| Colonne |
|---------|
| type |
| item |
| mat_desc |
| qty |
| it_decompose_td |
| list_ing |
| count_ing |

