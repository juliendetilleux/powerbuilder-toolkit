# d_user_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT users.uscode,   
         users.usactiv,   
         users.usname,   
         users.uspswrd,   
         users.uslastcon,   
         users.ustyp,   
         users.usacttyp,   
         users.ussalesman,   
         users.ussuppcrm,   
         users.uspurchaser,   
         users.ustel,   
         users.usfax,   
         users.usmail,   
         users.usgsm,   
         users.ustitle,   
         users.usentry,   
         users.usmodifustmsh,   
         users.usprefdi,   
         users.uslang,   
         isnull(users.usprep, 'N') as usprep ,   
         isnull(users.usbomright, '') as usbomright,
			isnull(users.usmcdo, '') as usmcdo ,
			isnull(users.usmcdo2, '') as usmcdo2,
		users.ussmcode,
		users.usdefaultmcdo,
		users.usnewdesign,
		users.usrtimer,
		users.ustrfoutlook,
		users.uscolor ,
		users.ustranslate	,
		users.usmod	,
		users.usbrf 
    FROM users
   WHERE ( users.uscode = :Selected_user ) 
```

## Colonnes
| Colonne |
|---------|
| uscode |
| usactiv |
| usname |
| uspswrd |
| uslastcon |
| ustyp |
| usacttyp |
| ussalesman |
| ussuppcrm |
| uspurchaser |
| ustel |
| usfax |
| usmail |
| usgsm |
| ustitle |
| usentry |
| usmodifustmsh |
| usprefdi |
| uslang |
| usprep |
| usbomright |
| usmcdo |
| usmcdo2 |
| ussmcode |
| usdefaultmcdo |
| usnewdesign |
| usrtimer |
| ustrfoutlook |
| uscolor |
| ustranslate |
| usmod |
| usbrf |

