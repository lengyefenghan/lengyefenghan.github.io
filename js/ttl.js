if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))
{
	document.write("<" + "link href=\"../css/ttlpe.css \" rel=\"stylesheet\" type=\"text/css\"></" + "link>");
}
else
{
	document.write("<" + "link href=\"../css/ttlpc.css \" rel=\"stylesheet\" type=\"text/css\"></" + "link>");
}
function navbt(){
var flag=document.getElementById("navbtn");
	if (flag.style.display == "inline-block")
	{
		flag.style.display = "none";
	}
	else
	{
		flag.style.display = "inline-block";
	}
}
