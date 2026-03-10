# d_stat2_button

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_food
- **Table principale**: 0

## SQL
```sql
  Select	items.itcode ,
			items.itname ,
			( Select tvalvl_country.tclvl
				 From tvalvl_country
				Where tvalvl_country.tccode = items.ittvalvl And
						tvalvl_country.tccountry = (select adcountrid from adresses where adcode = isnull(items.itmccode,'##########')) ) As TvaLvl ,
			( Select rateline.rlval
				 From rateline
				Where rateline.rlcode = ( Select parameters.pmival
													 From parameters
													Where parameters.pmcode = 'DIRCTSAL' ) And
						rateline.rlitem = items.itcode											 ) As Price ,
		itstat1.imcolor
	 From items join itstat1 on items.itstat1 = itstat1.imcode
	Where items.itactiv = 'Y'				And
			items.itsale = 'Y'				And
			items.itstat2 = :ras_ItStat2	And
			items.itstat1 = :ras_ItStat1			
Order by 2
```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| tvalvl |
| price |
| itstat1_imcolor |

