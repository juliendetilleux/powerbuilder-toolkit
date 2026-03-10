# d_qry_mfg_rentability_print

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
select 
	ilitem as 'Piece vendue',
	if ihtypinv = 1 then ilqty else (ilqty * -1 ) endif /*EC0285*/ as 'Nb de pieces vendues',
	ilcode as 'N°facture',
	convert(date,ihdate) as 'Date facture',
	ihcust as 'Client',
	if mctype = 'L' then 'Main d oeuvre' else 'Machine' endif as 'Type',
	if mctype = 'L' then 'Main d oeuvre' else 'Machine' endif as 'SubType',
	mcitem as 'Code',
	wcname as 'Désignation',
	convert(numeric(15,2),(ilqty/(if mhmfgqty= 0 then mhrelqty else mhmfgqty endif))*mcqalloc) as 'qté prod', 
	convert(numeric(15,2),(ilqty/(if mhmfgqty= 0 then mhrelqty else mhmfgqty endif))*mcqreal) as 'qté utilisée', 
	'h' as 'unité', 
	convert(numeric(15,4),mcvreal/ilqty) as 'P.U.', 
	convert(numeric(15,4),(mcvalloc)/ilqty) as 'P.U. corrected',
	mhcode as 'OF',  
	convert(date,mhmfgdat) as 'Date de production',
	(if mhmfgqty= 0 then mhrelqty else mhmfgqty endif) as 'Nb Pièces OF', 
	mcqalloc as 'Poids', 
	mhlotmfg as 'Lot subassembly',
	convert(numeric(15,4),(select sum(mcvreal/mhprod.mhrelqty) from mfghead mhprod, mfgcosts where mhprod.mhcode=mccode and mhprod.mhcode =mfghead.mhcode))  as 'Total cost', 
	ilstdval as 'P.V.'
from items as header, workcenters, mfghead, mfgcosts, shipline, invoiceline, invoicehead
where mcitem=wccode
and header.itcode = mhitem
and mhcode=mccode
and sllot=mhlotmfg
and ilshiporder = slcode
and ilshipline = slline
and ilcode=ihcode
and mctype in ('L','E')
and ilqty <> 0 /*EC0285*/
and iltype not in ('N', 'Y', 'Z') /*EC0285*/
union
select ilitem,
	if ihtypinv = 1 then ilqty else (ilqty * -1 ) endif /*EC0285*/,
	ilcode,
	convert(date,ihdate), 
	ihcust, 
	items.itstat1 as Type, 
	items.itstat2 as Subtype, 
	mcitem, 
	items.itname as 'Désignation',
	convert(numeric(15,2),(ilqty/ (if mhmfgqty= 0 then mhrelqty else mhmfgqty endif) )*mcqalloc) as 'qté prod',
	convert(numeric(15,2),(ilqty/(if mhmfgqty= 0 then mhrelqty else mhmfgqty endif))*mcqreal) as 'qté utilisée',
	items.itum as 'unité', 
	convert(numeri
```

## Colonnes
| Colonne |
|---------|
| piece_vendue |
| nb_de_pieces_vendues |
| n_facture |
| date_facture |
| client |
| type |
| subtype |
| code |
| compute_0013 |
| compute_0014 |
| of |
| date_de_production |
| poids |
| lot_subassembly |
| total_cost |
| compute_0021 |

