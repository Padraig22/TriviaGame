


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 5,
        display = $('#time');
    startTimer(fiveMinutes, display);
});




var correctScore = 0;
var incorrectScore = 0;
var unansweredScore = 0;


$("#correct-score").text(correctScore);
$("#incorrect-score").text(incorrectScore);
$("#unanswered-score").text(unansweredScore);


var ans = $('.q-two').val();

console.log(ans);




if (ans === "wrong") {
    incorrectScore++;
} else if (ans === undefined) {
    unansweredScore++;
} else {
    correctScore++;
}








$("#questionnaire").hide();
$("#results-page").hide();

$("#start-button").click(function () {
    $("#start-button").hide();
    $("#questionnaire").show();
});

$("#done-button").click(function () {
    $("#questionnaire").hide();
    $("#results-page").show();


});