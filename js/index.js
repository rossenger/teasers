setTimeout(function () {
    $('.loaderAnimationContainer').fadeOut('slow', function(){
        $(this).remove();
    });
}, 2000);