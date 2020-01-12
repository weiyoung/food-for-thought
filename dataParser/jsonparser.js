$(document).ready(function () {
    $("#addItem").click(function(){
        var storeName = $('#inputGroceryStore').val();
        var food = $('#inputFoodCategory').val();
        var weight = $('#inputWeight').val();
        var expiry = $('#expiryDate').val();

        createEntry(storeName, food, weight, expiry);

        
    });
    $("#submitItems").click(function(){
        submitEntry();
    });    
    //TEST
    

    // $('button').click(function () {
    //     var toAdd = $("input[name=message]").val();
    //     $('#messages').append("<p>" + toAdd + "</p>");
    // });

    
});

var submission = [];

function createEntry(storeName, food, weight, expiry) {

    //current date
    var today = new Date();
    var dateString = n(today.getDate()) + "-" + n((today.getMonth() + 1)) + "-" + today.getFullYear() + " "
                        + n(today.getHours()) + ":" + n(today.getMinutes());

    //this entry
    var entry = {
        store_id : storeName,
        food_name : food,
        food_weight : weight,
        expiry_date : expiry,
        current_date : dateString
    };

    //push this entry to submission
    submission.push(entry);
}

function submitEntry() {
    var completedSubmission = submission;
    submission = [];

    //TEST
    for (var i = 0; i < completedSubmission.length; i++) {
         alert(JSON.stringify(completedSubmission[i]));
       }

    // return completedSubmission;
}

function n(num){
    return num > 9 ? "" + num: "0" + num;
}



