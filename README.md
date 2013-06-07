A simple JavaScript library for sending AJAX requests.
Supports PUT,POST,DELETE,GET requests.

<h1>Use</h1>
<code>
  ajax.send({
	async: true, // Asynchronous loading (default: true)
	
	url: "index.php", // Where to send a request
	
	data: {param1:"value 1",param2:"value 2"}, // Passed parameters
	
	type: 'POST', // Request method (default: "GET")
	
	dataType: "html", // Type of received data (supported json, html, xml)
	
	success: function(result){ // Callback function to call in case of successful transmission
		console.log(result);
	},
	
	error: function(result){ // Callback function to be called when an error
      		console.log("OMG! REQUEST NOT SENDING!");
	},
	
	beforeSend: function(result){ // Callback function to call before sending the request
      		console.log("Loading... Please wait.");
	}
  });
</code>
