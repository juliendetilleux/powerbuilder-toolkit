# Domaine : Cloture Caisse (Sales Cash / Point of Sale)

## Vue d'ensemble

Le module caisse (Sales Cash) gere le flux **ticket de caisse -> facture** dans PmiGest ERP (PMIX). Il permet de creer des factures directes depuis un point de vente sans passer par le circuit commande -> livraison -> facture.

Le module s'appuie sur :
- **Library `_sales_cash`** : fenetres et NVO specifiques a la caisse
- **Library `_sales`** : fenetres partagees de facturation (invoicing)
- **Library `_sysxtra`** : fonctions systeme et utilitaires globaux

### Fenetres principales

| Fenetre | Role |
|---------|------|
| **w_invoice_cash** | Fenetre principale de saisie/cloture caisse. Herite de `w_master` ou d'un ancetre metier. Affiche les tickets en cours et permet la facturation. |
| **w_intro** | Fenetre d'accueil PMIX — contient la logique de visibilite des menus caisse selon les parametres et autorites. |

### NVO (Non-Visual Objects)

| NVO | Role |
|-----|------|
| **nvo_invoice_cash** | Logique metier de la cloture caisse : calcul des montants, creation de la facture, mise a jour du stock, gestion des paiements. |

---

## Flux metier : Ticket -> Facture

```
1. Utilisateur ouvre le menu Caisse dans w_intro
   (visible si parametre INVCASH = 'Y' ou DIRECTSAL = 'Y')
2. w_invoice_cash s'ouvre et affiche les tickets en attente
3. Selection des tickets a facturer (filtre par date, client, etc.)
4. nvo_invoice_cash.of_process() :
   a. Cree l'en-tete facture (invoicehead)
   b. Copie les lignes ticket vers invoiceline
   c. Calcule TVA (invoicetva)
   d. Met a jour le stock si applicable
   e. Genere les ecritures comptables (invoicecpt)
5. Impression/envoi de la facture
```

---

## Conditions de visibilite du menu Caisse

Le menu caisse dans `w_intro` est conditionne par :

| Condition | Description |
|-----------|-------------|
| **Parametre `INVCASH`** | Doit etre `'Y'` dans la table `paramprog` pour activer le module caisse |
| **Parametre `DIRECTSAL`** | Alternative : vente directe sans passage par commande |
| **Parametre `CASHTUCHS`** | Parametre de configuration des touches caisse |
| **Autorite 345** | L'utilisateur doit avoir l'autorite 345 pour acceder a la cloture caisse |

La verification se fait dans `w_intro` via l'appel `gf_getparamstring('INVCASH')` et `gf_checkauthority(345)`.

---

## Tables impliquees

| Table | Role dans le flux caisse |
|-------|--------------------------|
| **invoicehead** | En-tete de la facture generee depuis la caisse |
| **invoiceline** | Lignes de la facture (articles vendus) |
| **invoicetva** | Ventilation TVA de la facture |
| **invoicecpt** | Ecritures comptables de la facture |
| **paramprog** | Parametres systeme (INVCASH, DIRECTSAL, CASHTUCHS) |
| **authority** | Table des autorites utilisateur (autorite 345 = cloture caisse) |
| **adresses** | Clients (lie a invoicehead.ihcust) |
| **items** | Articles (lie a invoiceline) |

---

## Parametres cles

| Parametre | Table | Description |
|-----------|-------|-------------|
| `INVCASH` | paramprog | Active le module caisse (`'Y'` / `'N'`) |
| `DIRECTSAL` | paramprog | Active la vente directe sans commande prealable |
| `CASHTUCHS` | paramprog | Configuration des touches de raccourci caisse |

---

## Autorites requises

| Code | Description |
|------|-------------|
| **345** | Acces a la cloture de caisse |

---

## Mots-cles de recherche

cloture caisse, cash register, point of sale, POS, ticket facture, vente directe, INVCASH, DIRECTSAL, CASHTUCHS, autorite 345, w_invoice_cash, nvo_invoice_cash
