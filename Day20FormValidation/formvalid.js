function formvalidation()
{
var vmission = document.registration.mission.value;
var vservice = document.registration.service.value;
var vsex = document.registration.sex.value;
var vmstat = document.registration.maritalstatus.value;



var vgivenname = document.registration.givenname.value;
var vprevnamecheck = document.registration.prevnamecheck;
var vdob = document.registration.dob.value;
var vpob = document.registration.pob.value;
var qual = document.registration.qualification;
var vadd = document.registration.address.value;
var vmobile = document.registration.mobile.value;
vexisp = document.registration.exisp.value;
vexipno=document.registration.exipno.value;

if (namevalid(vgivenname))
{
if(mis_valid(vmission))
{
if(service_valid(vservice))
{
if(sex_valid(vsex))
{
if(mar_valid(vmstat))
{
alert('Validated');
}
}
}
}
}
return false;
}

function mis_valid(vmission)
{
	if(vmission=="Default")
	{
	alert('Mission Required');	
	return false;
		
	}
	else
	{
		return true;
	}
}
function service_valid(vservice)
{
	if(vservice=="Default")
	{
		
		alert('Select Service Required');return false;
	}
	else
	{
		return true;
	}
}
function sex_valid(vsex)
{
	if(vsex=="Default")
	{
		
		alert('Select Sex');return false;
	}
	else
	{
		return true;
	}
}
function mar_valid(vmstat)
{
	if(vmstat=="Default")
	{
		
		alert('Marital Status Required');return false;
	}
	else
	{
		return true;
	}
}
function namevalid(vgivenname)
{
if(vgivenname.length <= 0)
{
	alert('Please enter given name');
	return false;
}	
else
{
	return true;
}
}



