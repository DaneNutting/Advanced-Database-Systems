//-----------------------------------------------------------------------------------
// JavaScript file to find all documents that contain a Module Mark BETWEEN 30 and 40
// and update that value to be 40
//-----------------------------------------------------------------------------------

db.ModuleMarks.update(
		{
			"Modules.ModuleMark": { $in:[31,32,33,34,35,36,37,38,39]}
		}, 	
		{
			$set:{"Modules.$.ModuleMark": 40}
		},
		{
			multi:true
		}
	);


// var count = (db.ModuleMarks.count());	

// while (count < 0) {
// 	db.ModuleMarks.update(
// 		{
// 			"Modules.ModuleMark": { $in:[31,32,33,34,35,36,37,38,39]}
// 		}, 	
// 		{
// 			$set:{"Modules.$.ModuleMark": 40}
// 		},
// 		{
// 			multi:true
// 		}
// 	);
	
// 	var count = (db.ModuleMarks.count({ "Modules.ModuleMark": { $in:[31,32,33,34,35,36,37,38,39]} }));	
// };


	