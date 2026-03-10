# Flux : Administration systeme

## Description
L'administration systeme de PmiGest est geree par les modules `_system` (parametrage, profils, base de donnees, mises a jour) et `_sysxtra` (extensions specifiques client). Elle couvre la configuration de l'application, la gestion des utilisateurs et profils, les parametres systeme, la maintenance de la base de donnees, et les mises a jour automatiques.

## Etapes du flux

### Demarrage de l'application
1. **Authentification** : Connexion avec identifiant et mot de passe. Verification de la licence. → Fenetre : `ws_password` / `ws_password_newdesign` / `ws_password2`, Tables : `users`, `licence`
2. **Choix du mode** : Selection entre mode MDI (multi-fenetres) ou mode simplifie. → Fenetre : `ws_password` (radio buttons `rb_mdi`)
3. **Ouverture du cadre principal** : Ouverture du cadre MDI ERP ou CRM selon le choix. → Fenetre : `w_erp_mdi_frame` / `w_intro` / `w_intro_new`
4. **Mise a jour automatique** : Verification et application des mises a jour de structure de la base. → Fenetre : `w_system_auto_update` / `w_sysupgrade_mess`, Table : `sysversion`

### Configuration de l'application
5. **Parametres systeme** : Configuration globale : modules actifs, options, formats, etc. → Fenetre : `w_param_sys`, Table : `params`
6. **Parametres application** : Configuration detaillee par module avec onglets (vente, stock, achat, etc.). → Fenetre : `w_system_application` (14000+ lignes), Table : `params`, `sysconfig`
7. **Parametres base de donnees** : Configuration de la connexion SGBD, maintenance, statistiques. → Fenetre : `w_system_database`, Table : `sysconfig`
8. **Parametres localisation** : Configuration des emplacements, machines, donnees techniques. → Fenetre : `w_param_location`, Tables : `location`, `machines`
9. **Parametres mail** : Configuration du serveur de messagerie. → Fenetre : `w_param_mail`, Table : `params`
10. **Parametres EDI** : Configuration des echanges electroniques. → Fenetre : `w_param_sys` (onglet `tabpage_edilink`), Table : `edilink`

### Gestion des utilisateurs
11. **Profils utilisateurs** : Creation et modification des profils avec droits d'acces par module, par ecran, par action. → Fenetre : `w_profils_user`, Tables : `users`, `profils`, `bomrights`
12. **Gestion des profils** : Liste et gestion des profils d'acces. → Fenetre : `w_profils`, Table : `profils`
13. **Modification mot de passe** : Changement de mot de passe utilisateur. → Fenetre : `w_passwrd_new`, Table : `users`

### Maintenance
14. **Mise a jour structure BD** : Application des scripts de mise a jour pour les nouvelles versions. → Fenetre : `w_system_upgrade`, Table : `sysversion`
15. **Inter-societes** : Configuration et gestion du multi-societes (interco). → Fenetre : `w_interco`, Table : `multico`
16. **Taches planifiees** : Configuration et execution de taches automatiques. → Fenetre : `w_planifiedtask_update` / `w_planifiedtask_execute`, Table : `planifiedtask`
17. **Conditions commerciales** : Gestion des modeles de conditions (remises, majorations). → Fenetre : `w_condtemplate_update`, Table : `condtemplate`

### Extensions client
18. **Surcharges client** : Le module `_sysxtra` contient les surcharges specifiques au client (fenetres, objets non-visuels). → Module : `_sysxtra`, Objet exemple : `nvo_xtra_edi_transfert`

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `ws_password` | `_system` | Ecran de connexion classique |
| `ws_password_newdesign` | `_system` | Ecran de connexion nouveau design |
| `ws_password2` | `_system` | Ecran de connexion variante 2 |
| `w_passwrd_new` | `_system` | Changement mot de passe |
| `w_erp_mdi_frame` | `_system` | Cadre MDI principal ERP |
| `w_intro` | `_system` | Ecran d'accueil (mode non-MDI) |
| `w_intro_new` | `_system` | Ecran d'accueil nouveau design |
| `w_system_application` | `_system` | Parametres application (14000+ lignes) |
| `w_system_database` | `_system` | Parametres base de donnees |
| `w_system_upgrade` | `_system` | Mise a jour structure BD |
| `w_system_auto_update` | `_system` | Mise a jour automatique |
| `w_sysupgrade_mess` | `_system` | Messages de mise a jour |
| `w_param_sys` | `_system` | Parametres systeme (4200+ lignes) |
| `w_param_location` | `_system` | Parametres localisation |
| `w_param_mail` | `_system` | Parametres mail |
| `w_profils_user` | `_system` | Gestion profils utilisateurs (2100+ lignes) |
| `w_profils` | `_system` | Liste des profils |
| `w_interco` | `_system` | Gestion inter-societes |
| `w_planifiedtask_update` | `_system` | Mise a jour taches planifiees |
| `w_planifiedtask_execute` | `_system` | Execution taches planifiees |
| `w_condtemplate_update` | `_system` | Modeles conditions commerciales |
| `ws_about` | `_system` | A propos / informations version |
| `ws_empty_directory` | `_system` | Nettoyage repertoire |
| `ws_iexplore` | `_system` | Ouverture navigateur web |

## Tables impliquees

| Table | Usage |
|-------|-------|
| `users` | Utilisateurs (ecriture) - identifiants, mots de passe, profils |
| `profils` | Profils d'acces (ecriture) - droits par module |
| `bomrights` | Droits specifiques nomenclature (ecriture) |
| `params` | Parametres systeme (ecriture) - cle/valeur |
| `sysconfig` | Configuration systeme (ecriture) |
| `sysversion` | Version de la BD (ecriture) - pour mises a jour |
| `multico` | Multi-societes (ecriture) |
| `linkmcad` | Lien multi-societe / adresse (lecture) |
| `location` | Emplacements (ecriture) |
| `machines` | Machines/Postes (ecriture) |
| `edilink` | Configuration EDI (ecriture) |
| `planifiedtask` | Taches planifiees (ecriture) |
| `condtemplate` | Modeles de conditions (ecriture) |
| `licence` | Licence d'utilisation (lecture) |

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_profils_user` | `_system` | Mise a jour profil utilisateur |
| `d_profils_list` | `_system` | Liste des profils |
| `d_bomright` | `_system` | Droits nomenclature |
| `d_params_update` | `_system` | Mise a jour parametres |
| `d_system_upgrade` | `_system` | Liste mises a jour |
| `d_stocks_update` | `_system` | Parametres stock (dans application) |
| `d_edilink` | `_system` | Configuration EDI |

## Menus principaux

| Menu | Module | Role |
|------|--------|------|
| `m_erp_mdi` | `_system` | Menu principal ERP (barre de menu MDI) |
| `m_action` | `_system` | Menu actions (toolbar) |
| `m_action_4crm` | `_system` | Menu actions CRM |
| `m_popordr` | `_system` | Menu contextuel commandes |

## Module _sysxtra (Extensions client)

Le module `_sysxtra` contient les surcharges specifiques au client. Ces objets heritent des objets standards et ajoutent ou modifient le comportement. Exemples :
- `nvo_xtra_edi_transfert` : herite de `nvo_edi_transfert` — surcharge du transfert EDI
- `w_xtra_brf_menu_stk` : surcharge du menu stock codes-barres

Ce mecanisme permet de personnaliser l'application sans modifier le code standard.

## Liens avec autres flux

- **Tous les modules** : L'administration systeme configure et controle l'acces a tous les modules de l'ERP.
- **Securite** : Les profils utilisateurs definissent les droits d'acces aux fenetres, aux actions et aux donnees.
- **Multi-societes** : La configuration `multico` impacte les ventes, achats et la comptabilite.
