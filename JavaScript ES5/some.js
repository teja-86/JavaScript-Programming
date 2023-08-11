//example1

var data=[10,20,30,40,50];
var usr=data.some(
    function(element){
     return element<40;
    }
)
console.log(usr);

//example2

var data=[10,20,30,40,50];
var ele=data.some(
    function(abc){
     return abc>60;
    }
)
console.log(ele);
