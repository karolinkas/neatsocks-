// navigate through features via mobile

$(function() {

    $(".feature:nth-child(2)").addClass("active");
    // Here we instantiate a new WebSocketRails instance
    dispatcher = new WebSocketRails($('#echo').data('uri'), true)
        // We send the message when we push the 'send' button
    document.querySelector('button#fire').onclick = function() {
        send(document.querySelector('#send').value);
        document.querySelector('#send').value = '';

    };

    document.querySelector('button#left').onclick = function() {

        moveleft();

    };

    document.querySelector('button#right').onclick = function() {

        moveright();

    };


    // all the bindings that attach a function to the the sent content 

    dispatcher.bind('new_message',
        function(message) {
            document.querySelector('#messages').innerHTML += '<li>' + message + '</li>';
        })

    dispatcher.bind('go_left',
        function() {

            var selected = $(".feature.active");

            if ($(".feature:first").hasClass("active")) {
                $(".feature:last").addClass("active");
                $(".feature:first").removeClass("active")
            } else {
                selected.prev(".feature").addClass("active");
                selected.removeClass("active");
            }
        })

    dispatcher.bind('go_right',
        function() {

            var selected = $(".feature.active");

            if ($(".feature:last").hasClass("active")) {
                $(".feature:first").addClass("active");
                $(".feature:last").removeClass("active")
            } else {
                selected.next(".feature").addClass("active");
                selected.removeClass("active");
            }
        })



});
// Here we send the message in the websocket
function send(message) {
    dispatcher.trigger('new_message', message);
}

// we are sendind the direction command
function moveleft() {
    dispatcher.trigger('go_left');

}

function moveright() {
    dispatcher.trigger('go_right');

}




// should help to fixing z-index difficulties
function findHighestZIndex(elem) {
    var elems = document.getElementsByTagName(elem);
    var highest = 0;
    for (var i = 0; i < elems.length; i++) {
        var zindex = document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index");
        if ((zindex > highest) && (zindex != 'auto')) {
            highest = zindex;
        }
    }
    return highest;
}
