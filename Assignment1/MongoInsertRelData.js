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
var modulesPerStudent = 4;
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
		"Module_Desc": "Module description for module number " + i,
		"CatPoints": 30
	};
 	
	//The Module data needs to be inserted before the assignment data can be inserted 
	db.Modules.insert(ModuleData);
	
	//For each assignment per module, set in the AssignmentsPerModule var above, insert an assignment
	//This method is more flexible than a hardcoded method. By nesting this
	//Assignment insert for loop inside the module insert for loop you gain access to the current Module ID 
	for (y = 1; y <= AssignmentsPerModule; y++) {
		var AssignmentDataFor = {
			"Assignment_ID": (x + y),
			"Module_ID": i,
			"Assignment_Title": "Assignment number " + (x + y),
			"Assignment_Desc": "Assignment description for assignment number " + (x + y)
		};
		db.Assignments.insert(AssignmentDataFor);
	}
}

//Insert Student Data
for (i = firstDocNo; i <= totalStudents; i++) {
	var StudentData = {
		"Student_ID": i,
		"FirstName": "Jill " + i,
		"SurName": "Smith " + i,
		"DOB": randomDOB,
		"Address": i + " Student Street",
		"Town": "Cheltenham",
		"Postcode": "GL" + Math.floor((Math.random() * 53) + 1) + " " + Math.floor((Math.random() * 9) + 1) + "AB",
		"Course"	: "Information Technology",
	};
	db.Students.insert(StudentData);
}

//function to return a random Module ID
function getRandomModuleID() {
	var randomNumber = Math.floor((Math.random() * (totalModules - 1)) + 1);
	return randomNumber;
}

//Insert Module Grades, the number of modules inserted is dictated by the modulesPerStudent variable. A for loop is used here to be more
//flexible, because now the number of modules assigned to a student can be altered by changing a variable value. 
//Modules are assgined to students randomly using the function above. 
for (i = firstDocNo; i <= totalStudents; i++) {
	for (x = 1; x <= modulesPerStudent; x++) {
		var ModuleGradesData = {
			"Student_ID": i,
			"Module_ID": getRandomModuleID(),
			"Module_Mark": 0
		}
		db.ModuleGrades.insert(ModuleGradesData);
	}
}

//This function finds all of a students modules and then all of the corresponding module assignments. It then inserts a new assignment mark
//document where each assignment is assigned a random mark and a percentage that that mark is worth based on how many assignments there are
//per module. The percentage that the assignments mark is worth is calculated and this value is stored in the variable moduleMark and when 
//that module for loop is finished it updates the Module Grades table with the overall mark, based on the results of the assignment marks.
//In summary: 
//The percentage a mark is worth will change depending on how many assignments there are for this particular module.
//AND
//The Module Mark is a dynamic value based on sum of the adjusted assignment marks.

function CreateAssignmentMarks(Student_ID) {
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
for (i = firstDocNo; i <= totalStudents; i++) {
	CreateAssignmentMarks(i);
};

//===========================================================================================
//Insert one more student record 
//===========================================================================================

//Create an Extra Student