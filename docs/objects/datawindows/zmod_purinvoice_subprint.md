# zmod_purinvoice_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT 1 as linetype,
         Purinvline.plitem,
		   Purinvline.plqty,
		   Purinvline.plpurval,
		   Purinvline.pltva,
		   if Purinvline.plcomment = items.itname then '' else Purinvline.plcomment endif as plcomment,
		   Purinvhead.picurr,

		   IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			items.itumtarif
		   ELSE
		   	Items.itum 
		   ENDIF as itum,
		   Items.itdesc2,
		   Items.itcode,
         items.itname,
		   (Select Itemlang.ildesc
			   From Itemlang
			  Where Itemlang.ilitcode = Purinvline.plitem And
				     Itemlang.illgcode = :lang_sel) AS translate ,
		Purinvhead.pityptva
    FROM Purinvline,
		   Purinvhead,
		   Items
   WHERE Purinvhead.picode = :an_purinvoice AND
		   Purinvhead.picode = Purinvline.plcode AND 
		   Items.itcode = Purinvline.plitem And 
         purinvline.pltype IN ('S', 'A')
  
Union All 
    
  SELECT 1 as linetype,
         '',
		   Purinvline.plqty,
		   Purinvline.plpurval,
		   Purinvline.pltva,
		   Purinvline.plcomment  as plcomment,
		   Purinvhead.picurr,
		   '',
		   '',
		   '',
         '',
		   '',
		Purinvhead.pityptva
    FROM Purinvline,
		   Purinvhead
   WHERE Purinvhead.picode = :an_purinvoice AND
		   Purinvhead.picode = Purinvline.plcode AND 
		   isnull(Purinvline.plitem,'') = '' And 
         purinvline.pltype IN ('S', 'A')
   
Union All 
    
  Select 2,
         '' ,
         1 as plqty,
		   sum(purinvline.plpurval),
		   purinvline.pltva,
		   purinvline.plcomment,
		   Purinvhead.picurr,
		   '',
         '',
         '',
         '',
         '',
		Purinvhead.pityptva
    From purinvline,
         purinvhead
   Where purinvhead.picode  = :an_purinvoice And
		   purinvhead.picode  = purinvline.plcode And 
         purinvline.pltype NOT IN ('S', 'A')
	group by pltva, plcomment, picurr , Purinvhead.pityptva
 
Order By 1, 2, 6
      
```

## Colonnes
| Colonne |
|---------|
| purinvline_linetype |
| purinvline_plitem |
| purinvline_plqty |
| purinvline_plpurval |
| purinvline_pltva |
| purinvline_plcomment |
| purinvhead_picurr |
| items_itum |
| items_itdesc2 |
| items_itcode |
| items_itname |
| ctranslate |
| purinvhead_pityptva |

