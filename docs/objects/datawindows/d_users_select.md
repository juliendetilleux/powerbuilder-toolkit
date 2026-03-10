# d_users_select

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _agenda
- **Table principale**: 0

## SQL
```sql
SELECT distinct uscode,
		usname,
		0 as sort,
        	0 as isselected,
		uscolor
    FROM users left outer join linkusus on users.uscode = linkusus.liuscode_2
	where ( linkusus.liuscode_1 = :as_curuser or uscode = :as_curuser or uscode like if (select usacttyp from users where uscode = :as_curuser ) = 'S' then '%' else '' end if )
			and usactiv = 'Y' 
			and uscode <> '########'
 ORDER BY users.usname
```

## Colonnes
| Colonne |
|---------|
| uscode |
| usname |
| sort |
| isselected |
| users_uscolor |

