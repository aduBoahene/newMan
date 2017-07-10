

$(function(){
	//checkScreen();
	window.addEventListener("resize", myFunction);
});

function myFunction(){
	//alert("screen sized has changed");
		if($(window).width() < 481)
{    // It’s a Phone.
	alert("This is a phone screen");
	$("#toBeChangedFibre").text("MTN�s Broadband is a high speed Fibre broadband service for Homes, Offices, Communities and housing estates which brings you high speed internet service.");
	$("#toBeChangedwhy").text("Super-fast internet speeds.Rapid and reliable internet access.Greater bandwidth for customers.");
	$("#ttoBeChangedFeat").text("Wide range of packages to choose from Data speeds of up to 60Mbps Uninterrupted Internet Access.");
	$("#toBeChangedPay").text("For one-time installation payment kindly walk into any of our Service centers and make a payment into your account.");


}

else if($(window).width() < 769)
{    // It’s a tablet.
	alert("this is a tablet screen");
}
else { 
//It’s a desktop/laptop.
	alert("this is a laptop screen");
	$("#toBeChangedFibre").text("MTN’S BROADBAND IS A HIGH SPEED FIBRE BROADBAND SERVICE FOR HOMES, OFFICES, COMMUNITIES AND HOUSING ESTATES. MTN FIBRE BROADBAND BRINGS YOU HIGH SPEED INTERNET SERVICE SO YOU SURF THE INTERNET, STREAM CABLE TV CHANNELS,PLAY ONLINE GAMES, ENJOY CLEARER VIDEO CALLING AND DO SO MUCH MORE.");
	$("#toBeChangedwhy").text("SUPER-FAST INTERNET SPEEDS.RAPID AND RELIABLE INTERNET ACCESS.GREATER BANDWIDTH FOR CUSTOMERS.");
	$("#ttoBeChangedFeat").text("WIDE RANGE OF PACKAGES TO CHOOSE FROM DATA SPEEDS OF UP TO 60MBPS UNINTERRUPTED INTERNET ACCESS AFFORDABLE AND RELIABLE FIXED INTERNET AT HOME/OFFICE ACCESS TO ADDITIONAL SERVICES INCLUDING FIXED LINES, VIDEO-ON-DEMAND, ONLINE GAMES, VIDEO CONFERENCING SOLUTIONS ETC. FASTER SPEED THAN COPPER AND WIRELESS PROFESSIONAL TECHNICAL SUPPORT EASY TOP UP VIA CHEQUE, MTN MOBILE MONEY AND MTN AIRTIME");
	$("#toBeChangedPay").text("For one-time installation payment kindly walk into any of our Service centers and make a payment into your account.");


}
}


function checkScreen(){
	if($(window).width() < 481)
{    // It’s a Phone.
	alert("This is a phone screen");
}

else if($(window).width() < 769)
{    // It’s a tablet.
	alert("this is a tablet screen");
}
else { 
//It’s a desktop/laptop.
	alert("this is a laptop screen");
}
}



