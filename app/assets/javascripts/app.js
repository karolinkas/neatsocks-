$(function() {
    // Here we instantiate a new WebSocketRails instance
    dispatcher = new WebSocketRails($('#echo').data('uri'), true)
        // We send the message when we push the 'send' button
    document.querySelector('button#fire').onclick = function() {
        send(document.querySelector('#send').value);
        document.querySelector('#send').value = '';
    };

    document.querySelector('button#left').onclick = function() {
        // direction += "l";
        move();
        console.log("clicked");
    };

    dispatcher.bind('new_message',
        function(message) {
            document.querySelector('#messages').innerHTML += '<li>' + message + '</li>';
        })

    dispatcher.bind('go_left',
        function(direction) {
            document.querySelector('#directions').innerHTML += '<p>' + "l" + '</p>';
            console.log("bind");
        })


});
// Here we send the message in the websocket
function send(message) {
    dispatcher.trigger('new_message', message);
}

// we are sendind the direction command
function move() {
    dispatcher.trigger('go_left');
    console.log("triggered");
}
