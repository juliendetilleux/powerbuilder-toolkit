# d_purinvhead_cpt

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purinvhead.picode,   
         purinvhead.pidate,   
         adresses.adname,   
         purinvhead.pisupref,   
         purinvhead.pitypinv,   
         purinvhead.picurr,   
         purinvhead.pisup,   
         purinvhead.pityptva,   
         purinvhead.picptper,   
         adresses.adtva,   
         purinvhead.pirist,   
         purinvhead.piesct,   
         purinvhead.pimccode,   
         purinvhead.picodemc,
			( Select progparam.ppvalue
				 From progparam
				Where progparam.ppcode = 'MULTICO' ) As MulticoType ,  /*HA2176*/
			( Select linkmcad2.lkidcptsupp
				 From linkmcad2
				Where linkmcad2.lkadcode = purinvhead.pisup	And
						linkmcad2.lkmccode = purinvhead.pimccode			) As IdCptCustLk,  /*HA2176*/
			( If IsNull( MulticoType, '') = '1' Then IdCptCustLk Else adresses.adidcptsupp EndIf) As adidcptsupp,  /*HA2176*/ /*HA2181*/
		purinvhead.piexpiry,
		purinvhead.pitotval,
		purinvhead.pitvaval,
       	purinvhead.picurconv,
		purinvhead.piblockedpay,
		purinvhead.picomm,
		purinvhead.pipathfilepdf      
    FROM purinvhead,   
         adresses  
   WHERE purinvhead.pisup = adresses.adcode and  
         purinvhead.pistatus >= :Min_status AND  
         purinvhead.pistatus <= :Max_status AND
		purinvhead.pimccode = :as_McCoCode 
ORDER BY purinvhead.picode DESC   

```

## Colonnes
| Colonne |
|---------|
| picode |
| pidate |
| adresses_adname |
| purinvhead_pisupref |
| purinvhead_pitypinv |
| purinvhead_picurr |
| purinvhead_pisup |
| purinvhead_pityptva |
| purinvhead_picptper |
| adresses_adtva |
| purinvhead_pirist |
| purinvhead_piesct |
| pimccode |
| picodemc |
| multicotype |
| idcptcustlk |
| adresses_adidcptsupp |
| purinvhead_piexpiry |
| purinvhead_pitotval |
| purinvhead_pitvaval |
| purinvhead_picurconv |
| purinvhead_piblockedpay |
| purinvhead_picomm |
| purinvhead_pipathfilepdf |

