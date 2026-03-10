# d_com_salline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT 'C' as Origin ,   
         comsalline.cslcode,    
         comsalline.cslline,    
         comsalline.cslstatus,    
         comsalline.cslitem,     
         comsalline.cslqtyord,     
         comsalline.cslcustref,     
         comsalline.csldatreq,     
         comsalline.cslstdval,       
         comsalline.csldatcrea,      
         CAST( comsalline.cslshipto as char(20) ),    
         comsalline.cslcomidhead,     
         comsalline.cslcomidline  ,   
         comsalline.cslorval  ,   
         comsalline.cslorigin ,   
		 ( Select shipto.stdesc    
             From shipto    
            Where shipto.stcode = comsalhead.cshcust And    
                  shipto.stseq  = comsalline.cslshipto   ) shiptodesc ,   
         items.itname , 
         items.itum   , 
/*         '' as altmeasure ,*/   
         '' AS wslcomment ,  
         comsalline.csluomord  AS wsluomord ,  
         comsalline.csluomconv AS wsluomconv ,  
         0  AS wslsalval  , 
         comsalline.cslqtyreq,      
		0 as rist    ,
		isnull( items.itactiv, 'Y' ) as actif,
		isnull( items.itsale, 'Y' ) as sale

    FROM comsalline , comsalhead , items  
   WHERE comsalline.cslcomidhead = :sel_comorder   
     AND comsalline.cslsalesman = :sel_salesman   
	  AND	comsalline.cslstatus < '3'   
	  AND comsalline.cslcomidhead = comsalhead.cshcomid    
     AND comsalline.cslsalesman = comsalhead.cshsalesman     
     AND comsalline.cslitem = items.itcode 
/*     AND comsalline.cslorigin = :as_origin*/  


UNION

  SELECT 'W' ,    
			websalline.wslcode,     
         websalline.wslline,      
         websalline.wslstatus,     
         websalline.wslitem,     
         websalline.wslqtyord,      
         websalline.wslcustref,     
         websalline.wsldatreq,     
         websalline.wslstdval,      
         websalline.wsldatcrea,     
         CAST( websalline.wslshipto as char(20) ),    
         websalline.wslwebidhe
```

## Colonnes
| Colonne |
|---------|
| corigin |
| cslcode |
| cslline |
| cslstatus |
| cslitem |
| comsalline_cslqtyord |
| cslcustref |
| csldatreq |
| cslstdval |
| csldatcrea |
| cslshipto |
| cslcomidhead |
| cslcomidline |
| comsalline_cslorval |
| comsalline_cslorigin |
| cshiptodesc |
| items_itname |
| items_itum |
| wslcomment |
| wsluomord |
| wsluomconv |
| wslsalval |
| comsalline_cslqtyreq |
| rist |
| actif |
| sale |

