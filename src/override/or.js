
$( document ).ready(function() {
    console.log("hello");
    var rand = Math.random()*names.length;
    console.log(Math.round(rand));
    console.log(urls[Math.round(rand) - 1]);
    $("#bg").attr("src",urls[Math.round(rand) - 1]);
    //$("#bg").attr("src",urls[17]);
    $( "#bg" ).delay(750).fadeIn(750, function() {
    // Animation complete
    });
    $("#bg").foggy({
   blurRadius: 5,          // In pixels.
   opacity: 0.8,           // Falls back to a filter for IE.
   cssFilterSupport: true  // Use "-webkit-filter" where available.
 });

    $("#fg").attr("src",urls[Math.round(rand) - 1]);
    //$("#fg").attr("src",urls[17]);
    $( "#fg" ).delay(750).fadeIn(750, function() {
    // Animation complete
    });

    $("#link").attr("href", "https://www.google.com/?gws_rd=ssl#q=" + names[Math.round(rand) - 1].split(' ').join('+'));

    $("#text").append(names[Math.round(rand) - 1]);
    $("#text").delay(750).fadeIn(750, function() {
    // Animation complete
    });

    $("#data").append(data[Math.round(rand) - 1]);
    $("#data").delay(750).fadeIn(750, function() {
    // Animation complete
    });

    $("#footer").delay(750).fadeIn(750, function() {
    // Animation complete
    });
});

/*
 $(document ).ajaxComplete(function(event, request, settings){
     console.log(settings.url);
     console.log(request.getResponseHeader("Location"));
     $("body").append("Test");
});
*/
