# w_mdi

- **Type**: Window
- **Ancetre**: w_a_mdi_pmi
- **Module**: _ancestor
- **Lignes**: 19
- **Description**: Ancetre pour les fenetres MDI frame. Sert de base aux frames principaux de l'application (ERP et CRM).

## Heritage
- Ancetres: w_a_mdi_pmi > w_window > w_a_pmi > window (PB built-in)
- Descendants directs: w_erp_mdi_frame (_system), w_crm_mdi_frame (_sales_crm), w_intro_new (_design) (3 descendants)

## Variables d'instance
Aucune variable d'instance propre.

## Fonctions
Aucune fonction propre.

## Evenements surcharges
Aucun evenement surcharge.

## Controles principaux
Herite les controles MDI de w_a_mdi_pmi (mdi_1, mditbb_1, mdirbb_1).

## Dependances
- **Utilise**: w_a_mdi_pmi (heritage)
- **Utilise par**: w_erp_mdi_frame (frame ERP principal), w_crm_mdi_frame (frame CRM), w_intro_new (ecran d'introduction)
