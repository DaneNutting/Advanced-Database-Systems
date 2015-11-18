//Give feedback to the user via the commandline about which file is being run
print("Running script to insert normalised data with no index")

//Connect to database
var db = db.getSiblingDB('StudentModuleMarksRelational');

//Give feedback to the user via the commandline
print("You are now connected to database : " + db);

//Drop database before populating it with new data
db.Modules.drop();
db.Students.drop();
db.Assignments.drop();
db.ModuleGrades.drop();
db.AssignmentMarks.drop();

//Declare variables 
var totalStudents = 16;
var totalModules = 50;
var totalAssignments = totalModules * 2;
var AssignmentsPerModule = 3;
var lastStudentNo = totalStudents;
var firstDocNo = 1;
var middleStudentNo = Math.round(totalStudents / 2);
var randomDOB = new Date(1995, Math.floor((Math.random() * 11) + 1), Math.floor((Math.random() * 30) + 1));

//===========================================================================================
//Insert original data
//===========================================================================================

//Insert Modules and the Module's child Assignments
//Inserting in this fashion allows for use of the Module_ID currently being used in the for loop
for (i = firstDocNo, x = firstDocNo; i <= totalModules; i++ , x = x + AssignmentsPerModule) {
	var ModuleData = {
		"Module_ID": i,
		"Module_Title": "Module number " + i,
		"Module_Desc": "Module description for module number " + i
	};
 	
	//The Module data needs to be inserted before the assignment data can be inserted 
	db.Modules.insert(ModuleData);
	
	for (y = 1; y <= AssignmentsPerModule; y++) {
		var AssignmentDataFor ={
			"Assignment_ID": (x+y),
			"Module_ID": i,
			"Assignment_Title": "Assignment number " + (x+y),
			"Assignment_Desc": "Assignment description for assignment number " + (x+y)
		};
		db.Assignments.insert(AssignmentDataFor);
	}
	
	//Insert the first Assignment for the current Module	
	// var AssignmentData1 = {
	// 	"Assignment_ID": x,
	// 	"Module_ID": i,
	// 	"Assignment_Title": "Assignment number " + x,
	// 	"Assignment_Desc": "Assignment description for assignment number " + x
	// };
	
	// //Insert the second assignment for the current Module
	// var AssignmentData2 = {
	// 	"Assignment_ID": x + 1,
	// 	"Module_ID": i,
	// 	"Assignment_Title": "Assignment number " + (x + 1),
	// 	"Assignment_Desc": "Assignment description for assignment number " + (x + 1)
	// };
	
	// db.Assignments.insert([AssignmentData1, AssignmentData2]);
}

//function to return a random Module ID
function getRandomModuleID() {
	var randomNumber = Math.floor((Math.random() * (totalModules - 1)) + 1);
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

//Insert Module Grades
for (i=firstDocNo; i<=totalStudents; i++){
	var ModuleGradesData1 = {
		"Student_ID"	: i,
		"Module_ID"		: getRandomModuleID(),
		"Module_Mark"	: 0
	};
	var ModuleGradesData2 = {
		"Student_ID"	: i,
		"Module_ID"		: getRandomModuleID(),
		"Module_Mark"	: 0 
	};
	var ModuleGradesData3 = {
		"Student_ID"	: i,
		"Module_ID"		: getRandomModuleID(),
		"Module_Mark"	: 0
	};
	var ModuleGradesData4 = {
		"Student_ID"	: i,
		"Module_ID"		: getRandomModuleID(),
		"Module_Mark"	: 0
	};
	
	db.ModuleGrades.insert([ModuleGradesData1, ModuleGradesData2, ModuleGradesData3, ModuleGradesData4]);
}

function findAssignments(Student_ID) {
	//return all Modules a student is registered on.
	var modules = db.ModuleGrades.find({ "Student_ID": Student_ID }, { Module_ID: 1, _id: 0 });
	
	//for each module find the assignments associated with it.
	modules.forEach(function (modResult) {
		var assignments = db.Assignments.find({ "Module_ID": modResult.Module_ID }, { Assignment_ID: 1, _id: 0 });
		
		//for each of the module's assignments create a document in the Assignment results table  
		assignments.forEach(function (assResult) {
			//print(assResult);
			var createAssignment = {
				"Student_ID": Student_ID,
				"Assignment_ID": assResult.Assignment_ID,
				"Percentage": (100 / assignments.count()),
				"Mark": Math.floor((Math.random() * 99) + 1)
			};
			db.AssignmentMarks.insert(createAssignment);
		});
	});
};
	
//Insert Assignment Results
 for (i=firstDocNo; i<=totalStudents; i++){
	findAssignments(i);
};

//Update the Module Marks in the Module Grades table

//===========================================================================================
//Insert original data
//===========================================================================================
