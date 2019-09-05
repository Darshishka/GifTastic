var topics = ["dog", "cat", "pangolin", "snake", "bird", "emu", "cow", "hedgehog"]
//var queryURL = "api.giphy.com/v1/gifs/search?q=" + search + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=" + limitNum + "&rating=" + rating;
var testURL = "https://api.giphy.com/v1/gifs/search?q=terry-curise&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=20"

$(document).ready(function () {

//user add new button
    $("#btnAddSubmit").click(function() {
        var newAnimal = $("#addInput").val();
        newAnimal = newAnimal.toLowerCase();
        topics.push(newAnimal);
        $("#buttons").append('<button id="gif' + newAnimal + '" class="animal-button">' + newAnimal + '</button>');
    });

    $(document).on("click", ".animal-button", function(){
        //gets id of button clicked
        var currentGif = this.id;
        if (this.id != "btnAddSubmit") {
            //remove the word gif from the id to get the animal name
            currentGif = currentGif.replace("gif", "");
            currentGif = currentGif.toLowerCase();
            var topicNum = topics.indexOf(currentGif);
            var myUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[topicNum] + "&api_key=oaPF55NglUdAyYKwDZ0KtuSumMrwDAK9&limit=15";
            $.ajax({
                method: "GET",
                url: myUrl,
            }).then(function(response) {
                $("#gifLocation").empty();
                var gifPausedURL = response.data[0].images.fixed_width_still.url;
                var gifPlayingURL = response.data[0].images.fixed_width.url;

                var gifNum = response.data.length
                for (var i = 0; i < gifNum; i++) {
                    // add attributes to store urls for data-playing and data-paused
                    
                    // add attribute data-state, start gifs as playing or paused and set state accordingly
                    $("#gifLocation").append('<div id=gifDiv' + i + '></div>');
                    gifPausedURL = response.data[i].images.fixed_width_still.url;
                    gifPlayingURL = response.data[i].images.fixed_width.url;
                    var gifRateId = "gifRate" + i;
                    var ratingLocString = '<p id="' + gifRateId + '"></p>'
                    var ratingLoc = $(ratingLocString);
                    var rating =  response.data[i].rating;
                    var gifRating = "Rating: " + rating;
                    $("#gifDiv" + i).append(ratingLoc);
                    $("#" + gifRateId).text(gifRating);
                    var gifId = "gif" + i;
                    var gifImage = $('<img class=gif id=' + gifId + '>');
                    gifImage.attr("src", gifPausedURL);
                    gifImage.attr("data-state", "paused");
                    gifImage.attr("data-paused", gifPausedURL);
                    gifImage.attr("data-playing", gifPlayingURL);
                    $("#gifDiv" + i).append(gifImage);
                }
            });
        }
    });
//on user click changes play states
    $(document).on("click", ".gif", function(){
        var state = $(this).attr("data-state")
        if (state === "paused"){
            $(this).attr("data-state", "playing");
            var link = $(this).attr("data-playing");
            $(this).attr("src", link);
        }
        else if (state === "playing") {
            $(this).attr("data-state", "paused");
            var link = $(this).attr("data-paused");
            $(this).attr("src", link);
        }
    });
});