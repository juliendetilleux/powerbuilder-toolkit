# w_frame

- **Type**: Window
- **Ancetre**: window
- **Module**: _design
- **Description**: Frame (Design)

## Variables d'instance

| Variable | Type |
|----------|------|
| GWL_STYLE | int (constant) |
| WS_THICKFRAME | long (constant) |
| WS_SYSMENU | long (constant) |
| WS_CAPTION | long (constant) |
| WS_MINIMIZEBOX | long (constant) |
| WS_MAXIMIZEBOX | long (constant) |
| WS_OVERLAPPED | long (constant) |
| WS_BORDER | long (constant) |
| WS_OVERLAPPEDWINDOW | long (constant) |
| SC_SIZE | uint (constant) |
| SC_MOVE | uint (constant) |
| SC_MINIMIZE | uint (constant) |
| SC_MAXIMIZE | uint (constant) |
| SC_CLOSE | uint (constant) |
| SC_RESTORE | uint (constant) |
| MF_BYCOMMAND | uint (constant) |
| WM_SYSCOMMAND | uint (constant) |
| HTCAPTION | uint (constant) |
| WM_NCLBUTTONDOWN | uint (constant) |
| SPI_GETWORKAREA | long (constant) |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| GetWindowLongA(long hWindow, integer nIndex) | public | Calcule/retourne GetWindowLongA |
| SetWindowLongA(long hWindow, integer nIndex, long dwNewLong) | public | Calcule/retourne SetWindowLongA |
| SystemParametersInfo(ulong wActon, ulong wParam, REF str_size_screen pvParam, ulong fUpdateProfile) | public | Verifie SystemParametersInfo |
| GetSystemMetrics(int indexnum) | public | Fonction GetSystemMetrics |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| resize | Redimensionnement de la fenetre |
