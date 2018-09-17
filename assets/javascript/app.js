$(document).ready(function () {

// Having issues in checking my answers. I have tried with the array as well as creating a variable for questions, and is ot capturing the results. 
var question = [{
    question: "What was Rick's favorite exhibit in Anatomy Park?",
    choices: ["The Bone Train", "Spleen Mountain", "Bladder Falls", "Pirates of the Pancreas"],
    correctAnswer: "Pirates of the Pancreas",
}, {
    question: "What does Snuffles want to be called now that he abandoned his slave name?",
    choices: ["Snowbot", "Snowball", "Whitefur", "Morty the Dog"],
    correctAnswer: "Snowball",
}, {

    question: "Who is the voice actor for Rick Sanchez?",
    choices: ["Justin Roiland", "Sarah Chalke", "Chris Parnell", "Spencer Grammer"],
    correctAnswer: "Justin Roiland",
}, {

    question: "What color is Rick's hair?",
    choices: ["Orange", "Blue", "Brown", "White"],
    correctAnswer: "Blue",
}, {

    question: "In the pilot, why did Rick want to blow up earth?",
    choices: ["He wanted a clean start", "He wanted to accomplish something", "He was bored", "He was angry"],
    correctAnswer: "He wanted a clean start",
}];


    // Start button must be clicked to begin the quiz, and events for submititng and playing again 
    $("#start-button").click(function () {
        var number = 60;
        $("#start-button").on("click", start);
        $("#submit").on("click", finish);
        $("#restart").on("click", restart);

        // Countdown timer must start after button is clicked and setting interval to 1 second 
        function start() {
            counter = setInterval(timer, 1000);
            showMe(".question");
            showMe(".answers");
            showMe("#submit");
            hideMe("#start-button");
            hideMe(".rules");
            hideMe("#restart");
            hideMe("#results1");
            hideMe("#results2");
            hideMe("#results3");
        }

        // Show number during countdown, and stop timer when it gets to 0 
        function timer() {
            number--
            $("#show-number").html("<h2>" + number + "</h2>");
            if (number === 0) {
                stop();
            }
        }

        // Shows correct, incorrect, and unanswered when the timer stops
        function stop() {
            clearInterval(counter);
            $("#results1").show();
            $("#results2").show();
            $("#results3").show();
            $("#restart").show();
            $(".question").hide();
            $(".answers").hide();
            $("#submit").hide();

        }

        // Clearing count that was called by setInterval
        function finish() {
            number = 1;
            clearInterval(counter);
            timer();
        }

        // Countdown to restart from 60 seconds after restarting the game 
        function restart() {
            number = 60;
            start();
        }




        // Show events in the main section 
        function hideMe(e) {
            $(e).hide();
        }
        function showMe(e) {
            $(e).show();
        }


        
    });
});


// function check () {
//     var q1 = document.container.q1.value;
//     var q1 = document.container.q2.value;
//     var q1 = document.container.q3.value;
//     var q1 = document.container.q4.value;
//     var q1 = document.container.q5.value;
//     var correct = 0;


//     if (q1 == "Pirates of the Pancreas") {
//         correct++
//     }
//     if (q2 == "Snowball") {
//         correct++
//     }
//     if (q3 == "Justin Roiland") {
//         correct++
//     }
//     if (q4 == "Blue") {
//         correct++
//     }
//     if (q5 == "He wanted a clean start") {
//         correct++
//     }



