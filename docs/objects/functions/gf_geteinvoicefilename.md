# gf_geteinvoicefilename

- **Module**: `_edilink` (EDI - Echange de donnees)
- **Signature**: `string gf_geteinvoicefilename(long as_invoicenum, long as_invoiceid)`
- **Description**: Retourne le nom de fichier de facture electronique

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_invoicenum` | `long` | Chaine - invoicenum |
| `as_invoiceid` | `long` | Chaine - invoiceid |

## Appele par

- `nvo_createinvoice` (_sales)
- `w_cpt_invexp` (_ifcpt)
- `w_invoices_pdf` (_edilink)
- `w_invoices_peppol` (Shared_peppol)
- `w_invoicesproforma_pdf` (_edilink)
- `w_print` (_prints_std)
- `w_qry_cmpny_sal` (_query)

