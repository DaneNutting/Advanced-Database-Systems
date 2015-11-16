//Insert Assignment Results
var db = db.getSiblingDB('StudentModuleMarksRelational');

db.AssignmentResults.drop();

function findAssignments(Student_ID) {
	//return all Modules a student is registered on.
	var modules = db.ModuleGrades.find({ "Student_ID": Student_ID }, { Module_ID: 1, _id: 0 });
	//return modules;
	//modules.forEach(printjson);
	
	//for each module find the assignments associated with it.
	modules.forEach(function (modResult) {
		//print(modResult.Module_ID);
		
		var assignments = db.Assignments.find({ "Module_ID": modResult.Module_ID }, { _id: 1 });
		
		//print(assignments);
		//assignments.forEach(printjson);
		
		//for each of the module's assignments create a document in the Assignment results table  
		assignments.forEach(function (assResult) {
			print(assResult);
			var createAssignment = {
				"Student_ID": Student_ID,
				"Assignment_ID": assResult,
				"Mark": Math.floor((Math.random() * 99) + 1)
			};

			db.AssignmentMarks.insert(createAssignment);
		});
	});

};

findAssignments(1);

