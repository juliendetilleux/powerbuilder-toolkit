# w_planifiedtask_execute

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _system
- **Lignes**: 603
- **Description**: Execution des taches planifiees. Gere l'execution des procedures stockees, fonctions et rapports planifies.

## Heritage

w_main -> w_a_main_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `invo_planifiedtask : nvo_xtra_planifiedtask`
- `ii_timermax : integer`

## Fonctions

- `wf_task_launch(long) : void -- Lancement d'une tache`
- `wf_exec_storedproc(string) : integer -- Execution procedure stockee`
- `wf_exec_function(string) : integer -- Execution fonction`
- `wf_istimingok() : boolean -- Verification timing execution`
- `wf_nextdate(datetime, decimal) : datetime -- Calcul prochaine date execution`
- `wf_exec_report(string, string) : integer -- Execution rapport`

## Dependances

Voir les references croisees dans le module _system.
