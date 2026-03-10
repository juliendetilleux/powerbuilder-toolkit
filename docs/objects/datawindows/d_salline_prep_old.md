# d_salline_prep_old

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slcode,   
         salline.slline,    
         salline.slitem,    
         items.itname, 
         items.itloc, 
         salline.slqtyalloc, 
         salline.slqtyreq,
         items.itdefaultlot, 
         salline.slpallocseq,   
         if trim(items.itusr01) = '' then null else items.itusr01 endif as itusr01, 
         cast(null as numeric(10, 3)) as qty,
			if items.itlot = 'Y' then cast(null as char(20)) else items.itdefaultlot endif as lot,
         items.itum,
         locations.lcintext,
         salline.slqtyreq -  salline.slqtyreal - salline.slqtyalloc as prepar,
         salline.sldatreq,
         shipto.stdesc,
			'N' as withstock,
			items.itlot,
			1 as type,
			'' as lotorigin
    FROM salline,   
         items ,
         locations,
         shipto,
         salhead
   WHERE ( items.itcode = salline.slitem ) AND    
         salline.slcode = :al_slcode AND
         salline.slcode = salhead.shcode AND
         locations.lccode = items.itloc AND
         salline.slstatus < '5' AND
         salline.slshipto = shipto.stseq AND
         shipto.stcode = salhead.shcust AND
			(items.itcat = 'K') 
  
 UNION ALL

  SELECT salline.slcode,   
         salline.slline,    
         salline.slitem,    
         items.itname, 
         items.itloc, 
         salline.slqtyalloc, 
         salline.slqtyreq,
         '', 
         salline.slpallocseq,   
         if trim(items.itusr01) = '' then null else items.itusr01 endif as itusr01, 
         cast(null as numeric(10, 3)) as qty,
         if items.itlot = 'Y' then (if lots.loorgcode is null or trim(lots.loorgcode) = '' then lots.locode else lots.loorgcode endif)  else items.itdefaultlot endif as lot,
         items.itum,
         locations.lcintext,
         salline.slqtyreq -  salline.slqtyreal - salline.slqtyalloc as prepar,
         salline.sldatreq,
         shipto.stdesc,
			'Y' as withstock,
			items.itlot,
			3,
         if items
```

## Colonnes
| Colonne |
|---------|
| salline_slcode |
| salline_slline |
| salline_slitem |
| items_itname |
| items_itloc |
| salline_slqtyalloc |
| salline_slqtyreq |
| items_itdefaultlot |
| salline_slpallocseq |
| citusr01 |
| cqty |
| clot |
| items_itum |
| locations_lcintext |
| cprepar |
| salline_sldatreq |
| shipto_stdesc |
| cwithstock |
| items_itlot |
| salline_type |
| clotorigin |

