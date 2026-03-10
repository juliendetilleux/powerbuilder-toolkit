# d_brf_mfg_addsupp_wc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,
		mfghead.mhitem,
		items.itname,
		 mfgwcreqs.mwline,
		 mfgwcreqs.mwwccode,
		 ( select workcenters.wcname from workcenters where workcenters.wccode = mfgwcreqs.mwwccode) as wcname,
		 mfgwcreqs.mwreqmac,
		 mfgwcreqs.mwreqlab 
    FROM mfghead left outer join mfgwcreqs ON mfghead.mhcode = mfgwcreqs.mwcode, items
 WHERE mfghead.mhcode = :al_of AND
		mfghead.mhitem = items.itcode 
order by mfgwcreqs.mwline
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhitem |
| items_itname |
| mfgwcreqs_mwline |
| mfgwcreqs_mwwccode |
| wcname |
| mfgwcreqs_mwreqmac |
| mfgwcreqs_mwreqlab |

