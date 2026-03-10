# Flux Metier PMIX

Documentation des principaux processus metier de l'ERP PmiGest.

## Flux documentes

| Flux | Description | Modules concernes |
|------|-------------|-------------------|
| [Cycle de vente](sales-order.md) | Devis → Commande → Livraison → Facturation | _devis, _sales, _stock, _prints_std, _ifcpt |
| [Cycle d'achat](purchasing.md) | Demande → Commande → Reception → Facturation | _purch, _stock, _ifcpt |
| [Gestion de stock](stock-movement.md) | Entrees, sorties, transferts, inventaire | _stock, _stkbarcod |
| [Fabrication](manufacturing.md) | Ordre de fabrication → Gammes → Suivi → Cloture | _manufg, _methods, _planning, _stock |
| [CRM](crm-workflow.md) | Contacts → Actions → Suivi → Relances | _sales_crm |
| [Interface comptable](accounting-interface.md) | Ecritures comptables, clotures | _ifcpt, _monthclot |
| [Projets](project-management.md) | Projets, phases, couts, suivi | _projects |
| [Qualite](quality-control.md) | Controles, specifications, non-conformites | _quality |
| [Codes-barres](barcode-workflow.md) | Scan, preparation, expedition | _stkbarcod |
| [Impressions](printing-system.md) | Systeme d'impression, rapports | _prints_*, _FlxReport |
| [Administration](system-admin.md) | Configuration, profils, autorites | _system, _sysxtra |
| [EDI/Peppol](edi-peppol.md) | Echanges electroniques | _edilink, Shared_peppol |
