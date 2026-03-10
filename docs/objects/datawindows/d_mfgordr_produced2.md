# d_mfgordr_produced2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhitem,   
         items.itname,   
         mfghead.mhreqqty,   
         mfghead.mhreqdat,   
         mfghead.mhmfgqty,   
         mfghead.mhlotmfg,   
         items.itum,   
         items.itdefaultlot,   
         mfghead.mhcmntrel,   
         mfghead.mhtype,   
         mfghead.mhqcip,   
         mfghead.mhexpdat,   
         mfghead.mhlotprt,   
         mfghead.mhmfgqtyqty  ,
		isnull( ( SELECT choiceline.clname FROM choiceline where clcode = 'CTG2'  and clline = items.itstat4 ), '' ) as catof
    FROM mfghead,   
         items  
   WHERE ( items.itcode = mfghead.mhitem ) and  
         ( ( mfghead.mhcode = :Selected_of ) )    

```

## Colonnes
| Colonne |
|---------|
| mfghead_mhitem |
| items_itname |
| mfghead_mhreqqty |
| mfghead_mhreqdat |
| mfghead_mhmfgqty |
| mfghead_mhlotmfg |
| items_itum |
| items_itdefaultlot |
| mfghead_mhcmntrel |
| mfghead_mhtype |
| mfghead_mhqcip |
| mfghead_mhexpdat |
| mfghead_mhlotprt |
| mfghead_mhmfgqtyqty |
| catof |

