# d_transact_rcpo_2d

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  Select histostock.hsitem,   
         ( Select items.itname 
				 From items 
				Where items.itcode = histostock.hsitem ) As itname, 
         histostock.hslot,   
         histostock.hsqty,   
         histostock.hsloc,   
         histostock.hsval,   
         histostock.hsdatim , 
         histostock.hsseq,
         histostock.hsordno,
         histostock.hsordlin,
			purhead.phcode,
			purline.plline  
    From histostock, 
			purhead,
			purline
   Where ( histostock.hscode   = 'RCPO'         ) And 
         ( histostock.hsdatim >= :datestart     ) And 
         ( histostock.hsdatim <= :dateend       ) And
			( histostock.hsordno  = purhead.phcode ) And
			( histostock.hsordlin = purline.plline ) And
			( purhead.phcode		 = purline.plcode ) And
         ( purhead.phsupp      = :supplier      )    

Union All

  Select histostock.hsitem,   
         ( Select items.itname 
				 From items 
				Where items.itcode = histostock.hsitem ) As itname, 
         histostock.hslot,   
         histostock.hsqty,   
         histostock.hsloc,   
         histostock.hsval,   
         histostock.hsdatim , 
         histostock.hsseq,
         histostock.hsordno,
         histostock.hsordlin,
			purghead.phcode,
			purgline.plline 
    From histostock ,   
         mfghead,
			purghead, 
			purgline 
   Where ( histostock.hscode   = 'RCMO'          ) And 
			( histostock.hsordtyp = 'M'             ) And 
         ( histostock.hsdatim >= :datestart      ) And 
         ( histostock.hsdatim <= :dateend        ) And
			( histostock.hsordno  = mfghead.mhcode  ) And
			( mfghead.mhsubc      = 'Y'             ) And
			( mfghead.mhpghid     = purghead.phcode ) And
			( purghead.phcode		 = purgline.plcode ) And
         ( purghead.phsupp     = :supplier       )
    
ORDER BY 7, 1, 4
```

## Colonnes
| Colonne |
|---------|
| histostock_hsitem |
| citname |
| histostock_hslot |
| histostock_hsqty |
| histostock_hsloc |
| histostock_hsval |
| histostock_hsdatim |
| histostock_hsseq |
| histostock_hsordno |
| histostock_hsordlin |
| purhead_phcode |
| purline_plline |

