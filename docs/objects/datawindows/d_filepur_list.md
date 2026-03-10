# d_filepur_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
	SELECT purline.plcode as code,
			purline.plline as line,
			'C' as typ,
			purline.pldatsup as datreq,
			purline.plqtyord as qty,
			purline.plqtyrec as qtyrec,
			purline.plqtyreq as qtyreq,
			purline.plqtyinv as qtyinv,
			purline.plpurval / currencies.cuconv as purval,
			purline.plstatus as status,
			items.itname as itname,
			purhead.phcurr as curr,
			items.itcode as itcode,
			adresses.adcode as supp,
			(select sum (purinvline.plnetval / purinvhead.picurconv * purinvhead.pifacnot) from purinvline, purinvhead where purinvhead.picode = purinvline.plcode and purinvline.plordno = code and purinvline.plordlin = line ) as invval,
			0 as purtype,
			if ifnull(purline.plinvclot,'N',purline.plinvclot) = 'Y' then 0 else ((qtyreq - qtyinv) * (purval/qty)) endif as invval_left,
			purhead.phfileline,
			(select fileline.fldesc from fileline where fileline.flcode = purhead.phfileref and fileline.flline = purhead.phfileline) as filelinedesc,
			purline.plcmnt
		FROM purline,
			items,
			purhead,
			adresses,
			currencies
		WHERE items.itcode = purline.plitem
			AND purhead.phcode = purline.plcode
			AND adresses.adcode = purhead.phsupp
			AND currencies.cucode = purhead.phcurr
			AND purline.plstatus < '9'
			AND purhead.phstatus < '9'
			AND purhead.phfileref = :ran_filecode
 UNION all
	SELECT purgline.plcode as code,
			purgline.plline as line,
			'C',
			purgline.pldatreq,
			purgline.plqty as qty,
			purgline.plqtyrec as qtyrec,
			purgline.plqty as qtyreq,
			purgline.plqtyinv as qtyinv,
			purgline.plpurval / currencies.cuconv as purval,
			purgline.plstatus,
			purgline.pldesc,
			purghead.phcurr,
			'Divers',
			adresses.adcode,
			( select sum (purinvline.plnetval / purinvhead.picurconv * purinvhead.pifacnot) from purinvline, purinvhead where purinvhead.picode = purinvline.plcode and purinvline.plordno = code and purinvline.plordlin = line ),
			purghead.phtype,
			if ifnull(purgline.plinvclot,'N',purgline.
```

## Colonnes
| Colonne |
|---------|
| code |
| line |
| ctyp |
| datreq |
| qty |
| qtyrec |
| purline_qtyreq |
| qtyinv |
| purval |
| status |
| items_itname |
| curr |
| items_itcode |
| supp |
| cinvval |
| purtype |
| cinvval_left |
| purhead_phfileline |
| cfilelinedesc |
| purline_plcmnt |

