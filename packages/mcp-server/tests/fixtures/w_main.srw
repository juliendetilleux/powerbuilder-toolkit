$PBExportHeader$w_main.srw
forward
global type w_main from w_master within test_lib
end type
end forward

global type w_main from w_master within test_lib
end type

type variables
private integer ii_count = 0
protected string is_title
end variables

event open;
SetTitle(is_title)
end event

event close;
end event

public function integer of_get_count()
return ii_count
end function

public subroutine of_set_count(integer ai_count)
ii_count = ai_count
end subroutine
