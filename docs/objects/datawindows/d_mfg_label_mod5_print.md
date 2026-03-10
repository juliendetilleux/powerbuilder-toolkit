# d_mfg_label_mod5_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT zv_mfglabel.flag,   
         zv_mfglabel.mfgitem,   
         items.itname,   
         zv_mfglabel.mhlotmfg,   
         zv_mfglabel.mhlotprt,   
         zv_mfglabel.mhexpdat ,   
         (select lots.lofreezdate from lots where lots.locode = zv_mfglabel.mhlotmfg) as lofreezdate,
         isnull(items.itisfrozen,'') as itisfrozen,
		isnull((select ppvalue from progparam where ppcode = 'FREEZART'), '') as FREEZART  ,
		items.itean    
    FROM items,   
         zv_mfglabel  
   WHERE ( zv_mfglabel.mfgitem = items.itcode ) and  
         ( ( zv_mfglabel.mfgcode = :selorder ) AND  
         ( zv_mfglabel.mfgitem = :selitem ) )   
ORDER BY zv_mfglabel.flag ASC,   
         zv_mfglabel.mfgitem ASC   

```

## Colonnes
| Colonne |
|---------|
| zv_mfglabel_flag |
| zv_mfglabel_mfgitem |
| items_itname |
| zv_mfglabel_mhlotmfg |
| zv_mfglabel_mhlotprt |
| zv_mfglabel_mhexpdat |
| lofreezdate |
| itisfrozen |
| freezart |
| items_itean |

