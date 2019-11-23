
function poll() {
	$.get({
		 url: "http://23.97.142.158/check_new_payment?user_id=user1",
		 success: function(result) {
				if (result != "no")
				{
				}
				else
				{
						window.setTimeout(poll, 3000);
			 	}

		 	}
 	});
}
window.setTimeout(poll, 3000);
