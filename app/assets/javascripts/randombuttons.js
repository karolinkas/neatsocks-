function createFeaturesRandomly() {

    var featureNames = ["Buscador inteligente", "Control del directo", "Grabación", "Aplicaciones", "Multipantalla", "Emisión", "Sugerencias"]


    // var randomIndex = Math.floor(Math.random()  * (7 - 1) + 1)

    function shuffle(array) {
        var i = array.length,
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

    var randNames = shuffle(featureNames);
    // console.log(randNames);



    $(".feature:nth-child(1)").html(randNames[0]);
    $(".feature:nth-child(2)").html(randNames[1]);
    $(".feature:nth-child(3)").html(randNames[2]);





}
