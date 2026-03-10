# d_dvi_garage_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT '                ',   
         '                         ',   
         '                         ',   
         projhead.phcode,   
         projhead.phstatus,   
         projhead.phactiv,   
         projhead.phdesc,   
         projhead.phdesc2,   
         projhead.phadid,   
         projhead.phstid,   
         projhead.phdatcrea,   
         projhead.phdatreq,   
         projhead.phreqtyp,   
         projhead.phmastr,   
         projhead.phuplab,   
         projhead.phupmat,   
         projhead.phupoth,   
         projhead.phupglob,   
         projhead.phinvacc,   
         projhead.phstep,   
          '                                                           ' as chassis,   
         projhead.phtype,   
         projhead.phcurr,   
         projhead.phrate,   
         projhead.phrist,   
         projhead.phexpdate,   
         projhead.phadcontact,   
         projhead.phcustref,   
         projhead.phdlvt,   
         projhead.phdlvtplace,   
         projhead.phcustpay,   
         projhead.phlang,   
         projhead.phsuccessper,   
         projhead.phfrcstdate,   
         projhead.phfam1,   
         projhead.phfam2,   
         projhead.phsalesman,   
         projhead.phofferact,   
         projhead.phflwofferact,
			isnull(projhead.phmccode, '##########') as phmccode
    FROM projhead  
   WHERE projhead.phcode = :ahead    

```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| compute_0002 |
| compute_0003 |
| phcode |
| phstatus |
| phactiv |
| phdesc |
| phdesc2 |
| phadid |
| phstid |
| phdatcrea |
| phdatreq |
| phreqtyp |
| phmastr |
| phuplab |
| phupmat |
| phupoth |
| phupglob |
| phinvacc |
| phstep |
| chassis |
| phtype |
| phcurr |
| phrate |
| phrist |
| phexpdate |
| phadcontact |
| phcustref |
| phdlvt |
| phdlvtplace |
| phcustpay |
| phlang |
| phsuccessper |
| phfrcstdate |
| phfam1 |
| phfam2 |
| phsalesman |
| phofferact |
| phflwofferact |
| phmccode |

