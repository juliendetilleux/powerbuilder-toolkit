# n_runandwait

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _ftp
- **Description**: Objet utilisateur - gestion DataWindow

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_terminate | Boolean |
| il_millsecs | long |
| INFINITE | long (Constant) |
| WAIT_ABANDONED | long (Constant) |
| WAIT_COMPLETE | long (Constant) |
| WAIT_OBJECT_0 | long (Constant) |
| WAIT_TIMEOUT | long (Constant) |
| SW_HIDE | long (Constant) |
| SW_SHOWNORMAL | long (Constant) |
| SW_NORMAL | long (Constant) |
| SW_SHOWMINIMIZED | long (Constant) |
| SW_SHOWMAXIMIZED | long (Constant) |
| SW_MAXIMIZE | long (Constant) |
| SW_SHOWNOACTIVATE | long (Constant) |
| SW_SHOW | long (Constant) |
| SW_MINIMIZE | long (Constant) |
| SW_SHOWMINNOACTIVE | long (Constant) |
| SW_SHOWNA | long (Constant) |
| SW_RESTORE | long (Constant) |
| SW_SHOWDEFAULT | long (Constant) |
| SW_FORCEMINIMIZE | long (Constant) |
| SW_MAX | long (Constant) |
| STARTF_USESHOWWINDOW | long (Constant) |
| STARTF_USESIZE | long (Constant) |
| STARTF_USEPOSITION | long (Constant) |
| STARTF_USECOUNTCHARS | long (Constant) |
| STARTF_USEFILLATTRIBUTE | long (Constant) |
| STARTF_RUNFULLSCREEN | long (Constant) |
| STARTF_FORCEONFEEDBACK | long (Constant) |
| STARTF_FORCEOFFFEEDBACK | long (Constant) |
| STARTF_USESTDHANDLES | long (Constant) |
| STARTF_USEHOTKEY | long (Constant) |
| CREATE_DEFAULT_ERROR_MODE | long (Constant) |
| CREATE_FORCEDOS | long (Constant) |
| CREATE_NEW_CONSOLE | long (Constant) |
| CREATE_NEW_PROCESS_GROUP | long (Constant) |
| CREATE_NO_WINDOW | long (Constant) |
| CREATE_SEPARATE_WOW_VDM | long (Constant) |
| CREATE_SHARED_WOW_VDM | long (Constant) |
| CREATE_SUSPENDED | long (Constant) |
| CREATE_UNICODE_ENVIRONMENT | long (Constant) |
| DEBUG_PROCESS | long (Constant) |
| DEBUG_ONLY_THIS_PROCESS | long (Constant) |
| DETACHED_PROCESS | long (Constant) |
| HIGH_PRIORITY_CLASS | long (Constant) |
| IDLE_PRIORITY_CLASS | long (Constant) |
| NORMAL_PRIORITY_CLASS | long (Constant) |
| REALTIME_PRIORITY_CLASS | long (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| CreateProcess(String lpApplicationName, String lpCommandLine, long lpProcessAttributes, ...) : Boolean | Public | Fonction publique |
| WaitForSingleObject(long hHandle, long dwMilliseconds) : long | Public | Fonction publique |
| CloseHandle(long hObject) : Boolean | Public | Fonction publique |
| GetExitCodeProcess(long hProcess, long lpExitCode) : Boolean | Public | Fonction publique |
| TerminateProcess(long hProcess, long uExitCode) : Boolean | Public | Fonction publique |
| ShellExecuteEx(SHELLEXECUTEINFO lpExecInfo) : boolean | Public | Fonction publique |
| ExpandEnvironmentStrings(String lpSrc, String lpDst, Long nSize) : Long | Public | Fonction publique |
| of_run(string as_exefullpath, windowstate a_windowstate) : long | Public | Fonction publique |
| of_shellrun(string as_filename, string as_shellverb, long al_showwindow) : long | Public | Fonction publique |
| of_shellrun(string as_filename, string as_shellverb, trigevent a_windowstate) : long | Public | Fonction publique |
| of_shellrun(string as_filename, string as_shellverb, windowstate a_windowstate) : long | Public | Fonction publique |
| of_get_shellexecute(string as_filename, string as_shellverb) : string | Public | Fonction publique |
| of_run(string as_exefullpath, trigevent a_windowstate) : long | Public | Fonction publique |
| of_set_options(boolean ab_terminate, decimal adec_seconds) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
