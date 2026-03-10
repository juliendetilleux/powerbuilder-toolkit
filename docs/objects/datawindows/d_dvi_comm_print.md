# d_dvi_comm_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT projvrsn.pvphid,   
         projvrsn.pvcode,   
         adresses_a.adname    as CustName,   
         adresses_a.adadr1    as CustAdr1,   
         adresses_a.adadr2    as CustAdr2,   
         adresses_a.adzip     as CustZip,   
         adresses_a.adloc     as CustLoc,   
         adresses_a.adcountr  as CustCountr,   
         adresses_b.adname,   
         adresses_b.adadr1,   
         adresses_b.adadr2,   
         adresses_b.adzip,   
         adresses_b.adloc,   
         adresses_b.adcountr,   
         adresses_b.adtel,   
         adresses_b.adfax,   
         adresses_b.admail  
    FROM projvrsn,   
         projhead,   
         adresses adresses_a,   
         adresses adresses_b  
   WHERE ( projvrsn.pvphid = projhead.phcode ) and  
         ( projhead.phadid = adresses_a.adcode ) and  
         ( projvrsn.pvphid = :ran_ProjId ) AND  
         ( projvrsn.pvcode = :ran_VersId ) AND  
         adresses_b.adcode = '##########'    

```

## Colonnes
| Colonne |
|---------|
| pvphid |
| pvcode |
| adresses_custname |
| adresses_custadr1 |
| adresses_custadr2 |
| adresses_custzip |
| adresses_custloc |
| adresses_custcountr |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adtel |
| adresses_adfax |
| adresses_admail |

