# d_qry_mfg_ord_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
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
			items.itactiv,
			items.itstat1,
			items.itstat2
    FROM mfghead,   
         salpline,
			items
   WHERE ( salpline.slcode = mfghead.mhsalhead ) and  
         ( salpline.slline = mfghead.mhsalline ) and  
			( items.itcode = mfghead.mhitem ) and 
         ( ( mfghead.mhstatus >= :Selected_stmin ) AND  
         ( mfghead.mhstatus <= :Selected_stmax ) AND  
         ( mfghead.mhitem = '###########M' ) )   
UNION  all 
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
			items.itactiv,
			items.itstat1,
			items.itstat2
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
| items_itactiv |
| items_itstat1 |
| items_itstat2 |

