//navbar

$('.canva-btn').on('click', function () {
  $(this).toggleClass('active');

});


/////chat
let hightNav=$('.navbar').outerHeight();
//console.log(hightNav);
$('.chat').css({'top':hightNav+'px'});
$('.sidebar').css({'top':hightNav+'px'});
$('.main-content ').css({'padding-top':hightNav+'px'});

//////message and chat
$('.chat-btn').on('click', function () {
$('.chat').toggleClass('active-chat');
$('.main-content').toggleClass('active');
})

 ////////////////////////
 
 


$(window).on('resize', function () {
let windowWidth= $(window).width();
let sidebarWidth= $('.sidebar').outerWidth();
  
if(windowWidth >= 1600) {
  $('.main-content ').css({'padding-left':sidebarWidth+'px','padding-right':sidebarWidth+'px'});
  console.log('ho');
} else if(windowWidth >= 992 && windowWidth < 1600){
  
  $('.main-content ').css({'padding-left':sidebarWidth+'px','padding-right':0});
  console.log('h');

} else if(windowWidth < 992){
  $('.main-content ').css({'padding-left':0,'padding-right':0});

  console.log('holllll'); 

}

})


//carousel
$(".owl-carousel").owlCarousel(
  {margin:10}
);


