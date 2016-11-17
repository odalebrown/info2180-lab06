$(document).ready(function(){
    $("#search").click(function(){
        $.ajax({
            type: "GET",
            url: "request.php",
            datatype: "html",
            data: {q: $("#word").val()},
            success: function(text){
                $("#result").html(text)
            }
        });
    });
});
