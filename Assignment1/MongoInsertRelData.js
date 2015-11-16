//Give feedback to the user via the commandline about which file is being run
print("Running script to insert normalised data with no index")

//Connect to database
var db = db.getSiblingDB('StudentModuleMarksRelational');

//Give feedback to the user via the commandline
print("You are now connected to database : " + db);

//Drop database before populating it with new data
db.Modules.drop();
db.Students.drop();
db.Assignents.drop();
db.ModuleGrades.drop();
db.AssignmentResults.drop();

//Declare variables 
var totalStudents = 16;
var totalModules = 50;
var totalAssignments = totalModules * 2;
var lastStudentNo = totalStudents;
var firstDocNo = 1;
var middleStudentNo = Math.round(totalStudents / 2);
var randomDOB = new Date(1995, Math.floor((Math.random() * 11) + 1), Math.floor((Math.random() * 30) + 1));

//Insert Modules
for (i = firstDocNo; i <= totalModules; i++) {
	var ModuleData = {
		"Module_ID": i,
		"Module_Title": "Module number " + i,
		"Module_Desc": "Module description for module number " + i
	};

	db.Modules.insert(ModuleData);
}

//function to return a random Module ID
function getRandomModuleID() {
	var randomNumber = Math.floor((Math.random() * (totalModules - 1)) + 1);
	//var randomModule = db.Modules.findOne({ "Module_ID": randomNumber });
	//return randomModule._id
	return randomNumber;
}

//Insert Student Data
for (i = firstDocNo; i <= totalStudents; i++) {
	var StudentData = {
		"Student_ID": i,
		"FirstName": "Jill " + i,
		"SurName": "Smith " + i,
		"Gender": "Female",
		"DOB": randomDOB,
		"Address": i + " Student Street",
		"Town": "Cheltenham",
		"Postcode": "GL" + Math.floor((Math.random() * 53) + 1) + " " + Math.floor((Math.random() * 9) + 1) + "AB"
	};

	db.Students.insert(StudentData);
}

//Insert Assignments
for (i = firstDocNo; i <= totalAssignments; i++) {
	var AssignmentData = {
		"Assignment_ID": i,
		"Module_ID": getRandomModuleID(),
		"Assignment_Title": "Assignment number " + i,
		"Assignment_Desc": "Assignment description for assignment number " + i
	};

	db.Assignments.insert(AssignmentData);
}

//function to return a random assignment ID
// function getRandomAssignmentID (){
// 	var randomNumber = 	Math.floor((Math.random() * (totalModules -1) ) + 1);
// 	var randomAssignment = db.Students.findOne({"Assignment_ID" : randomNumber});
// 	return randomAssignment._id
// }

//Insert Module Grades
for (i=firstDocNo; i<=totalStudents; i++){
	var ModuleGradesData1 = {
		"Student_ID"	: i,
		"Module_ID"		: getRandomModuleID(),
		"Module_Mark"	: Math.floor((Math.random() * 99) + 1) 
	};
	var ModuleGradesData2 = {
		"Student_ID"	: i,
		"Module_ID"		: getRandomModuleID(),
		"Module_Mark"	: Math.floor((Math.random() * 99) + 1) 
	};
	var ModuleGradesData3 = {
		"Student_ID"	: i,
		"Module_ID"		: getRandomModuleID(),
		"Module_Mark"	: Math.floor((Math.random() * 99) + 1) 
	};
	var ModuleGradesData4 = {
		"Student_ID"	: i,
		"Module_ID"		: getRandomModuleID(),
		"Module_Mark"	: Math.floor((Math.random() * 99) + 1) 
	};
	
	db.ModuleGrades.insert([ModuleGradesData1, ModuleGradesData2, ModuleGradesData3, ModuleGradesData4]);
}
	
//Insert Assignment Results
// function findAssignments (Student_ID){
// 	var modules = db.ModuleGrades.find({"Student_ID" : Student_ID});
// };

// for (i=firstDocNo; i<=totalStudents; i++){
// 	var AssignmentResultData = {
// 		"Student_ID"	: i,
// 		"Assignment_ID"	: getRandomModuleID(),
// 		"Mark": 50
// 	};
	
// 	db.Assignments.insert(AssignmentResultData);
// }