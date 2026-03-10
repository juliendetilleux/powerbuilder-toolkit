# d_mfgordr_mod3_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items.itname,   
         mfghead.mhreqqty,   
         items.itum,   
         mfghead.mhreqdat,   
         mfghead.mhcmntrel,   
         mfghead.mhsalhead,   
         mfghead.mhsalline,   
         mfghead.mhexpdat,   
         mfghead.mhlotmfg, 
         mfghead.mhmfgqty,
         mfghead.mhtype , 
			adlang as Lang_Sel 
    FROM items,   
         mfghead , 
         adresses    
   WHERE ( mfghead.mhitem = items.itcode )  
     AND ( ( mfghead.mhcode = :Selected_order ) )    
     AND adresses.adcode='##########' 
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhitem |
| items_itname |
| mfghead_mhreqqty |
| items_itum |
| mfghead_mhreqdat |
| mfghead_mhcmntrel |
| mfghead_mhsalhead |
| mfghead_mhsalline |
| mfghead_mhexpdat |
| mfghead_mhlotmfg |
| mfghead_mhmfgqty |
| mfghead_mhtype |
| lang_sel |

