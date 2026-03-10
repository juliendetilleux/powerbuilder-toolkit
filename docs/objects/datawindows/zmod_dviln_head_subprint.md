# zmod_dviln_head_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  Select projhead.phadid                                          As AdId       ,   
         projhead.phstid                                          As ShiptoSeq  ,     
         projhead.phdatreq                                        As ReqDate    ,     
         projhead.phcurr                                          As Curr       ,     
         projhead.phrate                                          As Rate       ,   
         projhead.phrist                                          As Rist       ,     
         projhead.phadcontact                                     As ContactSeq ,     
         projhead.phexpdate                                       As ExpDate    ,  
         projhead.phstatus                                        As Status     , 
			projhead.phdesc2														As Cmnt		  ,
         adresses.adname                                          As AdName     ,    
         ( Select shipto.stdesc
             From shipto
            Where shipto.stcode     = AdId       And
                  shipto.stseq      = ShiptoSeq      )            As ShiptoDesc ,   
         ( Select shipto.stadr1
             From shipto
            Where shipto.stcode     = AdId       And
                  shipto.stseq      = ShiptoSeq      )            As ShiptoAdr1 ,   
         ( Select shipto.stadr2
             From shipto
            Where shipto.stcode     = AdId       And
                  shipto.stseq      = ShiptoSeq      )            As ShiptoAdr2 ,   
         ( Select shipto.stzip
             From shipto
            Where shipto.stcode     = AdId       And
                  shipto.stseq      = ShiptoSeq      )            As ShiptoZip  ,   
         ( Select shipto.stloc
             From shipto
            Where shipto.stcode     = AdId       And
                  shipto.stseq      = ShiptoSeq      )            As ShiptoLoc  ,   
         ( Select shipto.stcountr
             From shipto
            Where shipto.stcode
```

## Colonnes
| Colonne |
|---------|
| projhead_adid |
| projhead_shiptoseq |
| projhead_reqdate |
| projhead_curr |
| projhead_rate |
| projhead_rist |
| projhead_contactseq |
| projhead_expdate |
| projhead_status |
| projhead_cmnt |
| adresses_adname |
| cshiptodesc |
| cshiptoadr1 |
| cshiptoadr2 |
| cshiptozip |
| cshiptoloc |
| cshiptoctry |
| ccntctname |
| ccntct1name |
| ccntcttel |
| ccntctmail |

