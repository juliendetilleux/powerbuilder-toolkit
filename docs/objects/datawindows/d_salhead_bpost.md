# d_salhead_bpost

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,   
         	salhead.sh_etiqtrsp_saturday,
		salhead.sh_etiqtrsp_signed,
		salhead.sh_etiqtrsp_insured,
		salhead.sh_etiqtrsp_2presentation,
		salhead.sh_etiqtrsp_reminder,
		salhead.sh_etiqtrsp_nextday,
		salhead.sh_etiqtrsp_recieved,
		salhead.sh_etiqtrsp_COD,
		adresses.adcountrid
    FROM salhead JOIN adresses ON adresses.adcode = salhead.shcust 
   WHERE salhead.shcode = :al_salorder 

```

## Colonnes
| Colonne |
|---------|
| shcode |
| sh_etiqtrsp_saturday |
| sh_etiqtrsp_signed |
| sh_etiqtrsp_insured |
| sh_etiqtrsp_2presentation |
| sh_etiqtrsp_reminder |
| sh_etiqtrsp_nextday |
| sh_etiqtrsp_recieved |
| sh_etiqtrsp_cod |
| adcountrid |

