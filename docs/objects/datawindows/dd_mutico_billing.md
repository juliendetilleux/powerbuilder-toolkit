# dd_mutico_billing

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
select multico1.mccode as mccode1, 
	ad1.adname as adname1, 
	multico2.mccode as mccode2 , 
	ad2.adname as adname2,
	mccode1 + mccode2 as code
from multico as multico1, 
	multico as multico2, 
	adresses as ad1, 
	adresses as ad2
where multico1.mcactiv = 'Y' AND
	multico1.mcintext = 'I' AND
	multico2.mcactiv = 'Y' AND
	multico2.mcintext = 'I' AND 
	multico1.mccode = ad1.adcode AND
	multico2.mccode = ad2.adcode AND
	multico1.mccode <> multico2.mccode;
```

## Colonnes
| Colonne |
|---------|
| multico_mccode1 |
| adresses_adname1 |
| multico_mccode2 |
| adresses_adname2 |
| code |

