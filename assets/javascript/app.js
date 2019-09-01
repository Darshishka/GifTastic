var topics = ["dog", "cat", "pangolin", "snake", "bird", "emu", "cow", "hedgehog"]
//var queryURL = "api.giphy.com/v1/gifs/search?q=" + search + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=" + limitNum + "&rating=" + rating;
var testURL = "https://api.giphy.com/v1/gifs/search?q=terry-curise&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=20"

$(document).ready(function () {

//user add new button
    $("#btnAddSubmit").click(function() {
        var newAnimal = $("#addInput").val();
        newAnimal = newAnimal.toLowerCase();
        topics.push(newAnimal);
        $("#buttons").append('<button id="gif' + newAnimal + '">' + newAnimal + '</button>');
        console.log(topics);
    });

    var onButtonClick = function() {
    $("button").click(function() {
        var currentGif = this.id;
        if (this.id != "btnAddSubmit") {
            currentGif = currentGif.replace("gif", "");
            currentGif = currentGif.toLowerCase();
            var topicNum = topics.indexOf(currentGif);
            var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[topicNum] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
            $.ajax({
                method: "GET",
                url: myUrl,
            }).then(function(response) {
                console.log(currentGif);
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
                    var gifImage = $('<img class=gif id=' + gifId + '>');
                    gifImage.attr("src", gifURL);
                    $("#gifDiv" + i).append(gifImage);
                    console.log(currentGif);
                }
            });
        }
    });


// //pre set buttons
//     $("#gifDog").click(function() {
//         var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[0] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
//         $.ajax({
//             method: "GET",
//             url: myUrl,
//         }).then(function(response) {
//             console.log(response);
//             $("#gifLocation").empty();
//             var gifURL = response.data[0].images.fixed_width.url;

//             console.log(response.data.length);
//             var gifNum = response.data.length
//             for (var i = 0; i < gifNum; i++) {
//                 $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
//                 gifURL = response.data[i].images.fixed_width.url;
//                 var gifRateId = "gifRate" + i;
//                 var ratingLocString = '<p id="' + gifRateId + '"></p>'
//                 var ratingLoc = $(ratingLocString);
//                 var rating =  response.data[i].rating;
//                 var gifRating = "Rating: " + rating;
//                 $("#gifDiv" + i).append(ratingLoc);
//                 $("#" + gifRateId).text(gifRating);
//                 var gifId = "gif" + i;
//                 var gifImage = $('<img class=gif id=' + gifId + '>');
//                 gifImage.attr("src", gifURL);
//                 $("#gifDiv" + i).append(gifImage);
//             }
//         });
//     });

//     $("#gifCat").click(function() {
//         var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[1] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
//         $.ajax({
//             method: "GET",
//             url: myUrl,
//         }).then(function(response) {
//             console.log(response);
//             $("#gifLocation").empty();
//             var gifURL = response.data[0].images.fixed_width.url;

//             console.log(response.data.length);
//             var gifNum = response.data.length
//             for (var i = 0; i < gifNum; i++) {
//                 $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
//                 gifURL = response.data[i].images.fixed_width.url;
//                 var gifRateId = "gifRate" + i;
//                 var ratingLocString = '<p id="' + gifRateId + '"></p>'
//                 var ratingLoc = $(ratingLocString);
//                 var rating =  response.data[i].rating;
//                 var gifRating = "Rating: " + rating;
//                 $("#gifDiv" + i).append(ratingLoc);
//                 $("#" + gifRateId).text(gifRating);
//                 var gifId = "gif" + i;
//                 var gifImage = $('<img class=gif id=' + gifId + '>');
//                 gifImage.attr("src", gifURL);
//                 $("#gifDiv" + i).append(gifImage);
//             }
//         });
//     });

//     $("#gifPangolin").click(function() {
//         var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[2] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
//         $.ajax({
//             method: "GET",
//             url: myUrl,
//         }).then(function(response) {
//             $("#gifLocation").empty();
//             console.log(response);
//             var gifURL = response.data[0].images.fixed_width.url;
            
//             console.log(response.data.length);
//             var gifNum = response.data.length
//             for (var i = 0; i < gifNum; i++) {
//                 $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
//                 gifURL = response.data[i].images.fixed_width.url;
//                 var gifRateId = "gifRate" + i;
//                 var ratingLocString = '<p id="' + gifRateId + '"></p>'
//                 var ratingLoc = $(ratingLocString);
//                 var rating =  response.data[i].rating;
//                 var gifRating = "Rating: " + rating;
//                 $("#gifDiv" + i).append(ratingLoc);
//                 $("#" + gifRateId).text(gifRating);
//                 var gifId = "gif" + i;
//                 var gifImage = $('<img class=gif id=' + gifId + '>');
//                 gifImage.attr("src", gifURL);
//                 $("#gifDiv" + i).append(gifImage);
//             }
//         });
//     });

//     $("#gifSnake").click(function() {
//         var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[3] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
//         $.ajax({
//             method: "GET",
//             url: myUrl,
//         }).then(function(response) {
//             $("#gifLocation").empty();
//             console.log(response);
//             var gifURL = response.data[0].images.fixed_width.url;

//             console.log(response.data.length);
//             var gifNum = response.data.length
//             for (var i = 0; i < gifNum; i++) {
//                 $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
//                 gifURL = response.data[i].images.fixed_width.url;
//                 var gifRateId = "gifRate" + i;
//                 var ratingLocString = '<p id="' + gifRateId + '"></p>'
//                 var ratingLoc = $(ratingLocString);
//                 var rating =  response.data[i].rating;
//                 var gifRating = "Rating: " + rating;
//                 $("#gifDiv" + i).append(ratingLoc);
//                 $("#" + gifRateId).text(gifRating);
//                 var gifId = "gif" + i;
//                 var gifImage = $('<img class=gif id=' + gifId + '>');
//                 gifImage.attr("src", gifURL);
//                 $("#gifDiv" + i).append(gifImage);
//             }
//         });
//     });

//     $("#gifBird").click(function() {
//         var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[4] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
//         $.ajax({
//             method: "GET",
//             url: myUrl,
//         }).then(function(response) {
//             $("#gifLocation").empty();
//             console.log(response);
//             var gifURL = response.data[0].images.fixed_width.url;

//             console.log(response.data.length);
//             var gifNum = response.data.length
//             for (var i = 0; i < gifNum; i++) {
//                 $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
//                 gifURL = response.data[i].images.fixed_width.url;
//                 var gifRateId = "gifRate" + i;
//                 var ratingLocString = '<p id="' + gifRateId + '"></p>'
//                 var ratingLoc = $(ratingLocString);
//                 var rating =  response.data[i].rating;
//                 var gifRating = "Rating: " + rating;
//                 $("#gifDiv" + i).append(ratingLoc);
//                 $("#" + gifRateId).text(gifRating);
//                 var gifId = "gif" + i;
//                 var gifImage = $('<img class=gif id=' + gifId + '>');
//                 gifImage.attr("src", gifURL);
//                 $("#gifDiv" + i).append(gifImage);
//             }
//         });
//     });

//     $("#gifEmu").click(function() {
//         var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[5] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
//         $.ajax({
//             method: "GET",
//             url: myUrl,
//         }).then(function(response) {
//             $("#gifLocation").empty();
//             console.log(response);
//             var gifURL = response.data[0].images.fixed_width.url;

//             console.log(response.data.length);
//             var gifNum = response.data.length
//             for (var i = 0; i < gifNum; i++) {
//                 $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
//                 gifURL = response.data[i].images.fixed_width.url;
//                 var gifRateId = "gifRate" + i;
//                 var ratingLocString = '<p id="' + gifRateId + '"></p>'
//                 var ratingLoc = $(ratingLocString);
//                 var rating =  response.data[i].rating;
//                 var gifRating = "Rating: " + rating;
//                 $("#gifDiv" + i).append(ratingLoc);
//                 $("#" + gifRateId).text(gifRating);
//                 var gifId = "gif" + i;
//                 var gifImage = $('<img class=gif id=' + gifId + '>');
//                 gifImage.attr("src", gifURL);
//                 $("#gifDiv" + i).append(gifImage);
//             }
//         });
//     });

//     $("#gifCow").click(function() {
//         var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[6] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
//         $.ajax({
//             method: "GET",
//             url: myUrl,
//         }).then(function(response) {
//             $("#gifLocation").empty();
//             console.log(response);
//             var gifURL = response.data[0].images.fixed_width.url;            
            
//             console.log(response.data.length);
//             var gifNum = response.data.length
//             for (var i = 0; i < gifNum; i++) {
//                 $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
//                 gifURL = response.data[i].images.fixed_width.url;
//                 var gifRateId = "gifRate" + i;
//                 var ratingLocString = '<p id="' + gifRateId + '"></p>'
//                 var ratingLoc = $(ratingLocString);
//                 var rating =  response.data[i].rating;
//                 var gifRating = "Rating: " + rating;
//                 $("#gifDiv" + i).append(ratingLoc);
//                 $("#" + gifRateId).text(gifRating);
//                 var gifId = "gif" + i;
//                 var gifImage = $('<img class=gif id=' + gifId + '>');
//                 gifImage.attr("src", gifURL);
//                 $("#gifDiv" + i).append(gifImage);
//             }
//         });
//     });

//     $("#gifHedgehog").click(function() {
//         var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[7] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
//         $.ajax({
//             method: "GET",
//             url: myUrl,
//         }).then(function(response) {
//             $("#gifLocation").empty();
//             console.log(response);
//             var gifURL = response.data[0].images.fixed_width.url;            
            
//             console.log(response.data.length);
//             var gifNum = response.data.length
//             for (var i = 0; i < gifNum; i++) {
//                 $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
//                 gifURL = response.data[i].images.fixed_width.url;
//                 var gifRateId = "gifRate" + i;
//                 var ratingLocString = '<p id="' + gifRateId + '"></p>'
//                 var ratingLoc = $(ratingLocString);
//                 var rating =  response.data[i].rating;
//                 var gifRating = "Rating: " + rating;
//                 $("#gifDiv" + i).append(ratingLoc);
//                 $("#" + gifRateId).text(gifRating);
//                 var gifId = "gif" + i;
//                 var gifImage = $('<img class=gif id=' + gifId + '>');
//                 gifImage.attr("src", gifURL);
//                 $("#gifDiv" + i).append(gifImage);
//             }
//         });
//     });
});