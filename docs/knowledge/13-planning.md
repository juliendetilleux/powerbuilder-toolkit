# Domaine : PLANIFICATION ET ORDONNANCEMENT (Planning & Scheduling)

## Vue d'ensemble

La planification et l'ordonnancement dans PmiGest ERP (PMIX) couvrent l'ensemble du processus MRP/CBN (Calcul des Besoins Nets), les previsions de vente, l'ordonnancement des postes de travail et la gestion des calendriers de production. Le domaine est concentre dans un module principal :

- **`_planning`** (102 objets) : 24 fenetres, 36 DataWindows, 3 user objects, 37 fonctions globales, 1 menu.

Le moteur central est la fonction `planningfileprepare()` (691 lignes) qui photographie l'etat complet de l'entreprise (stocks, achats, fabrications, commandes, previsions) dans les tables de travail MRP. Le calcul proprement dit est delegue a `mrpcalculate_real()` (1408 lignes) pour le MRP mono-niveau et `mpscalculate_real()` (1380 lignes) pour le MPS multi-niveaux avec capacite postes de travail.

Le systeme supporte deux modes de calcul (parametre `NEWPLAN`) :
1. **Mode legacy** : fonctions globales directes (`mrpcalculate_real`, `mpscalculate_real`)
2. **Mode nouveau** : objet NVO `nvo_plan` encapsulant la logique (`f_mrpcalculate_real`, `f_mpscalculate_real`)

Le processus complet suit cette sequence :
1. **Preparation** (`planningfileprepare`) : nettoyage et chargement des donnees
2. **Calcul MRP** (`mrpcalculate`) : explosion des nomenclatures et calcul des besoins nets
3. **Ordonnancement** (`schedulefileprepare`) : jalonnement des ordres planifies sur les postes
4. **Replanification** (`replanningfileprepare`) : ajustement des ordres existants
5. **Transfert** (`copyplantolive`) : conversion des ordres planifies en ordres reels (OF/OA)

---

## Tables principales

### Tables de travail MRP (fichiers de calcul)

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **matreq** | Besoins nets materiaux — photographie des demandes et approvisionnements | `mritem`, `mrreqdat`, `mrorigin`, `mrqty`, `mrrun` | `items` |
| **matplannew** | Ordres planifies generes par le MRP | `mpitem`, `mporduedat`, `mpplduedat`, `mporqty`, `mpplqty`, `mpreldat`, `mporigin`, `mpuse`, `mprun`, `mpordno` | _(aucune)_ |
| **matplan** | Ordres planifies consolides (version active) | `mpitem`, `mporduedat`, `mpplduedat`, `mporqty`, `mpplqty`, `mpreldat`, `mporigin`, `mpuse`, `mprun`, `mpordno`, `mpsalord`, `mpsalline` | _(aucune)_ |
| **matsal** | Photographie des commandes clients pour pegging | `msitem`, `msdatship`, `msdatplan`, `mstypord`, `msordno`, `mssalord`, `mssalline`, `msqty` | _(aucune)_ |
| **mrpabnorm** | Anomalies detectees par le MRP | `matyp`, `maseq`, `madesc`, `madatim` | _(aucune)_ |
| **dataerrors** | Journal des erreurs de donnees MRP (code `MRPA`) | `decode`, `detyp`, `deseq`, `dedesc`, `dedatim` | _(aucune)_ |

### Tables de previsions

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **fcsthead** | En-tete des scenarios de prevision | `fhid` (PK), `fhdesc`, `fhtyp`, `fhdat`, `fhdure`, `fhpmix`, `fhcmnt` | _(aucune)_ |
| **fcstline** | Lignes de prevision par article et scenario | `flid`, `flitem` (PK composite), `flpcprop`, `flpcconf`, `flsold` | _(aucune)_ |
| **forecasts** | Previsions consolidees (article + client + date) | `foitem`, `focust`, `fodate` (PK composite), `foqty` | `items`, `adresses` |

### Tables calendriers et horaires

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **calhead** | Definition des calendriers de travail | `chcode` (PK), `chname`, `chactif`, `chmonday`..`chsunday` | _(aucune)_ |
| **calline** | Detail des jours par calendrier (ouvre/chome) | `clcode`, `cldate` (PK composite), `clwork` | _(aucune)_ |
| **hourly** | Grilles de tarifs horaires | `hyid` (PK), `hyname`, `hyactif` | _(aucune)_ |
| **hourly_day** | Detail des plages horaires par jour/machine | `hdid` (PK), `hdtyp`, `hddaynum`, `hddate`, `hdhourly`, `hdmachine`, `hdstart`, `hdstop` | `hourly`, `machine` |

### Tables de charge postes de travail

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **wcplan** | Plan de capacite par poste et par jour | `wpwccode`, `wpdat`, `wpmacavail`, `wpmacrun`, `wplabrun` | _(aucune)_ |
| **wcreq** | Besoins en capacite par ordre planifie | `wrordno`, `wrline`, `writem`, `wrwccode`, `wrduedat`, `wrmacrun`, `wrreldat`, `wrorddat`, `wrlabrun` | _(aucune)_ |
| **wccal** | Calendrier de charge par poste (allocation par ordre) | `wkcode`, `wkdate`, `wkordno`, `wkmacavail`, `wkmacreq`, `wklabreq` | _(aucune)_ |
| **schedwrkcal** | Copie de travail pour ordonnancement | `wcwcid`, `wcdat`, `wcmacavail`, `wcmacrun`, `wclabrun` | _(aucune)_ |

### Tables de groupes de planification

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **plangroup** | Groupes de planification (fabrication ou achat) | `pgcode` (PK), `pgname`, `pgactiv`, `pgtyp`, `pgitem` | _(aucune)_ |

### Tables de reference (postes de travail et machines)

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **workcenters** | Definition des postes de travail | `wccode` (PK), `wcname`, `wcactiv`, `wccost`, `wccal`, `wccrit`, `wcadvsched`, `wcmonday`..`wcsunday` | `calhead` |
| **machine** | Machines physiques rattachees aux postes | `mcid` (PK), `mcode`, `mcname`, `mcpriority`, `mcactiv`, `mccells`, `mccal`, `mchourly` | `calhead`, `hourly` |
| **mfgwcreqs** | Besoins poste de travail sur ordres de fabrication reels | `mwcode`, `mwline` (PK composite), `mwwccode`, `mwstartdat`, `mwstopdat`, `mwreqmac`, `mwreqlab` | `workcenters` |

---

## Colonnes cles de la table matreq (besoins nets)

### Origine des besoins (colonne mrorigin)

| Valeur | Signification | Source dans planningfileprepare |
|--------|--------------|-------------------------------|
| `I` | **Inventaire** (stock initial) | `items.italloc - items.itstock` (stock negatif = disponible) |
| `P` | **Achat** (Purchase) | Lignes de commande achat ouvertes (`purline.plstatus < '5'`) |
| `M` | **Fabrication** (Manufacturing) | Ordres de fabrication en cours (`mfghead.mhstatus` entre 1 et 7) |
| `N` | **Fabrication non approuvee** | OF en attente d'approbation (`mfghead.mhstatus = '0'`) |
| `C` | **Commande client** (Customer order) | Lignes de commande client non livrees (`salline.slstatus < '5'`) |
| `F` | **Prevision** (Forecast) | Previsions consolidees (`forecasts`) si option activee |
| `A` | **Ordre planifie automatique** | Genere par le calcul MRP |
| `R` | **Ordre replanifie** | Genere par la replanification |

### Colonne mrrun

Correspond au niveau de nomenclature (`items.itbomlvl`) de l'article. Le MRP parcourt les niveaux du plus haut (produits finis) au plus bas (matieres premieres) pour assurer une explosion correcte des besoins.

---

## Colonnes cles de la table matplannew (ordres planifies)

| Colonne | Type | Description |
|---------|------|-------------|
| `mpitem` | char(20) | **Code article** |
| `mporduedat` | timestamp | **Date de besoin originale** |
| `mpplduedat` | timestamp | **Date planifiee d'echeance** |
| `mporqty` | numeric(12,3) | **Quantite besoin original** |
| `mpplqty` | numeric(12,3) | **Quantite planifiee** (apres regroupement/taille lot) |
| `mpreldat` | timestamp | **Date de lancement** (date echeance - delai) |
| `mporigin` | char(1) | **Origine** : `A` = automatique, `R` = replanifie, `G` = gele/frozen |
| `mpuse` | char(1) | **Type d'utilisation** : `P` = achat, `M` = fabrication |
| `mprun` | numeric(4) | **Niveau nomenclature** (BOM level) |
| `mpordno` | numeric(6) | **Numero d'ordre planifie** |
| `mpoldno` | numeric(6) | **Ancien numero d'ordre** (replanification) |
| `mpaltrout` | char(1) | **Gamme alternative** |
| `mpyield` | numeric(4,1) | **Rendement** |
| `mpinter` | char(1) | **Flag inter-sites** |

---

## Flux MRP/CBN (Calcul des Besoins Nets)

### Etape 1 : Preparation des fichiers (planningfileprepare)

La fonction `planningfileprepare(boolean with_wcplan_clear, boolean with_forecasts)` (691 lignes) constitue le coeur de la preparation du calcul MRP. Elle photographie l'etat complet de l'entreprise dans les tables de travail.

**Sequence d'operations :**

1. **Nettoyage des tables de travail** :
   - `DELETE FROM matplannew` (ordres planifies)
   - `DELETE FROM matreq` (besoins)
   - `DELETE FROM matsal` (ventes)
   - `DELETE FROM wcreq` (besoins capacite)
   - `DELETE FROM wccal` (calendrier capacite)
   - `wcplan` : nettoyage total ou partiel selon `with_wcplan_clear`

2. **Nettoyage des previsions perimees** :
   - `DELETE FROM forecasts WHERE fodate < premier_jour_mois_courant`

3. **Verification et extension des calendriers** :
   - `CheckGlobalCalendars(PLNGHORD)` : etend les calendriers si l'horizon de planification depasse la derniere date
   - `checkwccalendar(planHorizon)` : verifie les calendriers des postes de travail

4. **Gel des fabrications en cours** :
   - `frozecurrentmfg(CurrDay)` : fixe les OF en cours comme contraintes

5. **Photographie du stock initial** (origine `I`) :
   - INSERT dans `matreq` : `items.italloc - items.itstock` (stock en negatif = disponible)
   - Exclut les articles de type `F` et les codes commencant par `###########`

6. **Ajustement stock non disponible** :
   - Lots rejetes ou perimes (`lots.lostatus = 'R'` ou `lots.loexpdat < aujourd'hui`)
   - Stock dans emplacements exclus MRP (`locations.lcmrpexcl = 'Y'`)
   - Chaque anomalie est enregistree dans `dataerrors` (type `5`, code `MRPA`)

7. **Photographie des achats en cours** (origine `P`) :
   - Commandes d'achat ouvertes (`purline.plstatus < '5'`) avec quantite restante
   - Separees en : futures (a la bonne date) et en retard (ramenees a aujourd'hui)

8. **Photographie des fabrications en cours** (origine `M` et `N`) :
   - OF ouverts (`mfghead.mhstatus` entre 1 et 7) : origine `M`
   - OF groupes (`mfghead.mhtype = 'G'`) : traitement par curseur
   - OF en attente d'approbation (`mhstatus = '0'`) : origine `N`
   - Separees en : futures et en retard

9. **Photographie des commandes clients** (origine `C`) :
   - Commandes autorisees (`salhead.shautho > '0'`), non livrees (`slstatus < '5'`)
   - Articles hors type `F`
   - Distinction entre articles a la commande (`itpol = 'C'`) et standard

10. **Previsions** (origine `F`, si `with_forecasts = true`) :
    - Insertion depuis `forecasts` pour les articles avec `itpol <> 'C'`
    - Appel a `UpdateForcasts()` pour deduire les commandes reelles des previsions

### Etape 2 : Calcul MRP proprement dit (mrpcalculate / mrpcalculate_real)

La fonction `mrpcalculate()` est le point d'entree qui delegue selon le parametre `NEWPLAN` :
- `NEWPLAN = '0'` : appelle `mrpcalculate_real(false)`
- sinon : cree `nvo_plan` et appelle `nvo_plan.f_mrpcalculate_real(false)`

Le calcul `mrpcalculate_real()` (1408 lignes, 2 surcharges) parcourt les articles par niveau de nomenclature croissant et :
- Calcule le stock previsionnel jour par jour
- Genere des ordres planifies quand le stock passe en rupture
- Applique les regles de lotissement (taille de lot, multiple, delai)
- Explose les besoins vers les composants via les nomenclatures (BOM)
- Ecrit les resultats dans `matplannew`

### Etape 3 : Calcul MPS avec capacite (mpscalculate / mpscalculate_real)

La fonction `mpscalculate(boolean ab_withworkcenter, integer ai_minlevel)` est similaire mais :
- Prend en compte la charge des postes de travail si `ab_withworkcenter = true`
- Ne traite que les articles a partir du niveau `ai_minlevel`
- Appelle `bookworkcenter()` pour reserver la capacite sur les postes

### Etape 4 : Creation d'ordres planifies (createnewplanedorder)

La fonction `createnewplanedorder()` (206 lignes, 15 parametres) cree un enregistrement dans `matplannew` en tenant compte de :
- Politique de reapprovisionnement (`as_itpol`) : a la commande, par lot, au point de commande
- Taille de lot (`adec_itpsize`), multiples (`adec_itpinsize`, `ai_itpinnb`)
- Rendement (`adec_ityield`)
- Delai d'approvisionnement (`ai_itleadtime`) et delai de disponibilite (`ai_itavailtime`)
- Type article (`as_ittyp`) : determine si `mpuse = 'P'` (achat) ou `M` (fabrication)

### Etape 5 : Reservation capacite (bookworkcenter)

La fonction `bookworkcenter()` (437 lignes) jalonne chaque ordre planifie sur les postes de travail :
- Lit la gamme de fabrication de l'article
- Calcule les heures machine et main d'oeuvre par operation
- Reserve la capacite dans `wcplan` et `wccal`
- Enregistre les besoins detailles dans `wcreq` via `savemaclabhours()`
- Retourne la date de fin de l'ordre

### Etape 6 : Transfert vers ordres reels (copyplantolive)

La fonction `copyplantolive(boolean)` (320 lignes) convertit les ordres planifies en ordres reels :
- Ordres de fabrication (`mpuse = 'M'`) : creation d'OF dans `mfghead`
- Ordres d'achat (`mpuse = 'P'`) : creation de lignes d'achat dans `purline`

---

## Flux previsions de vente (Forecasts)

### Gestion des scenarios (w_fcst_mngmt)

La fenetre `w_fcst_mngmt` (module `_planning`) est le point central de gestion des previsions. Elle permet de :

- **Creer des scenarios** : via `fcsthead` (en-tete) et `fcstline` (articles)
- **Generer automatiquement** (`wf_generate_auto`) : previsions basees sur l'historique des ventes
- **Generer manuellement** (`wf_generate_manu`) : saisie directe des quantites
- **Extrapoler** (`wf_generate_extrapol`) : projection statistique
- **Alimenter depuis expeditions** (`wf_feedshipped`) : injection des donnees reelles
- **Alimenter depuis ventes directes** (`wf_feeddirectsales`)
- **Regenerer historique** (`wf_regenerate_histo`) : reconstruction de l'historique de previsions
- **Supprimer un scenario** (`wf_scenario_delete`)

### Consultation des previsions (w_fcst_show)

La fenetre `w_fcst_show` permet de :
- Visualiser les previsions par scenario (`il_scenario`)
- Filtrer par article (`filteritem`)
- Modifier et sauvegarder les quantites (`save_modif`)

### Transfert vers le MRP (w_fcst_transfer)

La fenetre `w_fcst_transfer` transfere les previsions d'un scenario vers la table `forecasts` qui est utilisee par le calcul MRP. Elle gere la ventilation par periodes (`ii_IndexVentil`).

### Saisie rapide de previsions (w_forecasts / w_forecast_update)

- **w_forecasts** : liste des previsions consolidees par article/client/date (table `forecasts`)
  - Fonctions : `quickfeed()`, `filter_dw()`, `deleteforcast()`, `wf_edit_qty()`
- **w_forecast_update** : creation/modification d'une prevision individuelle
- **w_forcstquick_update** : saisie rapide avec frequence configurable (`adaptfreq`)

### Ajustement previsions/commandes (updateforcasts)

La fonction `updateforcasts(datetime firstdaymonth, datetime currday)` (135 lignes) deduit les commandes reelles des previsions :
- Parcourt les articles ayant des commandes avec flag `slexfrcst = 'Y'`
- Pour chaque article, compare les quantites commandees aux previsions par date
- Si commandes >= prevision : supprime la prevision du mois (`DELETE FROM matreq WHERE mrorigin = 'F'`)
- Si commandes < prevision : reduit la prevision du montant commande
- Gere la substitution d'articles via `items.itsubstit` et `items.itsubstpl`
- En fin : supprime toutes les previsions du passe (`mrreqdat = CurrDay, mrorigin = 'F'`)

---

## Flux ordonnancement

### Ordonnancement standard (w_schedule)

La fenetre `w_schedule` (module `_planning`) presente un diagramme de Gantt interactif :
- **Variables cles** : `SchdHori` (horizon), `SchdDat` (date), `Gantt_row` (ligne courante)
- **Fonction** : `draw_gantt()` dessine le diagramme
- **Drag & Drop** : reorganisation des ordres par glisser-deposer (`dragdrop`, `dragwithin`)
- **Evenements** : `ue_mousemove` pour le suivi du curseur, `ue_postopen` pour le chargement initial

### Ordonnancement avance (w_advschedule)

La fenetre `w_advschedule` (module `_planning`) est l'outil d'ordonnancement avance avec 19 fonctions :
- **Affectation** : `wf_schedule_assigne()`, `wf_schedule_rec()`, `wf_schedule_rec_one()`
- **Desaffectation** : `wf_unassign_mfgwcreqs_advsc()`
- **Decalage** : `wf_schedule_shift()`, `wf_schedule_shift_one()`
- **Gel** : `wf_fix_mfgwcreqs_advsc()`, `wf_fix_all_visible()`
- **Suppression** : `wf_delete_mfgwcreqs_advsc()`, `wf_schedule_delete_rec()`, `wf_schedule_delete_all()`
- **Completion** : `wf_schedule_complete()` pour les ordres executes
- **Graphique** : `wf_refresh_graph()`, `wf_refresh_machineday_graph()`
- **Filtrage** : `wf_filteritem_gr()`, `wf_filteritem_na()`
- **Visualisation OF** : `wf_show_of()`, `wf_show_time()`

L'ordonnancement avance utilise :
- `nvo_advsched_graph` : objet graphique pour le diagramme
- `struct_objectparm` : structure de communication entre fenetres
- Parametres `ADVSCHD1`, `ADVSCHD2`, `ADVSCHDT` pour la configuration

### Affectation machine (w_advc_assign_update)

Fenetre d'affectation d'une operation a une machine specifique dans l'ordonnancement avance.

### Preparation du fichier ordonnancement (schedulefileprepare)

La fonction `schedulefileprepare(boolean)` (624 lignes) prepare les donnees pour l'ordonnancement :
- Lit les ordres planifies depuis `matplan` et les charges machines depuis `mfgwcreqs`
- Associe les commandes clients (`matsal`) aux ordres planifies
- Calcule les dates de lancement et echeance
- Remplit `schedwrkcal` avec la copie de travail via `createwcschedule()`

### Replanification (replanningfileprepare)

La fonction `replanningfileprepare()` (111 lignes) gere le cycle de replanification :
- Supprime les ordres automatiques de `matplannew` (garde les geles et manuels)
- Supprime les besoins automatiques de `matreq` (origines `A` et `R`)
- Regenere les besoins depuis `matplannew` avec explosion nomenclature (`bomhead`)
- Recalcule les charges postes (`wcplan`, `wcreq`) via `bookworkcenter()`
- Met a jour les dates de lancement en fonction des calendriers

---

## Calendriers et horaires

### Gestion des calendriers (w_calendars / w_calendar_update)

- **w_calendars** : liste de tous les calendriers definis dans `calhead`
- **w_calendar_update** : creation/modification d'un calendrier avec validation (`calendarinputok`)
- **w_calendarline_update** : gestion des jours individuels du calendrier
  - Navigation mois par mois (`relativemonth`)
  - Chargement dynamique (`load_calendar`)
  - Marquage des jours ouvres/chomes dans `calline`

### Structure d'un calendrier

Un calendrier (`calhead`) definit :
- **Jours par defaut** : `chmonday` a `chsunday` (Y/N pour chaque jour de la semaine)
- **Exceptions** dans `calline` : `cldate` + `clwork` (Y = ouvre, N = chome)
- **Flag actif** : `chactif` (seuls les calendriers actifs sont utilises par le MRP)

### Extension automatique des calendriers (checkglobalcalendars / appendcalendar)

La fonction `checkglobalcalendars(datetime HorizonDate)` :
1. Lit la derniere date de calendrier dans `parameters` (code `CALEND`)
2. Si l'horizon de planification depasse cette date, etend jusqu'au 31/12 de l'annee suffisante
3. Pour chaque calendrier actif, appelle `appendcalendar(calcode, enddate)` qui genere les lignes manquantes

### Calendrier des postes de travail (w_wccalendar)

La fenetre `w_wccalendar` affiche et gere les calendriers specifiques par poste :
- **Fonctions** : `load_calendar()`, `draw_wcload()` (charge graphique), `regenerate_selwc()`, `regenerate_allwc()`
- Chaque poste (`workcenters`) a son calendrier via `workcenters.wccal` -> `calhead`
- Les heures disponibles par jour sont definies par `workcenters.wcmonday`..`wcsunday`
- La verification des calendriers poste est assuree par `checkwccalendar()`

### Grilles horaires (hourly / hourly_day)

Le systeme de tarification horaire definit les plages de travail :
- **hourly** : grille nommee (ex: "Horaire standard", "Horaire equipe matin")
- **hourly_day** : plages horaires par jour (`hdstart`, `hdstop`) associees a une grille et une machine
- Types (`hdtyp`) : par jour de la semaine (`hddaynum`) ou par date specifique (`hddate`)

---

## Charge et capacite postes de travail

### Postes de travail (workcenters)

Chaque poste de travail definit :
- **Identite** : `wccode` (8 car.), `wcname`, `wcactiv`
- **Calendrier** : `wccal` (FK vers `calhead`)
- **Heures disponibles** : `wcmonday` a `wcsunday` (heures par jour de semaine)
- **Couts** : `wccost` (cout horaire), `wcmacfix` (fixe machine), `wcmacprop` (proportionnel)
- **Poste critique** : `wccrit` (Y/N) — affiche en priorite dans les analyses de charge
- **Ordonnancement avance** : `wcadvsched` (Y/N) — participe a l'ordonnancement avance
- **Departement** : `wcdptid`

### Plan de capacite (wcplan)

La table `wcplan` stocke la capacite disponible et consommee par poste et par jour :
- `wpwccode` : code du poste de travail
- `wpdat` : date
- `wpmacavail` : heures machine disponibles (capacite)
- `wpmacrun` : heures machine consommees par les ordres planifies
- `wplabrun` : heures main d'oeuvre consommees

**Taux de charge** = `wpmacrun / wpmacavail * 100`

### Besoins en capacite (wcreq)

La table `wcreq` detaille les besoins par ordre planifie :
- `wrordno` : numero d'ordre planifie (lien vers `matplannew.mpordno`)
- `wrline` : numero de ligne (operation de gamme)
- `writem` : article fabrique
- `wrwccode` : poste de travail utilise
- `wrduedat` : date d'echeance
- `wrmacrun` : heures machine requises
- `wrlabrun` : heures main d'oeuvre requises
- `wrreldat` : date de lancement
- `wrorddat` : date de l'ordre

### Besoins sur ordres reels (mfgwcreqs)

Pour les ordres de fabrication reels (non planifies), la table `mfgwcreqs` detaille :
- Heures requises vs realisees (`mwreqmac`/`mwreamac`, `mwreqlab`/`mwrealab`)
- Dates de debut/fin (`mwstartdat`, `mwstopdat`)
- Operation (`mwoper`), tache (`mwtask`), responsable (`mwresponsable`)
- Nombre d'operateurs (`mwnbr`), coefficient (`mwcoeff`)
- Quantite (`mwqty`), unite de mesure (`mwum`)
- Support de l'ordonnancement avance (`mwadvscsort`)

---

## Fenetres du module _planning

### Fenetres de planification principale

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| **w_planning** | w_response | Fenetre principale de planification — lancement du calcul MRP complet |
| **w_planning_quick** | w_response | Planification rapide — calcul simplifie |
| **w_planning_extrnl** | w_response | Planification avec donnees externes (import) |
| **w_planning_expimp** | w_response | Export/import de donnees de planification |
| **w_planning_print** | w_response | Impression des resultats de planification |
| **w_replanning_quick** | w_response | Replanification rapide des ordres existants |

### Fenetres de gestion des ordres planifies

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| **w_planord_create** | w_response | Creation manuelle d'un ordre planifie — fonctions `changeitem()`, `mrpinputok()` |
| **w_planord_update** | w_response | Modification d'un ordre planifie existant |
| **w_plangroup_mfg_update** | w_response | Gestion des groupes de planification fabrication — `load_group_mfg()`, `calclineload()`, `update_total()` |
| **w_plangroup_pur_update** | w_response | Gestion des groupes de planification achat (module `_purch`) — `load_group_pur()` |

### Fenetres d'ordonnancement

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| **w_schedule** | w_response | Ordonnancement Gantt avec drag & drop |
| **w_advschedule** | w_response | Ordonnancement avance — 19 fonctions d'affectation, decalage, gel |
| **w_advc_assign_update** | w_response | Affectation d'operation a une machine |

### Fenetres de previsions

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| **w_fcst_mngmt** | w_response | Gestion des scenarios de prevision — generation auto/manuelle, extrapolation |
| **w_fcst_show** | w_response | Consultation et modification des previsions par scenario |
| **w_fcst_transfer** | w_response | Transfert d'un scenario vers la table MRP `forecasts` |
| **w_forecasts** | w_response | Liste des previsions consolidees (article/client/date) |
| **w_forecast_update** | w_response | Creation/modification d'une prevision individuelle |
| **w_forcstquick_update** | w_response | Saisie rapide de previsions avec frequence |

### Fenetres de calendriers

| Fenetre | Ancetre | Module | Description |
|---------|---------|--------|-------------|
| **w_calendars** | w_response | _planning | Liste des calendriers |
| **w_calendar_update** | w_response | _planning | Creation/modification calendrier |
| **w_calendarline_update** | w_response | _planning | Edition des jours d'un calendrier |
| **w_wccalendar** | w_response | _planning | Calendrier specifique poste de travail avec charge graphique |
| **w_calendar** | w_response | _general | Calendrier generique (utilitaire general) |

### Fenetres auxiliaires

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| **w_stockmini_calc** | w_response | Calcul des stocks de securite (`wf_load_param`) |
| **w_cmnt_cells_update** | w_response_dw | Edition des commentaires sur cellules de planification |

---

## Fonctions globales du module _planning

### Fonctions du moteur MRP

| Fonction | Retour | Parametres | Lignes | Role |
|----------|--------|------------|--------|------|
| `planningfileprepare` | boolean | `with_wcplan_clear`, `with_forecasts` | 691 | Preparation des fichiers de travail MRP |
| `mrpcalculate` | boolean | _(aucun)_ | 24 | Point d'entree calcul MRP (dispatch legacy/nouveau) |
| `mrpcalculate_real` | boolean | _(aucun)_ ou `boolean` | 1408 | Calcul MRP reel (2 surcharges) |
| `mrpcalculate_import` | boolean | _(non documente)_ | -- | Calcul MRP pour donnees importees |
| `mpscalculate` | boolean | `with_workcenter`, `minlevel` | 24 | Point d'entree MPS (dispatch legacy/nouveau) |
| `mpscalculate_real` | boolean | `with_workcenter`, `minlevel` ou +`import` | 1380 | Calcul MPS reel (2 surcharges) |
| `mpscalculate_import` | boolean | _(non documente)_ | -- | MPS pour donnees importees |
| `mpscalculate_manualop` | boolean | _(non documente)_ | -- | MPS avec operations manuelles |
| `mrpbomlevelcalculate` | boolean | _(aucun)_ | 166 | Recalcul des niveaux de nomenclature |
| `createnewplanedorder` | decimal | 15 params (article, qte, stock, dates, etc.) | 206 | Creation d'un ordre planifie dans matplannew |
| `createreplanorder` | decimal | 8 params | 85 | Creation d'un ordre replanifie |

### Fonctions d'ordonnancement et capacite

| Fonction | Retour | Parametres | Lignes | Role |
|----------|--------|------------|--------|------|
| `schedulefileprepare` | boolean | `boolean` | 624 | Preparation fichiers d'ordonnancement |
| `replanningfileprepare` | boolean | _(aucun)_ | 111 | Preparation replanification |
| `bookworkcenter` | datetime | 7 params | 437 | Reservation capacite poste de travail |
| `createwcschedule` | boolean | `enddate` | 43 | Copie wcplan vers schedwrkcal |
| `savemaclabhours` | void | 9 params (item, wc, date, heures...) | 34 | Ecriture besoins capacite dans wcreq |
| `copyplantolive` | boolean | `boolean` | 320 | Transfert ordres planifies vers OF/OA reels |
| `loadroutitemdata` | -- | -- | -- | Chargement donnees gamme pour un article |
| `schedule_mfg` | -- | -- | -- | Ordonnancement fabrication |
| `lookmfgpost` | -- | -- | -- | Consultation poste de travail OF |

### Fonctions de calendrier

| Fonction | Retour | Parametres | Lignes | Role |
|----------|--------|------------|--------|------|
| `checkglobalcalendars` | void | `HorizonDate` | 61 | Extension automatique des calendriers |
| `appendcalendar` | void | `calcode`, `enddate` | 67 | Ajout de jours a un calendrier |
| `checkwccalendar` | void | `datetime` | -- | Verification calendriers postes de travail |
| `extendwccal` | void | -- | -- | Extension calendrier poste |
| `checkpastdueorders` | long | _(aucun)_ | 191 | Detection des ordres en retard |

### Fonctions previsions et anomalies

| Fonction | Retour | Parametres | Lignes | Role |
|----------|--------|------------|--------|------|
| `updateforcasts` | void | `firstdaymonth`, `currday` | 135 | Ajustement previsions vs commandes reelles |
| `purabnormalities` | boolean | _(aucun)_ | 203 | Detection anomalies achats |
| `bomanomalyanalyse` | integer | _(aucun)_ | 146 | Detection anomalies nomenclatures |
| `frozecurrentmfg` | void | `CurrDay` | 90 | Gel des fabrications en cours |
| `reloadfrozenmfg` | void | -- | -- | Rechargement des fabrications gelees |
| `purcontractimpact` | boolean | _(aucun)_ | -- | Impact des contrats fournisseur sur planification |
| `mrp_consommables` | -- | -- | -- | Traitement des consommables dans le MRP |

### Fonctions de planification rapide/mini

| Fonction | Retour | Parametres | Lignes | Role |
|----------|--------|------------|--------|------|
| `mini_planning` | void | _(aucun)_ | 84 | Calcul de planification simplifie |
| `mini_plan_mfg` | long | _(aucun)_ | 524 | Mini-planification fabrication |
| `mini_plan_pur` | long | _(aucun)_ | 103 | Mini-planification achats |

### Fonctions import/export

| Fonction | Retour | Parametres | Lignes | Role |
|----------|--------|------------|--------|------|
| `planningimportfile` | -- | -- | -- | Import de fichier de planification |
| `planningimportfilemanage` | -- | -- | -- | Gestion des fichiers d'import |

---

## Objet NVO nvo_plan

L'objet `nvo_plan` (1462 lignes, module `_planning`, herite de `nv_nonvisualobject`) encapsule la logique MRP dans un objet non-visuel. Fonctions publiques :

| Fonction | Retour | Parametres | Role |
|----------|--------|------------|------|
| `f_mrpcalculate_real` | boolean | `boolean ab_import` | Calcul MRP encapsule |
| `f_mpscalculate_real` | boolean | `boolean ab_withworkcenter, integer ai_minlevel, boolean ab_import` | Calcul MPS encapsule |
| `f_createnewplanedorder` | decimal | 15 params (idem `createnewplanedorder`) | Creation ordre planifie encapsulee |

Le choix entre mode legacy (fonctions globales) et mode nouveau (nvo_plan) est fait par le parametre programme `NEWPLAN` (`gf_get_paramprog('NEWPLAN')`).

---

## Points d'attention

### Parametres critiques

| Parametre | Table | Description |
|-----------|-------|-------------|
| `CALEND` | `parameters` | Derniere date de calendrier generee — etendu automatiquement si necessaire |
| `NEWPLAN` | `paramprog` | `0` = mode legacy, autre = mode nvo_plan |
| `PLNGHORD` | variable globale | Horizon de planification (variable globale `planHorizon`) |

### Coherence des donnees

- **Niveau BOM** (`items.itbomlvl` / `mrrun`) : le MRP parcourt les niveaux du plus haut au plus bas. La fonction `mrpbomlevelcalculate()` recalcule ces niveaux. Un niveau incorrect provoque des calculs errones.
- **Calendriers** : doivent couvrir l'horizon de planification. `checkglobalcalendars()` les etend automatiquement, mais un calendrier inactif ne sera pas etendu.
- **Gel des OF** : `frozecurrentmfg()` fixe les fabrications en cours comme contraintes. Un OF avec un statut incorrect ne sera pas pris en compte.

### Tables volatiles

Les tables `matreq`, `matplannew`, `matsal`, `wcreq`, `wccal` sont **videes a chaque calcul MRP** (`planningfileprepare`). Elles ne contiennent donc que les donnees du dernier calcul et ne doivent pas etre utilisees comme reference permanente.

### Anomalies MRP

Les anomalies sont enregistrees dans deux tables :
- **`mrpabnorm`** : anomalies MRP structurelles (type `matyp`)
- **`dataerrors`** (code `MRPA`) : erreurs de donnees detectees pendant la preparation (lots rejetes, stock non disponible, emplacements exclus)

Les types d'anomalies dans `dataerrors` :
- Type `5` : quantite non disponible (lot rejete, perime, emplacement exclus MRP)

### Previsions vs commandes

La fonction `updateforcasts()` deduit les commandes reelles des previsions pour eviter le double comptage. Seules les lignes de commande avec `salline.slexfrcst = 'Y'` sont prises en compte. La substitution d'articles est geree via `items.itsubstit` (article de substitution) et `items.itsubstpl = 'Y'` (flag planification virtuelle).

### Ordonnancement avance

L'ordonnancement avance (`w_advschedule`) est active par poste de travail via `workcenters.wcadvsched = 'Y'`. Il utilise les tables `mfgwcreqs_advsc` (affectation machine) et les parametres `ADVSCHD1`, `ADVSCHD2`, `ADVSCHDT`.

---

## Recherche rapide

| Je cherche... | Ou regarder |
|---------------|-------------|
| Lancer un calcul MRP complet | `w_planning` -> `planningfileprepare()` -> `mrpcalculate()` |
| Lancer un MRP rapide | `w_planning_quick` -> `mini_planning()` |
| Creer un ordre planifie manuellement | `w_planord_create` -> `createnewplanedorder()` |
| Modifier un ordre planifie | `w_planord_update` |
| Transferer les ordres planifies en OF/OA | `copyplantolive()` |
| Voir le plan MRP d'un article | `matplannew` (ordres planifies) + `matreq` (besoins) |
| Voir la charge d'un poste de travail | `wcplan` (capacite/consommation) + `wcreq` (detail) |
| Gerer les scenarios de prevision | `w_fcst_mngmt` + tables `fcsthead`/`fcstline` |
| Saisir des previsions | `w_forecasts` / `w_forecast_update` (table `forecasts`) |
| Transferer des previsions vers le MRP | `w_fcst_transfer` |
| Visualiser l'ordonnancement Gantt | `w_schedule` (Gantt simple) ou `w_advschedule` (avance) |
| Gerer les calendriers de production | `w_calendars` -> `w_calendar_update` -> `w_calendarline_update` |
| Voir le calendrier d'un poste | `w_wccalendar` |
| Calculer les stocks de securite | `w_stockmini_calc` |
| Grouper des ordres planifies (fabrication) | `w_plangroup_mfg_update` + table `plangroup` |
| Grouper des ordres planifies (achat) | `w_plangroup_pur_update` + table `plangroup` |
| Replanifier les ordres existants | `w_replanning_quick` -> `replanningfileprepare()` |
| Detecter les anomalies de planification | `bomanomalyanalyse()`, `purabnormalities()`, `checkpastdueorders()` |
| Importer des donnees de planification | `w_planning_extrnl` / `w_planning_expimp` -> `planningimportfile()` |
| Recalculer les niveaux de nomenclature | `mrpbomlevelcalculate()` |
| Taches planifiees automatiques | `w_planified_task` (module `_system`) -> `w_planifiedtask_execute` |
