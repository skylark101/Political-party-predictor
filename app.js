var quesCounter = 0;

var party = {"NDA":0, "UPA":0, "Other":0};
var questions = [
  "The country will advance more efficiently if the lead is in younger hands.",

  "The money spent on building statues and religious buildings is a waste and should be completely used to support startups and affordable healthcare.",

  "A small governing cabinet is preferential over a big one.",

  "Immigrants should be provided with shelter and food without any complication or questions as we believe in equality for all.",

  "Instead of all independent portfolios, consolidation of some should happen to ensure better coordination and development.",

  "The extra portfolios should be given to senior ministers as middle aged minister should handle much active and crucial portfolios.",

  "I prefer a smaller government with independent yet interconnected portfolios",

  "The minimum support price will not  support and help the farmers but will add to the wealth of big corporate houses."




];


document.getElementById('question').innerHTML = questions[0];


document.getElementById('next-button').addEventListener('click',()=>{
  var response = document.querySelector('input[name="choice"]:checked').value;


  //***************RESPONSE VALIDATION*****************/

  // For question 1
  if (quesCounter == 0){
    if (response == "completely-disagree"){
      party.NDA++;
    }
    if (response == "slightly-disagree"){
      party.NDA++;
    }
    if (response == "not-sure"){
      party.Other++;
    }
    if (response == "slightly-agree"){
      party.UPA++;
      party.Other++;
    }
    if (response == "completely-agree"){
      party.UPA++;

    }
  }

  // For question 2
  if (quesCounter == 1){
    if (response == "completely-disagree"){
      party.NDA++;
    }
    if (response == "slightly-disagree"){
      party.NDA++;
    }
    if (response == "not-sure"){
      party.UPA++;
    }
    if (response == "slightly-agree"){
      party.Other++;
      party.UPA++;
    }
    if (response == "completely-agree"){
      party.Other++;
    }
  }
  // For question 3
  if (quesCounter == 2){
    if (response == "completely-disagree"){
      party.NDA++;

    }
    if (response == "slightly-disagree"){
      party.NDA++;

    }
    if (response == "not-sure"){
      party.Other++;

    }
    if (response == "slightly-agree"){
      party.UPA++;
      party.Other++;

    }
    if (response == "completely-agree"){
      party.UPA++;

    }
  }

  // For question 4
  if (quesCounter == 3){
    if (response == "completely-disagree"){
      party.NDA++;

    }
    if (response == "slightly-disagree"){
      party.NDA++;

    }
    if (response == "not-sure"){
      party.Other++;

    }
    if (response == "slightly-agree"){
      party.UPA++;
      party.Other++;

    }
    if (response == "completely-agree"){
      party.UPA++;

    }
  }

  // For question 5
  if (quesCounter == 4){
    if (response == "completely-disagree"){
      party.UPA++;
     

    }
    if (response == "slightly-disagree"){
      party.UPA++;
      

    }
    if (response == "not-sure"){
      party.UPA++;
      party.Other++;

    }
    if (response == "slightly-agree"){
      party.NDA++;
      party.Other++;

    }
    if (response == "completely-agree"){
      party.NDA++;
      party.Other++;
      

    }
  }
  // For question 6
  if (quesCounter == 5){
    if (response == "completely-disagree"){
      party.NDA++;
     

    }
    if (response == "slightly-disagree"){
      party.NDA++;
      

    }
    if (response == "not-sure"){
      party.NDA++;
      party.Other++;

    }
    if (response == "slightly-agree"){
      party.UPA++;
      party.Other++;

    }
    if (response == "completely-agree"){
      party.UPA++;
      

    }
  }

   // For question 7
   if (quesCounter == 6){
    if (response == "completely-disagree"){
      party.UPA++;
     

    }
    if (response == "slightly-disagree"){
      party.UPA++;
      

    }
    if (response == "not-sure"){
      party.UPA++;
      party.Other++;

    }
    if (response == "slightly-agree"){
      party.NDA++;
      party.Other++;

    }
    if (response == "completely-agree"){
      party.NDA++;
      party.Other++;
      

    }
  }

  // for question 8
  if (quesCounter == 7){
    if (response == "completely-disagree"){
      party.NDA++;
    }
    if (response == "slightly-disagree"){
      party.NDA++;
    }
    if (response == "not-sure"){
      party.Other++;
      party.UPA++;
    }
    if (response == "slightly-agree"){
      party.Other++;
      party.UPA++;
    }
    if (response == "completely-agree"){
      party.Other++;
      party.UPA++;
    }
  }
 

  document.querySelector('input[name="choice"]:checked').checked = false;
  quesCounter++;
  document.getElementById('question').innerHTML = questions[quesCounter];
  var final_answer;
  if (quesCounter == questions.length){
    document.getElementById('questionnaire').style.display = "none";

    if(party.NDA >= party.UPA && party.NDA >= party.Other){
      final_answer = "NDA";
    }
    if(party.UPA >= party.NDA && party.UPA >= party.Other){
      final_answer = "UPA";
    }
    if(party.Other >= party.UPA && party.Other >= party.NDA){
      final_answer = "No national parties but other Parties like AAP";
    }
    
    document.getElementById('ans').innerHTML = final_answer;
    document.getElementById('answer-party').style.display = "block";
  }


});






