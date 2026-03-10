# d_monittest_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT monittest.mtcode,   
         monittest.mtgroupcode,   
         (select chname from choices where chtype = 'MOST' and chcode = monittest.mtstatus) as mtstatus,   
         monittest.mttyp,   
         (select clname from choiceline where clcode = 'MOLO' and clline = mtlocal) as mtlocal,   
         (select clname from choiceline where clcode = 'MOEQ' and clline = mtequipmnt) as mtequipmnt,   
         (select clname from choiceline where clcode = 'MOPP' and clline = mtsamplepoint) as mtsamplepoint,   
         (select clname from choiceline where clcode = 'MOPE' and clline = mtopprod) as mtopprod, 
         (select clname from choiceline where clcode = 'MOTP' and clline = mttemp) as mttemp,   
         monittest.mtwarninglimit,   
         monittest.mtactionlimit,   
         monittest.mtcmnt,    
         monittest.mtlot,   
         monittest.mtcreadate,   
         monittest.mtcreauser,   
         isnull(monittest.mtincubdate, '2999/12/31') as mtincubdate,   
         monittest.mtincubuser,   
         isnull(monittest.mtscandate, '2999/12/31') as mtscandate,   
         monittest.mtscanuser,   
         isnull(monittest.mtcontamdate, '2999/12/31') as mtcontamdate,   
         monittest.mtcontamuser,   
         isnull(monittest.mtmodifdate, '2999/12/31') as mtmodifdate,   
         monittest.mtmodifuser,   
         isnull(monittest.mtstatdate, '2999/12/31') as mtstatdate,   
         monittest.mtstatuser,   
         monittest.mtrefincub,   
         monittest.mtworkerid,   
         monittest.mtnbcolon,   
         (select clname from choiceline where clcode = 'MOCO' and clline = mttypcontam1) as mttypcontam1,   
         (select clname from choiceline where clcode = 'MOCO' and clline = mttypcontam2) as mttypcontam2,   
         (select clname from choiceline where clcode = 'MOCO' and clline = mttypcontam3) as mttypcontam3,   
         (select clname from choiceline where clcode = 'MOCO' and clline = mttypcontam4) as m
```

## Colonnes
| Colonne |
|---------|
| mtcode |
| mtgroupcode |
| mtstatus |
| mttyp |
| mtlocal |
| mtequipmnt |
| mtsamplepoint |
| mtopprod |
| mttemp |
| mtwarninglimit |
| mtactionlimit |
| mtcmnt |
| mtlot |
| mtcreadate |
| mtcreauser |
| mtincubdate |
| mtincubuser |
| mtscandate |
| mtscanuser |
| mtcontamdate |
| mtcontamuser |
| mtmodifdate |
| mtmodifuser |
| mtstatdate |
| mtstatuser |
| mtrefincub |
| mtworkerid |
| mtnbcolon |
| mttypcontam1 |
| mttypcontam2 |
| mttypcontam3 |
| mttypcontam4 |
| mttypcontam5 |
| mttypcontam6 |
| mtcatcontam1 |
| mtcatcontam2 |
| mtcatcontam3 |
| mtcatcontam4 |
| mtcatcontam5 |
| mtcatcontam6 |
| mtnbcontam1 |
| mtnbcontam2 |
| mtnbcontam3 |
| mtnbcontam4 |
| mtnbcontam5 |
| mtnbcontam6 |
| itcode |

