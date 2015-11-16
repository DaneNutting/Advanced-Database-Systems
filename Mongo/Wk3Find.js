//-----------------------------------------------------------------------------------
// JavaScript file to find all documents that contain a Module Mark BETWEEN 30 and 40
//-----------------------------------------------------------------------------------

//command lind code that works:
//db.ModuleMarks.find("Modules.ModuleMark":{$gt:30})
//db.ModuleMarks.find({ $and:[ {"Modules.ModuleMark":{$gt:30}}, {"Modules.ModuleMark":{$lt:40}}] })

cursor = db.ModuleMarks.find(
	{
		//----------------------------------------------------------------------------------
		//The following three methods DO NOT find values between 30 and 40 instead they find
		//every document that has a module mark greater than 30 and evry document that has a
		//value less than 40
		//----------------------------------------------------------------------------------
		
		//$and:[{"Modules.ModuleMark":{$gt:30}}, {"Modules.ModuleMark":{$lt:40}}]
		
		//"Modules.ModuleMark": {$gt:30, $lt:40}
		
		// Modules:{
		// 	$elemMatch:{
		// 		ModuleMark: {$gt:30, $lt:40}
		// 	}
		
		//----------------------------------------------------------------------------------
		//This method finds everything with a value between 30 and 40
		//----------------------------------------------------------------------------------
		"Modules.ModuleMark": { $in:[31,32,33,34,35,36,37,38,39]}	
		
	},{"FirstName":1,"Surname":1, "Modules.ModuleName":1, "Modules.ModuleMark":1});
	
cursor.forEach(printjson);



	