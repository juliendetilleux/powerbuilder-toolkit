# d_users_conx

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
select 	ucconnectid, 
				uclastconxdate, 
				ucpcuser,
				ucpcname,
				ucprguser,
				ucconxtype,
				ucipadress,
				ucappli,
				if  ucconnectid = (select connection_property('number') from dummy) then 'Y' else 'N' endif as currconn
  from usersconx order by uclastconxdate desc

```

## Colonnes
| Colonne |
|---------|
| ucconnectid |
| uclastconxdate |
| ucpcuser |
| ucpcname |
| ucprguser |
| ucconxtype |
| ucipadress |
| ucappli |
| currconn |

