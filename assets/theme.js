 $(document).ready(function(){

 $('#AccessibleNav ul li a').mouseenter(function () {  
  // alert('hello');
      var menu_att = $(this).attr('data-dropdown-rel');
      console.log(menu_att);
   $('.mega-menu-section').removeClass('selected');
$( ".mega-menu-section" ).each(function( index ) {
  const finalvalue = $(this).children().attr('data-dropdown');
  if(finalvalue==menu_att){
     $(this).addClass('selected');
  console.log(finalvalue)
  }
});

  });  
   
 $("#AccessibleNav ul li a").mouseleave(function(){  
   // $('.mega-menu-section').removeClass('selected');
 });

$('.main-content, header').mouseenter(function () {  
  $('.mega-menu-section').removeClass('selected');
});  


  });     