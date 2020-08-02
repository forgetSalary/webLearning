var debbug = function(confirm){
	if (confirm){
		var sS=document.styleSheets[0];
		var rules = sS.cssRules?sS.cssRules:ss.rules;		

		var debbugOutline=["* { outline: 2px dotted red; }",
							"* * { outline: 2px dotted green; }",
							"* * * { outline: 2px dotted orange; }",
							"* * * * { outline: 2px dotted blue; }",
							"* * * * * { outline: 1px solid red; }",
							"* * * * * * { outline: 1px solid green; }",
							"* * * * * * * { outline: 1px solid orange; }",
							"* * * * * * * * { outline: 1px solid blue; }"];

		

		for (i in debbugOutline) {
			console.log(debbugOutline[i]);
			sS.insertRule(debbugOutline[i], rules.length);
		}

		
	}	

}