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
var AssignmentsPerModule = 2;
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
	
	//For each assignment per module, set in the AssignmentsPerModule var above, insert an assignment
	//This method is more flexible than the hardcoded method below this for loop. By nesting this
	//Assignment insert for loop inside the module insert for loop you gain access to the current Module ID 
	for (y = 1; y <= AssignmentsPerModule; y++) {
		var AssignmentDataFor ={
			"Assignment_ID": (x+y),
			"Module_ID": i,
			"Assignment_Title": "Assignment number " + (x+y),
			"Assignment_Desc": "Assignment description for assignment number " + (x+y)
		};
		db.Assignments.insert(AssignmentDataFor);
	}
	
	/*
	//First method of inserting assignments per module - 2 hardcoded assignments.
	//This has been left in to show progression, from nesting this insert in the Module insert for loop 
	//To making it even more flexible as above
	//Insert the first Assignment for the current Module	
	var AssignmentData1 = {
		"Assignment_ID": x,
		"Module_ID": i,
		"Assignment_Title": "Assignment number " + x,
		"Assignment_Desc": "Assignment description for assignment number " + x
	};
	
	//Insert the second assignment for the current Module
	var AssignmentData2 = {
		"Assignment_ID": x + 1,
		"Module_ID": i,
		"Assignment_Title": "Assignment number " + (x + 1),
		"Assignment_Desc": "Assignment description for assignment number " + (x + 1)
	};
	
	db.Assignments.insert([AssignmentData1, AssignmentData2]);
	*/
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

//function to return a random Module ID
function getRandomModuleID() {
	var randomNumber = Math.floor((Math.random() * (totalModules - 1)) + 1);
	return randomNumber;
}

//Insert Module Grades, in doing so 4 random modules are assigned to a Student
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

//This function finds all of a students modules and then all of the corresponding module assignments. It then inserts a new assignment mark
//document where each assignment is assigned a random mark and a percentage that that mark is worth based on how many assignments there are
//per module. The percentage that the assignments mark is worth is calculated and this value is stored in the variable moduleMark and when 
//that module for loop is finished it updates the Module Grades table with the overall mark, based on the results of the assignment marks.
//In summary the percentage a mark is worth will change depending on how manyt assignments there are for this particular module.
//AND
//The Module Mark is a dynamic value based on sum of the adjusted assignment marks.

function findAssignments(Student_ID) {
	//return all Modules a student is registered on.
	var modules = db.ModuleGrades.find({ "Student_ID": Student_ID }, { Module_ID: 1, _id: 0 });
	
	//for each module find the assignments associated with it.
	modules.forEach(function (modResult) {
		var assignments = db.Assignments.find({ "Module_ID": modResult.Module_ID }, { Assignment_ID: 1, _id: 0 });
		var moduleMark = 0;
		//print(assignments.count());
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
			moduleMark = moduleMark + (createAssignment.Mark * (createAssignment.Percentage / 100));
		});
		db.ModuleGrades.update(
			{
				$and:
				[
					{ "Student_ID": Student_ID },
					{ "Module_ID": modResult.Module_ID }
				]
			},
			{
				$set: {
					"Module_Mark": moduleMark
				}
			}
			);
	});
};
	
//Insert Assignment Results and update the Module Marks in the Module Grades table
 for (i=firstDocNo; i<=totalStudents; i++){
	findAssignments(i);
};

//===========================================================================================
//Insert original data
//===========================================================================================
