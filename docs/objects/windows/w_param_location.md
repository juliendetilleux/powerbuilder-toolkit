# w_param_location

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 1443
- **Description**: Gestion des parametres de localisation et donnees de reference. Gere les emplacements, unites de mesure, centres de travail, devises, societes, calendriers, pays, transporteurs, activites, departements, etc.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `action : string`
- `calend : Datetime`
- `is_choice : string`
- `modif_reg : boolean`

## Fonctions

- `location_refresh() : void -- Rafraichissement emplacements`
- `measure_refresh() : void -- Rafraichissement unites de mesure`
- `workcenter_refresh() : void -- Rafraichissement centres de travail`
- `currency_refresh() : void -- Rafraichissement devises`
- `company_load() : void -- Chargement donnees societe`
- `shipto_refresh() : void -- Rafraichissement adresses livraison`
- `calendar_refresh() : void -- Rafraichissement calendriers`
- `country_refresh() : void -- Rafraichissement pays`
- `activities_refresh() : void -- Rafraichissement activites`
- `dept_refresh() : void -- Rafraichissement departements`
- `wf_tabvisible(string) : void -- Visibilite des onglets`
- `adresgroup_refresh(long) : void -- Rafraichissement groupes adresses`

## Dependances

Voir les references croisees dans le module _system.
