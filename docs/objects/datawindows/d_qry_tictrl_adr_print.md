# d_qry_tictrl_adr_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
 select adresses.adname,
       mfghead.mhcode,
       items.itname,
       workers.wkname,
       workline.wldat,
	   workline.wlstart,
	   workline.wlend,
       workline.wlwrktime
    from items,
         workers,
         workline join mfghead on workline.wlmfgid = mfghead.mhcode 
                  left outer join salhead on mfghead.mhsalhead = salhead.shcode 
                  left outer join adresses on salhead.shcust = adresses.adcode
    where (workline.wlwkcode = workers.wkcode) AND
          (mfghead.mhitem = items.itcode) AND 
          (workline.wldat >= :radt_datestart) AND 
          (workline.wldat <= :radt_datestop) AND 
          (adresses.adcode LIKE :ras_adcode)
	order by adresses.adname,mfghead.mhcode, workline.wldat,workers.wkname

```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| mfghead_mhcode |
| items_itname |
| workers_wkname |
| workline_wldat |
| workline_wlstart |
| workline_wlend |
| workline_wlwrktime |

