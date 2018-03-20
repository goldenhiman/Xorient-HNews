$(document).ready(function(){

    $("button").on('click',function(){
        $(this).css({
            'background': '#298200',
            'color': 'white'
        });
        $(this).siblings().css({
            'background': '#fff',
            'color': 'black'
        });
    });

});