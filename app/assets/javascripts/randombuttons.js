function createFeaturesRandomly(rightId) {
    
    // var randomIndex = Math.floor(Math.random()  * (7 - 1) + 1)

    function shuffle(array) {
        var i = array.length - 1,
            j = 0,
            temp;

        while (i--) {

            j = Math.floor(Math.random() * (i + 1));

            // swap randomly chosen element with current element    
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            
        }

        return array;
    }

    var randNames = featureNames.slice();
    randNames.splice(rightId, 1);
    randNames = shuffle(randNames);

    var rightAnswerID = Math.floor(Math.random() * 3);
    console.log(rightId);    
    randNames.splice(rightAnswerID, 0, featureNames[rightId]);
    
    console.log(randNames);    

    $(".feature").removeClass("rightAnswer");
    $(".feature:nth-child(" + (rightAnswerID + 1) + ")").addClass("rightAnswer");

    for(var i = 0; i < 3; i++) {
        var button = $(".feature:nth-child(" + (i+1) + ")");
        button.html(randNames[i]);       
    }
}
