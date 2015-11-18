//Insert Assignment Results
var db = db.getSiblingDB('StudentModuleMarksRelational');

db.AssignmentMarks.drop();

function findAssignments1(Student_ID) {
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
		print(moduleMark);
		print(Student_ID);
		print(modResult.Module_ID);
		db.ModuleGrades.update(
			{
				$and:
					[
						{"Student_ID": Student_ID},
						{"Module_ID": modResult.Module_ID}
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

findAssignments1(1);

// function getModuleMark(Student_ID){
// 	//return all Modules a student is registered on.
// 	var modules = db.ModuleGrades.find({ "Student_ID": Student_ID }, { Module_ID: 1, _id: 0 });
	
// 	//for each module find the assignments associated with it.
// 	modules.forEach(function (modResult) {
// 		var assignments = db.Assignments.find({ "Module_ID": modResult.Module_ID }, { Assignment_ID: 1, _id: 0 });
	
// 	// var allAssignmentMarks = db.AssignmentMarks.find({"Student_ID": Student_ID});
// 	// allAssignmentMarks.forEach(printjson);
// });
// }

// getModuleMark(1);
// db.ModuleMarks.update(
// 	{
// 		"StudentID"	: firstDocNo
// 	}, 	
// 	{
// 		$set: {
// 			"FirstName"	: "Update",
// 			"Course"	: "Updated Course"
// 		}	
// 	}
// );