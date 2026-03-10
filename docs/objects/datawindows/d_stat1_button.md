# d_stat1_button

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_food
- **Table principale**: 0

## SQL
```sql
  Select	'1'	As LineType,
			itstat1.im_orderby As Sort,
			items.itcode,
			items.itname,		
			( Select tvalvl_country.tclvl
				 From tvalvl_country
				Where tvalvl_country.tccode = items.ittvalvl and
					tvalvl_country.tccountry = (select adcountrid from adresses where adcode = isnull(items.itmccode,'##########')) ) As TvaLvl ,
			( Select rateline.rlval
				 From rateline
				Where rateline.rlcode = ( Select parameters.pmival
													 From parameters
													Where parameters.pmcode = 'DIRCTSAL' ) And
																	rateline.rlitem = items.itcode ) As Price ,
			'N' As Clicked,
			itstat1.imcolor
	 From items join itstat1 on items.itstat1 = itstat1.imcode
	Where items.itactiv = 'Y'							And
			items.itsale = 'Y'							And
			IsNull( items.itstat2, '  ') = '  '			And
			items.itstat1 = :ras_ItStat1

Union All
		
  Select Distinct '2' ,
			0 ,
			itstat2.iscode2 ,
			itstat2.isdesc ,
			0 ,
			0 ,
			'N',
			itstat1.imcolor
	 From itstat2 join items on items.itstat2 = itstat2.iscode2 join itstat1 on items.itstat1 = itstat1.imcode
	Where items.itactiv = 'Y'							And
			items.itsale = 'Y'							And
			items.itstat1 = itstat2.iscode			And			
			IsNull( items.itstat2, '  ') <> '  '			And	
			items.itstat1 = :ras_ItStat1				
			
Order by 2

```

## Colonnes
| Colonne |
|---------|
| linetype |
| itstat1_sort |
| itcode |
| itname |
| tvalvl |
| price |
| clicked |
| itstat1_imcolor |

