# d_srvc_task

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _services
- **Table principale**: 0

## SQL
```sql
  SELECT srvcrqhead.srtype,   
         srvcrqhead.srentity,   
         srvcrqhead.srstatus,   
         srvcrqhead.srname,   
         srvcrqhead.srcreatyp,   
         srvcrqhead.srprint,   
         srvcrqhead.srid,   
         srvcrqhead.srscid,   
         srvcrqhead.srrealdat,   
         srvcrqhead.srcreadat,   
         srvcrqhead.srreqdat,   
         srvcrqhead.srfamily,
		'' as articles_code,
		'' as articles_name  
    FROM srvcrqhead  
   WHERE (( srvcrqhead.srstatus = :as_Arg1 ) OR  
         ( srvcrqhead.srstatus = :as_Arg2 )) AND
		( srvcrqhead.srfamily = 0)
UNION ALL

  SELECT srvcrqhead.srtype,   
         srvcrqhead.srlot,   
         srvcrqhead.srstatus,   
         srvcrqhead.srname,   
         srvcrqhead.srcreatyp,   
         srvcrqhead.srprint,   
         srvcrqhead.srid,   
         srvcrqhead.srscid,   
         srvcrqhead.srrealdat,   
         srvcrqhead.srcreadat,   
         srvcrqhead.srreqdat,   
         srvcrqhead.srfamily,
		(Select lots.loitem from lots where lots.locode = srvcrqhead.srlot) as articles_code,
		(Select items.itname from items where items.itcode = articles_code)
    FROM srvcrqhead  
   WHERE (( srvcrqhead.srstatus = :as_Arg1 ) OR  
         ( srvcrqhead.srstatus = :as_Arg2 )) AND
		( srvcrqhead.srfamily = 1)

ORDER BY 7 ASC   

```

## Colonnes
| Colonne |
|---------|
| srtype |
| srentity |
| srstatus |
| srname |
| srcreatyp |
| srprint |
| srid |
| srscid |
| srrealdat |
| srcreadat |
| srreqdat |
| srfamily |
| articles_code |
| articles_name |

