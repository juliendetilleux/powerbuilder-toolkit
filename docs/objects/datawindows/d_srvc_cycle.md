# d_srvc_cycle

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _services
- **Table principale**: 0

## SQL
```sql
  SELECT srvccycle.scid,   
         srvccycle.scentity,   
         srvccycle.scname,   
         srvccycle.sctype,   
         srvccycle.sctypfreq,   
         srvccycle.scfreq,   
         srvccycle.scmethod,   
         srvccycle.sclastldat,   
         srvccycle.sclastrdat,   
         srvccycle.scnextdat,   
         srvccycle.sclastsrid,   
         srvccycle.scsrid,   
         srvccycle.scflagsr,   
         srvccycle.scactiv,   
         srvccycle.scfamily,
		'' as articles_code,
		'' as articles_name  
    FROM srvccycle  
	WHERE srvccycle.scfamily = 0

UNION ALL

  SELECT srvccycle.scid,   
         srvccycle.sclot,   
         srvccycle.scname,   
         srvccycle.sctype,   
         srvccycle.sctypfreq,   
         srvccycle.scfreq,   
         srvccycle.scmethod,   
         srvccycle.sclastldat,   
         srvccycle.sclastrdat,   
         srvccycle.scnextdat,   
         srvccycle.sclastsrid,   
         srvccycle.scsrid,   
         srvccycle.scflagsr,   
         srvccycle.scactiv,   
         srvccycle.scfamily,
		(Select lots.loitem from lots where lots.locode = srvccycle.sclot) as articles_code,
		(Select items.itname from items where items.itcode = articles_code)
    FROM srvccycle  
	WHERE srvccycle.scfamily = 1 AND
				(Select itstock from items where items.itcode = (Select lots.loitem from lots where lots.locode = srvccycle.sclot)) > 0



ORDER BY 1 ASC   

```

## Colonnes
| Colonne |
|---------|
| scid |
| scentity |
| scname |
| sctype |
| sctypfreq |
| scfreq |
| scmethod |
| sclastldat |
| sclastrdat |
| scnextdat |
| sclastsrid |
| scsrid |
| scflagsr |
| scactiv |
| scfamily |
| articles_code |
| articles_name |

