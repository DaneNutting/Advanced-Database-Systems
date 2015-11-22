var db = db.getSiblingDB('StudentModuleMarksNonRelational');

//Give feedback to the user via the commandline
print("You are now connected to database : " + db);

//Drop database before populating it with new data
//db.ModuleMarks.drop();

//Declare variables 
var totalNoDocs = 16;
var lastDocNo = totalNoDocs;
var firstDocNo = 1;
var middleDocNo = Math.round(totalNoDocs/2);
var totalModules = 50;
var totalAssignments = totalModules * 2;
var modulesPerStudent = 4;
var AssignmentsPerModule = 2;

//Give feedback to the user via the commandline
//print("Inserting " + totalNoDocs + " rows into the " + db + " database");

function insertAssignments1(){
	var allAssignments =[];
	for (var i = 1; i <= AssignmentsPerModule; i++) {
		var randomNumber = Math.floor((Math.random() * (totalAssignments - 1)) + 1);
		var AssignmentData = {
			"Assignment_ID": randomNumber,
			"AssignmentName": "Module number " + randomNumber,
			"Assignment_Desc": "Module description for module number " + randomNumber,
			"AssignmentPercentage": (100 / AssignmentsPerModule),
			"AssignmentMark": Math.floor((Math.random() * 100) + 1)
		}
		allAssignments.push(AssignmentData);
	}
	return allAssignments;
}

function insertModules1(){
	var allModules = [];
	for (var i = 1; i <= modulesPerStudent; i++) {
		var randomNumber = Math.floor((Math.random() * (totalModules - 1)) + 1);
		var moduleData = {
			"Module_ID": randomNumber,
			"Module_Title": "Module number " + randomNumber,
			"Module_Desc": "Module description for module number " + randomNumber,
			"CatPoints": 30,
			"Assignments": insertAssignments1()
		}
		allModules.push(moduleData);
	}
	return allModules;
}

print(insertModules1());