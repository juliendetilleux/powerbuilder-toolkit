# n_cst_crypto

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _cust2
- **Description**: Classe de service pour le chiffrement et dechiffrement de donnees

## Variables d'instance

Aucune variable d'instance definie.

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| DecryptNumber(string sNumber) : ulong | Public | Dechiffre un numero |
| EncryptNumber(ulong lnumber) : string | Public | Chiffre un numero |
| decryptdata(string data, string password) : string | Public | Dechiffre des donnees avec un mot de passe |
| encryptdata(string data, string password) : string | Public | Chiffre des donnees avec un mot de passe |
| encryptdecrypt(string data, string password, boolean encrypt) : string | Public | Chiffre ou dechiffre des donnees selon le parametre |
| getcspdetails() : string | Public | Retourne les details du fournisseur de services cryptographiques |

## Evenements

| Evenement | Description |
|-----------|-------------|
| _readme | Documentation interne |
