//alert("JavaScript works!");

//Variables

var name = "Zack";
var platforms = ['Android', ' iOS', ' Windows Phone 7', ' and Blackberry'];
var job = " I test apps";
var numberOfBugs= 0;


//Procedure

var work= function(Zack) {
    if (name==="Zack") {
        console.log ("My name is " + name + " and " + job + " for " + platforms + " for my job.");
    } else {
            console.log (name + " doesnt actually work and just sits at home.");
    };
    
};

work (name)

//End of Procedure


// Booleans

function bugsFound (numberOfBugs) {
    if (numberOfBugs===0) {
     console.log ("Guess what! " + numberOfBugs +" bugs found! Job well done!");
    } else if (numberOfBugs>0) {
        console.log("Dang it! More bugs, gotta keep working!");
    };return numberOfBugs
};

var bugs = bugsFound(numberOfBugs);

// End of Booleans

//Number Function


{
var test=1;
while (test<4)
  {
  console.log ("I test app number " + test + " .");
  test++;
  };
    console.log ("No more apps to test!");
    
};



//End of Number Function

//String Function
var outcome= "boss is very happy";
var duty= "apps are bug free!";
{console.log("My " + outcome + " that the " + duty);
    
};
//End Of String Function

//Array
var apps=[ "ITS Trucker", "ITS Broker", "Roady's Mobile Directory" ];
for (var i = 0; i < apps.length; i++) {
    console.log(apps[i]);
};
{   console.log ("These are the apps I test.")
    
};
    
//End of Array
