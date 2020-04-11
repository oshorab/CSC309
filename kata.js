function greet(name = 'my friend') {
   if(typeof(name) === 'string')
      return singleName(name);
   else
      return pluralNames(name);  
}

function singleName(name){
   if(isUpper(name)) {return "HELLO " + name + "!";}
   return "Hello, " + name + ".";
}

function pluralNames(nameList) {
   var normNames = [];
	var capNames = [];

   for(var i = 0; i < nameList.length; i++){
      var name = nameList[i];

      if(name.includes('\"')){
         name = name.replace(/"/g, '');
	   	name = name.split('$');
      }
      else
         name = name.split(', ');

      for(var j = 0; j < name.length; j++){
      	if(isUpper(name[j]))
	    		capNames.push(name[j]);
	 		else
	   		normNames.push(name[j]);
   	}
   }
   var allCapsStr = sentenceMaker(capNames, true);
   var normStr = sentenceMaker(normNames, false);

   if(allCapsStr !== null) {return normStr + " " + allCapsStr;}
   return normStr;
}

function sentenceMaker(nameList, allCAPS){
   if(nameList.length === 0) {return null;}

	var returnStr = "Hello, ";

	if(allCAPS) {var returnStr = "AND HELLO ";}

	if(nameList.length === 1 && allCAPS) {return returnStr + nameList[0] + "!";}
	else if(nameList.length === 1 && !isCAPS) {return returnStr + nameList[0] + ".";}

	for(var i = 0; i < nameList.length-1; i++){
		if(nameList.length > 2) {returnStr += nameList[i] + ", ";}
		else {returnStr += nameList[i] + " ";}
	}

	if(allCAPS) {return returnStr + "AND " + nameList[nameList.length-1] + "!";}
	else {return returnStr + "and " + nameList[nameList.length-1] + ".";}
}

function isUpper(name) {
   if(name === name.toUpperCase()) {return true;}
   return false;
}

module.exports = {greet};
