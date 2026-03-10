# d_bcd_mfgordr_choice

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
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
		(select workcenters.wcname	
			 from workcenters, mfgwcreqs
			where workcenters.wccode = mfgwcreqs.mwwccode and  
					mfgwcreqs.mwcode = mfghead.mhcode and
				 	mfgwcreqs.mwline = (  select min(mfgwcreqs.mwline)
													 from mfgwcreqs
													where mfgwcreqs.mwcode = mfghead.mhcode and
															isnull(mfgwcreqs.mwfinish,'#') not in ('Y', 'D')))  as wcname,  /*os1676//S7318*/
		isnull(mhblocked, 'N' ) as blocked,
			isnull(items.itmccode, '##########') as itmccode ,
         mfghead.mhlotmfg 
    FROM mfghead,   
         salpline,
			items
   WHERE ( salpline.slcode = mfghead.mhsalhead ) and  
         ( salpline.slline = mfghead.mhsalline ) and  
			( items.itcode = mfghead.mhitem ) and 
         ( ( mfghead.mhstatus >= :Selected_stmin ) AND  
         ( mfghead.mhstatus <= :Selected_stmax ) AND  
         ( mfghead.mhitem = '###########M' ) )   AND
		mhsubc <> 'Y' 
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
| wcname |
| blocked |
| itmccode |
| mfghead_mhlotmfg |

