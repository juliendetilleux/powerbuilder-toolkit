# ds_salline_purauto_create

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
SELECT salline.slline,
		adresses.adcode,
		adresses.admail,
		salline.slqtyreq,
		linkitad.lkcurr,
		salline.slcomment,
		salline.slitem,
		linkitad.lkumconv,
		linkitad.lkum,
		salline.sldatreq,
		linkitad.lkcode,
		items.itstdpur,
		linkitad.lkadref
   FROM salline,
		items,
		adresses,
		linkitad
WHERE salline.slcode = :al_salhead and
	salline.slitem = items.itcode and
	salline.slqtyreq > 0 and
	items.ittyp in ('C','D','P') and
	items.itpol = 'C' and
	items.itpurchaseauto = 'Y' and
	linkitad.lkadcode = adresses.adcode and
	linkitad.lkitem = items.itcode and
	linkitad.lktyp = 'P' and
	(linkitad.lkcode = (select first linkitad.lkcode
									 from linkitad, adresses
								 where linkitad.lktyp = 'P' and
									linkitad.lkitem = items.itcode and
									linkitad.lkmain = 'Y' and
									linkitad.lkadcode = adresses.adcode /*and
									trim(isnull(adresses.admail,'')) <> ''*/) 
	OR 
	linkitad.lkcode = if 1 = (select count(linkitad.lkcode)
										 from linkitad, adresses
										where linkitad.lktyp = 'P' and
											linkitad.lkitem = items.itcode and
											linkitad.lkadcode = adresses.adcode/* and
											trim(isnull(adresses.admail,'')) <> ''*/) then
									(select first linkitad.lkcode
										 from linkitad, adresses
										where linkitad.lktyp = 'P' and
											linkitad.lkitem = items.itcode and
											linkitad.lkadcode = adresses.adcode /*and
											trim(isnull(adresses.admail,'')) <> ''*/)
								else
									0
								endif) 
ORDER BY adresses.adcode,
	salline.slline
```

## Colonnes
| Colonne |
|---------|
| salline_slline |
| adresses_adcode |
| adresses_admail |
| salline_slqtyreq |
| linkitad_lkcurr |
| salline_slcomment |
| salline_slitem |
| linkitad_lkumconv |
| linkitad_lkum |
| salline_sldatreq |
| linkitad_lkcode |
| items_itstdpur |
| linkitad_lkadref |

