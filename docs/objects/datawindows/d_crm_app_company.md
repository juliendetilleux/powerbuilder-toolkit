# d_crm_app_company

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
		linkappad.lacontact
	from linkappad
			join adresses on adresses.adcode = linkappad.laadcode
	where linkappad.laadcode = :as_adcode and linkappad.laahid = :an_ahid
	order by 1
```

## Colonnes
| Colonne |
|---------|
| laadcode |
| adresses_adname |
| laalid |
| laalidmaj |
| lanumact |
| lanumactmaj |
| laahid |
| lacontact |

