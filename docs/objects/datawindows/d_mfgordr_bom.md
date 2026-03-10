# d_mfgordr_bom

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT 'I' linetype,
			items.itcode,   
         items.itname,
         mfglallocs.mlbomqty,
         mfglallocs.mllallocqty,   
         mfglallocs.mlissuedqty,   
         items.itstdpur,
         mfglallocs.mlitemseq,
         items.itum, 
         0.000001/ 0.000001 multiplyer
    FROM items,   
         mfglallocs  
   WHERE ( mfglallocs.mlitem = items.itcode ) and  
         ( ( mfglallocs.mlcode = :sel_mfg ) )  
  UNION ALL 
  SELECT 'W',
			mfgwcreqs.mwwccode,   
         workcenters.wcname,
         mfgwcreqs.mwreqlab,
         mfgwcreqs.mwreqlab,   
         mfgwcreqs.mwrealab,   
         workcenters.wccost,  
         mfgwcreqs.mwline,
         'H',
         1    
    FROM mfgwcreqs,   
         workcenters  
   WHERE ( workcenters.wccode = mfgwcreqs.mwwccode ) and  
         ( ( mfgwcreqs.mwcode = :sel_mfg ) ) 

UNION ALL
  SELECT 'WW' , 
			mfgwcreqs.mwwccode,   
         workcenters.wcname,
         mfgwcreqs.mwreqmac,
         mfgwcreqs.mwreqmac,   
         mfgwcreqs.mwreamac,   
         workcenters.wcmacprop,  
         mfgwcreqs.mwline,
         'H',
         1      
    FROM mfgwcreqs,   
         workcenters  
   WHERE ( workcenters.wccode = mfgwcreqs.mwwccode ) and  
         ( ( mfgwcreqs.mwcode = :sel_mfg ) ) 

UNION ALL 
  SELECT 'S',
			purghead.phsupp,   
         adresses.adname,
         1,   
         1,   
         1,   
         purgline.plpurval,
         1,
         '',
         1  
    FROM purgline,   
         purghead,
         adresses  
   WHERE ( purghead.phcode = purgline.plcode ) and  
         ( purghead.phsupp = adresses.adcode) and
         ( purgline.plrefnum = :sel_mfg ) and
         ( purghead.phtype = '1')





```

## Colonnes
| Colonne |
|---------|
| clinetype |
| items_itcode |
| items_itname |
| mfglallocs_mlbomqty |
| mfglallocs_mllallocqty |
| mfglallocs_mlissuedqty |
| items_itstdpur |
| mfglallocs_mlitemseq |
| items_itum |
| cmultiplyer |

