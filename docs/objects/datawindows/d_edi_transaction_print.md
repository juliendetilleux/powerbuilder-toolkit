# d_edi_transaction_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT  edisalhead.ehenvsend ,
          edisalhead.ehheadref ,
          edisalhead.ehenvid ,
          edisalhead.ehcustean ,
          edisalhead.ehcustid ,
          edisalhead.ehdocdate ,
          edisalhead.ehreqdate ,
          edisalhead.ehcurr ,
          edisalhead.ehstatus ,
          edisalhead.ehsalorder ,
          edisalhead.ehcmnt ,
          ( select adresses.adname from adresses where adresses.adcode = edisalhead.ehcustid) adname,
		edisalhead.ehenvrec,
		edisalhead.ehprinted,
         ( Select items.itname 
             From items 
            Where items.itcode = edisalline.esitemid) itname,
         ( Select shipto.stdesc 
             From shipto 
            Where shipto.stcode = edisalhead.ehcustid And 
                  shipto.stseq  = edisalline.esshiptoseq   ) shiptodesc,
		edisalline.esline,   
         edisalline.esitemean,   
         edisalline.escuitemean,
         edisalline.esitemid,  
         edisalline.escustdesc, 
         edisalline.esqty,   
         edisalline.esreqdate,   
         edisalline.esshiptoean,
         edisalline.esshiptoseq,   
         edisalline.escmnt,
		edisalline.esqtyorig 
     FROM edisalhead, edisalline
    Where edisalhead.ehenvsend = :as_ehenvsend AND
		  edisalhead.ehheadref = :as_ehheadref AND
		  edisalhead.ehenvrec = :as_ehenvrec AND
		  edisalhead.ehsalorder = :al_ehsalorder AND
		  edisalhead.ehenvsend = edisalline.esenvsend AND
		  edisalhead.ehheadref = edisalline.esheadref AND
		  edisalhead.ehenvrec = edisalline.esenvrec 



```

## Colonnes
| Colonne |
|---------|
| ehenvsend |
| ehheadref |
| ehenvid |
| ehcustean |
| ehcustid |
| ehdocdate |
| ehreqdate |
| ehcurr |
| ehstatus |
| ehsalorder |
| ehcmnt |
| adresses_adname |
| ehenvrec |
| ehprinted |
| itname |
| shiptodesc |
| edisalline_esline |
| edisalline_esitemean |
| edisalline_escuitemean |
| edisalline_esitemid |
| edisalline_escustdesc |
| edisalline_esqty |
| edisalline_esreqdate |
| edisalline_esshiptoean |
| edisalline_esshiptoseq |
| edisalline_escmnt |
| edisalline_esqtyorig |

