# d_salline_preinv_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT  salline.slcode ,
           salline.slline ,
           salline.slitem ,
           salline.slqtyreq ,
           salline.sluomord ,
           salline.sldatreq ,
           salline.slstdval ,
           salline.slstatus ,
           salline.slqtyinv ,
           items.itname     
        FROM salline ,           items     
        WHERE ( items.itcode = salline.slitem ) and
          ( ( salline.slstatus < '6' ) and
          ( salline.slpreinv = 'Y' ) )  
```

## Colonnes
| Colonne |
|---------|
| slcode |
| slline |
| slitem |
| slqtyreq |
| sluomord |
| sldatreq |
| slstdval |
| slstatus |
| salline_slqtyinv |
| items_itname |

