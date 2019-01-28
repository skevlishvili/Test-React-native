/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Scrolling
6. Init Isotope
7. Init Testimonials Slider
8. Init Input
9. Costum Functions

******************************/

$(document).ready(function()
{
	"use strict";

	/*

	1. Vars and Inits

	*/

	var header = $('.header');
	var headerSocial = $('.header_social');
	var menu = $('.menu');
	var menuActive = false;
	var burger = $('.hamburger');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initHomeSlider();
	initIsotope();
	initTestimonialsSlider();
	initScrolling();
	initInput();

	/*

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 127)
		{
			header.addClass('scrolled');
			headerSocial.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
			headerSocial.removeClass('scrolled');
		}
	}

	/*

	3. Set Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			if($('.hamburger').length)
			{
				burger.on('click', function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();
					}
				});
			}
		}
		if($('.menu_close').length)
		{
			var close = $('.menu_close');
			close.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/*

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				autoplay:false,
				loop:true,
				nav:false,
				dots:false,
				smartSpeed:1200
			});
		}
	}

	/*

	5. Init Scrolling

	*/

	function initScrolling()
	{
		if($('.home_page_nav ul li a').length)
		{
			var links = $('.home_page_nav ul li a');
	    	links.each(function()
	    	{
	    		var ele = $(this);
	    		var target = ele.data('scroll-to');
	    		ele.on('click', function(e)
	    		{
	    			e.preventDefault();
	    			$(window).scrollTo(target, 1500, {offset: -90, easing: 'easeInOutQuart'});
	    		});
	    	});
		}
	}

	/*

	6. Init Isotope

	*/

	function initIsotope()
	{
		if($('.item_grid').length)
		{
			var grid = $('.item_grid').isotope({
				itemSelector: '.item',
	            getSortData:
	            {
	            	price: function(itemElement)
	            	{
	            		var priceEle = $(itemElement).find('.destination_price').text().replace( 'From $', '' );
	            		return parseFloat(priceEle);
	            	},
	            	name: '.destination_title a'
	            },
	            animationOptions:
	            {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	        });
		}
	}

	/*

	7. Init Testimonials Slider

	*/

	function initTestimonialsSlider()
	{
		if($('.testimonials_slider').length)
		{
			var testSlider = $('.testimonials_slider');
			testSlider.owlCarousel(
			{
				animateOut: 'fadeOut',
    			animateIn: 'flipInX',
				items:1,
				autoplay:true,
				loop:true,
				smartSpeed:1200,
				dots:false,
				nav:false
			});
		}
	}

	/*

	8. Init Input

	*/

	function initInput()
	{
		if($('.newsletter_input').length)
		{
			var inpt = $('.newsletter_input');
			inpt.each(function()
			{
				var ele = $(this);
				var border = ele.next();

				ele.focus(function()
				{
					border.css({'visibility': "visible", 'opacity': "1"});
				});
				ele.blur(function()
				{
					border.css({'visibility': "hidden", 'opacity': "0"});
				});

				ele.on("mouseenter", function()
				{
					border.css({'visibility': "visible", 'opacity': "1"});
				});

				ele.on("mouseleave", function()
				{
					if(!ele.is(":focus"))
					{
						border.css({'visibility': "hidden", 'opacity': "0"});
					}
				});

			});
		}
	}
});

/*

	8. Costum Functions and Vars

*/


var signupform = document.getElementById('sign_up_container');
var clickcounter = 0;

function AddInput(){
if (clickcounter == 0) {

	var NewField = document.createElement('form');
	NewField.setAttribute('action', "#");
	NewField.setAttribute('class', "home_search_form_2")
	NewField.setAttribute('id', "home_search_form")

	var NewInputCity = document.createElement("input");
	NewInputCity.setAttribute('type', "text");
	NewInputCity.setAttribute('class', "search_input search_input_1 new_search_input_1 new_search_input_1_row_2");
	NewInputCity.setAttribute('placeholder', "City");
	NewInputCity.setAttribute('required', "required");
	NewInputCity.setAttribute('name', "CityName");

 	var NewInputDeparture = document.createElement("input");
	NewInputDeparture.setAttribute('type', "text");
	NewInputDeparture.setAttribute('onfocus', "(this.type='date')")
	NewInputDeparture.setAttribute('class', "search_input search_input_2 new_search_input_2 new_search_input_2_row_2");
	NewInputDeparture.setAttribute('placeholder', "Departure");
	NewInputDeparture.setAttribute('required', "required");

	var NewInputArrival = document.createElement("input");
	NewInputArrival.setAttribute('type', "text");
	NewInputArrival.setAttribute('onfocus', "(this.type='date')")
	NewInputArrival.setAttribute('class', "search_input search_input_3 new_search_input_3 new_search_input_3_row_2");
	NewInputArrival.setAttribute('placeholder', "Arrival");
	NewInputArrival.setAttribute('required', "required");

	NewField.appendChild(NewInputCity);
	NewField.appendChild(NewInputDeparture);
	NewField.appendChild(NewInputArrival);

	document.getElementById("Field").appendChild(NewField);

	$('.home_search_form_2').slideDown(1000);

	clickcounter++;
	}
	else if ( clickcounter == 1) {
	var NewField = document.createElement('form');
	NewField.setAttribute('action', "#");
	NewField.setAttribute('class', "home_search_form_3")
	NewField.setAttribute('id', "home_search_form")

	var NewInputCity = document.createElement("input");
	NewInputCity.setAttribute('type', "text");
	NewInputCity.setAttribute('class', "search_input search_input_1 new_search_input_1 new_search_input_1_row_3");
	NewInputCity.setAttribute('placeholder', "City");
	NewInputCity.setAttribute('required', "required");
	NewInputCity.setAttribute('name', "CityName");

 	var NewInputDeparture = document.createElement("input");
	NewInputDeparture.setAttribute('type', "text");
	NewInputDeparture.setAttribute('onfocus', "(this.type='date')")
	NewInputDeparture.setAttribute('class', "search_input search_input_2 new_search_input_2 new_search_input_2_row_3");
	NewInputDeparture.setAttribute('placeholder', "Departure");
	NewInputDeparture.setAttribute('required', "required");

	var NewInputArrival = document.createElement("input");
	NewInputArrival.setAttribute('type', "text");
	NewInputArrival.setAttribute('onfocus', "(this.type='date')")
	NewInputArrival.setAttribute('class', "search_input search_input_3 new_search_input_3 new_search_input_3_row_3");
	NewInputArrival.setAttribute('placeholder', "Arrival");
	NewInputArrival.setAttribute('required', "required");

	NewField.appendChild(NewInputCity);
	NewField.appendChild(NewInputDeparture);
	NewField.appendChild(NewInputArrival);

	document.getElementById("Field").appendChild(NewField);


	$('.home_search_form_3').slideDown(1000);


	clickcounter++;
	}
	else if (clickcounter == 2) {
	var NewField = document.createElement('form');
	NewField.setAttribute('action', "#");
	NewField.setAttribute('class', "home_search_form_4")
	NewField.setAttribute('id', "home_search_form")

	var NewInputCity = document.createElement("input");
	NewInputCity.setAttribute('type', "text");
	NewInputCity.setAttribute('class', "search_input search_input_1 new_search_input_1 new_search_input_1_row_4");
	NewInputCity.setAttribute('placeholder', "City");
	NewInputCity.setAttribute('required', "required");
	NewInputCity.setAttribute('name', "CityName");

 	var NewInputDeparture = document.createElement("input");
	NewInputDeparture.setAttribute('type', "text");
	NewInputDeparture.setAttribute('onfocus', "(this.type='date')")
	NewInputDeparture.setAttribute('class', "search_input search_input_2 new_search_input_2 new_search_input_2_row_4");
	NewInputDeparture.setAttribute('placeholder', "Departure");
	NewInputDeparture.setAttribute('required', "required");

	var NewInputArrival = document.createElement("input");
	NewInputArrival.setAttribute('type', "text");
	NewInputArrival.setAttribute('onfocus', "(this.type='date')")
	NewInputArrival.setAttribute('class', "search_input search_input_3 new_search_input_3 new_search_input_3_row_4");
	NewInputArrival.setAttribute('placeholder', "Arrival");
	NewInputArrival.setAttribute('required', "required");

	NewField.appendChild(NewInputCity);
	NewField.appendChild(NewInputDeparture);
	NewField.appendChild(NewInputArrival);

	document.getElementById("Field").appendChild(NewField);

	$('.home_search_form_4').slideDown(1000);

	clickcounter++;
	}
	else{
		var MoreCityInfoNotification = document.createElement("p");
		MoreCityInfoNotification.setAttribute('class', "more_city_info_notification");

		var MoreCityInfoText = document.createTextNode("* If you wish to add more cities to your costumized tour, please send us an email with all the cities and departure/arrival dates at: info.destinytravel@gmail.com");
		MoreCityInfoNotification.appendChild(MoreCityInfoText);

		more_city_info.appendChild(MoreCityInfoNotification);

		$('.more_city_info_notification').slideDown(1000);

		document.getElementById("home_add_field").disabled = true;
	}
}

window.onclick = function(event) {
  if (event.target == signupform) {
    signupform.style.display = "none";
  }
}

function ValidateSignUp(){
	var fname = document.forms["signupform"]["Fname"].value;
	var email = document.forms["signupform"]["email"].value;
	var password = document.forms["signupform"]["password"].value;
	if (fname == "") {
		alert("Name must be filled out");
		return false;
	}
	if (email == "") {
		alert("Email must be filled out");
		return false;
	}
	if (email.indexOf('@') < 0) {
		alert("Please enter a valid Email")
		return false;
	}
	if (password == "") {
		alert("Password must be filled out");
		return false;
	}
	if (password.length <= 5) {
		alert("Password must contain at least six characters");
		return false;
	}
	if (/\d/.test(password)) {
	} else {
		alert("Password must conaint at least one number")
	}
}
function ValidateSignIn() {
	var email = document.forms["signupform"]["email"].value;
	var password = document.forms["signupform"]["password"].value;
	if (email == "") {
		alert("Email must be filled out");
		return false;
	}
	if (email.indexOf('@') < 0) {
		alert("Please enter a valid Email")
		return false;
	}
	if (email.indexOf('@') < 1 ) {
		alert("Please enter a valid Email");
		return false;
	}
	if (password == "") {
		alert("Password must be filled out");
		return false;
	}
}

$('.sign_up_password').on('focus', function() {
	$('.password_needs').slideDown(1000);
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:false,
		autoplaySpeed: 2000
});
$('.home_slider_container').on('load',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
