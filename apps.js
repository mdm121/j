// $("#btnSubmit").click(function() {
//     alert("This button has been clicked.");
// });

let textValue;

$(document).ready(function (){
    validate();
    $('#text').change(validate);
});

function validate(){
    if ($("#text").val().length > 0) {
        $("input[type=submit]").prop("disabled", false);
    } else {
        $("input[type=submit]").prop("disabled", true);
    };
};

$("input[type=submit]").click(function(e) {
    e.preventDefault();
    let textValue = $("#text").val();
    printText(textValue);

});

$("body").append("<div></div>");


function printText(e) {
    $("div").append("<h2>" + e + "</h2>");
    
};

