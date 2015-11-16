//===========================================================================================
//Update the first student document
//===========================================================================================
db = db.getSiblingDB('StudentModuleMarks');

//Give feedback to the user via the commandline
print("You are now connected to database : " + db);

//Declare variables 
var totalNoDocs = 16;
var lastDocNo = totalNoDocs;
var firstDocNo = 1;
var middleDocNo = Math.round(totalNoDocs/2);

print ("Updating the first student document");

print ("Recording time for updating");
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