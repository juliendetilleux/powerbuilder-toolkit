# d_devarticle_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
select loitem, ggchassis, ggkm , glkm, glcode, gltype, gldate, glline
from garaghead left outer join garagline on garaghead.ggcode = garagline.glcode, lots
where loorgcode = :as_ggchassis
and loorgcode = ggchassis
and glkm in (select max(glkm) from garaghead, garagline where glcode=ggcode and ggchassis = :as_ggchassis group by glcode, ggadcode)
   

```

## Colonnes
| Colonne |
|---------|
| lots_loitem |
| garaghead_ggchassis |
| garaghead_ggkm |
| garagline_glkm |
| garagline_glcode |
| garagline_gltype |
| garagline_gldate |
| garagline_glline |

