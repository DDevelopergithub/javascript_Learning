
var tcsEligibilityCheck = function (grad_score, hsc_score, ssc_score, candidate_name) {
    console.log(grad_score >= 70 );
        var result = grad_score >= 70 || hsc_score >= 80 || ssc_score > 90  // false || true
            ? `Congrates ${candidate_name} you are eligible for TCS interview`
            : "Unfortunately you are not eligible for interview";
        console.log(result);
    }
    tcsEligibilityCheck(80, 86, 90, "Mohit Sharma");
    tcsEligibilityCheck(69, 65, 95, "Anil Pende");





console.log("***************Ternary operator********************");

          function malemariageEligibility (gender,age,candidate_name)
          {
            if(gender=="male"&& age>= 21)
             {
                console.log('Hey ${candidate_name} you are eligible for marriage');
            }else
                console.log("Not eligible for marriage");
          }
              malemariageEligibility("Male",25,"Billgates");
              //malemariageEligibility("Male",17,"Stew jobes");
console.log("**************If else block************************");
          
      function femalemarriageEligibility(gender,age,candidate_name)

      
      {
        if(gender=="female"&& age>=18)
        {
            //console.log('Hey ${}you are eligible for marriage');
        }else
            console.log("Malinda Gates are eligible for marriage");
      }
        femalemarriageEligibility("female",16,"jenifer");
        femalemarriageEligibility("female",16,"Malinda Gates");  
        
    