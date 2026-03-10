# d_mfgmes_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
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
         '' bomtyp,
         mfghead.mhitemseq,   
         mfghead.mhprint,   
         mfghead.mhsubc,
         mfghead.mhpghid,
         0 qcip,
         'F' mfgtyp ,
         mfghead.mhsalhead,
         mfghead.mhsalline,
			items.itactiv,
			items.itstat1,
			items.itstat2,
         mfghead.mhqcip,
         mfghead.mhexpdat, 
	    isnull(mfghead.mhblocked,'N') as mhblocked  
    FROM mfghead,   
         salpline,
			items
   WHERE ( salpline.slcode = mfghead.mhsalhead ) and  
         ( salpline.slline = mfghead.mhsalline ) and  
		( items.itcode = mfghead.mhitem ) and 
         ( mfghead.mhstatus <= '6' ) AND  
         ( mfghead.mhitem = '###########M' ) 
UNION ALL 
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items.itname,   
         mfghead.mhreqqty,   
         items.itum,   
         mfghead.mhreqdat,   
         mfghead.mhstatus,   
         mfghead.mhtype,   
         mfghead.mhmfgqty,
         mfghead.mhbomtyp,  
         mfghead.mhitemseq,   
         mfghead.mhprint,   
         mfghead.mhsubc,
         mfghead.mhpghid,
         mfghead.mhqcip,
         'I',
         mfghead.mhsalhead,
         mfghead.mhsalline,
			items.itactiv,
			items.itstat1,
			items.itstat2,
         mfghead.mhqcip,
         mfghead.mhexpdat,  
	    isnull(mfghead.mhblocked,'N') as mhblocked  
    FROM mfghead,   
         items  
   WHERE ( items.itcode = mfghead.mhitem ) and  
         ( mfghead.mhstatus <= '6' ) AND  
         ( mfghead.mhitem <> '###########M' ) AND 
		( mfghead.mhtype <> 'G' ) 
UNION ALL 
  SELECT mfghead.mhcode,   
         mfgcoitem.mcitem,   
         items.itname,   
         mfgcoitem.mcreqty,   
         
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
| cbomtyp |
| mfghead_mhitemseq |
| mfghead_mhprint |
| mfghead_mhsubc |
| mfghead_mhpghid |
| mfghead_qcip |
| cmfgtyp |
| mfghead_mhsalhead |
| mfghead_mhsalline |
| items_itactiv |
| items_itstat1 |
| items_itstat2 |
| mfghead_mhqcip |
| mfghead_mhexpdat |
| mfghead_mhblocked |

