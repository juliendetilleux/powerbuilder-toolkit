# Flux : Echanges electroniques EDI / Peppol

## Description
PmiGest supporte les echanges electroniques de donnees (EDI) et la facturation electronique via Peppol. Le module `_edilink` gere les echanges EDI classiques (commandes, avis d'expedition, factures), tandis que les modules `Shared_peppol` et `cust_peppol` gerent la facturation electronique au format Peppol/UBL via la plateforme Babelway.

## Etapes du flux

### EDI classique (_edilink)
1. **Configuration EDI** : Parametrage des partenaires, formats, chemins de fichiers. → Fenetre : `w_param_sys` (onglet `tabpage_edilink`), Table : `edilink`
2. **Reception commandes EDI** : Import des commandes clients au format EDI et creation automatique dans PmiGest. → Fenetre : `w_edi_order`, Tables : `salhead`, `salline`
3. **Import avis expedition (DESADV)** : Import des avis d'expedition fournisseur. → Objet : `nvo_edi_import_desadv`, Tables : `shiphead`, `shipline`
4. **Reception commandes achat EDI** : Import des confirmations de commandes fournisseur. → Fenetre : `w_edi_purchase`, Tables : `purghead`, `purgline`
5. **Transfert EDI** : Export des documents vers les partenaires EDI. → Objet : `nvo_edi_transfert`, Fenetre : `w_edi_transactions`
6. **Suivi des transactions** : Consultation de l'historique des echanges EDI. → Fenetre : `w_edi_transactions`, Table : `editransactions`

### Facturation electronique Peppol
7. **Configuration Peppol** : Parametrage de la connexion Babelway et des identifiants Peppol. → Fenetre : `w_peppol`, Table : `adresses` (champ endpoint Peppol)
8. **Selection des factures** : Selection des factures a envoyer par voie electronique. → Fenetre : `w_invoices_peppol`, DataWindow : `d_invhead_sel_peppol`
9. **Generation du fichier UBL/XML** : Creation du fichier XML conforme au standard Peppol/UBL. → Fenetre : `w_invoices_peppol` (fonction `wf_expfactelect`), DataWindow : `d_invoicexml_print`
10. **Envoi via Babelway** : Transmission du fichier au reseau Peppol via la plateforme Babelway. Suivi du statut (IN_PROGRESS, IN_DELIVERY, DELIVERED). → Fenetre : `w_invoices_peppol`, API : Babelway REST
11. **Suivi des envois** : Verification du statut de livraison des factures sur Babelway. → Fenetre : `w_invoices_peppol` (bouton statut), Table : `invoicehead` (champs `ihstatusbabelway`, `ihkeybabelway`)
12. **Marquage comme envoye** : Les factures envoyees avec succes sont marquees. → Fenetre : `w_invoices_peppol` (fonction `wf_sended`), Table : `invoicehead`
13. **Envoi PDF par email** : Alternative a Peppol : envoi de la facture au format PDF par email. → Fenetre : `w_invoices_pdf`, DataWindow : `d_invhead_sel_peppol`
14. **Gestion des adresses Peppol** : Recherche et association des adresses Peppol aux clients. → Fenetre : `w_adresse_sqlsearch` / `w_adresse_sqlsearch_multi`, Table : `adresses`

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `w_edi_order` | `_edilink` | Import commandes EDI |
| `w_edi_purchase` | `_edilink` | Import commandes achat EDI |
| `w_edi_transactions` | `_edilink` | Historique transactions EDI |
| `w_peppol` | `cust_peppol` | Configuration Peppol / gestion endpoints |
| `w_invoices_peppol` | `cust_peppol` | Envoi factures Peppol (1600+ lignes) |
| `w_invoices_pdf` | `cust_peppol` | Envoi factures PDF par email |
| `w_print` | `cust_peppol` | Impression / generation PDF |
| `w_adresse_sqlsearch` | `Shared_peppol` | Recherche adresse |
| `w_adresse_sqlsearch_multi` | `Shared_peppol` | Recherche adresse multiple (1700+ lignes) |
| `w_param_sys` | `_system` | Configuration EDI (onglet edilink) |

## Tables impliquees

| Table | Usage |
|-------|-------|
| `edilink` | Configuration EDI (ecriture) - partenaires, formats, chemins |
| `editransactions` | Historique transactions EDI (ecriture) |
| `invoicehead` | En-tete factures (lecture/ecriture) - champs Peppol : `ihstatusbabelway`, `ihkeybabelway`, `ihtypinv` |
| `invoiceline` | Lignes factures (lecture) - detail pour XML |
| `salhead` | Commandes vente (ecriture) - creation depuis EDI |
| `salline` | Lignes commande vente (ecriture) - creation depuis EDI |
| `purghead` | Commandes achat (ecriture) - reception confirmation EDI |
| `purgline` | Lignes commande achat (ecriture) |
| `shiphead` | Livraisons (ecriture) - import DESADV |
| `shipline` | Lignes livraison (ecriture) - import DESADV |
| `adresses` | Clients/Fournisseurs (lecture/ecriture) - champs Peppol : `adptinvoice` (modele impression), endpoint |
| `multico` | Multi-societes (lecture) |

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_invhead_sel_peppol` | `cust_peppol` | Selection factures pour envoi Peppol |
| `d_invhead_sel_peppol_success` | `cust_peppol` | Liste factures Peppol envoyees avec succes |
| `d_invoicexml_print` | `cust_peppol` | Generation XML facture |
| `d_edilink` | `_system` | Configuration EDI |
| `d_edi_order` | `_edilink` | Import commande EDI |
| `d_edi_transactions` | `_edilink` | Historique transactions |

## Objets non-visuels cles

| Objet | Module | Role |
|-------|--------|------|
| `nvo_edi_transfert` | `_edilink` | Logique de transfert EDI - export documents |
| `nvo_edi_import_desadv` | `_edilink` | Import avis d'expedition (DESADV) |
| `nvo_xtra_edi_transfert` | `_sysxtra` | Surcharge client du transfert EDI |

## Statuts Peppol (invoicehead.ihstatusbabelway)

| Statut | Description |
|--------|-------------|
| `IN_PROGRESS` | En cours de traitement par Babelway |
| `IN_DELIVERY` | En cours de livraison au destinataire |
| `DELIVERED` | Facture livree avec succes |
| `ERROR` | Erreur de transmission |

## Integration Babelway

La fenetre `w_invoices_peppol` utilise l'API REST Babelway pour :
- Envoyer les factures XML au format UBL
- Recuperer le statut de livraison via `wf_get_param_babelway("ALL", "GET_URL") + cle_babelway`
- Verifier le statut de chaque facture et mettre a jour `invoicehead`

## Liens avec autres flux

- **Vente** : Les commandes EDI alimentent directement le cycle de vente.
- **Achat** : Les confirmations EDI mettent a jour les commandes d'achat.
- **Facturation** : Les factures validees sont envoyees via Peppol ou PDF.
- **Impression** : Le systeme d'impression genere les PDF pour l'envoi email.
- **Administration** : La configuration EDI se fait depuis les parametres systeme.
