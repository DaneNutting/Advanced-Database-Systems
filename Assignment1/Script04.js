print("Wellcome to script 4 - Normalised with index");

db = db.getSiblingDB('dbInvoiceSystem');

print("You are now connected to database : " + db);

db.customerCollection.drop();
db.invoiceCollection.drop();

totalNoTestData = 16;
lastInvNo =  totalNoTestData;
firstInvNo =  1;
middleInvNo =  totalNoTestData / 2;

// Inserting test Customer data 

for (i=1; i<=10; i++){
  	customerData = {"Customer_Number"	: "CustNum" + i,
					"Customer_Name"		: "CustName" + i,
					"Address"			: "UK" + i
				  };
	
	print ("customer data inserting .............................  " + i);
	db.customerCollection.insert(customerData);
}

// Inserting test Item data 

for (i=1; i<=10; i++){
  	itemData = {"Item_Code" 	: "ItCode" + i,
				"Item_Name"		: "ItName" + i,
				"Unit_Price"	: Math.floor((Math.random() * 100) + 1)
			   };
	
	print ("item data inserting .............................  " + i);
	db.itemCollection.insert(itemData);
}

//Return the ObjectID of a random cutomer
function getIDofARandomCustomer () {
	randomNumber = 	Math.floor((Math.random() * 10) + 1);
	randomCust = db.customerCollection.findOne({ "Customer_Number" : "CustNum" + randomNumber });
	return randomCust._id;
}

//Return the ObjectID of a random item
function getIDofARandomItem () {
	randomNumber = 	Math.floor((Math.random() * 10) + 1);
	randomItem = db.itemCollection.findOne({ "Item_Code" : "ItCode" + randomNumber });
	return randomItem._id;
}

// Inserting test data
for (i=2; i<=middleInvNo-1; i++){
  	invoiceData = {	"Invoice_Number" 	: i,
					"Customer_Info"		: getIDofARandomCustomer (),
					"Invoice_Date"		: new Date("2015-11-"  + Math.floor((Math.random() * 30) + 1)),
					"Invoice_Items" 	: [
									   		{ 
											  "_id"				: getIDofARandomItem(),
											  "Quantity"		: Math.floor((Math.random() * 8) + 1)
											},
											{ 
											  "_id"				: getIDofARandomItem(),
											  "Quantity"		: Math.floor((Math.random() * 8) + 1)
											}
									  	  ]
				  };
	
	print ("itnvoice data inserting .............................  " + i);
	db.invoiceCollection.insert(invoiceData);
}

for (i=middleInvNo + 1; i<=lastInvNo; i++){
  	invoiceData = {	"Invoice_Number" 	: i,
					"Customer_Info"		: getIDofARandomCustomer (),
					"Invoice_Date"		: new Date("2015-11-"  + Math.floor((Math.random() * 30) + 1)),
					"Invoice_Items" 	: [
									   		{ 
											  "_id"				: getIDofARandomItem(),
											  "Quantity"		: Math.floor((Math.random() * 8) + 1)
											},
											{ 
											  "_id"				: getIDofARandomItem(),
											  "Quantity"		: Math.floor((Math.random() * 8) + 1)
											}
									  	  ]
				  };
	
	print ("itnvoice data inserting .............................  " + i);
	db.invoiceCollection.insert(invoiceData);
}

//Creating Index
db.records.createIndex( { "Invoice_Number" : 1 } );

//Inserting one more invoice data at the beginning of collection
print ("inserting a new invoice data at the beginning of collection...................  ");
invoiceDataNewOne = {	"Invoice_Number" 	: firstInvNo,
						"Customer_Info"		: getIDofARandomCustomer (),
						"Invoice_Date"		: new Date("2015-11-"  + Math.floor((Math.random() * 30) + 1)),
						"Invoice_Items" 	: [
									   			{ 
												  "_id"				: getIDofARandomItem(),
												  "Quantity"		: Math.floor((Math.random() * 8) + 1)
												},
												{ 
												  "_id"				: getIDofARandomItem(),
												  "Quantity"		: Math.floor((Math.random() * 8) + 1)
												}
									  	  	  ]
				  	};
	


print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.insert(invoiceDataNewOne);

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Inserting one more invoice data at the middle of collection
print ("inserting a new invoice data at the middle of collection...................  ");
invoiceDataNewOne = {	"Invoice_Number" 	: middleInvNo,
						"Customer_Info"		: getIDofARandomCustomer (),
						"Invoice_Date"		: new Date("2015-11-"  + Math.floor((Math.random() * 30) + 1)),
						"Invoice_Items" 	: [
									   			{ 
												  "_id"				: getIDofARandomItem(),
												  "Quantity"		: Math.floor((Math.random() * 8) + 1)
												},
												{ 
												  "_id"				: getIDofARandomItem(),
												  "Quantity"		: Math.floor((Math.random() * 8) + 1)
												}
									  	  	  ]
				  	};
	


print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.insert(invoiceDataNewOne);

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Inserting one more invoice data at the end of collection
print ("inserting a new invoice data at the end of collection...................  ");
invoiceDataNewOne = {	"Invoice_Number" 	: (totalNoTestData + 1),
						"Customer_Info"		: getIDofARandomCustomer (),
						"Invoice_Date"		: new Date("2015-11-"  + Math.floor((Math.random() * 30) + 1)),
						"Invoice_Items" 	: [
									   			{ 
												  "_id"				: getIDofARandomItem(),
												  "Quantity"		: Math.floor((Math.random() * 8) + 1)
												},
												{ 
												  "_id"				: getIDofARandomItem(),
												  "Quantity"		: Math.floor((Math.random() * 8) + 1)
												}
									  	  	  ]
				  	};
	


print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.insert(invoiceDataNewOne);

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Updating a invoice data at the beginning of collection
print ("Updating a invoice data at the beginning of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.update(
	{
		"Invoice_Number"	: firstInvNo
	}, 	
	{
		$set: {
			"Customer_Info"		: getIDofARandomCustomer ()
		}
		
	}
);

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Updating a invoice data at the middle of collection
print ("Updating a invoice data at the middle of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.update(
	{
		"Invoice_Number"	: middleInvNo
	}, 	
	{
		$set: {
			"Customer_Info"		: getIDofARandomCustomer ()
		}
		
	}
);

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Updating a invoice data at the end of collection
print ("Updating a invoice data at the end of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.update(
	{
		"Invoice_Number"	: lastInvNo
	}, 	
	{
		$set: {
			"Customer_Info"		: getIDofARandomCustomer ()
		}
		
	}
);

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

function showInvoiceInfoDetails (invData) {
	print ("_id : " + invData._id);
	print ("Invoice_Number : " + invData.Invoice_Number);
	custData = db.customerCollection.findOne({ "_id" : invData.Customer_Info });
	print ("Customer_Number : " + custData.Customer_Number);
	print ("Customer_Name : " + custData.Customer_Name);
	print ("Address : " + custData.Address);
	
	itemsData = invData.Invoice_Items;
	
	for (var i=0; i < itemsData.length; i++) {
		itemID = itemsData[i]._id;
    	anItemData = db.itemCollection.findOne({ "_id" : itemID });
   		print ("Item_Code : " + anItemData.Item_Code);
		print ("Item_Name : " + anItemData.Item_Name);
		print ("Unit_Price : " + anItemData.Unit_Price);
		print ("Quantity : " + itemsData[i].Quantity);
  	}
}





//Finding a invoice data at the beginning of collection
print ("Finding a invoice data at the beginning of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

invData = db.invoiceCollection.findOne({ "Invoice_Number" : firstInvNo });
showInvoiceInfoDetails(invData);

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Finding a invoice data at the middle of collection
print ("Finding a invoice data at the middle of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

invData = db.invoiceCollection.findOne({ "Invoice_Number" : middleInvNo });
showInvoiceInfoDetails(invData);

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Finding a invoice data at the end of collection
print ("Finding a invoice data at the end of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

invData = db.invoiceCollection.findOne({ "Invoice_Number" : lastInvNo });
showInvoiceInfoDetails(invData);

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Deleting a invoice data at the beginning of collection
print ("Deleting a invoice data at the beginning of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.remove({ "Invoice_Number" : firstInvNo });

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Deleting a invoice data at the middle of collection
print ("Deleting a invoice data at the middle of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.remove({ "Invoice_Number" : middleInvNo });

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Deleting a invoice data at the end of collection
print ("Deleting a invoice data at the end of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.remove({ "Invoice_Number" : lastInvNo });

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Showing all the test data in invoiceCollection
/*print ("Showing all the test data in invoiceCollection .............................  ");
cursor = db.invoiceCollection.find();
cursor.forEach(printjson);*/