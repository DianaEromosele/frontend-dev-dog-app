$(function() { 
	$(".get-started-form").submit(function(event){
	  event.preventDefault();
	  $(".module")[0].style.display = "flex";
	});

	$(".close-module").click(function(event){
		event.preventDefault();
		$(".module")[0].style.display = "none";
	});

	$(window).click(function(event){
		if ($(".module")[0].style.display = "flex") {
			$(".module")[0].style.display = "none";
		}
	});
})