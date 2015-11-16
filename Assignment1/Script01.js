print("Wellcome to script 1 - Denormalised without index");

db = db.getSiblingDB('dbInvoiceSystem');

print("You are now connected to database : " + db);

db.invoiceCollection.drop();

totalNoTestData = 16;
lastInvNo =  totalNoTestData;
firstInvNo =  1;
middleInvNo =  totalNoTestData / 2;
// Inserting test data
for (i=1; i<=totalNoTestData; i++){
  	invoiceData = {	"Invoice_Number" 	: i,
					"Customer_Number"	: "CustNum" + i,
					"Customer Name"		: "CustName" + i,
					"Address"			: "UK" + i,
					"Invoice_Date"		: new Date("2015-11-"  + Math.floor((Math.random() * 30) + 1)),
					"Invoice_Items" 	: [
									   		{
												"Item_Code" 	: "Item001",
											 	"Item_Name"		: "Shirt",
											 	"Unit_Price"	: 20,
											 	"Quantity"		: Math.floor((Math.random() * 8) + 1)
											},
											{
												"Item_Code" 	: "Item002",
											 	"Item_Name"		: "Mobile",
											 	"Unit_Price"	: 75,
											 	"Quantity"		: Math.floor((Math.random() * 8) + 1)
											}
									  	  ]
				  };
	
	print ("data inserting .............................  " + i);
	db.invoiceCollection.insert(invoiceData);
}


//Inserting one more invoice data at the end of collection
print ("inserting a new invoice data at the end of collection...................  ");
invoiceDataNewOne = {	"Invoice_Number" 	: (totalNoTestData + 1),
						"Customer_Number"	: "CustNum" + (totalNoTestData + 1),
						"Customer Name"		: "CustName" + (totalNoTestData + 1),
						"Address"			: "UK" + (totalNoTestData + 1),
						"Invoice_Date"		: new Date("2015-11-"  + Math.floor((Math.random() * 30) + 1)),
						"Invoice_Items" 	: [
									   			{
												"Item_Code " 	: "Item001",
											 	"Item_Name"		: "Shirt",
											 	"Unit_Price"	: 20,
											 	"Quantity"		: Math.floor((Math.random() * 8) + 1)
												},
												{
												"Item_Code " 	: "Item002",
											 	"Item_Name"		: "Mobile",
											 	"Unit_Price"	: 75,
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
			"Customer_Number"	: "CustNum13",
			"Customer Name"		: "CustName13"
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
			"Customer_Number"	: "CustNum10",
			"Customer Name"		: "CustName10"
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
			"Customer_Number"	: "CustNum11",
			"Customer Name"		: "CustName11"
		}
		
	}
);

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Finding a invoice data at the beginning of collection
print ("Finding a invoice data at the beginning of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.findOne({ "Invoice_Number" : firstInvNo });

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Finding a invoice data at the middle of collection
print ("Finding a invoice data at the middle of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.findOne({ "Invoice_Number" : middleInvNo });

var timeDiff = (new Date()).getTime() - start;

print("time required in ms " + timeDiff);

//Finding a invoice data at the end of collection
print ("Finding a invoice data at the end of collection...................  ");

print ("Recording time.............................  ");
var start = (new Date()).getTime();

db.invoiceCollection.findOne({ "Invoice_Number" : lastInvNo });

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