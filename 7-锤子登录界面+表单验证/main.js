$(function(){
	// add a blue border when input is focused
	$(".input input").focus(function(){
		$(this).parent().css("border","1px solid #3266F2");
	})
	$(".input input").blur(function(){
		$(this).parent().css("border","1px solid #CCC");
	});

	// change input opacity when is hovered
	$(".input").hover(function(){
		$(this).css("opacity","1");
	},function(){
		$(this).css("opacity","0.618");
	});

	// change background image when checkbox is toggled
	$(".auto").click(function(){
		$(".checkbox").toggleClass("disabled active");
	});

	// form validation
	var f1 = false;
	var f2 = false;

	// username
	$(".input input:text").keyup(function(){
		var str = this.value;
		if (str != "" ) {
			var regMail = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
			var regPhone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			if(!regMail.test(str) && !regPhone.test(str)){
				f1 = false;
			} else {
				f1 = true;
				$(this).siblings(".warning").hide();
			}
		} else {
			f1 = false;
		}
	});

	//password
	$(".input input:password").keyup(function(){
		var str = this.value;
		if (str != "") {
			var regPw = /^\w+$/;
			if(!regPw.test(str)){
				f2 = false;
			} else {
				f2 = true;
				$(this).siblings(".warning").hide();
			}
		} else {
			f2 = false;
		}
	})


	//username valiadation
	$(".input input:text").blur(function(){
		if(this.value != "") {
			if(!f1){
				$(".warning:eq(0)").show().siblings(".warning").hide();
			} else {
				$(".warning:eq(0)").hide();
			}
		} else {
			$(".warning:eq(2)").show().siblings(".warning").hide();
		}
	})

	// password validation
	$(".input input:password").blur(function(){
		if(this.value != "") {
			if(!f2){
				$(".warning:eq(4)").show().siblings(".warning").hide();
			} else {
				$(".warning:eq(4)").hide();
			}
		} else {
			$(".warning:eq(3)").show().siblings(".warning").hide();
		}
	})

	// disable or activate the button
	$(".input input:text, .input input:password").keyup(function(){
		if ( f1 && f2 ) {
			$(".btn button").removeClass("disabled").addClass("active");
		} else {
			$(".btn button").removeClass("active").addClass("disabled");
		}			
	});

	//submit form
	$(".btn button").click(function(){
		if(f1 && f2) {
			$("form").submit();
		} else {
			return false;
		}
	})
})