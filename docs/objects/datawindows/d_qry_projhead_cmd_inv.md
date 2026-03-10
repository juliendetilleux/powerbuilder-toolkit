# d_qry_projhead_cmd_inv

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
         SELECT projhead.phcode,   
                projhead.phadid,   
                projhead.phdatcrea,  
                projhead.phstatus,        
                salline.slcode,
                salline.slline,
                shdatcrea,
                0 as invnum,
                0 as invline,
                null as invdate,
                0 as invid ,
                null as invtyp				
		FROM projhead,   
               salline,
               salhead  
          WHERE projhead.phcode = :al_phcode AND
                       salline.sldvihead = projhead.phcode AND
                       salline.slcode = salhead.shcode  and 
                       not exists ( select first ilcode from invoiceline where ilsalorder = salline.slcode and ilsalline = salline.slline ) 

union all
					   
         SELECT projhead.phcode,   
                projhead.phadid,   
                projhead.phdatcrea,  
                projhead.phstatus,        
                salline.slcode,
                salline.slline,
                shdatcrea , 
                invoicehead.ihcodemc,
                invoiceline.illine, 
                invoicehead.ihdate,
                invoicehead.ihcode,
                invoicehead.ihtypinv 
 FROM projhead,   
               salline,
               salhead,
               invoiceline,
               invoicehead
 			   
          WHERE projhead.phcode = :al_phcode AND
                       salline.sldvihead = projhead.phcode AND
                       salline.slcode = salhead.shcode AND
                       invoiceline.ilsalorder = salline.slcode and
                       invoiceline.ilsalline = salline.slline and 
                       invoicehead.ihcode = invoiceline.ilcode
ORDER BY 5, 6 , 8, 9
			


     
```

## Colonnes
| Colonne |
|---------|
| projhead_phcode |
| projhead_phadid |
| projhead_phdatcrea |
| projhead_phstatus |
| salline_slcode |
| salline_slline |
| shdatcrea |
| invnum |
| invline |
| invdate |
| invid |
| invtyp |

