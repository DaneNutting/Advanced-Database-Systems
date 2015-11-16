
db = db.getSiblingDB('StudentModuleMarks');

for (x=1; x<=10000; x++){
  	student = {
		"FirstName" : "Seller" + x,
		"Surname"	: "Smith" + x,
		"email"		: "s"+x+"@connect.glos.ac.uk",
		"Modules"	: [
			{
			"ModuleName": "Individual Research Project",
			"ModuleDesc": "Doing research individually",
			"ModuleMark": Math.floor((Math.random() * 100) + 1)
			},
			{
			"ModuleName": "Advanced Group Project",
			"ModuleDesc": "A Module you really need to start early",
			"ModuleMark": Math.floor((Math.random() * 100) + 1)
			},
			{
			"ModuleName": "Advanced Database Systems",
			"ModuleDesc": "The best module - Abu you know it!",
			"ModuleMark": Math.floor((Math.random() * 100) + 1)
			},
			{
			"ModuleName": "I.T. in society",
			"ModuleDesc": "Debating the important social impacts of I.T.",
			"ModuleMark": Math.floor((Math.random() * 100) + 1)
			},
		]
	};
	
	db.ModuleMarks.insert(student);
}
