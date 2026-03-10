-- ==============================================
-- Script de donnees de demo pour la facturation
-- Base: SQL Anywhere 17, DSN=Pmix
-- ==============================================
-- Purpose: Creer des donnees de test pour les flux de facturation (creation,
-- modification, impression, paiement).
--
-- Prerequis:
-- - Connexion active a la base Pmix (DSN)
-- - Utilisateur avec droits INSERT/UPDATE/DELETE
-- - Base contient deja les tables de base (items, adresses, salhead, etc.)
--
-- Usage:
-- 1. dbisql -c "DSN=Pmix" < demo-data-facturation.sql
-- 2. Ou executer ligne par ligne dans dbisql
--
-- Notes:
-- - Les codes utilises ('01', '#########S', 'LOT001') doivent correspondre
--   a des codes existants ou etre compatibles avec la base
-- - La periode '202202' doit etre ouverte dans la gestion comptable
-- - Les montants sont en devise EUR
-- ==============================================

-- ==============================================
-- 1. Preparer l'article principal pour la vente
-- ==============================================
-- Verifier d'abord que l'article '01' existe
-- UPDATE items SET itsale = 'Y', itum = 'PC', ittyp = 'P', itstdsal = 25.00, itactiv = 'Y'
-- WHERE itcode = '01';

-- Alternative : creer un article s'il n'existe pas
-- INSERT INTO items (itcode, itname, itsale, itum, ittyp, itstdsal, itactiv)
-- VALUES ('01', 'Article Test', 'Y', 'PC', 'P', 25.00, 'Y')
-- WHERE NOT EXISTS (SELECT 1 FROM items WHERE itcode = '01');

-- ==============================================
-- 2. Preparer le client principal
-- ==============================================
-- Verifier d'abord que le client '#########S' existe et mettre a jour ses parametres
-- UPDATE adresses SET adlang = 'FR' WHERE adcode = '#########S';

-- Alternative : si le client n'existe pas, le creer
-- INSERT INTO adresses (adcode, adname, adtype, adlang, adactiv)
-- VALUES ('#########S', 'Client Test', 'C', 'FR', 'Y')
-- WHERE NOT EXISTS (SELECT 1 FROM adresses WHERE adcode = '#########S');

-- ==============================================
-- 3. Creer des lots (si gestion par lot activee)
-- ==============================================
-- Lot 1 : Article 01, quantite initiale 100 pieces
-- DELETE FROM lots WHERE ltcode = 'LOT001';
-- INSERT INTO lots (ltcode, ltitem, ltqtyin) VALUES ('LOT001', '01', 100);

-- Lot 2 : Article 01, quantite initiale 50 pieces
-- DELETE FROM lots WHERE ltcode = 'LOT002';
-- INSERT INTO lots (ltcode, ltitem, ltqtyin) VALUES ('LOT002', '01', 50);

-- ==============================================
-- 4. Creer du stock (si necessaire)
-- ==============================================
-- Stock disponible pour l'article 01, emplacement DEF, lot LOT001
-- DELETE FROM stock WHERE skitem = '01' AND sklot = 'LOT001';
-- INSERT INTO stock (skitem, sklot, sklocn, skqty) VALUES ('01', 'LOT001', 'DEF', 100);

-- Stock disponible pour l'article 01, emplacement DEF, lot LOT002
-- DELETE FROM stock WHERE skitem = '01' AND sklot = 'LOT002';
-- INSERT INTO stock (skitem, sklot, sklocn, skqty) VALUES ('01', 'LOT002', 'DEF', 50);

-- ==============================================
-- 5. FACTURE 1 : Creation facture simple (en-tete + lignes)
-- ==============================================
-- Statut DOIT etre entre '1' et '5' pour apparaitre dans w_invoices
-- Periode comptable DOIT etre ouverte (base demo: '202202')
--
-- EN-TETE FACTURE
DELETE FROM invoicehead WHERE ihcode = 1;
INSERT INTO invoicehead (
    ihcode, ihcust, ihdate, ihcurr, ihstatus, ihsalval, ihtvaval, ihtotval,
    ihtypinv, ihcptper, ihprint, ihpaid
) VALUES (
    1,                          -- ihcode: numero facture
    '#########S',               -- ihcust: code client
    '2022-02-28',               -- ihdate: date de facture
    'EUR',                      -- ihcurr: devise
    '1',                        -- ihstatus: '1'=Creee (VISIBLE dans w_invoices)
    250.00,                     -- ihsalval: montant HT
    52.50,                      -- ihtvaval: montant TVA (21% de 250)
    302.50,                     -- ihtotval: montant TTC
    'I',                        -- ihtypinv: type facture (I=Inventaire/Standard)
    '202202',                   -- ihcptper: periode comptable ouverte
    'N',                        -- ihprint: non imprimee
    'N'                         -- ihpaid: non payee
);

-- LIGNES FACTURE
DELETE FROM invoiceline WHERE ilcode = 1;

-- Ligne 1: 5 pieces a 25.00 EUR
-- IMPORTANT: ilshipline et ilqtycust sont NOT NULL dans la table invoiceline
INSERT INTO invoiceline (ilcode, illine, iltype, ilshipline, ilitem, ilqty, ilqtycust, ilstdval, ilsalval, iltva, iltvaval, iltotval)
VALUES (1, 1, 'I', 0, '01', 5, 5, 25.00, 125.00, 21, 26.25, 151.25);

-- Ligne 2: 5 pieces a 25.00 EUR
INSERT INTO invoiceline (ilcode, illine, iltype, ilshipline, ilitem, ilqty, ilqtycust, ilstdval, ilsalval, iltva, iltvaval, iltotval)
VALUES (1, 2, 'I', 0, '01', 5, 5, 25.00, 125.00, 21, 26.25, 151.25);

-- ==============================================
-- 6. VENTILATION TVA facture 1
-- ==============================================
-- La table invoicetva stocke la ventilation par taux TVA
-- Normalement generee par invoicesalecalc(), mais necessaire pour coherence
DELETE FROM invoicetva WHERE itcode = 1;
INSERT INTO invoicetva (itcode, ittva, ittvaval, itbasetva)
VALUES (1, 21, 52.50, 250.00);
-- Taux TVA: 21%, Montant TVA: 52.50, Base TVA: 250.00

-- ==============================================
-- 7. FACTURE 2 : Facture alternative avec montants differents
-- ==============================================
DELETE FROM invoicehead WHERE ihcode = 2;
INSERT INTO invoicehead (
    ihcode, ihcust, ihdate, ihcurr, ihstatus, ihsalval, ihtvaval, ihtotval,
    ihtypinv, ihcptper, ihprint, ihpaid
) VALUES (
    2,                          -- ihcode: numero facture 2
    '#########S',               -- ihcust: meme client
    '2022-02-15',               -- ihdate: date anterieure
    'EUR',                      -- ihcurr: devise
    '1',                        -- ihstatus: Creee
    500.00,                     -- ihsalval: montant HT plus eleve
    105.00,                     -- ihtvaval: montant TVA (21% de 500)
    605.00,                     -- ihtotval: montant TTC
    'I',                        -- ihtypinv: type facture
    '202202',                   -- ihcptper: meme periode
    'N',                        -- ihprint: non imprimee
    'N'                         -- ihpaid: non payee
);

DELETE FROM invoiceline WHERE ilcode = 2;
INSERT INTO invoiceline (ilcode, illine, iltype, ilshipline, ilitem, ilqty, ilqtycust, ilstdval, ilsalval, iltva, iltvaval, iltotval)
VALUES (2, 1, 'I', 0, '01', 20, 20, 25.00, 500.00, 21, 105.00, 605.00);

DELETE FROM invoicetva WHERE itcode = 2;
INSERT INTO invoicetva (itcode, ittva, ittvaval, itbasetva)
VALUES (2, 21, 105.00, 500.00);

-- ==============================================
-- 8. FACTURE 3 : Facture avec statut different (Imprimee)
-- ==============================================
DELETE FROM invoicehead WHERE ihcode = 3;
INSERT INTO invoicehead (
    ihcode, ihcust, ihdate, ihcurr, ihstatus, ihsalval, ihtvaval, ihtotval,
    ihtypinv, ihcptper, ihprint, ihpaid
) VALUES (
    3,
    '#########S',
    '2022-02-10',
    'EUR',
    '2',                        -- ihstatus: '2'=Imprimee
    100.00,
    21.00,
    121.00,
    'I',
    '202202',
    'Y',                        -- ihprint: imprimee
    'N'
);

DELETE FROM invoiceline WHERE ilcode = 3;
INSERT INTO invoiceline (ilcode, illine, iltype, ilshipline, ilitem, ilqty, ilqtycust, ilstdval, ilsalval, iltva, iltvaval, iltotval)
VALUES (3, 1, 'I', 0, '01', 4, 4, 25.00, 100.00, 21, 21.00, 121.00);

DELETE FROM invoicetva WHERE itcode = 3;
INSERT INTO invoicetva (itcode, ittva, ittvaval, itbasetva)
VALUES (3, 21, 21.00, 100.00);

-- ==============================================
-- 9. Verification et affichage des donnees creees
-- ==============================================
-- Afficher les factures creees (doivent etre visibles dans w_invoices)
-- SELECT ihcode, ihcust, ihdate, ihstatus, ihsalval, ihtvaval, ihtotval, ihcptper
-- FROM invoicehead
-- WHERE ihcode IN (1, 2, 3)
-- ORDER BY ihcode;

-- Afficher les lignes factures
-- SELECT ilcode, illine, iltype, ilitem, ilqty, ilstdval, ilsalval, iltva
-- FROM invoiceline
-- WHERE ilcode IN (1, 2, 3)
-- ORDER BY ilcode, illine;

-- Afficher la ventilation TVA
-- SELECT itcode, ittva, ittvaval, itbasetva
-- FROM invoicetva
-- WHERE itcode IN (1, 2, 3)
-- ORDER BY itcode;

-- ==============================================
-- FIN DU SCRIPT
-- ==============================================
--
-- Pour verifier que les donnees ont ete inserees correctement:
--
-- 1. Ouvrir PMIX et se connecter (PMIGEST / NEW2012)
-- 2. Cliquer l'onglet "Fact. Ventes" dans le MDI
-- 3. Cliquer le bouton "2 - Maintenance facturation" (w_invoices)
-- 4. S'assurer que la periode affichee est "202202"
-- 5. Les 3 factures doivent apparaitre dans la liste (ihcode 1, 2, 3)
--
-- Note: Si les factures n'apparaissent pas:
-- - Verifier que ihstatus est dans la plage '1'-'5'
-- - Verifier que ihcptper = '202202' (ou la periode ouverte courante)
-- - Verifier que le client '#########S' existe (adcode, adactiv='Y')
