# d_mfgordr_produced

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhitem,   
         items.itname,   
         mfghead.mhreqqty,   
         mfghead.mhreqdat,   
         mfghead.mhmfgqty,   
         mfghead.mhlotmfg,   
         items.itum,   
         items.itdefaultlot,   
         mfghead.mhcmntrel,   
         mfghead.mhtype,   
         mfghead.mhqcip,   
         mfghead.mhexpdat,   
         mfghead.mhlotprt,   
         mfghead.mhmfgqtyqty,
		IF ITUMTRF = '2' and isumtarif = 'Y' THEN
			items.itumtarifconv
		ELSE
			1
		ENDIF as umtarifconv,
		isnull( items.itumtarif, 'KG' ) as umtarif,
		isnull( items.itisumtarif, 'N' ) as isumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
		if ITUMTRF = '2' and isumtarif = 'Y' then
			(select sum( histostock.hsqtytarif ) 
			  from histostock 
			where histostock.hscode = 'RCMO' and 
				histostock.hsordlin = 0 AND
				histostock.hsitem = items.itcode AND
				histostock.hsordno = mfghead.mhcode )
		else
			0
		endif as mhmfgqty_trf  
    FROM mfghead,   
         items  
   WHERE ( items.itcode = mfghead.mhitem ) and  
         ( ( mfghead.mhcode = :Selected_of ) )    

```

## Colonnes
| Colonne |
|---------|
| mfghead_mhitem |
| items_itname |
| mfghead_mhreqqty |
| mfghead_mhreqdat |
| mfghead_mhmfgqty |
| mfghead_mhlotmfg |
| items_itum |
| items_itdefaultlot |
| mfghead_mhcmntrel |
| mfghead_mhtype |
| mfghead_mhqcip |
| mfghead_mhexpdat |
| mfghead_mhlotprt |
| mfghead_mhmfgqtyqty |
| umtarifconv |
| umtarif |
| isumtarif |
| itumtrf |
| mhmfgqty_trf |

