# w_bcd_batch_mfg_prepare

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Batch fabrication prepare (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_level | Integer |
| nvo_bc | nvo_bcd_brf |
| il_mfghead | long |
| il_batchNo | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_retrieve() | public | Recupere les donnees |
| wf_changebatch(integer al_newbatch, boolean ab_withcheck) | public | Modification |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
| constructor | Constructeur |
