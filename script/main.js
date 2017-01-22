$(document).ready(function()
{
	var height = $(window).height();
	ini();

	function ini() {

		$("#section_one").css({
			"height": height +"px"
		});

		$("#section_two").css({
			"height": height +"px"
		});

		$("#section_three").css({
			"height": height +"px"
		});

		$("#section_four").css({
			"height": height +"px"
		});
	}

	
});