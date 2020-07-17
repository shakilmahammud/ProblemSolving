
//convert feet to mile ====Assignment-Problem Solving -1
/*
 1feet =0.000189394 mile; &
 5280 feet = 1 mile;
 */
function feetToMile(feet){
    var mile="Please Enter Positive Or 0 Value";
    if(feet<0){
        console.log("Distance Can't Nagetive Number")
    }
    else{
        mile=feet/5280;
    }
    return mile;
}
var feetToMileResult=feetToMile(0);

console.log("Your feet: =",feetToMileResult,"Mile.");

//wood Calculator =====Assignment-Problem Solving-2
/*
It takes 1 Cubic foot of wood to make a chair.
It takes 3 Cubic foot of wood to make a table.
It takes 5 Cubic foot of wood to make a bed.

*/
function woodCalculator(chair,table,bed,){
    var perChairWood=1;
    var perTableWood=3;//Cubic
    var perBedWood =5; //Cubic
    var totalWood="Your Value Nagetive So Don't Need Wood";
    if(chair<0 || table<0 ||bed<0){
        console.log("Please Enter Positive Or 0 Number")
    }
    else{
        totalWood=perChairWood*chair+table*perTableWood+bed*perBedWood;
    }
    return totalWood;
}

var totalNeedWood=woodCalculator(5,5,5,);
console.log("Your Total Need Wood =",totalNeedWood,"Cubic foot");

//===brick Calculator ======Assignment-Problem Solving-3

/*
1 to 10 floors
1 floor equals 15 feet.
It takes 1000 bricks to fit 1.
&
11 to 20 floors
1 floor equals 12 feet.
It takes 1000 bricks to fit 1.
&
21 to Infinity floors
1 floor equals 10 feet.
It takes 1000 bricks to fit 1.
*/
function brickCalculator(brick){
    var perFloor="Don't Need ";//gloabal
    if(brick<0){
      console.log("Enter a Positive Or 0 Flooer Number. I'm Tell You How Much Brick Need")
    }
    else if(brick<=1 || brick<=10 ) {
      perFloor=brick*15*1000;
     
 }
    else if(brick<=11 || brick<=20){
      perFloor=brick*12*1000;
 }
    else{
      perFloor=brick*10*1000;
 }
 return perFloor;
}

var totalNeedBrick=brickCalculator(0);
console.log("Total Need =",totalNeedBrick,"Brick");

//find min word friend name. ==== tiny Friend ==== Assignment - Problem solving -4
/*
function tinyFriend(name){
    var friendName=name;
    var tinyFriendName=name.length.Math.min(...friendName);    
    return tinyFriendName;
}
var result=tinyFriend(["shakil","ami","ro","azad"])
console.log(result);*/