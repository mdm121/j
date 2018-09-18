// $("#btnSubmit").click(function() {
//     alert("This button has been clicked.");
// });
$(document).ready(function (){
    validate();
    $('#text').change(validate);
    
});

let textValue;
$("body").append("<div></div>");

$("input[type=submit]").click(function(e) {
    e.preventDefault();
    let textValue = $("#text").val();
    // printText(textValue);

});

function validate(){
    if ($("#text").val().length > 0) {
        $("input[type=submit]").prop("disabled", false);
    } else {
        $("input[type=submit]").prop("disabled", true);
    };
};

// function printText(e) {
//     $("div").append("<h2>" + e + "</h2>");
//     $("h2").hover(function() {
//         $("h2").css({ "text-align": "center", "width": "200px", "height": "200px",
//         "background-color": "red", "border-radius": "2em"});
//     });
// };

$('#myDiv').append("<ul id='newList'></ul>");
for (cnt = 0; cnt < someList.length; cnt++) {
  $("#newList").append("<li>"+someList[cnt].FirstName + ":" + someList[cnt].LastName+"</li>");
}

