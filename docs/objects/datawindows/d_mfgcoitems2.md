# d_mfgcoitems2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfgcoitem.mcitem,   
         mfgcoitem.mcreqty,   
         items.itname,   
         items.itum,   
         mfgcoitem.mcexpdat,   
         mfgcoitem.mclotprt,   
         mfgcoitem.mcmfgqty,   
         mfgcoitem.mclotmfg,
	    items.itdefaultlot,   
         mfgcoitem.mccode,   
         mfgcoitem.mccostf,   
         mfgcoitem.mcnqualf,   
         mfgcoitem.mcmfgcost,
		1 - 1    
    FROM mfgcoitem,   
         items  
   WHERE ( mfgcoitem.mcitem = items.itcode ) and  
         ( ( mfgcoitem.mccode = :Sel_mfg ) )   
ORDER BY mfgcoitem.mcitem ASC   

```

## Colonnes
| Colonne |
|---------|
| mcitem |
| mcreqty |
| items_itname |
| items_itum |
| mfgcoitem_mcexpdat |
| mfgcoitem_mclotprt |
| mfgcoitem_mcmfgqty |
| mfgcoitem_mclotmfg |
| items_itdefaultlot |
| mfgcoitem_mccode |
| mfgcoitem_mccostf |
| mfgcoitem_mcnqualf |
| mfgcoitem_mcmfgcost |
| compute_0010 |

