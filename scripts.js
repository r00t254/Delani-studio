// EFFECTS ON WHAT WE DO
$(document).ready(function(){
    $(".col-md-4 ").click(function(){
        // create a variable speed for our slideToggle 
        var speed= 3000
        $(this).children(".hide").slideToggle(speed)
    });


    $("#des").click(function(){
        $("#des").toggle();
        $(".des").toggle();
    });
    $(".des").click(function(){
        $(".des").toggle();
        $("#des").toggle();
    });
    $("#dev").click(function(){
        $("#dev").toggle();
        $(".dev").toggle();
    });
    $(".dev").click(function(){
        $(".dev").toggle();
        $("#dev").toggle();
    });
    $("#prod").click(function(){
        $("#prod").toggle();
        $(".prod").toggle();
    });
    $(".prod").click(function(){
        $(".prod").toggle();
        $("#prod").toggle();
    });
});

// Collecting user's input on the contact us form
//   alert pop
$(document).ready(function(){
    let form = document.getElementById("mc-embedded-subscribe-form");
    form.addEventListener("submit", (e) =>{
        e.preventDefault
        let name = document.getElementById("name").value;
        alert(`${name} thank you for reaching out to us, we have received your message. Incase of any other issues kindly feel free to reach out to us`);
    });
});
$(document).ready(function() {
    $(".col").click(function(){
        $(this).children(".hide").slideToggle()
    });
    $(".work").mousemove(function(){
        var hover=$(this).attr("hover")
        $(this).css("border","3px solid blue")
        $(".overlay").text(hover).show().offset($(this).offset());
}).mouseout (function(){
    $(this).css("border","none")
})
})


    