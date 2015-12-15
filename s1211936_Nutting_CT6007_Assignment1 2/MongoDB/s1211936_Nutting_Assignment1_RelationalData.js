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
db.ModuleGradesTemp.drop();

//Declare variables 
var totalStudents = 50000;
var extraStudentID = (totalStudents + 1)
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
function getRandomModuleIDRel() {
	var randomNumber = Math.floor((Math.random() * (totalModules - 1)) + 1);
	return randomNumber;
}

//Insert Module Grades, the number of modules inserted is dictated by the modulesPerStudent variable. A for loop is used here to be more
//flexible, because now the number of modules assigned to a student can be altered by changing a variable value. 
//Modules are assgined to students randomly using the function above. 
for (i = firstDocNo; i <= totalStudents; i++) {
	for (x = 1; x <= modulesPerStudent; x++) {
		var ModuleStudentData = {
			"Student_ID": i,
			"Module_ID": getRandomModuleIDRel()//,
			//"Module_Mark": 0
		}
		db.ModuleGradesTemp.insert(ModuleStudentData);
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

function CreateAssignmentMarksRel(Student_ID) {
	//return all Modules a student is registered on.
	
	var modules = db.ModuleGradesTemp.find({ "Student_ID": Student_ID }, { Module_ID: 1, _id: 0 });
	
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
		
		var ModuleGradesData = {
			"Student_ID": Student_ID,
			"Module_ID": modResult.Module_ID,
			"Module_Mark": moduleMark
		}
		
		db.ModuleGrades.insert(ModuleGradesData);
		// db.ModuleGrades.update(
		// 	{
		// 		$and:
		// 		[
		// 			{ "Student_ID": Student_ID },
		// 			{ "Module_ID": modResult.Module_ID }
		// 		]
		// 	},
		// 	{
		// 		$set: {
		// 			"Module_Mark": moduleMark
		// 		}
		// 	}
		// );
	});
};
	
//Insert Assignment Results and update the Module Marks in the Module Grades table
for (i = firstDocNo; i <= totalStudents; i++) {
	CreateAssignmentMarksRel(i);
};

//===========================================================================================
//Insert one more student record 
//===========================================================================================

//Create an Extra Student
var ExtraStudentData = {
	"Student_ID": extraStudentID,
	"FirstName": "Jill " + extraStudentID,
	"SurName": "Smith " + extraStudentID,
	"DOB": randomDOB,
	"Address": extraStudentID + " Student Street",
	"Town": "Cheltenham",
	"Postcode": "GL" + Math.floor((Math.random() * 53) + 1) + " " + Math.floor((Math.random() * 9) + 1) + "AB",
	"Course"	: "Information Technology",
};

var ExtraModulesToAdd = [];
for (x = 1; x <= modulesPerStudent; x++) {
	var ExtraModuleGradesData = {
		"Student_ID": extraStudentID,
		"Module_ID": getRandomModuleIDRel(),
		"Module_Mark": 0
	}
	ExtraModulesToAdd.push(ExtraModuleGradesData);
}

var start = (new Date()).getTime();	
		
db.Students.insert(ExtraStudentData);
db.ModuleGrades.insert(ExtraModulesToAdd);
CreateAssignmentMarksRel((totalStudents + 1));

var timeDiff = (new Date()).getTime() - start;

print("time required to insert an extra students data at the end of the was " + timeDiff +'ms');

//===========================================================================================
//Update a Students details at the beginning of the collection
//===========================================================================================
print("===========================================================================================");
print ("Updating the first student data document");

var start = (new Date()).getTime();

db.Students.update(
	{ "Student_ID": 1 },
	{
		$set: {
			"FirstName": "Updating first document"
		}
	}
);

var timeDiff = (new Date()).getTime() - start;

print("time required to update the first document was " + timeDiff +'ms');

//===========================================================================================
//Update a Students details in the middle of the collection
//===========================================================================================
print("===========================================================================================");
print ("Updating the middle student data document");

var start = (new Date()).getTime();

db.Students.update(
	{ "Student_ID": middleStudentNo },
	{
		$set: {
			"FirstName": "Updating middle document"
		}
	}
);

var timeDiff = (new Date()).getTime() - start;

print("time required to update the middle document was " + timeDiff +'ms');

//===========================================================================================
//Update a Students details at the end of the collection
//===========================================================================================
print("===========================================================================================");
print ("Updating the last student data document");

var start = (new Date()).getTime();

db.Students.update(
	{ "Student_ID": extraStudentID },
	{
		$set: {
			"FirstName": "Updating last document"
		}
	}
);

var timeDiff = (new Date()).getTime() - start;

print("time required to update the last document was " + timeDiff +'ms');

//===========================================================================================
//Function to find all of a students Module results and assigment marks
//===========================================================================================

function showStudentMarksRel(studentId){
	var studentDetails = db.Students.find({"Student_ID": studentId});
	var modulesStudentTaking = db.ModuleGrades.find({"Student_ID": studentId});
	
	studentDetails.forEach( function (stuDetails){
		print("Student ID : " + stuDetails.Student_ID);
		print("Student Name : " + stuDetails.FirstName + " " + stuDetails.SurName);
		print("Course : " + stuDetails.Course);
		print("Date of Birth : " + stuDetails.DOB);
		print("Address : " + stuDetails.Address + ", " + stuDetails.Town + ", " + stuDetails.Postcode)
	})
	modulesStudentTaking.forEach(function (stuModResult) {
		var moduleDetails = db.Modules.find({"Module_ID": stuModResult.Module_ID});
		var assignDetails = db.Assignments.find({"Module_ID": stuModResult.Module_ID});
		
		moduleDetails.forEach( function (modDetailResults){
			print("Module ID : " + stuModResult.Module_ID);
			print("Module title : " + modDetailResults.Module_Title);
			print("Module description : " + modDetailResults.Module_Desc);
			print("Module Result : " + stuModResult.Module_Mark);
			print("CAT points : " + modDetailResults.CatPoints);
		})
		
		assignDetails.forEach( function (assDetails){
			var assignResults = db.AssignmentMarks.find({$and:[{ "Student_ID": studentId },{ "Assignment_ID": assDetails.Assignment_ID }]});
			print("Assignment ID : " + assDetails.Assignment_ID);
			print("Assignment Title : " + assDetails.Assignment_Title);
			assignResults.forEach( function (assResults){
				print("Assignment Percentage : " + assResults.Percentage);
				print("Assignment Mark : " + assResults.Mark);
			})
		})
	});
}

//===========================================================================================
//Find the first Students Module Marks
//===========================================================================================
print("===========================================================================================");
print ("Finding all data on the first student");

var start = (new Date()).getTime();

showStudentMarksRel(1);

var timeDiff = (new Date()).getTime() - start;

print("time required to find the first students details was " + timeDiff +'ms');

//===========================================================================================
//Find the middle Students Module Marks
//===========================================================================================
print("===========================================================================================");
print ("Finding all data on the middle student");

var start = (new Date()).getTime();

showStudentMarksRel(middleStudentNo);

var timeDiff = (new Date()).getTime() - start;

print("time required to find the middle students details was " + timeDiff +'ms');

//===========================================================================================
//Find the last Students Module Marks
//===========================================================================================
print("===========================================================================================");
print ("Finding all data on the last student");

var start = (new Date()).getTime();

showStudentMarksRel(extraStudentID);

var timeDiff = (new Date()).getTime() - start;

print("time required to find the last students details was " + timeDiff +'ms');

//===========================================================================================
//Delete the First Students data
//===========================================================================================
print("===========================================================================================");
print ("Deleting all data on the first student");

var start = (new Date()).getTime();

db.Students.remove({"Student_ID" : firstDocNo});
db.ModuleGrades.remove({"Student_ID" : firstDocNo});
db.AssignmentMarks.remove({"Student_ID" : firstDocNo});

var timeDiff = (new Date()).getTime() - start;

print("time required to delete the first students details was " + timeDiff +'ms');

//===========================================================================================
//Delete the middle Students data
//===========================================================================================
print("===========================================================================================");
print ("Deleting all data on the middle student");

var start = (new Date()).getTime();

db.Students.remove({"Student_ID" : middleStudentNo});
db.ModuleGrades.remove({"Student_ID" : middleStudentNo});
db.AssignmentMarks.remove({"Student_ID" : middleStudentNo});

var timeDiff = (new Date()).getTime() - start;

print("time required to delete the middle students details was " + timeDiff +'ms');

//===========================================================================================
//Delete the last Students data
//===========================================================================================
print("===========================================================================================");
print ("Deleting all data on the last student");

var start = (new Date()).getTime();

db.Students.remove({"Student_ID" : extraStudentID});
db.ModuleGrades.remove({"Student_ID" : extraStudentID});
db.AssignmentMarks.remove({"Student_ID" : extraStudentID});

var timeDiff = (new Date()).getTime() - start;

print("time required to delete the first students details was " + timeDiff +'ms');