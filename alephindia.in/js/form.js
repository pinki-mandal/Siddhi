$(document).ready(function () {
	$('form#frmCallbk1').submit(function (e) {
		dataString = $("#frmCallbk1").serialize();
		$.ajax({
			type: "POST",
			url: "phpmailer/sendmail_popup.php",
			data: dataString,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			complete: function () {
				$('.loader_9').hide();
			},
			success: function (data) { //alert(data); return false;
				$(".frmCallbk").html("<h2>Thanks for Enquiring with us. We will reach you soon..</h2>");
				window.location.href = '/thank-you.php';
			}
		});
		return false;
	});

	$('form#footerForm').submit(function (e) {
		dataString = $("#footerForm").serialize();
		$.ajax({
			type: "POST",
			url: "phpmailer/sendmail_footer.php",
			data: dataString,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			complete: function () {
				$('.loader_9').hide();
			},
			success: function (data) { //alert(data); return false;
				$(".footerformarea").html("<h2>Thanks for Enquiring with us. We will reach you soon..</h2>");
				window.location.href = '/thank-you.php';
			}
		});
		return false;
	});


});


// JS for header contact form code

$(document).ready(function () {
	$('form#headerForm').submit(function (e) {
		dataString = $("#headerForm").serialize();

		$.ajax({
			type: "POST",
			url: "phpmailer/sendmail_header.php",
			data: dataString,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			complete: function () {
				$('.loader_9').hide();
			},
			success: function (data) {
				// alert(data); return false;
				// $(".footerformarea").html("<h2>Thanks for Enquiring with us. We will reach you soon..</h2>");
				//   Swal.fire(
				// 	'Thank You!'+ "<br>" + document.getElementById('h-name').value,
				// 	'Your Messsage sent Successfully. Our Technical Expert will reach you within 24 Hours.',
				// 	'success'
				//   )
				$("#headerForm").html("<p>Thanks for Enquiring with us. We will reach you soon..</p>");
				window.location.href = '/thank-you.php';
			}
		});
		return false;
	});

});

//code for submit event registration form data
$(document).ready(function () {
	$('#event_reg').on('submit', function (e) {
		e.preventDefault();
		// Get form data
		var formData = $('#event_reg').serialize();

		// Make AJAX request
		$.ajax({
			type: "POST",
			url: "phpmailer/submit_event_registraion_data.php",
			data: formData,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			success: function (response) {
				// Handle the successful response here
				//alert(response);
				$('#event_reg')[0].reset();
				$('.loader_9').hide();
				$('#formMsg').text('Form Submitted Successfully!');
				$('#formMsg').removeClass('btn-primary').addClass('btn-success');
			}
		});
	});
});

//code for submit event registration form data
$(document).ready(function () {
	$('#event_reg11').on('submit', function (e) {
		e.preventDefault();
		// Get form data
		var formData = $('#event_reg11').serialize();

		// Make AJAX request
		$.ajax({
			type: "POST",
			url: "phpmailer/submit_event_registraion_data.php",
			data: formData,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			success: function (response) {
				// Handle the successful response here
				//alert(response);
				$('#event_reg11')[0].reset();
				$('.loader_9').hide();
				$('#formMsg11').text('Form Submitted Successfully!');
				$('#formMsg11').removeClass('btn-primary').addClass('btn-success');
			}
		});
	});
});




//code hide and show event registration form 
$(document).ready(function () {
	$("#showFormButton").click(function () {
		// Toggle between two functions
		$('#registrationForm').toggle();

	});
});
// js code newsletter subs email form 

//second model code for 
$(document).ready(function () {
	// Click event for Register button in Modal 1
	$("#registerButton").click(function () {
		$("#eventModal").modal("hide"); // Hide Modal 1
		$("#myModal2").modal("show"); // Show Modal 2
	});

	// Click event for Close button in Modal 2
	$("#closeButton2").click(function () {
		$("#myModal2").modal("hide"); // Hide Modal 2
	});
});

$(document).ready(function () {
	$('form#newsletterEmail').submit(function (e) {
		dataString = $("#newsletterEmail").serialize();
		$.ajax({
			type: "POST",
			url: "../phpmailer/newsletter_subs.php",
			data: dataString,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			complete: function () {
				$('.loader_9').hide();
			},
			success: function (data) {
				// alert(data); return false;
				newsSubs();

				$("form#newsletterEmail").trigger('reset');

			}
		});
		return false;
	});

});


// (for index_3.php file) JS for On URL phpmailer/newsletter_subs.php file to load autolaod on this url

$(document).ready(function () {
	$('form#newsletterSubsname').submit(function (e) {
		dataString = $("#newsletterSubsname").serialize();
		$.ajax({
			type: "POST",
			url: "../phpmailer/newsletter_subs.php",

			data: dataString,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			complete: function () {
				$('.loader_9').hide();
			},
			success: function (data) {

				$("#news-popup-msg").html("<p>Thanks for Subscribe Our Newsletter</p>");


			}
		});
		return false;
	});

});






$(function () {
	$(window).scroll(function () {
		var winTop = $(window).scrollTop();
		widthN = $(window).width();
		if (winTop > 2500 && widthN > 767) {
			$('.blue-bg.our-Growth .c1').each(function () {
				$(this).prop('Counter', 0).animate({
					Counter: 15000
				}, {
					duration: 6000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
			$('.blue-bg.our-Growth .c2').each(function () {
				$(this).prop('Counter', 0).animate({
					Counter: 8000
				}, {
					duration: 6000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
			$('.blue-bg.our-Growth .c3').each(function () {
				$(this).prop('Counter', 0).animate({
					Counter: 450
				}, {
					duration: 6000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
			$('.blue-bg.our-Growth .c4').each(function () {
				$(this).prop('Counter', 0).animate({
					Counter: 42
				}, {
					duration: 6000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});

		}
		//alert(widthN);
		if (widthN < 767) {
			if (winTop > 3200) {
				$('.blue-bg.our-Growth .c1').each(function () {
					$(this).prop('Counter', 0).animate({
						Counter: 15000
					}, {
						duration: 3000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
					});
				});
				$('.blue-bg.our-Growth .c2').each(function () {
					$(this).prop('Counter', 0).animate({
						Counter: 8000
					}, {
						duration: 3000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
					});
				});
				$('.blue-bg.our-Growth .c3').each(function () {
					$(this).prop('Counter', 0).animate({
						Counter: 450
					}, {
						duration: 450,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
					});
				});
				$('.blue-bg.our-Growth .c4').each(function () {
					$(this).prop('Counter', 0).animate({
						Counter: 42
					}, {
						duration: 3000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
					});
				});
			}

		}
	});
});
/* Iqrar Starts from here *//*  code for form submission without refresh */

$(document).ready(function () {
	$('form#sidebarform').submit(function (e) {
		dataString = $("#sidebarform").serialize();
		$.ajax({
			type: "POST",
			url: "../phpmailer/sendmail_sidebar.php",
			data: dataString,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			complete: function () {
				$('.loader_9').hide();
			},
			success: function (data) {
				$(".sidebarform").html("<h2>Thanks for Enquiring with us. We will reach you soon..</h2>");
				window.location.href = '/thank-you.php';

			}
		});
		return false;
	});
});
/*  code for form submission without refresh */


/*  code for form Service page middle home page start */

$(document).ready(function () {
	$('form#servicepageform').submit(function (e) {
		dataString = $("#servicepageform").serialize();
		$.ajax({
			type: "POST",
			url: "../phpmailer/sendmail_service.php",
			data: dataString,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			complete: function () {
				$('.loader_9').hide();
			},
			success: function (data) {
				$(".servicepageform").html("<h2>Thanks for Enquiring with us. We will reach you soon..</h2>");
				window.location.href = '/thank-you.php';
			}
		});
		return false;
	});
});



/*  code for form Service page middle page start */

/*  code for form call request home page start */

$(document).ready(function () {
	$('form#callrequestform').submit(function (e) {
		dataString = $("#callrequestform").serialize();
		$.ajax({
			type: "POST",
			url: "../phpmailer/sendmail_home.php",
			data: dataString,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			complete: function () {
				$('.loader_9').hide();
			},
			success: function (data) {
				$(".callrequestform").html("<h2>Thanks for Enquiring with us. We will reach you soon..</h2>");
				window.location.href = '/thank-you.php';
			}
		});
		return false;
	});
});


/*  code for product search DB */

$(document).ready(function () {
	$("#search").keyup(function () {
		pagename = "home";
		search = $("#search").val();
		if ($("#search").val().length <= 2 && $("#search").is(":empty")) {
			$(".autosearch").html("");
			return false;
		}
		var dataString = '&pagename=' + pagename + '&search=' + search;
		$.ajax({
			type: "POST",
			url: "https://alephindia.in/include/search.php",
			data: dataString,
			cache: false,
			success: function (response) {
				$(".autosearch").html(response);
			}
		});

		//$(this).next(".banner-text .search .autosearch").addClass("active")
	});
});


/*  code for form Payment page  home page start */

$(document).ready(function () {
	$('form#paymentpage').submit(function (e) {
		dataString = $("#paymentpage").serialize();
		$.ajax({
			type: "POST",
			url: "../phpmailer/sendmail_payment.php",
			data: dataString,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			complete: function () {
				$('.loader_9').hide();
			},
			success: function (data) {
				$(".paymentpage").html("<h2>We will reach you soon..</h2>");
				window.location.href = '/thank-you.php';
			}
		});
		return false;
	});
});



/*  code for form payment page  page start */

/* $(document).ready(function() {
$('.progress-bar').waypoint(function() {
$('.progress-bar').css({
animation: "animate-positive 2s",
opacity: "1"
});
}, { offset: '75%' });
}); */


$(document).ready(function () {
	$(window).scroll(function () {
		var winTop = $(window).scrollTop();
		if (winTop > 1400) {
			$(".progress-bar1").addClass("progress-bar");
		}
	});
});


/*  code for form call request home page end */

// Get the modal
var modal = document.getElementById("is-myModal");


// Get the button that opens the modal
var btn = document.getElementById("is-myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("is-close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}




$(document).ready(function () {
	//$('#secondpopup').modal('show');
});

$(document).ready(function () {
	setTimeout(function () {
		$("#secondpopup").css({ "display": "block" });
		$("#secondpopup").addClass("show");
	}, 20000);

	$(".is-close").click(function () {
		$("#secondpopup").css({ "display": "none" });
		$("#secondpopup").removeClass("show");
	});




});

// code for Apply for NOC contact form


$(document).ready(function () {
	$('#apply_noc').submit(function (e) {
		dataString = $("#apply_noc").serialize();
		$.ajax({
			type: "POST",
			url: "../phpmailer/sendmail_applynoc.php",
			data: dataString,
			cache: false,
			beforeSend: function () {
				$('.loader_9').show();
			},
			complete: function () {
				$('.loader_9').hide();
			},
			success: function (data) {

				$pname = document.getElementById('pname').value;

				$("#apply_noc").html("<h5 style='color: #042d6a;text-align: center;'>Thanks <b>" + $pname + "!</b> for Filling the form.<br><br> We will Contact You soon...</h5>");
				window.location.href = '/thank-you.php';
			}
		});
		return false;
	});
});









  
