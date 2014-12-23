class ConnectionsController < WebsocketRails::BaseController
	  
	  def new_message
    # Here we call the rails-websocket broadcast_message method
    	broadcast_message :new_message, 'Writing: ' + message
  	end

  	def go_left
  	# sending direction after button press
  		broadcast_message :go_left, "Direction: l" 
  	end


end
