# d_crm_app_chgmtgrp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
select	linkappad.laadcode,
		adresses.adname,
		linkappad.laalid,
		linkappad.laalidmaj,
		linkappad.lanumact,
		linkappad.lanumactmaj,
		linkappad.laahid,
		linkappad.lacontact,
		(select ctname + ' ' + ctfirstname from contacts where ctadcode = linkappad.laadcode and ctline = linkappad.lacontact ) as ctname,
		adresses.adsalesman
	from linkappad
			join adresses on adresses.adcode = linkappad.laadcode
	where linkappad.laahid = :an_ahid
	order by 1
```

## Colonnes
| Colonne |
|---------|
| linkappad_laadcode |
| adresses_adname |
| linkappad_laalid |
| linkappad_laalidmaj |
| linkappad_lanumact |
| linkappad_lanumactmaj |
| linkappad_laahid |
| linkappad_lacontact |
| ctname |
| adresses_adsalesman |

