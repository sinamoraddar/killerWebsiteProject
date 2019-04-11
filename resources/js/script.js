// For the sticky navigation
$(document).ready(()=>{
    let sectionFeaturesTopOffset=($('.sectionFeatures').offset().top)-65;
    let stickyNav=()=>{
        let scrollTop=$(window).scrollTop();
        if(scrollTop>=sectionFeaturesTopOffset){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');

        }
    }
    $(window).scroll(()=>{
        stickyNav();
    })
    // Scroll on buttons
    $('.hungry').click(()=>{
        $('html,body').animate({scrollTop: $('.sectionPlans').offset().top},1000);
    });
    $('.showMeMore').click(()=>{
        $('html,body').animate({scrollTop: $('.sectionFeatures').offset().top},1000);
    });
    // Navigation Scrolls
    $('.mainNav a').click(function(){
        $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top},1000);
    });
    // Animations on scroll
    $('.wayPointOne').waypoint(function(direction) {
        $('.wayPointOne').addClass('animated fadeIn');
    },{
        offset:"50%",
    });
    $('.wayPointTwo').waypoint(function(direction) {
        $('.wayPointTwo').addClass('animated fadeInUp');
    },{
        offset:"50%",
    });
    $('.wayPointThree').waypoint(function(direction) {
        $('.wayPointThree').addClass('animated fadeIn');
    },{
        offset:"50%",
    });
    $('.wayPointFour').waypoint(function(direction) {
        $('.wayPointFour').addClass('animated pulse');
    },{
        offset:"50%",
    });
    // Mobile Navigation
    let toggle=false;
    $('.mobileNavIcon').click(function(){
        if(!toggle){
        $('.mainNav').slideToggle();
        $('.mobileNavIcon i').attr('class','fas fa-times');
        toggle=true;
    }else{
        $('.mainNav').slideToggle();
        $('.mobileNavIcon i').attr('class','fas fa-grip-lines');
        toggle=false;
    }
    });
});
