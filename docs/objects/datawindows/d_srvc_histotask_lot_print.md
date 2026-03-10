# d_srvc_histotask_lot_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT srvcrqhead.srtype,   
         srvcrqhead.srlot,   
         srvcrqhead.srname,   
         srvcrqhead.srcreatyp,   
         srvcrqhead.srprint,   
         srvcrqhead.srrealdat,   
         srvcrqhead.srid,   
         srvcrqhead.srmatcost,   
         srvcrqhead.srlabcost,   
         srvcrqhead.srothcost,   
         srvcrqhead.srstatus,   
         srvcrqhead.srreqdat,   
         srvcrqhead.srdesc,   
         srvcrqhead.srcmnt  
    FROM srvcrqhead
   WHERE ( srvcrqhead.srlot = :ras_locode ) AND
				( srvcrqhead.srstatus in (8,9) ) AND
				( srvcrqhead.srfamily = 1 )
ORDER BY srvcrqhead.srid ASC   

```

## Colonnes
| Colonne |
|---------|
| srtype |
| srvcrqhead_srlot |
| srname |
| srcreatyp |
| srprint |
| srrealdat |
| srid |
| srmatcost |
| srlabcost |
| srothcost |
| srstatus |
| srreqdat |
| srdesc |
| srcmnt |

