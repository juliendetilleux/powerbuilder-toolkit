# Table : invoicehead

## Description

Table en-tete des factures. Donnees principales des factures clients et fournisseurs.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ihcode | numeric(6) | Non | Numero facture **(PK)** |
| ihcust | char(10) | Non | Code client |
| ihdate | timestamp | Non | Date facture |
| ihcurr | char(3) | Oui | Devise |
| ihtvaref | char(15) | Oui | Reference TVA |
| ihpaymnt | char(1) | Oui | Condition paiement |
| ihstatus | char(1) | Oui | Statut |
| ihprint | char(1) | Oui | Imprimee |
| ihsalval | numeric(8,2) | Oui | Montant vente HT |
| ihtvaval | numeric(8,2) | Oui | Montant TVA |
| ihtotval | numeric(8,2) | Oui | Montant total TTC |
| ihcomment | long varcha(32767) | Oui | Commentaire |
| ihtypinv | char(1) | Oui | Type facture (F/C) |
| ihexpiry | timestamp | Oui | Date echeance |
| ihcptper | char(6) | Oui | Periode comptable |
| ihtyptva | char(1) | Oui | Type TVA |
| ihcurconv | numeric(10,6) | Oui | Taux de change |
| ihcptexer | char(4) | Oui | Exercice comptable |
| ihrist | numeric(4,2) | Oui | Ristourne (%) |
| ihesct | numeric(4,2) | Oui | Escompte (%) |
| ihfacnot | numeric(2) | Oui | Note facture |
| ihristval | numeric(8,2) | Oui | Montant ristourne |
| ihesctval | numeric(8,2) | Oui | Montant escompte |
| ihpaymode | numeric(2) | Oui | Mode paiement |
| ihpaid | char(1) | Oui | Payee |
| ihpaydate | timestamp | Oui | Date paiement |
| ihpaidamount | numeric(8,2) | Oui | Montant paye |
| ihexpedi | char(1) | Oui | Expediee |
| ihfileref | numeric(4) | Oui | Reference dossier |
| ihfileline | numeric(4) | Oui | Ligne dossier |
| ihinvattention | varchar(40) | Oui | A l'attention de |
| ihshowprest | char(1) | Oui | Afficher prestations |
| ihorderrist | char(1) | Oui | Ristourne commande |
| ihfactoring | char(1) | Oui | Affacturage |
| ihremindnb | numeric(3) | Oui | Nombre rappels |
| ihlastremind | timestamp | Oui | Dernier rappel |
| ihstructcom | varchar(12) | Oui | Communication structuree |
| ihcodemc | numeric(12) | Oui | Code multicompany |
| ihmccode | varchar(10) | Oui | Code multicompany |
| ihchecksum | varchar(32) | Oui | Checksum |
| ihcreauser | varchar(8) | Oui | Utilisateur creation |
| ihcreadate | timestamp | Oui | Date creation |
| ihnuminv | numeric(12) | Oui | Numero facture (sequence) |
| ihshipto | numeric(4) | Oui | Adresse livraison |
| ihristtnet1 | numeric(4,2) | Oui | Ristourne nette 1 (%) |
| ihristtnet1val | numeric(8,2) | Oui | Montant ristourne nette 1 |
| ihristtnet1typ | numeric(3) | Oui | Type ristourne nette 1 |
| ihristtnet2 | numeric(4,2) | Oui | Ristourne nette 2 (%) |
| ihristtnet2val | numeric(8,2) | Oui | Montant ristourne nette 2 |
| ihristtnet2typ | numeric(3) | Oui | Type ristourne nette 2 |
| ihristtnet3 | numeric(4,2) | Oui | Ristourne nette 3 (%) |
| ihristtnet3val | numeric(8,2) | Oui | Montant ristourne nette 3 |
| ihristtnet3typ | numeric(3) | Oui | Type ristourne nette 3 |
| ihrefedi | varchar(64) | Non | Reference EDI |
| ihchassis | varchar(17) | Oui | Numero chassis |
| ihregistre | varchar(20) | Oui | Registre |
| ihmarque | varchar(25) | Oui | Marque |
| ihdatereg | timestamp | Oui | Date enregistrement |
| ihkm | numeric(6) | Oui | Kilometres |

## Cles et index

- **PK** : ihcode
- **FK** : ihcust -> adresses(adcode)
- **FK** : ihfileref -> filehead(fhcode)
- **Index** : idx_multico (ihcodemc, ihmccode, ihtypinv) [unique]
- **Index** : ind_invoicehead (ihdate) [non-unique]
- **Index** : ixc_Profile_15 (ihcust, ihtypinv, ihstatus) [non-unique]
- **Index** : ixc_Profile_20 (ihstatus) [non-unique]

## Relations

- **Parents (FK sortantes)** : adresses, filehead
- **Enfants (FK entrantes)** : SUBINVOICE, invoiceline, invoicetva

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
