# zd_mfg_coitem_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT mfgcoitem.mcitem,   
         items.itname,   
         mfgcoitem.mcreqty,   
         items.itum,   
         mfgcoitem.mclotmfg,
         mfgcoitem.mcexpdat  
        FROM mfgcoitem,   
         items  
        WHERE ( mfgcoitem.mcitem = items.itcode ) and  
         ( ( mfgcoitem.mccode = :Sel_mfgord ) ) 
order by mfgcoitem.mcitem asc


```

## Colonnes
| Colonne |
|---------|
| mfgcoitem_mcitem |
| items_itname |
| mfgcoitem_mcreqty |
| items_itum |
| mfgcoitem_mclotmfg |
| mfgcoitem_mcexpdat |

