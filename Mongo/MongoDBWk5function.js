function getModuleMark(){
	db.StudentModuleMarks.aggregate([
		{$unwind: '$Assignments'},
		{$group: {
        _id: null, 
        "sumOfModules": {$sum: "$Assignments.AssignmentMark" }
    	}}
	]);
	return sumOfModules;
};