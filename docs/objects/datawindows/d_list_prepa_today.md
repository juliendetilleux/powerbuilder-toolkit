# d_list_prepa_today

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _cust2
- **Table principale**: 0

## SQL
```sql
  select  
    DATEDIFF (day,date(shdatreq),date(today()))  as Nombre_jour,   
    CASE Nombre_jour 
	When 0 then '0 jour'
       WHEN 1 THEN ' 1 jour'
       WHEN 2 THEN '2 jours'
       WHEN 3 THEN '3 jours'
       ELSE 'Plus de 4 jours'
END as groupe,

     date(shdatreq) as date_expedition,
    shcode as num_cmd,
    shcust as code_client , 
    (select adname from adresses where adcode = shcust ) as nom ,
    isnull(shcustref,'') as ref   ,

(select count(slline) from salline where slcode = shcode and slstatus not in (6,9) ) as nombre_ligne_cmd,
(select count(slline) from salline where slcode = shcode and (salline.slqtyreq  - slqtyalloc)=  0 and slqtyalloc <> 0   and slstatus not in (6,9)  ) as nombre_ligne_cmd_prepare 
    
from salhead
where  
    shstatus < 6 and 
    shautho = 9  and
	Nombre_jour = 0 
order by shdatreq
   
```

## Colonnes
| Colonne |
|---------|
| nombre_jour |
| groupe |
| date_expedition |
| num_cmd |
| code_client |
| nom |
| ref |
| nombre_ligne_cmd |
| nombre_ligne_cmd_prepare |

