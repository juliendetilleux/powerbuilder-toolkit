# d_mfgordr_subc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items_a.itname itname_a,   
         mfghead.mhreqqty,   
         mfghead.mhmfgqty,   
         mfghead.mhmfgdat,   
         histostock.hsitem,   
         items_b.itname itname_b,   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsdatim,   
         histostock.hscode,   
         transactions.trname,   
         items_a.itum,   
         lots.lolotctrl,   
         purghead.phsupp,   
         mfghead.mhpghid ,
         ( Select itemlang.ildesc
             from itemlang
            Where itemlang.illgcode = 'NL' And
                  itemlang.ilitcode = mfghead.mhitem ) item_a_NL ,
         ( Select itemlang.ildesc
             from itemlang
            Where itemlang.illgcode = 'NL' And
                  itemlang.ilitcode = histostock.hsitem ) item_b_NL
    FROM histostock,   
         mfghead,   
         items items_a,   
         items items_b,   
         transactions,   
         lots,   
         purghead  
   WHERE ( transactions.trcode = histostock.hscode ) and  
         ( mfghead.mhcode = histostock.hsordno ) and  
         ( items_a.itcode = mfghead.mhitem ) and  
         ( items_b.itcode = histostock.hsitem ) and  
         ( histostock.hslot = lots.locode ) and  
         ( purghead.phcode = mfghead.mhpghid ) and  
         ( ( histostock.hsordtyp = 'M' ) AND  
         ( histostock.hscode IN ( 'DLMO' , 'RTMO') ) AND  
         ( histostock.hsordno = :Selected_order ) )   
ORDER BY mfghead.mhcode ASC,   
         histostock.hsdatim ASC   

```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhitem |
| items_itname_a |
| mfghead_mhreqqty |
| mfghead_mhmfgqty |
| mfghead_mhmfgdat |
| histostock_hsitem |
| items_itname_b |
| histostock_hslot |
| histostock_hsloc |
| histostock_hsqty |
| histostock_hsum |
| histostock_hsdatim |
| histostock_hscode |
| transactions_trname |
| items_itum |
| lots_lolotctrl |
| purghead_phsupp |
| mfghead_mhpghid |
| citem_a_nl |
| citem_b_nl |

