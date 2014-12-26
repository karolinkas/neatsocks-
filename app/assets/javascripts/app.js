$(function() {
    $(".feature:nth-child(2)").addClass("active");
    // Here we instantiate a new WebSocketRails instance
    dispatcher = new WebSocketRails($('#echo').data('uri'), true)
        // We send the message when we push the 'send' button
    document.querySelector('button#fire').onclick = function() {
        send(document.querySelector('#send').value);
        document.querySelector('#send').value = '';

    };

    document.querySelector('button.remote').onclick = function() {       
      
      move(this.id);       

    };


    dispatcher.bind('new_message',
        function(message) {
            document.querySelector('#messages').innerHTML += '<li>' + message + '</li>';
        })

    dispatcher.bind('move_arrow',
        function(direction) {


            document.querySelector('#directions').innerHTML += '<p>' + "l" + '</p>';

          if ($(".feature:nth-child(2)").hasClass("active")) {
              $(".feature:nth-child(1)").addClass("active");
              $(".feature:nth-child(2)").removeClass("active");
              $(".feature:nth-child(3)").removeClass("active");

          } else if ($(".feature:nth-child(3)").hasClass("active")) {
              $(".feature:nth-child(2)").addClass("active");
              $(".feature:nth-child(3)").removeClass("active");
              $(".feature:nth-child(1)").removeClass("active");

          } else {
             $(".feature:nth-child(1)").addClass("active");
             $(".feature:nth-child(3)").removeClass("active");
             $(".feature:nth-child(2)").removeClass("active");
          }


        })

    dispatcher.bind('move_arrow',
        function(direction) {
            document.querySelector('#directions').innerHTML += '<p>' + "r" + '</p>';

          if ($(".feature:nth-child(2)").hasClass("active")) {
              $(".feature:nth-child(3)").addClass("active");
              $(".feature:nth-child(2)").removeClass("active");
              $(".feature:nth-child(1)").removeClass("active");

          } else if ($(".feature:nth-child(3)").hasClass("active")) {
              $(".feature:nth-child(1)").addClass("active");
              $(".feature:nth-child(2)").removeClass("active");
              $(".feature:nth-child(3)").removeClass("active");

          } else {
             $(".feature:nth-child(2)").addClass("active");
             $(".feature:nth-child(1)").removeClass("active");
             $(".feature:nth-child(3)").removeClass("active");
          }

        })


});
// Here we send the message in the websocket
function send(message) {
    dispatcher.trigger('new_message', message);
}

// we are sendind the direction command
function move(direction) {
    dispatcher.trigger('move_left');
}

function move(direction) {
    dispatcher.trigger('move_right');

}


