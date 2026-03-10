# d_item_desc_header

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT 
	iditem ,
	itname,
    idnew,
    iddispo,
    idimplantation,
    idmillesime ,
    idcouchage ,
    idplcartgrise ,
    idporteur ,
    idtraction ,
    idtypchas ,
    idcarburant ,
    idcv ,
    idcouple ,
    idcylind ,
    idnbvit ,
    idlonghorstout ,
    idlongcaisse ,
	idlongint,
    idhauthorsstout ,
    idhautint ,
    idlargeur ,
    idlargint ,
    iddevelopsol ,
    idpoidsencharge ,
    idpoidstract ,
    idpoidsvide ,
    idnbessieux,
    idcouleur ,
    idtypelit,
    idtypecuis ,
    idmaterext ,
    idtyperoue ,
    idgarage ,
	idtype,
    idcomment,
	idpremdtmisencirc
    FROM itemdesc, items
   WHERE items.itcode = itemdesc.iditem and
	itemdesc.iditem = :iditem    


```

## Colonnes
| Colonne |
|---------|
| iditem |
| items_itname |
| idnew |
| iddispo |
| idimplantation |
| idmillesime |
| idcouchage |
| idplcartgrise |
| idporteur |
| idtraction |
| idtypchas |
| idcarburant |
| idcv |
| idcouple |
| idcylind |
| idnbvit |
| idlonghorstout |
| idlongcaisse |
| itemdesc_idlongint |
| idhauthorsstout |
| itemdesc_idhautint |
| idlargeur |
| idlargint |
| iddevelopsol |
| idpoidsencharge |
| idpoidstract |
| idpoidsvide |
| idnbessieux |
| idcouleur |
| idtypelit |
| idtypecuis |
| idmaterext |
| idtyperoue |
| idgarage |
| itemdesc_idtype |
| idcomment |
| itemdesc_idpremdtmisencirc |

