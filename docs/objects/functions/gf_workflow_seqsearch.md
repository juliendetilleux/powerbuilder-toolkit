# gf_workflow_seqsearch

- **Module**: `_sales_crm` (CRM - Gestion de la relation client)
- **Signature**: `integer gf_workflow_seqsearch(integer ai_head, integer ai_seq)`
- **Description**: Recherche sequentielle dans le workflow

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `ai_head` | `integer` | Entier - head |
| `ai_seq` | `integer` | Entier - seq |

## Appele par

- `gf_workflow` (_sales_crm)
- `gf_workflow_launch` (_sales_crm)
- `w_crm_action_group` (_sales_crm)
- `w_devis` (_devis)
- `w_dvi_offer_launch` (_devis)

