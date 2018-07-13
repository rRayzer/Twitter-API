$(document).ready(function() {

	$.ajax({ 
 	  	type: 'GET', 
 	  	url: "http://127.0.0.1:8000/tweet/", 
 	  	dataType: 'json',
 	  	success: function(data) {
   			var tweet = data;

   			for (var i = 0; i < tweet.length; i++) {
				var tweetID = tweet[i].id;	
				
				var delButton = "<button class= 'deleteTweet' id=" + tweetID + ">Delete</button>";

    			$('#list').append('<li>' + 'id: ' + tweet[i].id + ' content: ' + tweet[i].content + ' timestamp: ' +
    			 tweet[i].timestamp + ' ' + delButton + '</li>');				
			}

			$(document).on('click', '.deleteTweet', function() {
				var id = this.id;

				$.ajax ({
				type: 'DELETE',
				url: "http://127.0.0.1:8000/tweet/" + id + '/',
				});	

			window.location.reload();

   			});	

   		},
   	});

	$('#postTweet').click(function() {
		$.ajax({ 
			type: 'POST',	
		  	url: "http://127.0.0.1:8000/tweet/", 
		  	data: {
		  		'content':$('#tweetContent').val()
	  		},
	  	}); 
	});	

});



