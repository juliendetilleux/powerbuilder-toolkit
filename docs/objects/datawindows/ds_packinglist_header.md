# ds_packinglist_header

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
select distinct 
    salhead.shcode, 
    salhead.shcust,
	isnull((select count(distinct shcust) from salhead s1 ,truckline t where s1.shcode= t.tlsalhead and tlcode=truckline.tlcode  having (select count(distinct slshipto) from salline, truckline tr where slcode=tr.tlsalhead and tlcode=truckline.tlcode  ) > 1),0) as 'nbpt',
    salhead.shusr01 'Attention',
    salhead.shusr02 'Référence', 
    salhead.shusr05 'Palette',
    salhead.shusr06 'ArticlePal',
    salhead.shusr07 'Camion',
    salhead.shusr08 'Container',
    salhead.shusr09 'Destination',
    salhead.shusr10 'Behalf',
    	salhead.shusr11 'Destination1',
	salhead.shusr12 'Destination2',
	salhead.shusr13 'Destination3',
	salhead.shusr14 'Destination4',
	salhead.shusr15 'Destination5',
	salhead.shusr16 'Info1',
	salhead.shusr17 'Info2',
	salhead.shusr18 'Info3',
	salhead.shusr19 'Info4',
	salhead.shusr20 'Info5',
	salhead.shusr21 'Info6',
	salhead.shusr22 'Info7',
	salhead.shusr23 'Info8',
	salhead.shusr24 'Info9',
	salhead.shusr25 'Info10',
	salhead.shusr26 'AdresSup1',
	salhead.shusr27 'AdresSup2',
	salhead.shusr28 'Info11',
	salhead.shusr29 'Info12',
	salhead.shusr30 'Info13',
	salhead.shusr31 'Info14',
	salhead.shusr32 'Info15',
	salhead.shusr33 'Info16',
	salhead.shusr34 'Info17',
	salhead.shusr35 'Info18',
	salhead.shusr36 'Info19',
	salhead.shusr37 'Info20'
from truckline,salhead
where shcode = tlsalhead
and tlcode = :selected_truck

```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| shcust |
| nbpt |
| attention |
| palette |
| articlepal |
| camion |
| container |
| destination |
| behalf |
| destination1 |
| destination2 |
| destination3 |
| destination4 |
| destination5 |
| info1 |
| info2 |
| info3 |
| info4 |
| info5 |
| info6 |
| info7 |
| info8 |
| info9 |
| info10 |
| adressup1 |
| adressup2 |
| info11 |
| info12 |
| info13 |
| info14 |
| info15 |
| info16 |
| info17 |
| info18 |
| info19 |
| info20 |

