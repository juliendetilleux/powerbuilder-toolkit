# d_purinvhead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purinvhead.picode,   
         purinvhead.pisup,   
         purinvhead.pidate,   
         purinvhead.picurr,   
         purinvhead.pitvaref,   
         purinvhead.pistatus,   
         purinvhead.pisupref,   
         purinvhead.pipurval,   
         purinvhead.pitvaval,   
         purinvhead.pitotval,   
         purinvhead.picomment,   
         purinvhead.pitypinv,   
         purinvhead.piexpiry,   
         purinvhead.picptper,   
         purinvhead.pityptva,   
         purinvhead.picurconv,   
         purinvhead.picptexer,   
         purinvhead.pilastlin,   
         purinvhead.pirist,   
         purinvhead.piesct,   
         purinvhead.pifacnot,   
         purinvhead.pipaym,   
         purinvhead.pipaymdat,   
         purinvhead.pifileref,   
         purinvhead.pifileline,   
         purinvhead.picomm  ,
			'Y' As StrucComm   ,
			purinvhead.picreadate,
			purinvhead.picreauser,
			purinvhead.pimoddate,
			purinvhead.pimoduser , 
			purinvhead.piorderrist,
			purinvhead.piblockedpay,
			isnull(purinvhead.pimccode, '##########') as pimccode,
			purinvhead.picodemc ,
			purinvhead.picountryid,
			isnull((select ppvalue from progparam where ppcode = 'NUMINNC'),'') as NUMINNC 
    FROM purinvhead  
   WHERE ( purinvhead.picode = :selected_picode )    

```

## Colonnes
| Colonne |
|---------|
| picode |
| pisup |
| pidate |
| picurr |
| pitvaref |
| pistatus |
| pisupref |
| pipurval |
| pitvaval |
| pitotval |
| picomment |
| pitypinv |
| piexpiry |
| picptper |
| pityptva |
| picurconv |
| picptexer |
| pilastlin |
| pirist |
| piesct |
| pifacnot |
| pipaym |
| pipaymdat |
| pifileref |
| pifileline |
| picomm |
| struccomm |
| picreadate |
| picreauser |
| pimoddate |
| pimoduser |
| piorderrist |
| piblockedpay |
| pimccode |
| picodemc |
| picountryid |
| numinnc |

