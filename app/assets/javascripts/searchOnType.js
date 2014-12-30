function searchOnType() {

    $("#userinput").show();

    $("#bill").keyup(function() {

        string = $(this).val();

        if (string.toUpperCase() === "Bil".toUpperCase()) {

            loadSuggestions();

        }
    });
    return donePlaying;
}

function loadSuggestions() {

    var parent = $(".suggestions");
    var answers = parent.children();
    while (answers.length) {
        parent.append(answers.splice(Math.floor(Math.random() * answers.length), 1)[0]);
    }

    $(".suggestions").show();

    animateIn();


    $(".answer").click(function() {

        if ( $(this).hasClass("rightAnswer") ) {

            donePlaying = true;
            animateOut();
            alert("perfectly right");

        } else {
            alert("you are so wrong");
        }
    });
    return donePlaying;
}

function animateIn() {
    TweenMax.staggerFrom(".answer", 2, {
        scale: 0.5,
        opacity: 0,
        delay: 0.25,
        ease: Elastic.easeOut,
        force3D: true
    }, 0.2);
}

function animateOut() {
    TweenMax.staggerTo(".answer", 0.25, {
        opacity: 0,
        y: -100,
        ease: Back.easeIn
    }, 0.1);
}
