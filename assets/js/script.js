var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");

$("#currentDay").append(now);

// var bizHrs = [10, 11, 12, 1, 2, 3, 4, 5];
// for(var i = 0; i < bizHrs.length ; i++){
//     $(".row").append()
// }
//creat an onclick for the buttons that saves the data from the textarea into local storage

// var saveButton = document.querySelector (".saveBtn");

var bttnClick = $(".saveBtn").click(function () {
  var parentContainer = $(this).parent().attr("id");
  var inputText = $(this).siblings(".text").val();
  console.log(inputText);
  console.log(parentContainer);
  localStorage.setItem(parentContainer, inputText);
});

//create a fucntion taht  checks the time in the timeblock against the current hour. Add a conditional statement that checks if the hour is past, present , future and add the atribute from css.
var checkTime = function () {
  // if ()
  var now2 = moment().format("Do");
  var now3 = now2.charAt(0);
  var now4 = now2.charAt(1);
  var now5 = now3 + now4;
  console.log(now5);

  var bizHrs = [10, 11, 12, 1, 2, 3, 4, 5];

  for (var i = 0; i < bizHrs.length; i++) {
      console.log(bizHrs[i]);
      var selectCon = document.getElementById(bizHrs[i]).getAttribute("id");
      if (selectCon === now5) {
        document
          .getElementById(bizHrs[i] + "-text")
          .setAttribute("class", "text col-md-10 description present");
      } else if( selectCon > now5){
        document
        .getElementById(bizHrs[i] + "-text")
        .setAttribute("class", "text col-md-10 description future");
      }
  }
};

checkTime();
//get data from local storage and populate them in the text area/description section of the html that corresponds to the appropriate time
