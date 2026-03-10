# d_purlines_rcpt

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
    
  SELECT purhead.phcode,   
         purhead.phsupp,   
         adresses.adname,   
         purline.plline,   
         purline.plitem,   
         items.itname,   
         purline.pldatsup,   
         purline.plqtyreq,   
         purline.plqtyreq - purline.plqtyrec solde,   
         items.itum,
			'#' flag, 
         0 ordernum,
         items.ittyp,
         purline.plrcio,
         purhead.phfileref,
         purhead.phfileline, 
         purline.plshipto,
         ( select linkitad.lkadref
			  from   linkitad
			  where linkitad.lkitem = purline.plitem  
             and linkitad.lkadcode = purhead.phsupp   
             and linkitad.lktyp = 'P'    
			) ,    
			cast(null as numeric(10,3)) as receiptqty,  
			cast(null as varchar(30))   as internlot,  
         cast(null as varchar(20))   as lotfss,  
			cast(null as datetime)      as itemdlc,  
			cast(null as varchar(8))    as defaultloc,  
			cast(null as numeric(3,0))  as nbetiq,   
         items.itlot,  
         items.itdefaultlot,
         items.ittyp,  
		isnull(items.itval,0) itval,   
         items.itstdpur,   
         items.itqc,   
         items.itloc,       
         cast(null as char(1)) as include,  
         cast(null as char(1)) as createlot,   
	    purline.plstdval ,
		purline.pluomconv,
		(select date(getdate()) from progparam where ppcode = 'CLOTURWIP' ) as clotdat,
		itpn
    FROM purhead,   
         purline,   
         adresses,   
         items   

   WHERE ( purline.plcode = purhead.phcode ) and  
         ( adresses.adcode = purhead.phsupp ) and  
         ( items.itcode = purline.plitem ) and  
         ( ( purline.plstatus < '6' ) ) and  
			( ( purhead.phstatus < '6' ) ) and
         purhead.phcode = :phcode

     
  
UNION  all 
  SELECT purghead.phcode,   
         purghead.phsupp,   
         adresses.adname,   
         purgline.plline,   
         chname,   
         substr(pldesc,1,30),   
     
```

## Colonnes
| Colonne |
|---------|
| phcode |
| purhead_phsupp |
| adresses_adname |
| plline |
| plitem |
| items_itname |
| purline_pldatsup |
| purline_plqtyreq |
| solde |
| items_itum |
| flag |
| ordernum |
| items_ittyp |
| purline_plrcio |
| purhead_phfileref |
| purhead_phfileline |
| purline_plshipto |
| linkitad_lkadref |
| creceiptqty |
| cinternlot |
| clotfss |
| citemdlc |
| cdefaultloc |
| cnbetiq |
| items_itlot |
| items_itdefaultlot |
| items_ittyp |
| items_itval |
| items_itstdpur |
| items_itqc |
| items_itloc |
| cinclude |
| ccreatelot |
| purline_plstdval |
| purline_pluomconv |
| clotdat |
| items_itpn |

