A simple JavaScript library for sending AJAX requests.
Supports PUT,POST,DELETE,GET,OPTIONS,HEAD requests.
<h3>Size:</h3>
<b>Normal:</b> 2.26kb
<b>Minify:</b> 1.24kb
<b>MonkeyJS:</b> 1.04kb
<b>Gzip:</b> 0.64kb
<h1>Use</h1>
<code>
  ajax.send({...})
</code>
<h1>Parameters</h1>
<b>async</b>: true // Asynchronous loading (default: true)

<b>url</b>: "index.php" // Where to send a request</u>
    
<b>data</b>: {param1:"value 1",param2:"value 2"} // Passed parameters
    
<b>type</b>: 'POST' // Request method (default: "GET")
    
<b>dataType</b>: "html" // Type of received data (supported json, html, xml)
    
<b>success</b>: function(result){...} // Callback function to call in case of successful transmission
			
<b>error</b>: function(){...} // Callback function to be called when an error
    
<b>beforeSend</b>: function(){...} // Callback function to call before sending the request
<h1>Example</h1>
<pre><code>
	ajax.send({
		url: "users.php",
		data: {firstName:"Max",lastName:"Golubcov"},
		type: "POST",
		dataType: "json",
		success: function(result){
			console.log(result);
		}
	});
</re></code>

