# d_moyenne_livraison

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _cust2
- **Table principale**: 0

## SQL
```sql
select 
'0J' as groupe,
convert(varchar(20),month(sldatreq)) +' ' + MONTHNAME(sldatreq) as mois,
count(salline.slcode) as nombre_cmd

 from 
    salline ,
    shipline,
    shiphead
where 
    shipline.slsalorder = salline.slcode and 
    shipline.slsalline = salline.slline and
    slstatus = 6 and 
    year(sldatreq) = 2022 and
    shiphead.shcode = shipline.slcode and
    DATEDIFF(day,date(sldatreq),date(shiphead.shdate)) = 0

group by mois, groupe



UNION ALL 

select 
'1J' as groupe,
convert(varchar(20),month(sldatreq)) +' ' + MONTHNAME(sldatreq) as mois,
count(salline.slcode) as nombre_cmd

    



 from 
    salline ,
    shipline,
    shiphead
where 
    shipline.slsalorder = salline.slcode and 
    shipline.slsalline = salline.slline and
    slstatus = 6 and 
    year(sldatreq) = 2022 and
    shiphead.shcode = shipline.slcode and
    DATEDIFF(day,date(sldatreq),date(shiphead.shdate)) = 1

group by mois, groupe




UNION ALL 

select 
'2J' as groupe,
convert(varchar(20),month(sldatreq)) +' ' + MONTHNAME(sldatreq) as mois,
count(salline.slcode) as nombre_cmd

    



 from 
    salline ,
    shipline,
    shiphead
where 
    shipline.slsalorder = salline.slcode and 
    shipline.slsalline = salline.slline and
    slstatus = 6 and 
    year(sldatreq) = 2022 and
    shiphead.shcode = shipline.slcode and
    DATEDIFF(day,date(sldatreq),date(shiphead.shdate)) = 2

group by mois, groupe


UNION ALL 

select 
'3J' as groupe,
convert(varchar(20),month(sldatreq)) +' ' + MONTHNAME(sldatreq) as mois,
count(salline.slcode) as nombre_cmd

    



 from 
    salline ,
    shipline,
    shiphead
where 
    shipline.slsalorder = salline.slcode and 
    shipline.slsalline = salline.slline and
    slstatus = 6 and 
    year(sldatreq) = 2022 and
    shiphead.shcode = shipline.slcode and
    DATEDIFF(day,date(sldatreq),date(shiphead.shdate)) = 3

group by mois, groupe


UNION AL
```

## Colonnes
| Colonne |
|---------|
| groupe |
| mois |
| nombre_cmd |

