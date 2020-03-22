var rand =  Math.floor(Math.random()*101);
a = [];


function next_time()
{
	alert("The random number was "+rand);
}
function help1()
{
	if(rand%2==0)
	{
		document.getElementById('help1').innerHTML = "number is even \n";	
	}
	else if(rand%3==0)
	{
		document.getElementById('help1').innerHTML = "number is odd\n";	
	}
}

function win()
{
	alert("ok you win");
}

function exit()
{
	location.reload();
}


function help2()
{
	if(rand<50)
	{
		document.getElementById('help2').innerHTML = " less than 50";	
		if(rand<40)
		{
			document.getElementById('help2').innerHTML = " less than 40";
			if(rand<30)
			{
				document.getElementById('help2').innerHTML = " less than 30";
				if(rand<20)
				{
					document.getElementById('help2').innerHTML = " less than 20";
					if(rand<10)
					{
						document.getElementById('help2').innerHTML = " less than 10";
						if(rand<5)
						{
							document.getElementById('help2').innerHTML = " less than 5";	
						}
						else
						{
							document.getElementById('help2').innerHTML = " greater than 5";
						}	
					}
					else
						{
							document.getElementById('help2').innerHTML = " greater than 10";
						}
				}
				else
						{
							document.getElementById('help2').innerHTML = " greater than 20";
						}	
	                 }
			else
						{
							document.getElementById('help2').innerHTML = " greater than 30";
						}	
		}
		else
						{
							document.getElementById('help2').innerHTML = " greater than 40";
						}
	}
	else
	{
		document.getElementById('help2').innerHTML = "  greater  than 50";	
		if(rand>60)
		{
			document.getElementById('help2').innerHTML = "  greater than 60";
			if(rand>70)
			{
				document.getElementById('help2').innerHTML = " greater than 70";
				if(rand>80)
				{
					document.getElementById('help2').innerHTML = " greater  than 80";
					if(rand>90)
					{
						document.getElementById('help2').innerHTML = " greater than 90";
						if(rand>95)
						{
							document.getElementById('help2').innerHTML = " greater than 95";	
						}
						else
						{
							document.getElementById('help2').innerHTML = " less than 95";
						}	
					}
					else
					{
						document.getElementById('help2').innerHTML = " less than 90";
					}
				}
				else
				{
					document.getElementById('help2').innerHTML = " less than 80";
				}	
	                 }
			else
			{
				document.getElementById('help2').innerHTML = " less than 70";
			}	
		}
		else
		{
			document.getElementById('help2').innerHTML = " less than 60";
		}
	}
}
function new_element(){
	num = document.getElementById('array').value;
	n = a.push(num);
	if(n == 10 || num == rand)
	{
		if(n == 10)
			{
				next_time();
			}
		if(num == rand)
			{
				win();
			}
			exit();
	}
	document.getElementById('count').innerHTML = "Guess left:- " + (10-n);
	document.getElementById('show').innerHTML = "";
	help1();
	help2();
	for(x in a)
	{
		document.getElementById('show').innerHTML += a[x];
		document.getElementById('show').innerHTML += " ";	
	}
}