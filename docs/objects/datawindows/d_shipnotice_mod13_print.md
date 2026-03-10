# d_shipnotice_mod13_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT shiphead.shcode,   
         shiphead.shcust,   
         shiphead.shshipto,   
         shiphead.shdate,   
         shiphead.shprint,   
         shiphead.shcomment,   
         shiphead.shprseq,   
         shiphead.shpalnbr,   
         shiphead.shgroweight,   
         adresses.adcode,   
         adresses.adname,   
         adresses.adcust,   
         adresses.adsupp,   
         adresses.adactiv,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtva,   
         adresses.adreg,   
         adresses.adcustpay,   
         adresses.adsupppay,   
         adresses.adcustval,   
         adresses.adsuppval,   
         adresses.adcustord,   
         adresses.adsuppord,   
         adresses.adinvto,   
         adresses.adcmnt,   
         adresses.adcurr,   
         adresses.adshipdays,   
         adresses.adinvcopy,   
         adresses.adtvalvl,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail,   
         adresses.adlang,   
         adresses.adbank,   
         adresses.adidcptsupp,   
         adresses.adidcptcust,   
         adresses.adsoldesupp,   
         adresses.adsoldecust,   
         adresses.adimputsupp,   
         adresses.adimputcust,   
         adresses.admemo,   
         adresses.adrateid,   
         adresses.adtvatyp,   
         adresses.adcountrid,   
         adresses.adgrading,   
         adresses.adristcust,   
         adresses.adesctcust,   
         adresses.adfcst,   
         adresses.adgrsupp,   
         adresses.adgrcust,   
         adresses.addlvt,   
         adresses.adsalesauth,   
         adresses.admodif,   
         adresses.admoddat,   
         adresses.adneval,   
         adresses.adeancode,   
         adresses.adsalesman,   
         adresses.adcreadat,   
         adresses.adcreauser,
```

## Colonnes
| Colonne |
|---------|
| shiphead_shcode |
| shiphead_shcust |
| shiphead_shshipto |
| shiphead_shdate |
| shiphead_shprint |
| shiphead_shcomment |
| shiphead_shprseq |
| shiphead_shpalnbr |
| shiphead_shgroweight |
| adresses_adcode |
| adresses_adname |
| adresses_adcust |
| adresses_adsupp |
| adresses_adactiv |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adtva |
| adresses_adreg |
| adresses_adcustpay |
| adresses_adsupppay |
| adresses_adcustval |
| adresses_adsuppval |
| adresses_adcustord |
| adresses_adsuppord |
| adresses_adinvto |
| adresses_adcmnt |
| adresses_adcurr |
| adresses_adshipdays |
| adresses_adinvcopy |
| adresses_adtvalvl |
| adresses_adtel |
| adresses_adfax |
| adresses_admail |
| adresses_adlang |
| adresses_adbank |
| adresses_adidcptsupp |
| adresses_adidcptcust |
| adresses_adsoldesupp |
| adresses_adsoldecust |
| adresses_adimputsupp |
| adresses_adimputcust |
| adresses_admemo |
| adresses_adrateid |
| adresses_adtvatyp |
| adresses_adcountrid |
| adresses_adgrading |
| adresses_adristcust |
| adresses_adesctcust |
| adresses_adfcst |
| adresses_adgrsupp |
| adresses_adgrcust |
| adresses_addlvt |
| adresses_adsalesauth |
| adresses_admodif |
| adresses_admoddat |
| adresses_adneval |
| adresses_adeancode |
| adresses_adsalesman |
| adresses_adcreadat |
| adresses_adcreauser |
| adresses_admodifuser |
| adresses_adurl |
| adresses_adedil |
| adresses_adpaymode |
| adresses_adshipcopy |
| adresses_adordinfo |
| adresses_adetigro |
| adresses_adetipal |
| adresses_adtype |
| adresses_adcrmuf01 |
| adresses_adcrmuf02 |
| adresses_adcrmuf03 |
| adresses_adcrmuf04 |
| adresses_adcrmuf05 |
| adresses_adcrmuf06 |
| adresses_adcrmuf07 |
| adresses_adcrmuf08 |
| adresses_adcrmuf09 |
| adresses_adcrmuf00 |
| adresses_adactivite |
| adresses_adsource |
| adresses_adcreditctrl |
| adresses_adcreditval |
| adresses_adcrmuf10 |
| adresses_adcrmuf11 |
| adresses_adcrmuf12 |
| adresses_adcrmuf13 |
| adresses_adcrmuf14 |
| adresses_adcrmuf15 |
| adresses_adcrmuf16 |
| adresses_adcrmuf17 |
| adresses_adcrmuf18 |
| adresses_adcrmuf19 |
| adresses_adcrmuf20 |
| adresses_adcrmuf21 |
| adresses_adcrmuf22 |
| adresses_adcrmuf23 |
| adresses_adcrmuf24 |
| adresses_adcrmuf25 |
| adresses_adcrmuf26 |
| adresses_adcrmuf27 |
| adresses_adcrmuf28 |
| adresses_adcrmuf29 |
| adresses_adescdcust |
| adresses_adetiitem |
| adresses_adinvedi |
| adresses_adediseq |
| adresses_adcptsal |
| adresses_adcptpur |
| adresses_adinvm |
| adresses_adcustzone |
| adresses_adristrate |
| adresses_adpurchaser |
| adresses_adlegalform |
| adresses_adsupordinfo |
| shipto_stcode |
| shipto_stseq |
| shipto_stdesc |
| shipto_stactiv |
| shipto_stmain |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| shipto_stshipdays |
| shipto_stcmnt |
| shipto_sttel |
| shipto_stfax |
| shipto_stmail |
| shipto_stcontact |
| shipto_stcustomdoc |
| shipto_steancode |
| consignement |
| adresses_adautoitpack |
| adresses_adneval |
| csttype |
| cstshipadcode |
| cstshipseq |
| cshipdeliv |
| cmcdo |
| cintext |
| sale_cmnt |

