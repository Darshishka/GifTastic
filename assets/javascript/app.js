var topics = ["dog", "cat", "pangolin", "snake", "bird", ]
//var queryURL = "api.giphy.com/v1/gifs/search?q=" + search + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=" + limitNum + "&rating=" + rating;
var testURL = "https://api.giphy.com/v1/gifs/search?q=terry-curise&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=20"

$(document).ready(function () {
    $("#gifDog").click(function() {
        var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[0] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
        $.ajax({
            method: "GET",
            url: myUrl,
        }).then(function(response) {
            console.log(response);
            $("#gifLocation").empty();
            var gifURL = response.data[0].images.fixed_width.url;

            
            console.log(response.data.length);
            var gifNum = response.data.length
            for (var i = 0; i < gifNum; i++) {
                $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
                gifURL = response.data[i].images.fixed_width.url;
                var gifRateId = "gifRate" + i;
                var ratingLocString = '<p id="' + gifRateId + '"></p>'
                var ratingLoc = $(ratingLocString);
                var rating =  response.data[i].rating;
                var gifRating = "Rating: " + rating;
                $("#gifDiv" + i).append(ratingLoc);
                $("#" + gifRateId).text(gifRating);
                var gifId = "gif" + i;
                var gifImage = $('<img id=' + gifId + '>');
                gifImage.attr("src", gifURL);
                $("#gifDiv" + i).append(gifImage);
            }
        });
    });

    $("#gifCat").click(function() {
        var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[1] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
        $.ajax({
            method: "GET",
            url: myUrl,
        }).then(function(response) {
            console.log(response);
            $("#gifLocation").empty();
            var gifURL = response.data[0].images.fixed_width.url;

            
            console.log(response.data.length);
            var gifNum = response.data.length
            for (var i = 0; i < gifNum; i++) {
                $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
                gifURL = response.data[i].images.fixed_width.url;
                var gifRateId = "gifRate" + i;
                var ratingLocString = '<p id="' + gifRateId + '"></p>'
                var ratingLoc = $(ratingLocString);
                var rating =  response.data[i].rating;
                var gifRating = "Rating: " + rating;
                $("#gifDiv" + i).append(ratingLoc);
                $("#" + gifRateId).text(gifRating);
                var gifId = "gif" + i;
                var gifImage = $('<img id=' + gifId + '>');
                gifImage.attr("src", gifURL);
                $("#gifDiv" + i).append(gifImage);
            }
        });
    });

    $("#gifPangolin").click(function() {
        var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[2] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
        $.ajax({
            method: "GET",
            url: myUrl,
        }).then(function(response) {
            $("#gifLocation").empty();
            console.log(response);
            var gifURL = response.data[0].images.fixed_width.url;

            
            console.log(response.data.length);
            var gifNum = response.data.length
            for (var i = 0; i < gifNum; i++) {
                $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
                gifURL = response.data[i].images.fixed_width.url;
                var gifRateId = "gifRate" + i;
                var ratingLocString = '<p id="' + gifRateId + '"></p>'
                var ratingLoc = $(ratingLocString);
                var rating =  response.data[i].rating;
                var gifRating = "Rating: " + rating;
                $("#gifDiv" + i).append(ratingLoc);
                $("#" + gifRateId).text(gifRating);
                var gifId = "gif" + i;
                var gifImage = $('<img id=' + gifId + '>');
                gifImage.attr("src", gifURL);
                $("#gifDiv" + i).append(gifImage);
            }
        });
    });

    $("#gifSnake").click(function() {
        var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[3] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
        $.ajax({
            method: "GET",
            url: myUrl,
        }).then(function(response) {
            $("#gifLocation").empty();
            console.log(response);
            var gifURL = response.data[0].images.fixed_width.url;

            
            console.log(response.data.length);
            var gifNum = response.data.length
            for (var i = 0; i < gifNum; i++) {
                $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
                gifURL = response.data[i].images.fixed_width.url;
                var gifRateId = "gifRate" + i;
                var ratingLocString = '<p id="' + gifRateId + '"></p>'
                var ratingLoc = $(ratingLocString);
                var rating =  response.data[i].rating;
                var gifRating = "Rating: " + rating;
                $("#gifDiv" + i).append(ratingLoc);
                $("#" + gifRateId).text(gifRating);
                var gifId = "gif" + i;
                var gifImage = $('<img id=' + gifId + '>');
                gifImage.attr("src", gifURL);
                $("#gifDiv" + i).append(gifImage);
            }
        });
    });

    $("#gifBird").click(function() {
        var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[4] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
        $.ajax({
            method: "GET",
            url: myUrl,
        }).then(function(response) {
            $("#gifLocation").empty();
            console.log(response);
            var gifURL = response.data[0].images.fixed_width.url;

            
            console.log(response.data.length);
            var gifNum = response.data.length
            for (var i = 0; i < gifNum; i++) {
                $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
                gifURL = response.data[i].images.fixed_width.url;
                var gifRateId = "gifRate" + i;
                var ratingLocString = '<p id="' + gifRateId + '"></p>'
                var ratingLoc = $(ratingLocString);
                var rating =  response.data[i].rating;
                var gifRating = "Rating: " + rating;
                $("#gifDiv" + i).append(ratingLoc);
                $("#" + gifRateId).text(gifRating);
                var gifId = "gif" + i;
                var gifImage = $('<img id=' + gifId + '>');
                gifImage.attr("src", gifURL);
                $("#gifDiv" + i).append(gifImage);
            }
        });
    });

    // $("#gifBird").click(function() {
    //     var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[4] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
    //     $.ajax({
    //         method: "GET",
    //         url: myUrl,
    //     }).then(function(response) {
    //         $("#gifLocation").empty();
    //         console.log(response);
    //         var gifURL = response.data[0].images.fixed_width.url;

            
    //         console.log(response.data.length);
    //         var gifNum = response.data.length
    //         for (var i = 0; i < gifNum; i++) {
    //             $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
    //             gifURL = response.data[i].images.fixed_width.url;
    //             var gifRateId = "gifRate" + i;
    //             var ratingLocString = '<p id="' + gifRateId + '"></p>'
    //             var ratingLoc = $(ratingLocString);
    //             var rating =  response.data[i].rating;
    //             var gifRating = "Rating: " + rating;
    //             $("#gifDiv" + i).append(ratingLoc);
    //             $("#" + gifRateId).text(gifRating);
    //             var gifId = "gif" + i;
    //             var gifImage = $('<img id=' + gifId + '>');
    //             gifImage.attr("src", gifURL);
    //             $("#gifDiv" + i).append(gifImage);
    //         }
    //     });
    // });
});