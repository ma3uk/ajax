  var ajax = {
        send: function (data) {
			if (typeof (data) === 'object') {
				data.async = data.async || true;
				data.dataType = data.dataType || 'html';
				data.data = data.data || false;
				data.type = data.type || 'GET';
				
				var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
				
				xhr.onreadystatechange = function () {
					if (typeof (data.beforeSend) === 'function') {
						data.beforeSend();
					}
					if (xhr.readyState === 4 && xhr.status === 200) {
						
						if (typeof (data.success) === 'function') {
							if (data.dataType === 'html') {
							data.success(xhr.responseText);
							}
							if (data.dataType === 'xml') {
							data.success(xhr.responseXML);
							}
							if (data.dataType === 'json') {
							data.success(ajax.parseJSON(xhr.responseText));
							}
						}
					} else {
						if (typeof (data.error) === 'function') {
							data.error();
						}
					}
				};
                var checkType = ajax.findArray(["GET","DELETE","POST","PUT"],data.type);
                if(checkType !== false) {
                    if (data.type === 'GET') {
                        xhr.open('GET',data.url + "?" + ajax.toQueryString(data.data),true);
                        xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
                        xhr.send(null);
                    } else {
                        xhr.open(checkType,data.url,true);
                        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
                        xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
                        xhr.send(ajax.toQueryString(data.data));
                    }
                }
			}
		},

		findArray: function (array, value) {

            for(var i=0; i<array.length; i++) {
                if (array[i] == value) return value;
            }

            return false;
        },

		parseJSON: function (data) {
				if (typeof (data) !== "string" || !data || data === '') {
					return null;
				}

				data = data.replace(/^\s+/, '');
				data = data.replace(/\s+$/, '');
				
				if (window.JSON && window.JSON.parse) {
					return window.JSON.parse(data);
				}
				
				var checkChars = /^[\],:{}\s]*$/;
				var checkEscape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
				var checkTokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
				var checkBraces = /(?:^|:|,)(?:\s*\[)+/g;
				
				if (checkChars.test(data.replace(checkEscape, "@").replace(checkTokens, "]").replace(checkBraces, ""))) 
				{
					return (new Function( "return " + data ))();
				}
			},
			
		toQueryString: function (data) {
				var query = '', i,
					push = function (key, value) {
						query += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
					}, key, value;

				for (key in data) {
					if (!Object.hasOwnProperty.call(data, key)) {
						continue;
					}
					
				value = data[key];
				
					if (ajax.isArray(data)) {
						for (i = 0; i < value.length; i++) {
							push(key, value[i]);
						}
					} else {
						push(key, data[key]);
					}
				}
				
				return query.replace(/&$/, '').replace(/%20/g, '+');
			},

		isArray: function (data) {
			return (typeof (data) === "object") && (data instanceof Array);
			}
	};
