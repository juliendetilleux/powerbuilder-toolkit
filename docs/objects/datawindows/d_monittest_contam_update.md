# d_monittest_contam_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT monittest.mtcode,
	    monittest.mtstatus,   
	    (select chname from choices where chtype = 'MOST' and chcode = monittest.mtstatus) as mtstatus_name,
         monittest.mttyp,   
         monittest.mtcmnt,   
         monittest.mtlot,   
	    monittest.mtincubuser,
	    monittest.mtscanuser,
	    monittest.mtmodifdate,
	    monittest.mtmodifuser,
         monittest.mtcontamdate,   
         monittest.mtcontamuser,   
         monittest.mttypcontam1,   
         monittest.mttypcontam2,   
         monittest.mttypcontam3,   
         monittest.mttypcontam4,   
         monittest.mttypcontam5,   
         monittest.mttypcontam6,   
         monittest.mtcatcontam1,   
         monittest.mtcatcontam2,   
         monittest.mtcatcontam3,   
         monittest.mtcatcontam4,   
         monittest.mtcatcontam5,   
         monittest.mtcatcontam6,   
         monittest.mtnbcontam1,   
         monittest.mtnbcontam2,   
         monittest.mtnbcontam3,   
         monittest.mtnbcontam4,   
         monittest.mtnbcontam5,   
         monittest.mtnbcontam6,
         monittest.mtnbcolon  
    FROM monittest
  WHERE mtcode = :al_mtcode 
```

## Colonnes
| Colonne |
|---------|
| mtcode |
| mtstatus |
| mtstatus_name |
| mttyp |
| mtcmnt |
| mtlot |
| mtincubuser |
| mtscanuser |
| mtmodifdate |
| mtmodifuser |
| mtcontamdate |
| mtcontamuser |
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
| mtnbcolon |

