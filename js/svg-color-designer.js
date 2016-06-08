	//Color Selector
	function changeColor(id, className, color,opacity){ 	  
	   var y = document.getElementById(id);
	  //var x = y.getElementsByClassName(className);
	  var x = y.querySelectorAll('.' + className); // IE
		if (opacity === undefined) {
			opacity = '1';
		}

		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.fill = color;
			x[i].style.opacity = opacity;
		}
	}
	
	// Label
	function changeLabel(id, label_id, color_class){

		var color_name = color_class.replace(/_/g, ' ');
		//var label =  document.getElementById(id)
		document.getElementById(id).innerHTML = ''+color_name+'';
		$('#'+label_id+'').removeClass();
		$('#'+label_id+'').addClass("np_color_option");
		$('#'+label_id+'').addClass(color_class);

		
	}
	
	// Mobile Nav
	
	$(document).ready(
	
		function(){
		
		var tab = $(this);
		
						
		$(".np_mob_color_nav_roof").click(function () {
		
		$('.np_mob_color_nav div').removeClass('np_curr'); // clear all 'current' nav tab classes
		$(this).addClass('np_curr'); // add 'current' tab class
		
		$('.np_colors').removeClass('np_show'); // clear all 'current' content tab classes
		$('.np_roof_colors').addClass('np_show'); // add 'current' content class
		
		});
			
		
		
		$(".np_mob_color_nav_wall").click(function () {
		
		$('.np_mob_color_nav div').removeClass('np_curr');
		$(this).addClass('np_curr');
		
		$('.np_colors').removeClass('np_show');
		$('.np_wall_colors').addClass('np_show');
		
		});
		
		
		
		$(".np_mob_color_nav_trim").click(function () {
		
		$('.np_mob_color_nav div').removeClass('np_curr');
		$(this).addClass('np_curr');
		
		$('.np_colors').removeClass('np_show');
		$('.np_trim_colors').addClass('np_show');
		
		});
		
		
		
		$(".np_mob_color_nav_door").click(function () {
		
		$('.np_mob_color_nav div').removeClass('np_curr');
		$(this).addClass('np_curr');
		
		$('.np_colors').removeClass('np_show');
		$('.np_door_colors').addClass('np_show');
		
		});
		
		
		
		$(".np_mob_color_nav_wain").click(function () {
		
		$('.np_mob_color_nav div').removeClass('np_curr');
		$(this).addClass('np_curr');
		
		$('.np_colors').removeClass('np_show');
		$('.np_wain_colors').addClass('np_show');
		
		});
		
		
		});