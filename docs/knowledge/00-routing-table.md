# Table de Routage PMIX

## Comment utiliser cette table

1. Identifier les mots-cles dans la question de l'utilisateur
2. Trouver le(s) domaine(s) correspondant(s) dans les tables ci-dessous
3. Lire le fichier knowledge indique
4. Si besoin de detail, plonger dans les docs detaillees

---

## 1. Routage par mot-cle / sujet

| Mot-cle / Sujet | Knowledge File | Docs detaillees |
|-----------------|----------------|-----------------|
| systeme, config, configuration | 01-core-system.md | docs/flux/system-admin.md |
| profil, profils, securite, autorites | 01-core-system.md | docs/database/tables/pfhead.md |
| utilisateur, users, login, connexion | 01-core-system.md | docs/database/tables/users.md |
| heritage, ancestor, w_a_pmi, w_response | 01-core-system.md | docs/architecture.md |
| resize, design, theme | 01-core-system.md | docs/modules/_design.md |
| multilingue, langue, traduction | 01-core-system.md | docs/modules/_langue.md |
| parametre, progparam, parameters | 01-core-system.md | docs/database/tables/progparam.md |
| MDI, frame, menu principal | 01-core-system.md | docs/objects/windows/w_erp_mdi_frame.md |
| --- | --- | --- |
| client, customer, tiers client | 02-masters-customers.md | docs/database/tables/adresses.md |
| adresse, adresses | 02-masters-customers.md | docs/database/tables/adresses.md |
| contact, contacts | 02-masters-customers.md | docs/database/tables/contacts.md |
| shipto, adresse livraison | 02-masters-customers.md | docs/database/tables/shipto.md |
| groupe client, adresgroup | 02-masters-customers.md | docs/database/tables/adresgroup.md |
| credit client, credit limit | 02-masters-customers.md | docs/database/tables/adresses.md |
| conditions paiement | 02-masters-customers.md | docs/database/tables/paymode.md |
| commercial, salesman | 02-masters-customers.md | docs/database/tables/salesman.md |
| --- | --- | --- |
| article, item, produit | 03-masters-items.md | docs/database/tables/items.md |
| unite de mesure, UOM, measures | 03-masters-items.md | docs/database/tables/measures.md |
| categorie article, itstat | 03-masters-items.md | docs/database/tables/itstat1.md |
| prix, tarif, rate, ratehead | 03-masters-items.md | docs/database/tables/ratehead.md |
| remise, discount, dischead | 03-masters-items.md | docs/database/tables/dischead.md |
| promotion, promohead | 03-masters-items.md | docs/database/tables/promohead.md |
| conditionnement, emballage, pack | 03-masters-items.md | docs/database/tables/itempack.md |
| donnee technique, techdata | 03-masters-items.md | docs/database/tables/techdata.md |
| lot, lots, tracabilite | 03-masters-items.md | docs/database/tables/lots.md |
| couleur, colors | 03-masters-items.md | docs/database/tables/colors.md |
| nutritionnel, car_nut | 03-masters-items.md | docs/database/tables/car_nut.md |
| --- | --- | --- |
| fournisseur, supplier | 04-masters-suppliers.md | docs/database/tables/adresses.md |
| fournisseur article, linkitad | 04-masters-suppliers.md | docs/database/tables/linkitad.md |
| groupe fournisseur | 04-masters-suppliers.md | docs/database/tables/adresgroup.md |
| --- | --- | --- |
| commande vente, sales order, salhead | 05-sales-orders.md | docs/flux/sales-order.md |
| ligne vente, salline | 05-sales-orders.md | docs/database/tables/salline.md |
| devis, quotes, offre | 05-sales-orders.md | docs/database/tables/quotes.md |
| confirmation commande | 05-sales-orders.md | docs/flux/sales-order.md |
| allocation, matallocs | 05-sales-orders.md | docs/database/tables/matallocs.md |
| --- | --- | --- |
| caisse, cash, cloture caisse, POS, ticket | 06b-sales-cash.md | docs/knowledge/06b-sales-cash.md |
| INVCASH, DIRECTSAL, CASHTUCHS | 06b-sales-cash.md | docs/knowledge/06b-sales-cash.md |
| w_invoice_cash, nvo_invoice_cash | 06b-sales-cash.md | docs/knowledge/06b-sales-cash.md |
| vente directe, direct sale | 06b-sales-cash.md | docs/knowledge/06b-sales-cash.md |
| facture, invoice, invoicehead | 06-sales-invoicing.md | docs/database/tables/invoicehead.md |
| ligne facture, invoiceline | 06-sales-invoicing.md | docs/database/tables/invoiceline.md |
| TVA, tvalvl | 06-sales-invoicing.md | docs/database/tables/tvalvl.md |
| note de credit, avoir | 06-sales-invoicing.md | docs/database/tables/invoicehead.md |
| proforma, profohead | 06-sales-invoicing.md | docs/database/tables/profohead.md |
| sous-traitance, SUBHEAD | 06-sales-invoicing.md | docs/database/tables/SUBHEAD.md |
| --- | --- | --- |
| expedition, livraison, shipment, shiphead | 07-sales-shipping.md | docs/database/tables/shiphead.md |
| ligne expedition, shipline | 07-sales-shipping.md | docs/database/tables/shipline.md |
| colis, colisage, shippack | 07-sales-shipping.md | docs/database/tables/colisage.md |
| camion, truck, transport | 07-sales-shipping.md | docs/database/tables/truckhead.md |
| tournee, turnhead | 07-sales-shipping.md | docs/database/tables/turnhead.md |
| etiquette, label, ETIQ | 07-sales-shipping.md | docs/database/tables/labelconfig.md |
| SSCC, ssccline | 07-sales-shipping.md | docs/database/tables/ssccline.md |
| FedEx | 07-sales-shipping.md, 18-integrations.md | docs/modules/_fedex.md |
| --- | --- | --- |
| CRM, relation client | 08-sales-crm.md | docs/flux/crm-workflow.md |
| action CRM, adrsactions | 08-sales-crm.md | docs/database/tables/adrsactions.md |
| societe CRM, company | 08-sales-crm.md | docs/database/tables/adresses.md |
| workflow, workflowhead | 08-sales-crm.md | docs/database/tables/workflowhead.md |
| mailing, sendmail, email | 08-sales-crm.md | docs/database/tables/sendmail.md |
| SmartSales | 08-sales-crm.md | docs/database/tables/smartsales_actio.md |
| pipeline, entonnoir | 08-sales-crm.md | docs/flux/crm-workflow.md |
| relance | 08-sales-crm.md | docs/flux/crm-workflow.md |
| --- | --- | --- |
| achat, purchase, commande achat, purhead | 09-purchasing.md | docs/flux/purchasing.md |
| ligne achat, purline | 09-purchasing.md | docs/database/tables/purline.md |
| contrat achat, purcnthead | 09-purchasing.md | docs/database/tables/purcnthead.md |
| facture fournisseur, purinvhead | 09-purchasing.md | docs/database/tables/purinvhead.md |
| demande achat, purreqhead | 09-purchasing.md | docs/database/tables/purreqhead.md |
| reception, toreception | 09-purchasing.md | docs/database/tables/toreception.md |
| --- | --- | --- |
| stock, stocks, inventaire | 10-stock.md | docs/flux/stock-movement.md |
| mouvement stock, histostock | 10-stock.md | docs/database/tables/histostock.md |
| emplacement, location, locations | 10-stock.md | docs/database/tables/locations.md |
| transfert stock | 10-stock.md | docs/flux/stock-movement.md |
| inventaire cyclique, cycnthead | 10-stock.md | docs/database/tables/cycnthead.md |
| numero serie, serialnum | 10-stock.md | docs/database/tables/serialnum.md |
| transaction stock, transactions | 10-stock.md | docs/database/tables/transactions.md |
| --- | --- | --- |
| code-barres, barcode, scanner | 11-barcode.md | docs/flux/barcode-workflow.md |
| picking, preparation | 11-barcode.md | docs/flux/barcode-workflow.md |
| scan, lecture | 11-barcode.md | docs/modules/_stkbarcod.md |
| EAN, ean128 | 11-barcode.md | docs/database/tables/ean128.md |
| --- | --- | --- |
| fabrication, manufacturing, OF, ordre fabrication | 12-manufacturing.md | docs/flux/manufacturing.md |
| mfghead, ordre de fabrication | 12-manufacturing.md | docs/database/tables/mfghead.md |
| operation, mfgwcreqs | 12-manufacturing.md | docs/database/tables/mfgwcreqs.md |
| nomenclature, BOM, bomhead | 12-manufacturing.md | docs/database/tables/bomhead.md |
| gamme, routline, routing | 12-manufacturing.md | docs/database/tables/routline.md |
| poste de charge, workcenter | 12-manufacturing.md | docs/database/tables/workcenters.md |
| machine | 12-manufacturing.md | docs/database/tables/machine.md |
| cellule, CELLS | 12-manufacturing.md | docs/database/tables/CELLS.md |
| co-produit, mfgcoitem | 12-manufacturing.md | docs/database/tables/mfgcoitem.md |
| MES | 12-manufacturing.md | docs/modules/_manufg.md |
| --- | --- | --- |
| planning, planification, ordonnancement | 13-planning.md | docs/modules/_planning.md |
| MRP, CBN, calcul besoins | 13-planning.md | docs/database/tables/matplan.md |
| prevision, forecast, fcsthead | 13-planning.md | docs/database/tables/fcsthead.md |
| calendrier, calhead | 13-planning.md | docs/database/tables/calhead.md |
| horaire, hourly | 13-planning.md | docs/database/tables/hourly.md |
| charge, capacite | 13-planning.md | docs/database/tables/wcplan.md |
| ordonnancement avance, advsched | 13-planning.md | docs/database/tables/advsched_lastdel.md |
| --- | --- | --- |
| projet, affaire, filehead | 14-projects.md | docs/flux/project-management.md |
| phase projet, projstep | 14-projects.md | docs/database/tables/projstep.md |
| cout projet, projmat, projlab | 14-projects.md | docs/database/tables/projmat.md |
| appel offre, call | 14-projects.md | docs/database/tables/callhead.md |
| service, maintenance, srvcentity | 14-projects.md | docs/database/tables/srvcentity.md |
| --- | --- | --- |
| qualite, controle qualite, QC | 15-quality.md | docs/flux/quality-control.md |
| test qualite, qctest | 15-quality.md | docs/database/tables/qctest.md |
| specification, qcspechead | 15-quality.md | docs/database/tables/qcspechead.md |
| non-conformite, reclamation, claims | 15-quality.md | docs/database/tables/claims.md |
| --- | --- | --- |
| comptabilite, ecriture comptable | 16-accounting.md | docs/flux/accounting-interface.md |
| interface comptable, ifcpt | 16-accounting.md | docs/database/tables/ifcpt.md |
| imputation comptable, imputcpt | 16-accounting.md | docs/database/tables/imputcpt.md |
| cloture, cloture mensuelle | 16-accounting.md | docs/database/tables/clotperiod.md |
| devise, currencies | 16-accounting.md | docs/database/tables/currencies.md |
| mode paiement, paymode | 16-accounting.md | docs/database/tables/paymode.md |
| caisse, cash, CASHPARAM | 16-accounting.md | docs/database/tables/CASHPARAM.md |
| ticket, tickethead | 16-accounting.md | docs/database/tables/tickethead.md |
| --- | --- | --- |
| impression, rapport, print, report | 17-reporting.md | docs/flux/printing-system.md |
| FlexReport, FLXR | 17-reporting.md | docs/modules/_FlxReport.md |
| requete, query, infocentre | 17-reporting.md | docs/modules/_query.md |
| tableau de bord, dashboard | 17-reporting.md | docs/modules/_dashboard.md |
| --- | --- | --- |
| EDI, echange electronique | 18-integrations.md | docs/flux/edi-peppol.md |
| Peppol, facture electronique | 18-integrations.md | docs/modules/Shared_peppol.md |
| FTP, transfert fichier | 18-integrations.md | docs/modules/_ftp.md |
| email, mail, Shared_mail | 18-integrations.md | docs/modules/Shared_mail.md |
| API, PmiEngine | 18-integrations.md | docs/modules/Shared_PmiEngineAPI.md |
| TVA VIES, validation TVA | 18-integrations.md | docs/modules/_webservicevat.md |
| WMS, warehouse management | 18-integrations.md | docs/database/tables/import_wms.md |
| web, commande web | 18-integrations.md | docs/database/tables/websalhead.md |
| --- | --- | --- |
| personnalisation, extension, sysxtra | 19-customization.md | docs/modules/_sysxtra.md |
| surcharge, override | 19-customization.md | docs/modules/_sysxtra.md |
| custom, cust, developpement specifique | 19-customization.md | docs/modules/_cust2.md |
| template, Cust_Empty | 19-customization.md | docs/modules/Cust_Empty.md |
| --- | --- | --- |
| agenda, calendrier, rendez-vous | 20-tools-admin.md | docs/modules/_agenda.md |
| pad, editeur texte, notes | 20-tools-admin.md | docs/modules/_pad.md |
| GDPR, RGPD | 20-tools-admin.md | docs/modules/_gdpr.md |
| espion DW, debug DataWindow, XDWSpy | 20-tools-admin.md | docs/modules/_XDWSpy.md |
| caisse POS, vente directe | 20-tools-admin.md | docs/modules/_sales_cash.md |
| agroalimentaire, food | 20-tools-admin.md | docs/modules/_sales_food.md |

---

## 2. Routage par table DB

| Table | Knowledge File |
|-------|---------------|
| adresses | 02-masters-customers.md (client), 04-masters-suppliers.md (fournisseur) |
| contacts | 02-masters-customers.md |
| shipto | 02-masters-customers.md |
| items | 03-masters-items.md |
| lots | 03-masters-items.md, 10-stock.md |
| measures | 03-masters-items.md |
| ratehead, rateline | 03-masters-items.md |
| dischead, discline | 03-masters-items.md |
| salhead | 05-sales-orders.md |
| salline | 05-sales-orders.md |
| quotes | 05-sales-orders.md |
| invoicehead | 06-sales-invoicing.md |
| invoiceline | 06-sales-invoicing.md |
| invoicetva | 06-sales-invoicing.md |
| profohead | 06-sales-invoicing.md |
| SUBHEAD | 06-sales-invoicing.md |
| shiphead | 07-sales-shipping.md |
| shipline | 07-sales-shipping.md |
| colisage | 07-sales-shipping.md |
| truckhead | 07-sales-shipping.md |
| adrsactions | 08-sales-crm.md |
| workflowhead | 08-sales-crm.md |
| sendmail | 08-sales-crm.md |
| purhead | 09-purchasing.md |
| purline | 09-purchasing.md |
| purcnthead | 09-purchasing.md |
| purinvhead | 09-purchasing.md |
| purreqhead | 09-purchasing.md |
| stocks | 10-stock.md |
| locations | 10-stock.md |
| histostock | 10-stock.md |
| transactions | 10-stock.md |
| cycnthead | 10-stock.md |
| mfghead | 12-manufacturing.md |
| mfgwcreqs | 12-manufacturing.md |
| bomhead | 12-manufacturing.md |
| bomline | 12-manufacturing.md |
| routline | 12-manufacturing.md |
| workcenters | 12-manufacturing.md |
| machine | 12-manufacturing.md |
| matplan | 13-planning.md |
| fcsthead | 13-planning.md |
| calhead | 13-planning.md |
| filehead | 14-projects.md |
| projhead | 14-projects.md |
| srvcentity | 14-projects.md |
| qctest | 15-quality.md |
| qcspechead | 15-quality.md |
| claims | 15-quality.md |
| ifcpt | 16-accounting.md |
| clotperiod | 16-accounting.md |
| currencies | 16-accounting.md |
| tvalvl | 16-accounting.md |
| paymode | 16-accounting.md |
| progparam | 01-core-system.md |
| users | 01-core-system.md |
| pfhead | 01-core-system.md |
| programs | 01-core-system.md |
| FLXR_CUSTOMIZATION | 17-reporting.md |
| edilink | 18-integrations.md |
| fedex_parameter | 18-integrations.md |

---

## 3. Routage par prefixe de fenetre PB

| Prefixe | Knowledge File |
|---------|---------------|
| w_system_* | 01-core-system.md |
| w_profils_* | 01-core-system.md |
| w_erp_mdi_* | 01-core-system.md |
| w_customer_*, w_adres_* | 02-masters-customers.md |
| w_item_* | 03-masters-items.md |
| w_supplier_* | 04-masters-suppliers.md |
| w_salhead_*, w_salline_*, w_sales_order_* | 05-sales-orders.md |
| w_invhead_*, w_sales_inv_*, w_invoice_* | 06-sales-invoicing.md |
| w_ship_*, w_bcd_ship_* | 07-sales-shipping.md |
| w_crm_* | 08-sales-crm.md |
| w_gpurchase*, w_purchase_*, w_list_purchase* | 09-purchasing.md |
| w_stock_*, w_transact_*, w_trf_* | 10-stock.md |
| w_brf_*, w_bcd_* | 11-barcode.md |
| w_mfg_*, w_launchorder* | 12-manufacturing.md |
| w_plan_*, w_forecast_* | 13-planning.md |
| w_project_*, w_file_*, w_calls* | 14-projects.md |
| w_qc_*, w_quality_* | 15-quality.md |
| w_ifcpt_*, w_clot_* | 16-accounting.md |
| w_qry_*, w_doc_view* | 17-reporting.md |
| w_edi_*, w_fedex_*, w_web_* | 18-integrations.md |
| w_xtra_* | 19-customization.md |
| w_pad_*, w_agenda_* | 20-tools-admin.md |

---

## 4. Routage par module PB

| Module | Knowledge File(s) |
|--------|-------------------|
| _ancestor | 01-core-system.md |
| _system | 01-core-system.md |
| _general | 01-core-system.md |
| _design | 01-core-system.md |
| _langue | 01-core-system.md |
| _masters | 02-masters-customers.md, 03-masters-items.md, 04-masters-suppliers.md |
| _sales | 05-sales-orders.md, 06-sales-invoicing.md |
| _devis | 05-sales-orders.md |
| _sales_crm | 08-sales-crm.md |
| _sales_cash | 20-tools-admin.md |
| _sales_food | 20-tools-admin.md |
| _purch | 09-purchasing.md |
| _stock | 10-stock.md |
| _stkbarcod | 11-barcode.md |
| _manufg | 12-manufacturing.md |
| _methods | 12-manufacturing.md |
| _planning | 13-planning.md |
| _projects | 14-projects.md |
| _services | 14-projects.md |
| _quality | 15-quality.md |
| _ifcpt | 16-accounting.md |
| _monthclot | 16-accounting.md |
| _query | 17-reporting.md |
| _prints_std | 17-reporting.md |
| _prints_mod | 17-reporting.md |
| _prints_mod2t | 17-reporting.md |
| _prints_qry | 17-reporting.md |
| _prints_crm | 17-reporting.md |
| _prints_clot | 17-reporting.md |
| _FlxReport | 17-reporting.md |
| _dashboard | 17-reporting.md |
| _fedex | 18-integrations.md |
| _edilink | 18-integrations.md |
| Shared_peppol | 18-integrations.md |
| Shared_mail | 18-integrations.md |
| Shared_PmiEngineAPI | 18-integrations.md |
| _webservicevat | 18-integrations.md |
| _ftp | 18-integrations.md |
| _sysxtra | 19-customization.md |
| _cust2 | 19-customization.md |
| Cust_Empty | 19-customization.md |
| cust_peppol | 19-customization.md |
| _pad | 20-tools-admin.md |
| _agenda | 20-tools-admin.md |
| _XDWSpy | 20-tools-admin.md |
| _gdpr | 20-tools-admin.md |
| _pmix_logo | 01-core-system.md |
| pmix | 01-core-system.md |
| shared_test | 01-core-system.md |

---

## 5. Questions transversales

Certaines questions touchent plusieurs domaines. Voici les combinaisons frequentes :

| Question type | Knowledge Files a lire |
|---------------|----------------------|
| "Cycle de vente complet" | 05 + 06 + 07 |
| "De la commande a la facture" | 05 + 06 |
| "Fabrication et stock" | 12 + 10 |
| "Achat et reception" | 09 + 10 |
| "Impact sur la compta" | domaine source + 16 |
| "CRM et ventes" | 08 + 05 |
| "Planification et fabrication" | 13 + 12 |
| "Expedition et code-barres" | 07 + 11 |
| "Qualite en fabrication" | 15 + 12 |
| "Projet et facturation" | 14 + 06 |
