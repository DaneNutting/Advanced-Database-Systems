//function to return a random Module ID
var db = db.getSiblingDB('StudentModuleMarksRelational');
var totalModules = 50;

function getRandomModuleID1 (){
	var randomNumber = 	Math.floor((Math.random() * (totalModules - 1) ) + 1);
	print(randomNumber);
	var randomModule = db.Modules.findOne({"Module_ID" : randomNumber});
	randomModule.forEach(printjson);
}

getRandomModuleID1();