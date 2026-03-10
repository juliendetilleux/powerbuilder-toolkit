# d_dvi_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT projhead.phcode,
			projhead.phprinted,   
         projhead.phstatus,   
         projhead.phdesc,     
         projhead.phdesc2,   
         projhead.phadid,   
         adresses.adname,   
         projhead.phdatreq,
         projhead.phexpdate,     
         projhead.phuplab,   
         projhead.phupmat,   
         projhead.phupoth,   
         projhead.phupglob,   
         projhead.phtype,   
         projhead.phrate,   
         projhead.phcurr,   
         projhead.phrist, 
         projhead.phadcontact,   
         projhead.phstid,   
         projhead.phexpdate,    
			projhead.phdatcrea, 
			projhead.phfilehead, 
			projhead.phfileline, 
         ( Select contacts.ctname + ' ' + contacts.ctfirstname 
             From contacts
            Where contacts.ctadcode = projhead.phadid      And
                  contacts.ctline   = projhead.phadcontact     ) ContactDesc,      
         ( Select shipto.stdesc 
             From shipto
            Where shipto.stcode = projhead.phadid And
                  shipto.stseq  = projhead.phstid     ) ShiptoDesc ,
			( Select ratehead.rhdesc
			    From ratehead
            Where ratehead.rhcode = projhead.phrate ) RateDesc , 
			projhead.phcustref,
		   projhead.phdlvt,
			projhead.phdlvtplace,
			projhead.phcustpay,
			projhead.phdocid,   
         projhead.phactiv,
			projhead.phsalesman,
			( Select salesman.smname
				 From	salesman
            Where salesman.smcode = projhead.phsalesman ) As SalesmanName,
			projhead.phfam1,
			( Select choiceline.clname
				 From choiceline
				Where choiceline.clcode = 'PGR1' 			And
						choiceline.clline = projhead.phfam1		 ) As Famille_1,
			projhead.phfam2,   
			( Select choiceline.clname
				 From choiceline
				Where choiceline.clcode = 'PGR2' 			And
						choiceline.clline = projhead.phfam1		 ) As Famille_2  , 

IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2340*/

```

## Colonnes
| Colonne |
|---------|
| projhead_phcode |
| projhead_phprinted |
| projhead_phstatus |
| projhead_phdesc |
| projhead_phdesc2 |
| projhead_phadid |
| adresses_adname |
| projhead_phdatreq |
| projhead_phexpdate |
| projhead_phuplab |
| projhead_phupmat |
| projhead_phupoth |
| projhead_phupglob |
| projhead_phtype |
| projhead_phrate |
| projhead_phcurr |
| projhead_phrist |
| projhead_phadcontact |
| projhead_phstid |
| projhead_phexpdate |
| projhead_phdatcrea |
| projhead_phfilehead |
| projhead_phfileline |
| contactdesc |
| shiptodesc |
| ratedesc |
| projhead_phcustref |
| projhead_phdlvt |
| projhead_phdlvtplace |
| projhead_phcustpay |
| projhead_phdocid |
| projhead_phactiv |
| projhead_phsalesman |
| salesmanname |
| projhead_phfam1 |
| famille_1 |
| projhead_phfam2 |
| famille_2 |
| cmcdo |

