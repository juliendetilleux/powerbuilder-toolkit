# d_srvc_histotask_ent_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT srvcrqhead.srtype,   
         srvcrqhead.srentity,   
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
   WHERE ( srvcrqhead.srlot = :ras_secode ) AND
				( srvcrqhead.srstatus in (8,9) ) AND
				( srvcrqhead.srfamily = 0 )
ORDER BY srvcrqhead.srid ASC   

```

## Colonnes
| Colonne |
|---------|
| srtype |
| srentity |
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

