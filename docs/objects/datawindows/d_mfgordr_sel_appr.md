# d_mfgordr_sel_appr

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
		(select workcenters.wcname	
			 from workcenters, mfgwcreqs
			where workcenters.wccode = mfgwcreqs.mwwccode and  
					mfgwcreqs.mwcode = mfghead.mhcode and
				 	mfgwcreqs.mwline = isnull( 
												(select max(mfgwcreqs.mwline) 
													from workline, mfgwcreqs
													where mfgwcreqs.mwline = workline.wlwcreqsline AND
															workline.wltyp = '1' AND
															workline.wlmfgid = mfgwcreqs.mwcode AND
															workline.wlwrktime > 0 AND
															mfgwcreqs.mwcode = mfghead.mhcode and
															isnull(mfgwcreqs.mwfinish,'#') not in ('Y', 'D')) 
													,
													(  select min(mfgwcreqs.mwline)
													 from mfgwcreqs
													where mfgwcreqs.mwcode = mfghead.mhcode and
															isnull(mfgwcreqs.mwfinish,'#') not in ('Y', 'D'))))  as wcname,  /*os1676//S7318*/
		isnull(mhblocked, 'N' ) as blocked,
			isnull(items.itmccode, '##########') as itmccode 
    FROM mfghead,   
         salpline,
			items
   WHERE ( salpline.slcode = mfghead.mhsalhead ) and  
         ( salpline.slline = mfghead.mhsalline ) and  
			( items.itcode = mfghead.mhitem ) and 
         ( ( mfghead.mhstatus = 0 ) AND  

         ( mfghead.mhitem = '###########M' ) )   
UNION ALL 
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items.itname,   
         mfghead.mhreqqty,   
    
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

