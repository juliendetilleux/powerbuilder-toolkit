# nvo_com_synchronize

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _edilink
- **Description**: Objet d'integration EDI

## Variables d'instance

| Variable | Type |
|----------|------|
| is_trans_sqlerrtext | String |
| is_sqlca_sqlerrtext | String |
| is_salesman | String |
| idt_lastsync | DateTime |
| ib_ForceCentral2Comm | Boolean |
| is_SYNCALL | String |
| ii_SYNCIDL | Integer |
| idt_SYNCDAT | DateTime |
| il_currshcode | Long |
| il_shcodes_tab | Long[] |
| il_reserved_tab | Long[] |
| il_empty_tab | Long[] |
| iS_Args | String[] |
| iT_Args | DateTime[] |
| iL_Args | Long[] |
| timermsg | string |
| ii_SYNCDELD | integer |
| is_SYNCALL_com | string |
| ib_connect | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| del_syncsales() : boolean | Public | Fonction publique |
| uof_ret_tab(string as_string, string as_tab[]) : long | Public | Fonction utilisateur publique |
| synchronize(string as_datastore, string as_columnnames[], string as_text, ...) : integer | Public | Fonction publique |
| dbdisconnect() : boolean | Public | Fonction publique |
| synchro_central2comm(boolean as_tab[]) : boolean | Public | Fonction publique |
| synchronisation_master(boolean as_tab[]) : boolean | Public | Fonction publique |
| dbconnect() : boolean | Public | Fonction publique |
| synchronisation() : boolean | Public | Fonction publique |
| synclines(long al_shcode) : boolean | Public | Fonction publique |
| synchro_comm2central() : boolean | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
