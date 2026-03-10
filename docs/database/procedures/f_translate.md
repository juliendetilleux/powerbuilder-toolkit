# Function: f_translate

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @translate | VARCHAR(50 | IN |

## Retourne
`VARCHAR(50)`

## Source
```sql
create FUNCTION f_translate( IN @translate VARCHAR(50))
RETURNS VARCHAR(50)
NOT DETERMINISTIC
BEGIN
	CASE @translate
    WHEN 'Monday' THEN
        SET @translate = 'Lundi';
    WHEN 'Tuesday' THEN
         SET @translate = 'Mardi';
	WHEN 'Wednesday' THEN
        SET @translate = 'Mercredi';
	WHEN 'Thursday' THEN
        SET @translate = 'Jeudi';
	WHEN 'Friday' THEN
        SET @translate = 'Vendredi';
	WHEN 'Saturday' THEN
        SET @translate = 'Samedi';
    WHEN 'Sunday' THEN
       SET @translate = 'Dimanche';
    WHEN 'January' THEN
       SET @translate = 'Janvier';
    WHEN 'February' THEN
       SET @translate = 'F�vrier';
    WHEN 'March' THEN
       SET @translate = 'Mars';
    WHEN 'April' THEN
       SET @translate = 'Avril';
    WHEN 'May' THEN
       SET @translate = 'Mai';
    WHEN 'June' THEN
       SET @translate = 'Juin';
    WHEN 'July' THEN
       SET @translate = 'Juillet';
    WHEN 'August' THEN
       SET @translate = 'Ao�t';
    WHEN 'September' THEN
       SET @translate = 'Septembre';
    WHEN 'October' THEN
       SET @translate = 'Octobre';
    WHEN 'November' THEN
       SET @translate = 'Novembre';
    WHEN 'December' THEN
       SET @translate = 'D�cembre';
    END CASE;
	RETURN @translate;
END
```
