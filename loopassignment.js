/* Exercise 1 */

function printEven(arr){
 // first check the array you entered is empty or not array   
if(Array.isArray(arr) && arr.length !=0)
{
    for(var i = 0; i <=arr.length;i++)
    { 
        if (arr[i] % 2 ==0)
        console.log(arr[i]);
    }
}
else
   console.log("The array is empty or it is not an array");
}

const arr1 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5];
const arr2 = [15,26,74,12,3,6,9,1,2,5]; // should log 26,74,12,6,2
var arr3 = 3;

//printEven(arr1);
//printEven(arr2);
//printEven(arr3);


/* exercise 2  */
function getLargest(arr)
{   
    var temp = arr[0]; 
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>temp)
        {
            temp = arr[i];
        }     
    }
    console.log(temp);
}

//getLargest(arr1);
//getLargest(arr2);

/* exercise 3 */

function loopIndex(ctn)
{  var new_atn = "";
  if (ctn == 0)
    {
        console.log('number is not correct');
    }
  else
    {     
        for(var i=1;i<=ctn;i++)
        {
            for(var j=1;j<=i;j++)
            {
                new_atn += i;
            }            
        }
    }
    console.log(new_atn);
}

//var ctn =6;
//loopIndex(ctn);


/* exercise 4 */

function triangelLoopIndex(ctn)
{  
    if (ctn == 0)
    {
        console.log('number is not correct');
    }
  else
    {
        for(var i=1;i<=ctn;i++)
        {   var new_atn = "";

      
            for(var j=1;j<=i;j++)
            {         
                new_atn += i;   

            }
            
             console.log(new_atn);   
        }
    }
   
}

//triangelLoopIndex(6)


//exercise 5


function triangelLoopIndexPyramid(ctn)
{  
    if (ctn == 0)
    {
        console.log('number is not correct');
    }
  else
    {
        for(var i=1;i<=ctn;i++)
        {   var new_atn = "";
    //  creates the indentation of the current line of numbers
           for(var k =ctn-i; k>0; k--)
                {
                   new_atn += " ";
                }
      
            for(var j=1;j<=i;j++)
            {         
                new_atn += i + " ";   

            }
            
             console.log(new_atn);   
        }
    }
   
}

//triangelLoopIndexPyramid(6);

/* Exercise 6 */

function rectangularFrame(arr)
{
    /* find the max length of tring element*/
 var maxlength = arr[0].length;
 var triangelwidth = 0;
 var out_put = "";
 var first_line="";
 var last_line="";
 var mid_line="";
// find the longest elment in array
 for(var i = 0; i<arr.length;i++)
 {
     if(maxlength < arr[i].length)
     {
         maxlength = arr[i].length;
     }
 }

 // one asterrisk + one space for each side
 triangelwidth = maxlength + 4;
  // print out the first line (*********)
      for(var i = 0; i <triangelwidth;i++)
      {
          first_line += "*";
      }
      console.log(first_line);
 //    print out the middle line 
 // for each line in body it is like  "* " + "element" +"spaces" + "*";
      for(var i = 0; i<arr.length;i++)
      {
        mid_line = "* "; // first part of line;
        var spa_ = "";
          for(var j = 0; j <=maxlength-arr[i].length;j++ )
          {
              spa_ +=" "; // spaces
          }

          out_put = mid_line +arr[i] + spa_ + "*";
        console.log(out_put);

      }
//print out the last line (***********) 

            for(var i = 0; i <triangelwidth;i++)
      {
          last_line += "*";
          

      }
 console.log(last_line);

  
}

var a = ["apple","banana","strawberry"];

rectangularFrame(a)


// exercise 7 

// Do While loop 
// it will excute at least one iteration
function dowhile(){
var i = 0;
do{     
    console.log(i);
    i++;
}
while(i>1)
}
// DO While loop 
// it may not excute at least one iteration
function whiledo(){
var i = 0;
while(i >1)
{
    console.log(i);
    i++;
}
}

//dowhile();
//whiledo();