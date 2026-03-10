# Flux : Interface comptable

## Description
L'interface comptable dans PmiGest assure le transfert des donnees financieres (factures de vente, factures d'achat, notes de credit) vers le logiciel comptable externe. Le module `_ifcpt` centralise la configuration et l'export, tandis que le module `_monthclot` gere les clotures periodiques.

## Etapes du flux

1. **Configuration de l'interface** : Parametrage des journaux comptables, comptes, exercices et periodes. → Fenetre : `w_cpt_param`, Table : `cptparam`
2. **Configuration Wings/Orbis** : Parametres specifiques au logiciel comptable cible (Wings, WinTim, etc.). → Fenetre : `w_wings_param`, Table : `cptparam`
3. **Export factures de vente** : Selection et export des factures clients vers la comptabilite. Choix de la periode, du journal, et generation du fichier d'export. → Fenetre : `w_cpt_invexp`, Tables : `invoicehead`, `invoiceline`, `cptexport`
4. **Export factures d'achat** : Selection et export des factures fournisseurs vers la comptabilite. → Fenetre : `w_cpt_purinvexp`, Tables : `invoicehead`, `invoiceline`, `cptexport`
5. **Validation de l'export** : Verification de la coherence des donnees avant export final. Les factures exportees sont marquees pour eviter les doublons. → Fenetre : `w_cpt_invexp` / `w_cpt_purinvexp`, Table : `invoicehead` (champ statut export)
6. **Cloture mensuelle** : Cloture de la periode comptable, interdisant la modification des documents de la periode cloturee. → Module : `_monthclot`, Tables : `monthclot`, `cptparam`
7. **Impression des journaux** : Impression des listings comptables pour verification. → Fenetre : `w_print`, DataWindows : module `_prints_std`

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `w_cpt_param` | `_ifcpt` | Parametrage interface comptable |
| `w_cpt_invexp` | `_ifcpt` | Export factures de vente |
| `w_cpt_purinvexp` | `_ifcpt` | Export factures d'achat |
| `w_wings_param` | `_ifcpt` | Parametres specifiques Wings/Orbis |
| `w_tictrl_wnt_param` | `_manufg` | Parametres WinTim (pointage) |
| `w_print` | `_prints_std` | Impression generique |

## Tables impliquees

| Table | Usage |
|-------|-------|
| `cptparam` | Parametres comptables (ecriture) - journaux, comptes, exercices |
| `cptexport` | Lignes d'export comptable (ecriture) |
| `invoicehead` | En-tete factures (lecture) - selection pour export |
| `invoiceline` | Lignes factures (lecture) - detail pour export |
| `monthclot` | Cloture mensuelle (ecriture) |
| `multico` | Multi-societes (lecture) - parametres par societe |
| `adresses` | Clients/Fournisseurs (lecture) - comptes comptables |

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_cpt_param_update` | `_ifcpt` | Mise a jour parametres comptables |
| `d_cpt_invexp_sel` | `_ifcpt` | Selection factures pour export |
| `d_cpt_purinvexp_sel` | `_ifcpt` | Selection factures achat pour export |
| `d_cpt_export_print` | `_prints_std` | Impression listing export |

## Mecanismes d'ouverture

L'acces aux fenetres d'export comptable se fait depuis :
- Le menu principal ERP : `m_erp_mdi` → `opensheet(w_Cpt_InvExp, w_erp_mdi_frame)` ou `opensheet(w_Cpt_PurInvExp, w_erp_mdi_frame)`
- Le menu action : `m_action` → `gn_open.fn_open(w_Cpt_InvExp, true, parentwindow)`
- Le menu CRM : `m_action_4crm` → `Open(w_Cpt_InvExp)`
- L'ecran d'accueil : `w_intro` → `Open(w_Cpt_Param)`

## Liens avec autres flux

- **Vente** : Les factures de vente sont la source principale de l'export comptable vente.
- **Achat** : Les factures d'achat sont la source de l'export comptable achat.
- **Multi-societes** : L'export gere les societes multiples via la table `multico` et les parametres `shmccode`.
- **Fabrication** : Le pointage (WinTim) peut generer des ecritures comptables pour la valorisation.
