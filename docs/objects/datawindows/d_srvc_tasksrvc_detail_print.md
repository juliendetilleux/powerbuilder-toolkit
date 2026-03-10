# d_srvc_tasksrvc_detail_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT 	srvcrqhead.srid,  
         srvcrqhead.srstatus,   
         srvcrqhead.srcreatyp,   
         srvcrqhead.srdesc,   
         srvcrqhead.srname, 
			srvcrqhead.srdesc,
			srvcrqhead.srcreadat,
			srvcrqhead.srcreausr,  
         srvccycle.scid,   
         srvccycle.scentity,   
         srvccycle.scname,   
         srvccycle.sctype,   
         srvccycle.sctypfreq,   
         srvccycle.scfreq,   
         srvccycle.scnextdat,
			srvccycle.scleadt,
			srvccycle.sclastldat,
			srvccycle.sclastrdat,
			srvccycle.scmoddat,
			srvccycle.scmodusr,
			(SELECT SUM(srvcrqmat.smcost) FROM srvcrqmat WHERE srvcrqmat.smid = :SelTask),
			(SELECT SUM(srvcrqlab.slcost) FROM srvcrqlab WHERE srvcrqlab.slid = :SelTask),
			(SELECT SUM(srvcrqoth.socost) FROM srvcrqoth WHERE srvcrqoth.soid = :SelTask)
           
    FROM {oj srvccycle  LEFT OUTER JOIN srvcrqhead  ON srvccycle.scid = srvcrqhead.srscid},   
   WHERE ( srvcrqhead.srid = :SelTask ) AND  
         ( srvccycle.scid = :SelSRVC ) 
```

## Colonnes
| Colonne |
|---------|
| srid |
| srstatus |
| srcreatyp |
| srdesc |
| srname |
| srdesc |
| srcreadat |
| srcreausr |
| scid |
| scentity |
| scname |
| sctype |
| sctypfreq |
| scfreq |
| scnextdat |
| scleadt |
| sclastldat |
| sclastrdat |
| scmoddat |
| scmodusr |
| compute_0021 |
| compute_0022 |
| compute_0023 |

