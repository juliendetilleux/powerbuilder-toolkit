# d_tracliaval_kit

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hscode,   
         transactions.trname,   
         histostock.hsordno,   
         sum(histostock.hsqty),   
         histostock.hsum,   
         transactions.triconnum,   
         histostock.hslot,   
         histostock.hsordtyp,   
         histostock.hsordlin,
		isnull( (select lostatus from lots where locode = histostock.hslot), '' ) as lostatus,  
		isnull( (SELECT stdesc FROM shiphead join shipto on shiphead.shshipto = shipto.stseq and shiphead.shcust = shipto.stcode where shiphead.shcode = histostock.hsord2no),'')  as ad_livraison,     /*PHBO0077*/    
		isnull((SELECT shiphead.shdate FROM shiphead join shipto on shiphead.shshipto = shipto.stseq and shiphead.shcust = shipto.stcode where shiphead.shcode = histostock.hsord2no),datetime('2099-12-31 23:59:59'))  as dt_livraison, /*PHBO0077*/
		isnull((SELECT shiphead.shcode FROM shiphead join shipto on shiphead.shshipto = shipto.stseq and shiphead.shcust = shipto.stcode where shiphead.shcode = histostock.hsord2no),'')  as nb_bond_livraison, /*PHBO0077*/
		isnull((SELECT linkmcad.lkmccode FROM linkmcad join shiphead on linkmcad.lkadcode = shiphead.shcust where shiphead.shcode = histostock.hsord2no),'##########') as mcdo, /*PHBO0077*/
		isnull((SELECT adresses.adname FROM adresses where adcode = mcdo),' ') as mcdo_name /*PHBO0077*/
   FROM histostock,   
         transactions  
   WHERE ( histostock.hscode = transactions.trcode ) and  
         ( histostock.hscode in ('DLMO','DLXO','DLST','RTXO')   Or
            ( histostock.hscode = 'RNAM' And histostock.hsqty < 0 ) ) AND  
         ( histostock.hsordno = :al_salhead ) AND
			( histostock.hsordlin = :al_salline ) AND
			( histostock.hsord2no = :al_shiphead )   
GROUP BY histostock.hscode,   
         histostock.hsordtyp,   
         histostock.hsordno,   
         histostock.hsordlin,   
         transactions.triconnum,   
         transactions.trname,   
         histostock.hsum,   
         histostock.hslot
```

## Colonnes
| Colonne |
|---------|
| histostock_hscode |
| transactions_trname |
| histostock_hsordno |
| totqty |
| histostock_hsum |
| transactions_triconnum |
| histostock_hslot |
| histostock_hsordtyp |
| histostock_hsordlin |
| lostatus |
| ad_livraison |
| dt_livraison |
| nb_bond_livraison |
| mcdo |
| mcdo_name |

