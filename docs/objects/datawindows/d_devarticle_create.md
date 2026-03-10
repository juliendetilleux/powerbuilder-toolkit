# d_devarticle_create

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
select 
	loitem, 
	ggcode,
	ggchassis, 
	ggkm ,
	ggregistre,
	ggdtreg,
	ggadcode,
	glkm, 
	glcode, 
	gltype, 
	gldate, 
	glline,
	itstat4
from garaghead left outer join garagline on garaghead.ggcode = garagline.glcode, lots, items 
where loorgcode = ggchassis
and itcode=loitem
and ggadcode = :al_custhead 
   

```

## Colonnes
| Colonne |
|---------|
| lots_loitem |
| garaghead_ggcode |
| garaghead_ggchassis |
| garaghead_ggkm |
| garaghead_ggregistre |
| garaghead_ggdtreg |
| garaghead_ggadcode |
| garagline_glkm |
| garagline_glcode |
| garagline_gltype |
| garagline_gldate |
| garagline_glline |
| items_itstat4 |

