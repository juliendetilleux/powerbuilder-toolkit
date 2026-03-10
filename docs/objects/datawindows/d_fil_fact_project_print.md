# d_fil_fact_project_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode as id_action, 
			CAST(null as numeric(1,0)) as type,
			CAST(null as varchar(80)) as desc_type,
			adrsactions.aaaction as action, 
			activities.acdesc as libelle_action, 
			adrsactions.aadesc as desc_action,
			users.uscode as id_utilisateur, 
			users.usname as nom_utilisateur, 
			adresses.adcode as id_societe, 
			adresses.adname as nom_societe, 
			adrsactions.aafileref as id_affaire,
   		filehead.fhdesc as desc_affaire,
			adrsactions.aafileline as id_sous_affaire, 
 			fileline.fldesc as desc_sous_affaire,
			adrsactions.aasalorder as num_commande, 
			adrsactions.aasalline as num_ligne_commande, 
			adrsactions.aainvoicehead as num_facture, 
			adrsactions.aainvoiceline as num_ligne_facture,
			salline.slqtyreq as prester,
			salline.slqtyreq - invoiceline.ilqty as facturable,
			salline.slqtyreq - invoiceline.ilqty as nonfacturer,
			invoiceline.ilqty as facturer,
			CAST(null as numeric(6,2)) as facturabilite
		FROM adrsactions,
			activities,
			users,
			adresses,
			invoicehead,
			invoiceline,
			items,
			filehead,
			fileline,
			salline
		WHERE adrsactions.aaaction = activities.accode AND
			adrsactions.aarespons = users.uscode AND
			adrsactions.aainvoicehead = invoiceline.ilcode AND
			adrsactions.aainvoiceline = invoiceline.illine AND
			invoicehead.ihcode = invoiceline.ilcode AND
			invoicehead.ihcust = adresses.adcode AND
			invoiceline.ilitem = items.itcode AND
			adrsactions.aafileref = fileline.flcode AND
			adrsactions.aafileline = fileline.flline AND
			filehead.fhcode = fileline.flcode AND
			adrsactions.aasalorder = salline.slcode AND
			adrsactions.aasalline = salline.slline AND
			items.ittyp = 'S' 
```

## Colonnes
| Colonne |
|---------|
| id_action |
| type |
| desc_type |
| action |
| libelle_action |
| desc_action |
| id_utilisateur |
| nom_utilisateur |
| id_societe |
| nom_societe |
| id_affaire |
| desc_affaire |
| id_sous_affaire |
| desc_sous_affaire |
| num_commande |
| num_ligne_commande |
| num_facture |
| num_ligne_facture |
| prester |
| facturable |
| nonfacturer |
| facturer |
| facturabilite |

