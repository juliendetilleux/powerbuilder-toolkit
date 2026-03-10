# d_filehead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT filehead.fhcode,   
         filehead.fhdesc,   
         filehead.fhdesc2,   
         filehead.fhcreadate,   
         filehead.fhcreausr,   
         filehead.fhlastmoddate,   
         filehead.fhlastmodusr,   
         filehead.fhstartdate,   
         filehead.fhexpstartdate,   
         filehead.fhexpenddate,   
         filehead.fhstatus,   
         filehead.fhadid,   
         filehead.fhresp,   
         filehead.fhprogress,   
         filehead.fhbudgetmat,   
         filehead.fhbudgetlabour,   
         filehead.fhbudgetother, 
			filehead.fhstat1,    
			filehead.fhbudget,
         adresses.adcurr  
    FROM filehead,   
         adresses  
   WHERE ( filehead.fhcode = :ran_fhcode ) AND  
         ( adresses.adcode = '##########' )    

```

## Colonnes
| Colonne |
|---------|
| fhcode |
| fhdesc |
| fhdesc2 |
| fhcreadate |
| fhcreausr |
| fhlastmoddate |
| fhlastmodusr |
| fhstartdate |
| fhexpstartdate |
| fhexpenddate |
| fhstatus |
| fhadid |
| fhresp |
| fhprogress |
| fhbudgetmat |
| fhbudgetlabour |
| fhbudgetother |
| filehead_fhstat1 |
| filehead_fhbudget |
| adresses_adcurr |

