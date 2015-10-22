// =======Collapse-Menu-Color============
$(document).ready(function() {
    $("#coll-btn").on("mouseover", function(){
        $('button').css("border-color", "#28a4c9");
        $("i.fa.fa-arrow-down").css("color", "#28a4c9");
    });
    $("#coll-btn").on("mouseout", function(){
        $('button').css("border-color", "#9a9a9a");
        $("i.fa.fa-arrow-down").css("color", "#9a9a9a");
    });
});