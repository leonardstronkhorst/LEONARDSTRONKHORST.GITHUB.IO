if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
	  navigator.serviceWorker.register('/sw.js').then(function(registration) {
		// Registration was successful
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	  }, function(err) {
		// registration failed :(
		console.log('ServiceWorker registration failed: ', err);
	  });
	});
	}

$(document).ready(function() {
	
	$('.card').click(function(e) {
		var text = e.target.innerText;
		$(".one-card .card p").text(text)

		$('.card-container').hide();
		$('.one-card').show();

		$('.card').click(function() {
			$('.one-card .card p').css('color', '#ffffff');			
		});
		$('#back').click(function() {
			$('.card-container').show();
			$('.one-card').hide();
			});
	});
});
