# w_main

- **Type**: Window
- **Ancetre**: w_a_main_pmi
- **Module**: _ancestor
- **Lignes**: 18
- **Description**: Ancetre pour les fenetres autonomes (type Main). Utilise pour les fenetres qui ne sont pas des dialogues modaux mais des ecrans principaux independants : agendas, centres de messagerie, listes CRM, ecrans de test, etc.

## Heritage
- Ancetres: w_a_main_pmi > w_window > w_a_pmi > window (PB built-in)
- Descendants directs: 61 fenetres au total, dont w_manage_sscc, w_pmixpath, w_planified_task, w_intro, w_erp_pmix_fantome, w_debug_sql, ws_test, w_brf_stock_id_print, w_cashfood, w_workflows, w_crm_company_detail, w_crm_mailcenter, w_crm_mail_inbox, w_crm_agenda_week, w_crm_actions_list, w_qry_calendar, w_doc_view, w_calls, w_set_resize, w_web_interface, etc.

## Variables d'instance
Aucune variable d'instance propre.

## Fonctions
Aucune fonction propre.

## Evenements surcharges
Aucun evenement surcharge.

## Controles principaux
Aucun controle specifique.

## Dependances
- **Utilise**: w_a_main_pmi (heritage)
- **Utilise par**: 126+ references -- 61 fenetres descendants + utilise comme type de variable dans uo_crm_agenda_month
