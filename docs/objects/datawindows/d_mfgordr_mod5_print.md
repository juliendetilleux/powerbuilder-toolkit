# d_mfgordr_mod5_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhstatus,   
         mfghead.mhitem,   
         mfghead.mhrelqty,   
         mfghead.mhreqqty,   
         mfghead.mhreldat,   
         mfghead.mhreqdat,   
         mfghead.mhmfgdat,   
         mfghead.mhmfgqty,   
         mfghead.mhitemseq,   
         mfghead.mhcmntrel,   
         mfghead.mhlotmfg,   
         mfghead.mhmalloc,   
         mfghead.mhmreal,   
         mfghead.mhlalloc,   
         mfghead.mhlreal,   
         mfghead.mhtype,   
         mfghead.mhprint,   
         mfghead.mhsubc,   
         mfghead.mhpghid,   
         mfghead.mhpgline,   
         mfghead.mhbomtyp,   
         mfghead.mhsalhead,   
         mfghead.mhsalline,   
         mfghead.mhealloc,   
         mfghead.mhereal,   
         mfghead.mhqcip,   
         mfghead.mhexpdat,   
         mfghead.mhlotprt,   
         mfghead.mhclosdat,   
         mfghead.mhfileref,   
         mfghead.mhfileline,   
         mfghead.mhmfgcostqty,   
         mfghead.mhmfgnqualqty,   
         mfghead.mhmfgcost,   
         items.itcode,   
         items.itname,   
         items.itum,   
         items.itdefaultlot,
			( select adlang from adresses	where adcode = '##########'  ) as Lang_sel
    FROM mfghead,   
         items  
   WHERE ( items.itcode = mfghead.mhitem ) and  
         ( ( mfghead.mhcode = :an_mfghead ) )    



```

## Colonnes
| Colonne |
|---------|
| mhcode |
| mhstatus |
| mhitem |
| mhrelqty |
| mhreqqty |
| mhreldat |
| mhreqdat |
| mhmfgdat |
| mhmfgqty |
| mhitemseq |
| mhcmntrel |
| mhlotmfg |
| mhmalloc |
| mhmreal |
| mhlalloc |
| mhlreal |
| mhtype |
| mhprint |
| mhsubc |
| mhpghid |
| mhpgline |
| mhbomtyp |
| mhsalhead |
| mhsalline |
| mhealloc |
| mhereal |
| mhqcip |
| mhexpdat |
| mhlotprt |
| mhclosdat |
| mhfileref |
| mhfileline |
| mhmfgcostqty |
| mhmfgnqualqty |
| mhmfgcost |
| items_itcode |
| items_itname |
| items_itum |
| items_itdefaultlot |
| clang_sel |

