# d_qry_dvi

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
         SELECT projhead.phcode,   
                projhead.phadid,   
                adresses.adname,   
                projhead.phdatcrea,    
                choices.chname,      
                projvrsn.pvdesc,   
                projvrsn.pvitem,
                projvrsn.pvsalval,  
                projhead.phcurr,   
                projvrsn.pvcode,   
                adresses.adactiv,   
                adresses.adgrcust,
                items.itactiv,   
                items.itstat1,   
                items.itstat2,   
                projhead.phdocid, 
                projhead.phstatus,   
                projvrsn.pvstatus,
			   projvrsn.pvqty

           FROM projhead,   
                adresses,  
                choices,   
                projvrsn,   
                items      
   
          WHERE projhead.phadid = adresses.adcode    
            AND projvrsn.pvitem = items.itcode  
            AND projhead.phstatus = choices.chcode   
            AND choices.chtype='PHST'   
            AND projhead.phactiv like '[^N]'   
            AND projvrsn.pvphid = projhead.phcode 
            AND projvrsn.pvtyp <> 'M'
            AND projhead.phstatus between :Start_Status and :Stop_Status  
            AND projhead.phdatcrea between :Start_Date and :Stop_Date  

UNION

         SELECT projhead.phcode,   
                projhead.phadid,   
                adresses.adname,   
                projhead.phdatcrea,    
                choices.chname,      
                projvrsn.pvdesc,   
                projvrsn.pvitem,
                projvrsn.pvsalval,  
                projhead.phcurr,   
                projvrsn.pvcode,   
                adresses.adactiv,   
                adresses.adgrcust,
                null,   
                null,   
                null,   
                projhead.phdocid, 
                projhead.phstatus,   
                projvrsn.pvstatus,
			   projvrsn.pvqty 
```

## Colonnes
| Colonne |
|---------|
| projhead_phcode |
| projhead_phadid |
| adresses_adname |
| projhead_phdatcrea |
| cchname |
| cpvdesc |
| projvrsn_pvitem |
| cpvsalval |
| projvrsn_phcurr |
| projvrsn_pvcode |
| adresses_adactiv |
| adresses_adgrcust |
| items_itactiv |
| items_itstat1 |
| items_itstat2 |
| projhead_phdocid |
| projhead_phstatus |
| projvrsn_pvstatus |
| projvrsn_pvqty |

