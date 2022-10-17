console.log("**********string****************");
var givenString="Good morning It champ";
var totalChar=givenString.length;
for (let index = 0; index < totalChar; index++) {
      if(index%2==0){
        var charAt=givenString.charAt(index)
      }
       console.log(charAt);
    }
console.log("**********reverse************");
var myName="Good morning It champ";
var lenthStr=myName.length -1;
var reverseStr="";
for (let index = lenthStr; index >0; index --) {
    console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
    
    console.log(reverseStr);


