//useful bits of code

//find stuff
db.<collectionName>.find()
	//eg
	db.ModuleMarks.find()


//find stuff based on criteria
db.<collectionName>.find("<node>.<child node>": 30)
//It's important to note that if you want to search based on an attibute nested in a child level 
//of the document structure you need to specify the path to it, as below. You do not need to include
//the root level of the document name.
	//eg
	db.ModuleMarks.find("Modules.ModuleMark":{$gt:30})

	
//Find stuff based on multiple criteria
//similar to above but you nest the multiple criteria in an array preceded by $and:
db.<collectionName>.find( { $and:[{"<node>.<child node>": 30}, {"<node>.<child node>": 50}]})
	//eg
	db.ModuleMarks.find(
	{
		$and:[{"Modules.ModuleMark":{$gt:30}}, {"Modules.ModuleMark":{$lt:40}}]
	});

//To print out results to command line use the following code - a cursor is a result in MongoDB
cursor = db.ModuleMarks.find(
	{
		$and:[{"Modules.ModuleMark":{$gt:30}}, {"Modules.ModuleMark":{$lt:40}}]
	});
	
cursor.forEach(printjson);
//so for each result print out that result when run in command line

	
//This code counts how many results match the where criteria:
db.ModuleMarks.count({ $and:[ {"Modules.ModuleMark":{$gt:30}}, {"Modules.ModuleMark":{$lt:40}}] })
// To prove the difference between the lecture notes and the $in function
db.ModuleMarks.count({ "Modules.ModuleMark": { $in:[31,32,33,34,35,36,37,38,39]} })