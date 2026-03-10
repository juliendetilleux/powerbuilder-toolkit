# zmod_mfg_coitem_bcd_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT mfgcoitem.mccode,
			mfgcoitem.mcitem,   
         items.itname,   
         mfgcoitem.mcreqty,   
         items.itum,   
         mfgcoitem.mclotmfg,
         mfgcoitem.mcexpdat,   
         mfgcoitem.mclotprt  
        FROM mfgcoitem,   
         items  
        WHERE ( mfgcoitem.mcitem = items.itcode ) and  
         ( ( mfgcoitem.mccode = :Sel_mfgord ) ) 
order by mfgcoitem.mcitem asc


```

## Colonnes
| Colonne |
|---------|
| mfgcoitem_mccode |
| mfgcoitem_mcitem |
| items_itname |
| mfgcoitem_mcreqty |
| items_itum |
| mfgcoitem_mclotmfg |
| mfgcoitem_mcexpdat |
| mfgcoitem_mclotprt |

