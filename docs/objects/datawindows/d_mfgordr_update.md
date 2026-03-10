# d_mfgordr_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhstatus,   
         mfghead.mhitem,   
         mfghead.mhreldat,   
         mfghead.mhmfgdat,   
         mfghead.mhmfgqty,   
         mfghead.mhitemseq,   
         mfghead.mhcmntrel,   
         mfghead.mhtype,   
         mfghead.mhprint,   
         mfghead.mhlotmfg,   
         mfghead.mhmalloc,   
         mfghead.mhmreal,   
         mfghead.mhlalloc,   
         mfghead.mhlreal,   
         mfghead.mhreqdat,   
         mfghead.mhsubc,   
         mfghead.mhpghid,   
         mfghead.mhpgline,   
         mfghead.mhbomtyp,   
         mfghead.mhsalhead,   
         mfghead.mhsalline,   
         mfghead.mhexpdat,   
         mfghead.mhlotprt,   
         mfghead.mhrelqty,   
         mfghead.mhreqqty,   
         mfghead.mhfileref,   
         mfghead.mhfileline,
			mfghead.mhdecla,
			isnull((select progparam.ppvalue
						 from progparam
						where progparam.ppcode = 'MFGDECLAR'), 'N') as MFGDECLAR,
			mfghead.mhcustof,
			mfghead.mhmcdomaker,
			mfghead.mhrefint,
			mfghead.mhdlcmp,
			mfghead.mhfabdvrg /*HA2350*/ 
    FROM mfghead  
   WHERE mfghead.mhcode = :Selected_order    

```

## Colonnes
| Colonne |
|---------|
| mhcode |
| mhstatus |
| mhitem |
| mhreldat |
| mhmfgdat |
| mhmfgqty |
| mhitemseq |
| mhcmntrel |
| mhtype |
| mhprint |
| mhlotmfg |
| mhmalloc |
| mhmreal |
| mhlalloc |
| mhlreal |
| mhreqdat |
| mhsubc |
| mhpghid |
| mhpgline |
| mhbomtyp |
| mhsalhead |
| mhsalline |
| mhexpdat |
| mhlotprt |
| mhrelqty |
| mhreqqty |
| mhfileref |
| mhfileline |
| mhdecla |
| mfgdeclar |
| mhcustof |
| mhmcdomaker |
| mhrefint |
| mhdlcmp |
| mhfabdvrg |

