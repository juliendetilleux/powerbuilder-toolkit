# d_of_detail

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
	SELECT mhcode,
			mlitem,
			itname,
			0 as totmoreq,
			0 as totstreq,
			sum(mllallocqty * itstdpur) as totmatreq,
			0 as totmacreq,
			0 as totmoreal,
			0 as totstreal,
			sum(mlpallocqty * itstdpur) as totmatreal,
			0 as totmacreal
		FROM mfghead,
			mfglallocs,
			items
		WHERE mhcode = mlcode
			AND itcode = mlitem
			AND mhcode = :an_code
		GROUP BY mhcode,mlitem,itname

 UNION ALL

	SELECT mhcode,
			mwwccode,
			wcname,
			sum(IF mhsubc <> 'Y' THEN (mwreqlab * wccost) ELSE 0 ENDIF) as totmoreq,
			sum(IF mhsubc = 'Y' THEN (mwreqlab * wccost) ELSE 0 ENDIF) as totstreq,
			0 as totmatreq,
			sum(mwreqmac * wcmacprop) as totmacreq,
			sum(IF mhsubc <> 'Y' THEN (mwrealab * wccost) ELSE 0 ENDIF) as totmoreal,
			sum(IF mhsubc = 'Y' THEN (mwrealab * wccost) ELSE 0 ENDIF) as totstreal,
			0 as totmatreal,
			sum(mwreamac * wcmacprop) as totmacreal
		FROM mfghead,
			mfgwcreqs,
			workcenters
		WHERE mhcode = mwcode
			AND wccode = mwwccode
			AND mhcode = :an_code
		GROUP BY mhcode,mwwccode,wcname

 UNION ALL

	SELECT mhcode,
			mcitem,
			IFNULL((SELECT itcode FROM items WHERE itcode = mcitem),(SELECT wcname FROM workcenters WHERE wccode = mcitem),(SELECT itname FROM items WHERE itcode = mcitem)),
			sum(IF mctype = 'L' THEN mcvalloc ELSE 0 ENDIF) as totmoreq,
			sum(IF mctype = 'S' THEN mcvalloc ELSE 0 ENDIF) as totstreq,
			sum(IF mctype = 'M' THEN mcvalloc ELSE 0 ENDIF) as totmatreq,
			sum(IF mctype = 'E' THEN mcvalloc ELSE 0 ENDIF) as totmacreq,
			sum(IF mctype = 'L' THEN mcvreal ELSE 0 ENDIF) as totmoreal,
			sum(IF mctype = 'S' THEN mcvreal ELSE 0 ENDIF) as totstreal,
			sum(IF mctype = 'M' THEN mcvreal ELSE 0 ENDIF) as totmatreal,
			sum(IF mctype = 'E' THEN mcvreal ELSE 0 ENDIF) as totmacreal
		FROM mfghead,
			mfgcosts
		WHERE mhcode = mccode
			AND mhcode = :an_code
		GROUP BY mhcode,mcitem,mcseq
 ORDER BY 2
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfglallocs_mlitem |
| items_itname |
| mfghead_totmoreq |
| mfghead_totstreq |
| ctotmatreq |
| mfghead_totmacreq |
| mfghead_totmoreal |
| mfghead_totstreal |
| ctotmatreal |
| mfghead_totmacreal |

