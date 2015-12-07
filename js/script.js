function submitAnswers() {
    var total = 5; //total number of questions
    var score = 0; //initial value of score
    var i;

    //Get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //Validation
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert("You missed question " + i);
            return false;
        }
    }

    //set correct answers
    var answers = ["b", "a", "d", "b", "d"];

    //check answers
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }

    //display results
    document.getElementById("results").innerHTML = "<h3>You scored <span>" + score + "</span> out of <span>" + total + "</span></h3>"

    return false;
}
