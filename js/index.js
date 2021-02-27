$(document).ready(function(){
   $(window).mousemove(function (pos) {
    $("#frosted-glass-effect").css('left',(pos.pageX)+'px').css('top',(pos.pageY)+'px');
   });
});
