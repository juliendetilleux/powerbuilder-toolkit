# d_mfgordr_ip_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         salpline.sldesc,   
         mfghead.mhreqqty,   
         salpline.slum,   
         mfghead.mhreqdat,   
         mfghead.mhstatus,   
         mfghead.mhtype,   
         mfghead.mhmfgqty,   
         mfghead.mhitemseq,   
         mfghead.mhprint,   
         mfghead.mhsubc,
         mfghead.mhpghid,
         'F' ,
         mfghead.mhsalhead,
         mfghead.mhsalline,
         mfghead.mhsalhead  
    FROM mfghead,   
         salpline
   WHERE ( salpline.slcode = mfghead.mhsalhead ) and  
         ( salpline.slline = mfghead.mhsalline ) and  
         ( ( mfghead.mhstatus >= :Selected_stmin ) AND  
         ( mfghead.mhstatus <= :Selected_stmax ) AND  
         ( mfghead.mhitem = '###########M' ) )   
UNION all 
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items.itname,   
         mfghead.mhreqqty,   
         items.itum,   
         mfghead.mhreqdat,   
         mfghead.mhstatus,   
         mfghead.mhtype,   
         mfghead.mhmfgqty,   
         mfghead.mhitemseq,   
         mfghead.mhprint,   
         mfghead.mhsubc,
         mfghead.mhpghid,
         'I',
         0,
         0,
         mfghead.mhsalhead  
    FROM mfghead,   
         items  
   WHERE ( items.itcode = mfghead.mhitem ) and  
         ( ( mfghead.mhstatus >= :Selected_stmin ) AND  
         ( mfghead.mhstatus <= :Selected_stmax ) AND  
         ( mfghead.mhitem <> '###########M' ) )   
ORDER BY 1 ASC   

```

## Colonnes
| Colonne |
|---------|
| mhcode |
| mfghead_mhitem |
| salpline_sldesc |
| mfghead_mhreqqty |
| salpline_slum |
| mfghead_mhreqdat |
| mfghead_mhstatus |
| mfghead_mhtype |
| mfghead_mhmfgqty |
| mfghead_mhitemseq |
| mfghead_mhprint |
| mfghead_mhsubc |
| mfghead_mhpghid |
| mfg_typ |
| mfghead_mhsalhead |
| mfghead_mhsalline |
| mfghead_mhsalhead |

