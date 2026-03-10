# d_monitoring_etiq_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT mtcode,
			mtgroupcode,
			mtstatus,
			mttyp,
			mtlocal,
			mtequipmnt,
			mtsamplepoint,
			mtopprod,
			mttemp,
			mtwarninglimit, 
			mtactionlimit, 
			mtlot,
			mtcmnt  
    FROM monittest
   WHERE mtcode > :al_mtcode AND
		mtcode <= :al_mtcode + :al_count
ORDER BY mtcode   

```

## Colonnes
| Colonne |
|---------|
| mtcode |
| mtgroupcode |
| mtstatus |
| mttyp |
| mtlocal |
| mtequipmnt |
| mtsamplepoint |
| mtopprod |
| mttemp |
| mtwarninglimit |
| mtactionlimit |
| mtlot |
| mtcmnt |

