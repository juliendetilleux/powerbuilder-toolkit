# d_methods_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT bomhead.bhcode,   
         bomhead.bhcoeff,   
         bomhead.bhramval,   
         bomhead.bhmacval,   
         bomhead.bhlabval,   
         bomhead.bhactiv,   
         bomhead.bhtype,   
         bomhead.bhcomment,   
         bomhead.bhyield,   
         bomhead.bhdateval,   
         bomhead.bhsubc,   
         bomhead.bhsuppid,   
         bomhead.bhdesc,   
         bomhead.bhcmntcopy,   
         bomhead.bhdecla,
			isnull((select progparam.ppvalue
						 from progparam
						where progparam.ppcode = 'MFGDECLAR'), 'N') as MFGDECLAR,
			bomhead.bhoneemp,
			bomhead.bhloc,
			items.ittyp,  
         bomhead.bhcoeff_calc ,
			'' as itemname,
			bomhead.bhtdmoddate,
			bomhead.bhusetdqty ,
			isnull(bomhead.bhbomright, '') as bhbomright,
			bomhead.bhmcdomaker,
			bomhead.bhdlcmp,
			bomhead.bhfabdvrg /*HA2350*/
    FROM bomhead, items  
   WHERE ( bomhead.bhcode = :Selected_item ) AND  
         ( bomhead.bhtype = :Selected_type ) AND
			( bomhead.bhcode = items.itcode )   

```

## Colonnes
| Colonne |
|---------|
| bhcode |
| bhcoeff |
| bhramval |
| bhmacval |
| bhlabval |
| bhactiv |
| bhtype |
| bhcomment |
| bhyield |
| bhdateval |
| bhsubc |
| bhsuppid |
| bhdesc |
| bhcmntcopy |
| bhdecla |
| mfgdeclar |
| bhoneemp |
| bhloc |
| items_ittyp |
| bomhead_bhcoeff_calc |
| citemname |
| bhtdmoddate |
| bhusetdqty |
| bhbomright |
| bhmcdomaker |
| bomhead_bhdlcmp |
| bomhead_bhfabdvrg |

