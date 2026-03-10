# ds_adressetva_word

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail,   
         adresses.adurl,   
         adresses.adbank,   
         adresses.adtva,   
         adresses.adreg,   
         if isnull(adresses.addesc2,'') = '' then
			 adresses.adname
		else
			adresses.addesc2
		endif as adname,     
         adresses.adcode,   
         adresses.adcust,   
         adresses.adsupp,   
         adresses.adactiv,   
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
         adresses.adlang,   
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
         adresses.admodifuser,   
         adresses.adedil,   
         adresses.adpaymode,   
         adresses.adshipcopy,   
         adresses.ador
```

## Colonnes
| Colonne |
|---------|
| adadr1 |
| adadr2 |
| adzip |
| adloc |
| adcountr |
| adtel |
| adfax |
| admail |
| adurl |
| adbank |
| adtva |
| adreg |
| adname |
| adcode |
| adcust |
| adsupp |
| adactiv |
| adcustpay |
| adsupppay |
| adcustval |
| adsuppval |
| adcustord |
| adsuppord |
| adinvto |
| adcmnt |
| adcurr |
| adshipdays |
| adinvcopy |
| adtvalvl |
| adlang |
| adidcptsupp |
| adidcptcust |
| adsoldesupp |
| adsoldecust |
| adimputsupp |
| adimputcust |
| admemo |
| adrateid |
| adtvatyp |
| adcountrid |
| adgrading |
| adristcust |
| adesctcust |
| adfcst |
| adgrsupp |
| adgrcust |
| addlvt |
| adsalesauth |
| admodif |
| admoddat |
| adneval |
| adeancode |
| adsalesman |
| adcreadat |
| adcreauser |
| admodifuser |
| adedil |
| adpaymode |
| adshipcopy |
| adordinfo |
| adetigro |
| adetipal |
| adtype |
| adcrmuf01 |
| adcrmuf02 |
| adcrmuf03 |
| adcrmuf04 |
| adcrmuf05 |
| adcrmuf06 |
| adcrmuf07 |
| adcrmuf08 |
| adcrmuf09 |
| adcrmuf00 |
| adactivite |
| adsource |
| adcreditctrl |
| adcreditval |
| adcrmuf10 |
| adcrmuf11 |
| adcrmuf12 |
| adcrmuf13 |
| adcrmuf14 |
| adcrmuf15 |
| adcrmuf16 |
| adcrmuf17 |
| adcrmuf18 |
| adcrmuf19 |
| adcrmuf20 |
| adcrmuf21 |
| adcrmuf22 |
| adcrmuf23 |
| adcrmuf24 |
| adcrmuf25 |
| adcrmuf26 |
| adcrmuf27 |
| adcrmuf28 |
| adcrmuf29 |
| adescdcust |
| adetiitem |
| adinvedi |
| adediseq |
| adcptsal |
| adcptpur |
| adinvm |
| adcustzone |
| adristrate |
| adpurchaser |

