//Give feedback to the user via the commandline about which file is being run
print("Running script to insert denormalised data without index")

//Connect to database
var db = db.getSiblingDB('StudentModuleMarksNonRelational');

//Give feedback to the user via the commandline
print("You are now connected to database : " + db);

//Drop database before populating it with new data
db.ModuleMarks.drop();

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
print("Inserting " + totalNoDocs + " rows into the " + db + " database");

//function for inserting assignments - this function creates as many assigments per module as specified in the 
//AssignmentsPerModule variable. This function is used inside the insert Modules function. Each of the assignments
//is pushed to an array variable and that array is returned as the result of the function
function insertAssignments(){
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

//Function for inserting Modules - this function replaces the lengthy hardcoded insert statements below.
//It allows the user to insert as many modules per student as is required by changing the value of the modulesPerStudent variable.
//It grabs a random number between 1 and the value of the variable totalModules and assigns that module to the current student.
//Each of the assignments is pushed to an array variable and that array is returned as the result of the function.
//This function calls the insertAssignment function and the results of that function are returned as well as nested arrays.
function insertModules(){
	var allModules = [];
	for (var i = 1; i <= modulesPerStudent; i++) {
		var randomNumber = Math.floor((Math.random() * (totalModules - 1)) + 1);
		var moduleData = {
			"Module_ID": randomNumber,
			"Module_Title": "Module number " + randomNumber,
			"Module_Desc": "Module description for module number " + randomNumber,
			"CatPoints": 30,
			"Assignments": insertAssignments()
		}
		allModules.push(moduleData);
	}
	return allModules;
}

//===========================================================================================
//Insert original data
//===========================================================================================

for (x=1; x<=totalNoDocs; x++){
  	var student = {
		"StudentID"	: x,  
		"FirstName" : "Seller" + x,
		"Surname"	: "Smith" + x,
		"email"		: "s"+ x +"@connect.glos.ac.uk",
		"DOB"		: new Date("1988-11-"  + Math.floor((Math.random() * 30) + 1)),
		"Address"	: x + " Student Street",
		"Town"		: "Cheltenham",
		"Postcode"	: "GL" + Math.floor((Math.random() * 53) + 1) + " " + Math.floor((Math.random() * 9) + 1) + "AB",
		"Course"	: "Information Technology",
		"Results"	: [
			{
			"AcademicYear": "2014-2015",
			"Modules": insertModules()
			},	
		]
	};
	
	db.ModuleMarks.insert(student);
};

print("Finished inserting rows");

//===========================================================================================
//Insert one more document at the end of the collection
//===========================================================================================

print("Inserting one more document at the end of the collection")

var studentDataAtEnd = {
		"StudentID"	: (totalNoDocs + 1),
		"FirstName" : "Extra",
		"Surname"	: "Row" ,
		"email"		: "sXtraRow@connect.glos.ac.uk",
		"DOB"		: new Date("1988-11-"  + Math.floor((Math.random() * 30) + 1)),
		"Address"	: (totalNoDocs + 1) + " Student Street",
		"Town"		: "Cheltenham",
		"Postcode"	: "GL" + Math.floor((Math.random() * 53) + 1) + " " + Math.floor((Math.random() * 9) + 1) + "AB",
		"Course"	: "Information Technology",
		"Results"	: [
			{
			"AcademicYear": "2014-2015",
			"Modules": insertModules()
			},
			
		]
	};

//Find out how long it takes to insert this new row	
print ("Recording time for inserting");
var start = (new Date()).getTime();

db.ModuleMarks.insert(studentDataAtEnd);

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');

//===========================================================================================
//Update the first student document
//===========================================================================================

print ("Updating the first student document");

var start = (new Date()).getTime();

db.ModuleMarks.update(
	{
		"StudentID"	: firstDocNo
	}, 	
	{
		$set: {
			"FirstName"	: "Update",
			"Course"	: "Updated Course"
		}	
	}
);

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');

//===========================================================================================
//Update the student document in the middle of the collection
//===========================================================================================

print ("Updating the student document in the middle of the collection");

var start = (new Date()).getTime();

db.ModuleMarks.update(
	{
		"StudentID"	: middleDocNo
	}, 	
	{
		$set: {
			"FirstName"	: "Update",
			"Course"	: "Updated Course"
		}	
	}
);

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');

//===========================================================================================
//Update the student document at the end of the collection
//===========================================================================================

print ("Updating the student document at the end of the collection");

var start = (new Date()).getTime();

db.ModuleMarks.update(
	{
		"StudentID"	: lastDocNo + 1
	}, 	
	{
		$set: {
			"FirstName"	: "Update",
			"Course"	: "Updated Course"
		}	
	}
);

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');

//===========================================================================================
//Find the first student document of data
//===========================================================================================

print ("Finding student data at the beginning of the collection");

var start = (new Date()).getTime();

db.ModuleMarks.findOne({ "StudentID": firstDocNo });

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');

//===========================================================================================
//Find the student document of data in the middle of the collection
//===========================================================================================

print ("Finding student data in the middle of the collection");

var start = (new Date()).getTime();

db.ModuleMarks.findOne({ "StudentID": middleDocNo });

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');

//===========================================================================================
//Find the student document of data at the end of the collection
//===========================================================================================

print ("Finding student data at the end of the collection");;

var start = (new Date()).getTime();

db.ModuleMarks.findOne({ "StudentID": lastDocNo });

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');

//===========================================================================================
//Delete the student document of data at the beginning of the collection
//===========================================================================================

print ("Deleting student data at the beginning of the collection");

var start = (new Date()).getTime();

db.ModuleMarks.remove({ "StudentID": firstDocNo });

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');

//===========================================================================================
//Delete the student document of data in the middle of the collection
//===========================================================================================

print ("Deleting student data in the middle of the collection");

var start = (new Date()).getTime();

db.ModuleMarks.remove({ "StudentID": middleDocNo });

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');

//===========================================================================================
//Delete the student document of data at the end of the collection
//===========================================================================================

// print ("Deleting student data at the end of the collection");

// var start = (new Date()).getTime();

// db.ModuleMarks.remove({ "StudentID": lastDocNo });

// var timeDiff = (new Date()).getTime() - start;

// print("time required was " + timeDiff +'ms');

//===========================================================================================
//===========================================================================================
//Extra tests!!!!!
//===========================================================================================
//===========================================================================================

//===========================================================================================
//Update the first child of the first student document
//===========================================================================================

print ("Updating the first child of the first student document");

print ("Recording time for updating");
var start = (new Date()).getTime();

db.ModuleMarks.update(
	{
		"StudentID"	: firstDocNo,		
	}, 	
	{
		$set: {
			"Results.0.Modules.0.CatPoints": 60,
			"Results.0.Modules.0.ModuleResult"	: 100
		}
		
	}
);

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');