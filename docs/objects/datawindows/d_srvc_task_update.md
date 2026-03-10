# d_srvc_task_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _services
- **Table principale**: 0

## SQL
```sql
  SELECT srvcrqhead.srid,   
         srvcrqhead.srtype,   
         srvcrqhead.srentity,   
         srvcrqhead.srstatus,   
         srvcrqhead.srname,   
         srvcrqhead.srdesc,   
         srvcrqhead.srcreatyp,   
         srvcrqhead.srcreadat,   
         srvcrqhead.srprint,   
         srvcrqhead.srcreausr,   
         srvcrqhead.srreqdat,   
         srvcrqhead.srrealdat,   
         srvcrqhead.srcmnt,   
         srvcrqhead.srmatcost,   
         srvcrqhead.srlabcost,   
         srvcrqhead.srothcost,   
         srvcrqhead.srfamily,   
         srvcrqhead.srlot,
		'' as articles
    FROM srvcrqhead  
   WHERE srvcrqhead.srid = :ai_NumTask    

```

## Colonnes
| Colonne |
|---------|
| srid |
| srtype |
| srentity |
| srstatus |
| srname |
| srdesc |
| srcreatyp |
| srcreadat |
| srprint |
| srcreausr |
| srreqdat |
| srrealdat |
| srcmnt |
| srmatcost |
| srlabcost |
| srothcost |
| srfamily |
| srlot |
| articles |

