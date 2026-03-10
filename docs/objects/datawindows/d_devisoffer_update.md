# d_devisoffer_update

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
          '',   
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
			(SELECT adresses.adgrcust from adresses where adresses.adcode = projhead.phadid) as adgrcust ,
			cast(null as numeric(5,2)) as ristline,
			projhead.phsuccessper,
			projhead.phfrcstdate,
			projhead.phfam1,
			projhead.phfam2,
			projhead.phofferact,
			projhead.phflwofferact,
			projhead.phsalesman,
			isnull(projhead.phmccode, '##########') as phmccode,
			IsNull(projhead.phdirectsal , 'N') As phdirectsal,
			projhead.phturnid,
			projhead.phcreauser /*HA2468*/
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
| compute_0021 |
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
| adgrcust |
| ristline |
| phsuccessper |
| phfrcstdate |
| phfam1 |
| phfam2 |
| phofferact |
| phflwofferact |
| phsalesman |
| phmccode |
| phdirectsal |
| phturnid |
| phcreauser |

