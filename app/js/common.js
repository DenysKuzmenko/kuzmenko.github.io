$(document).ready(function(){
	$("#footer_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Thanks. We'll be in touch soon");
			$("#form").trigger("reset");
		});
		return false;
	});
});