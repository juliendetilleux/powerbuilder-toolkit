$PBExportHeader$nvo_utils.sru
forward
global type nvo_utils from nonvisualobject
end type
end forward

global type nvo_utils from nonvisualobject
end type

type variables
private string is_version = "1.0"
end variables

public function string of_get_version()
return is_version
end function

public function string of_format_date(datetime adt_date)
return String(adt_date, "dd/mm/yyyy")
end function

public subroutine of_log(string as_message)
// log the message
end subroutine
