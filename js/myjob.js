//Code hides the register form immediately the page loads
$(document).ready(function(){
	$("#reg_form").hide();
});



//Code for Animation effect when the creat account and already have account buttons are clicked
$(document).ready(function(){
	$(".register").click(function(){
		$("#reg_form").slideDown(function(){
			$("#log_form").hide(function(){
				$(".account_exist").click(function(){
					$("#reg_form").slideUp(function(){
						$("#log_form").show();
					});
				});
			});
		});
	});
});



//Codes for changing images when the mouse enters the image in the login page
$(document).ready(function(){
	var imageName = ["img/6.jpg", "img/1.jpg", "img/2.jpg"];
	var indexNum = 0;
	
	$("#log_banner").hover(function(){
		$("#log_banner").fadeOut(300, function(){
			$("#log_banner").attr("src", imageName[indexNum]);
			indexNum++;
			if(indexNum > 2){indexNum = 0;}
			$("#log_banner").fadeIn(500);
		});
	});
});