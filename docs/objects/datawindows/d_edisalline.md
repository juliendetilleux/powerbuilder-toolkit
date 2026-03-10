# d_edisalline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT edisalline.esenvsend, 
         edisalline.esheadref,
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
         edisalhead.ehcustid,
         ( Select items.itname 
             From items 
            Where items.itcode = edisalline.esitemid) itname,
         ( Select items.itactiv 
             From items 
            Where items.itcode = edisalline.esitemid) itactiv,
         ( Select shipto.stdesc 
             From shipto 
            Where shipto.stcode = edisalhead.ehcustid And 
                  shipto.stseq  = edisalline.esshiptoseq   ) shiptodesc,
         ( Select shipto.stactiv 
             From shipto 
            Where shipto.stcode = edisalhead.ehcustid And 
                  shipto.stseq  = edisalline.esshiptoseq   ) shiptoactiv,
			edisalline.esqtyorig ,
		 ( Select shipto.stshipcmnt
             From shipto 
            Where shipto.stcode = edisalhead.ehcustid And 
                  shipto.stseq  = edisalline.esshiptoseq   ) stshipcmnt
    FROM edisalline,
         edisalhead,  
   WHERE ( edisalline.esenvsend = :ras_EnvSend ) AND  
         ( edisalline.esheadref = :ras_HeadRef ) And
         ( edisalline.esenvsend = edisalhead.ehenvsend ) And
         ( edisalline.esheadref = edisalhead.ehheadref ) and
         	edisalhead.ehenvrec = :as_ehenvrec  And
		edisalline.esenvrec = edisalhead.ehenvrec And
		isnull(edisalhead.ehsalorder,0) = :al_salorder

```

## Colonnes
| Colonne |
|---------|
| esenvsend |
| esheadref |
| esline |
| esitemean |
| escuitemean |
| edisalline_esitemid |
| escustdesc |
| esqty |
| esreqdate |
| esshiptoean |
| edisalline_esshiptoseq |
| escmnt |
| edisalhead_ehcustid |
| itname |
| citactiv |
| cshiptodesc |
| cshiptoactiv |
| edisalline_esqtyorig |
| stshipcmnt |

