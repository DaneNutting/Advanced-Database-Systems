use StudentAssignmentMarks
Student1 = {	
		"id" : "1",
		"contactDetails"{
			"firstName"	: "Steve",
			"lastName"	: "Jobs",
			"email"		: "steve.jobs@apple.com",
			"address1"	: "1 Apple Way",
			"address2"	: "Calfornia",
			"postCode"	: "90210"
		},
		"Modules"[
			{
				"moduleID"	: "CT6013",
				"moduleDetails"{
					"moduleTitle"	: "Advanced Database Systems",
					"moduleDesc"	: "Doing fancy stuff with databases"
				},
				"assignments"[
					{
						"assignmentID"		: "Ass0001",
						"assignmentTitle"	: "Make a MongoDB DB",
						"assignmentDesc"	: "Make a Mongo DB to track student marks",
						"deadline"			: "2016-01-08",
						"mark"				: "78%"
					},
					{
						"assignmentID"		: "Ass0002",
						"assignmentTitle"	: "Make a Multidimensional DB",
						"assignmentDesc"	: "Make a Multidimensional DB for another reason",
						"deadline"			: "2016-01-08",
						"mark"				: "64%"
					}	
				]
				"grade"	: "72%"
			}
		]
}

db.StudentAssignmentMarks.insert(Student1)