$(document).ready(function () {

    // variable for list for spots 
    var vacations = [
        "hawaii", "thailand", "barcelona,spain",
        "toronto", "japan", "morocco",
        "santa barbara", "san francisco", "the maldives",
        'prague, czech republic', "amalfi coast, Italy", "rome",
        "Great Barrier Reef", "Florence, Italy", "Rio de Janeiro",
        "Hong Kong", "Sydney", "santorini, greece",'new york city',
        'dubai', ' london', 'paris', 'wroclaw, poland', 
        'hvar island, croatia', 'riga, latvia', 'budapest, hungary',
        'moscow, russia', 'lisbon, portugal', 'bohinij, slovenia',
        'vienna, austria', 'amsterdam, netherlands', 


    ];


    // encodeURI() : for be able to consider the spaces for the list in words 

    function getLocationImage(location) {
        var location = vacations[Math.floor(Math.random() * vacations.length)];
        console.log("random location is : " + location);
        var access_key = '8a76ab2b11add964b157a4e5b50af0f90aa2d0ff072a5cd4d0688af17224d0c2'

        // client_id - API key
        // orientation - landscape / portrait
        // query - Searches the Unsplash API for search term
        var url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=' + encodeURI(location) + '&client_id=' + access_key;

        $.ajax({
            url: url,
            dataType: 'json',
        })
            .done(function (response) {
                console.log(response.description);
                console.log(response.location.city);
                console.log(response.location);
                var src = response.urls.regular;
                $('#image').html('<img src= ' + src + "/>");
                $('#location-name').html("<h1>" + location + "</h1>");
            })
    }

    getLocationImage();
})





