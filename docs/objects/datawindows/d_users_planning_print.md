# d_users_planning_print

- **Type**: DataWindow
- **Style**: Composite
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
SELECT date(Calline.cldate) as Cal_date,
		Calline.clwork,
		Zv_users_planning.upuser,
		Zv_users_planning.upusername,
		Zv_users_planning.upacthour,
		Zv_users_planning.upadname,
		Zv_users_planning.upacttiming,
		Zv_users_planning.upactid,
		Zv_users_planning.upacttype
	FROM Calline LEFT OUTER JOIN Zv_users_planning ON Calline.cldate = Zv_users_planning.upactdate 
UNION ALL 
 SELECT date(Calline.cldate) as cal_dat,
		Calline.clwork,
		Users.uscode,
		Users.usname,
		null,
 		null,
		null,
		null,
 		null
 	FROM Users,	Calline
```

## Colonnes
| Colonne |
|---------|
| cal_date |
| clwork |
| upacthour |
| val |

