var slideWindow = window.location.href;

// Redirct Images at Index
function cupcakeRedirect(){
  location.replace("cupcakes.html")
}

function cookieRedirect(){
  location.replace("cookies.html")
}

function cakeRedirect(){
  location.replace("cakes.html")
}

function offerRedirect(){
  location.replace("coupons.html")
}

// Socials Redirect
function OpenInNewTabWinBrowser(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

// Form Validation

function validateMessage() {
  var Useremail = document.getElementById("Useremail");
  var Usernumber = document.getElementById("Usernumber");
  var Userzip = document.getElementById("Userzip");

  if (!Useremail.checkValidity() || !Usernumber.checkValidity() || !Userzip.checkValidity()){
    document.getElementById("validateMsg").innerHTML = 'Uhoh! Please recheck and fill the form correctly to join the mailing list!';
  }
  else{
    document.getElementById("validateMsg").innerHTML = 'Yay! You successfully joined the mailing list!';
  }
}  


// Current tab color
function currentTabColor(){
  if(slideWindow.includes('index.html')){
    let divElement = document.getElementById("indexTab"); 
    divElement.style.textDecoration = "underline"
  }
  else if(slideWindow.includes('cupcakes.html')){
    let divElement = document.getElementById("cupcakeTab"); 
    divElement.style.textDecoration = "underline"
  }
  else if(slideWindow.includes('cookies.html')){
    let divElement = document.getElementById("cookieTab"); 
    divElement.style.textDecoration = "underline"
  }
  else if(slideWindow.includes('contact.html')){
    let divElement = document.getElementById("contactTab"); 
    divElement.style.textDecoration = "underline"
  }
  else if(slideWindow.includes('cakes.html')){
    let divElement = document.getElementById("cakeTab"); 
    divElement.style.textDecoration = "underline"
  }
  else if(slideWindow.includes('about.html')){
    let divElement = document.getElementById("aboutTab"); 
    divElement.style.textDecoration = "underline"
  }
  else if(slideWindow.includes('coupons.html')){
    let divElement = document.getElementById("offerTab"); 
    divElement.style.textDecoration = "underline"
  }
}
currentTabColor()

// Slide Function for Carousel
var slideIndex = 0;


if (slideWindow.includes("cupcakes.html") || slideWindow.includes("cookies.html") || slideWindow.includes("cakes.html")){
  carousel();
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 8000); 
}


// Jquery Tabs
$('#tabs li a:not(:first)').addClass('inactive');
$('.container').hide();
$('.container:first').show();
$('#tabs li a').click(function(){
    var t = $(this).attr('href');
    $('#tabs li a').addClass('inactive');        
    $(this).removeClass('inactive');
    $('.container').hide();
    $(t).fadeIn('slow');
    return false;
})

if($(this).hasClass('inactive')){ //this is the start of our condition 
    $('#tabs li a').addClass('inactive');         
    $(this).removeClass('inactive');
    $('.container').hide();
    $(t).fadeIn('slow');    
}

