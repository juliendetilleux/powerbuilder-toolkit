# d_item_car_nut

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
select cnid, 
cnlibelle, 
(SELECT Count(1) FROM linkitcn WHERE icitem = :as_item AND iccnid = cnid) as itcarnut_org, 
(SELECT Count(1) FROM linkitcn WHERE icitem = :as_item AND iccnid = cnid) as itcarnut_cur,
(SELECT itcode FROM items WHERE itcode = :as_item) as icitem
FROM car_nut
WHERE cnactif = 1
ORDER BY cnsort


```

## Colonnes
| Colonne |
|---------|
| cnid |
| cnlibelle |
| itcarnut_org |
| itcarnut_cur |
| icitem |

