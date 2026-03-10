# d_trf_emp_3step_line_alloc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT sum( maallocqty ) as allocqty,
		matallocs.malot,
		(select loorgcode from lots where locode = matallocs.malot ) as loetiq,
		matallocs.maloc,
		matallocs.mauser,
		matallocs.maitem,
		max( matallocs.maallocdat ) as allocdate,
		matallocs.macode,
		matallocs.maitemseq
    FROM matallocs
   WHERE matallocs.matyp = '3' AND
		matallocs.macode = :al_tlteid AND
		matallocs.maitemseq = :al_tlline  
GROUP BY matallocs.malot,
		loetiq,
		matallocs.maloc,
		matallocs.mauser,
		matallocs.maitem,
		matallocs.macode,
		matallocs.maitemseq 
ORDER BY matallocs.malot

```

## Colonnes
| Colonne |
|---------|
| allocqty |
| malot |
| loetiq |
| maloc |
| mauser |
| maitem |
| allocdate |
| macode |
| maitemseq |

