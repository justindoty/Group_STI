var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function calcSti (arr){
  // set the base
var percentSti = 0.0;

  if(arr[3] <= 2 ){
    percentSti = 0.0;
  }
  else if (arr[3] == 3){
    percentSti = 0.04;
  }
  else if (arr[3] == 4) {
    percentSti = 0.06;
  }
  else if (arr[3] == 5) {
    percentSti = 0.1;
  }

////
  if(arr[1].length == 4){
    percentSti += 0.05;
  }
  if(arr[2] > 65000){
    percentSti -= 0.01;
  }

  if (percentSti > 0.13){
    percentSti =0.13;
  }

  return percentSti;
}

function calcBonus (){


}
