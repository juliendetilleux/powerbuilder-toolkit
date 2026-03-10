# d_qry_contacts

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT  contacts.ctadcode ,           contacts.ctline ,           contacts.ctname ,           contacts.ctcomm ,           contacts.cttel ,           contacts.ctfax ,           contacts.ctgsm ,           contacts.ctfirstname ,           contacts.ctfunction ,           contacts.ctmail     FROM contacts      WHERE ( contacts.ctadcode = :Selected_ad ) and IsNull( contacts.ctactiv, 'Y') = 'Y'  
```

## Colonnes
| Colonne |
|---------|
| ctadcode |
| ctline |
| ctname |
| ctcomm |
| cttel |
| ctfax |
| ctgsm |
| ctfirstname |
| ctfunction |
| ctmail |

