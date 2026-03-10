# d_mfgordr_subc_stkmvt_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items_a.itname itname_a,   
         mfghead.mhreqqty,   
         mfghead.mhmfgqty,   
         mfghead.mhmfgdat,   
         items_a.itum,   
         purghead.phsupp,   
         mfghead.mhpghid ,
         ( Select itemlang.ildesc
             from itemlang
            Where itemlang.illgcode = 'NL' And
                  itemlang.ilitcode = mfghead.mhitem ) item_a_NL 
    FROM mfghead,   
         items items_a,   
         purghead  
   WHERE ( items_a.itcode = mfghead.mhitem ) and  
         ( purghead.phcode = mfghead.mhpghid ) and
			( mfghead.mhcode  = :Selected_order )   
ORDER BY mfghead.mhcode ASC
   

```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhitem |
| items_itname_a |
| mfghead_mhreqqty |
| mfghead_mhmfgqty |
| mfghead_mhmfgdat |
| items_itum |
| purghead_phsupp |
| mfghead_mhpghid |
| citem_a_nl |

