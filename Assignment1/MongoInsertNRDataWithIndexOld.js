//Give feedback to the user via the commandline about which file is being run
print("Running script to insert denormalised data with index")

//Connect to database
db = db.getSiblingDB('StudentModuleMarksNonRelational');

//Give feedback to the user via the commandline
print("You are now connected to database : " + db);

//Drop database before populating it with new data
db.ModuleMarks.drop();

//Declare variables 
var totalNoDocs = 16;
var lastDocNo = totalNoDocs;
var firstDocNo = 1;
var middleDocNo = Math.round(totalNoDocs/2);

//Give feedback to the user via the commandline
print("Inserting " + totalNoDocs + " rows into the " + db + " database");

//===========================================================================================
//Insert first half of original data
//===========================================================================================

for (x=2; x <= middleDocNo - 1; x++){
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
			"Modules": [
				{
				"ModuleName": "Individual Research Project",
				"ModuleDesc": "Doing research individually",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "Advanced Group Project",
				"ModuleDesc": "A Module you really need to start early",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "Advanced Database Systems",
				"ModuleDesc": "The best module - Abu you know it!",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "I.T. in society",
				"ModuleDesc": "Debating the important social impacts of I.T.",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				}]
			},
			
		]
	};
	
	db.ModuleMarks.insert(student);
};

print("Finished inserting first half of data");

//===========================================================================================
//Insert second half of original data
//===========================================================================================

for (x=middleDocNo; x <= lastDocNo; x++){
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
			"Modules": [
				{
				"ModuleName": "Individual Research Project",
				"ModuleDesc": "Doing research individually",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "Advanced Group Project",
				"ModuleDesc": "A Module you really need to start early",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "Advanced Database Systems",
				"ModuleDesc": "The best module - Abu you know it!",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "I.T. in society",
				"ModuleDesc": "Debating the important social impacts of I.T.",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				}]
			},
			
		]
	};
	
	db.ModuleMarks.insert(student);
};

print("Finished inserting second half of data");

//===========================================================================================
//Creating Index
//===========================================================================================

db.ModuleMarks.createIndex( { "StudentID" : 1 } );

//===========================================================================================
//Insert document at the beginning of the collection
//===========================================================================================

print("Inserting one more document at the beginning of the collection")

var studentDataAtBegin = {
		"StudentID"	: firstDocNo,
		"FirstName" : "Extra",
		"Surname"	: "Row" ,
		"email"		: "sXtraRow@connect.glos.ac.uk",
		"DOB"		: new Date("1988-11-"  + Math.floor((Math.random() * 30) + 1)),
		"Address"	: firstDocNo + " Student Street",
		"Town"		: "Cheltenham",
		"Postcode"	: "GL" + Math.floor((Math.random() * 53) + 1) + " " + Math.floor((Math.random() * 9) + 1) + "AB",
		"Course"	: "Information Technology",
		"Results"	: [
			{
			"AcademicYear": "2014-2015",
			"Modules": [
				{
				"ModuleName": "Individual Research Project",
				"ModuleDesc": "Doing research individually",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "Advanced Group Project",
				"ModuleDesc": "A Module you really need to start early",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "Advanced Database Systems",
				"ModuleDesc": "The best module - Abu you know it!",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "I.T. in society",
				"ModuleDesc": "Debating the important social impacts of I.T.",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				}]
			},
			
		]
	};

//Find out how long it takes to insert this new row	
print ("Recording time for inserting data at the beginning of the collection");
var start = (new Date()).getTime();

db.ModuleMarks.insert(studentDataAtBegin);

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');

//===========================================================================================
//Insert document in the middle of the collection
//===========================================================================================

print("Inserting one more document in the middle of the collection")

var studentDataInMiddle = {
		"StudentID"	: middleDocNo,
		"FirstName" : "Extra",
		"Surname"	: "Row" ,
		"email"		: "sXtraRow@connect.glos.ac.uk",
		"DOB"		: new Date("1988-11-"  + Math.floor((Math.random() * 30) + 1)),
		"Address"	: middleDocNo + " Student Street",
		"Town"		: "Cheltenham",
		"Postcode"	: "GL" + Math.floor((Math.random() * 53) + 1) + " " + Math.floor((Math.random() * 9) + 1) + "AB",
		"Course"	: "Information Technology",
		"Results"	: [
			{
			"AcademicYear": "2014-2015",
			"Modules": [
				{
				"ModuleName": "Individual Research Project",
				"ModuleDesc": "Doing research individually",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "Advanced Group Project",
				"ModuleDesc": "A Module you really need to start early",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "Advanced Database Systems",
				"ModuleDesc": "The best module - Abu you know it!",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "I.T. in society",
				"ModuleDesc": "Debating the important social impacts of I.T.",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				}]
			},
			
		]
	};

//Find out how long it takes to insert this new row	
print ("Recording time for inserting data in the middle of the collection");
var start = (new Date()).getTime();

db.ModuleMarks.insert(studentDataInMiddle);

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');


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
			"Modules": [
				{
				"ModuleName": "Individual Research Project",
				"ModuleDesc": "Doing research individually",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "Advanced Group Project",
				"ModuleDesc": "A Module you really need to start early",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "Advanced Database Systems",
				"ModuleDesc": "The best module - Abu you know it!",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				},
				{
				"ModuleName": "I.T. in society",
				"ModuleDesc": "Debating the important social impacts of I.T.",
				"CatPoints": 30,
				"Assignments":[
					{
						"AssignmentName": "Assignment 1",
						"AssignmentPercentage": .25,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					},
					{
						"AssignmentName": "Assignment 2",
						"AssignmentPercentage": .75,
						"AssignmentMark": Math.floor((Math.random() * 100) + 1)
					}
				],
				"ModuleMark": Math.floor((Math.random() * 100) + 1)
				}]
			},
			
		]
	};

//Find out how long it takes to insert this new row	
print ("Recording time for inserting data at the end of the collection");
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

print ("Deleting student data at the end of the collection");

var start = (new Date()).getTime();

db.ModuleMarks.remove({ "StudentID": lastDocNo });

var timeDiff = (new Date()).getTime() - start;

print("time required was " + timeDiff +'ms');

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