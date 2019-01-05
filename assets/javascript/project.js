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

    var i;
    for (i = 0; i < 6; i++) {  
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
                console.log(response);
                console.log(response.description);
 
                console.log(response.location.name);

                console.log(response.location);
                var src = response.urls.regular;
                // $('#image').html('<img src= ' + src + "/>");
                // $('#location-name').html("<h1>" + location + "</h1>");

                var anchor = document.createElement("a");

                var link = document.createAttribute("href");
                link.value = src;
    
                var type = document.createAttribute("data-type");
                type.value = "image";

                var image = document.createElement("img");

                var picture = document.createAttribute("src");
                picture.value = src;

                anchor.setAttributeNode(link);
                anchor.setAttributeNode(type);
                image.setAttributeNode(picture);

                anchor.appendChild(image);

                var div = document.getElementById('locations');
            
                div.appendChild(anchor);
            
            })
 feature/index-build
        };

            var key = '11184612-ba39f46d40d6f65f978010ca1';
            var url = 'https://pixabay.com/api/?key=' + key + '&q=' +location + '&image_type=photo&per_page=6'
            $.ajax({
                url: url,
                dataType: 'json',
        
            })
            .done(function(response){
                
                console.log( response);
                console.log( 'this is pixabay');
                
                var zero=response.hits[0].largeImageURL;
                var one=response.hits[1].largeImageURL;
                var two=response.hits[2].largeImageURL;
                var tres=response.hits[3].largeImageURL;
                var qua=response.hits[4].largeImageURL;
                var five=response.hits[5].largeImageURL;
                
                $('#hash-0').html('<img src= ' + zero + " />");
                $('#hash-1').html('<img src= ' + one + "/>");
                $('#hash-2').html('<img src= ' + two + "/>");
                $('#hash-3').html('<img src= ' + tres + "/>");
                $('#hash-4').html('<img src= ' + qua + "/>");
                $('#hash-5').html('<img src= ' + five + "/>");

        
        
            })
 master
    }
//  



    getLocationImage();
 feature/index-build

    $("#myModal").show();
})

master






    


})




