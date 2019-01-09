$(document).ready(function () {

    // variable list for unsplash spots 
    var vacations = [
        "hawaii", "thailand", "barcelona,spain",
        "toronto", "japan", "morocco",
        "santa barbara", "san francisco", "the maldives",
        'prague, czech republic', "amalfi coast, Italy", "rome",
        "Great Barrier Reef", "Florence, Italy", "Rio de Janeiro",
        "Hong Kong", "Sydney", "santorini, greece", 'new york city',
        'dubai', ' london', 'paris', 'wroclaw, poland',
        'hvar island, croatia', 'riga, latvia', 'budapest, hungary',
        'moscow, russia', 'lisbon, portugal', 'bohinij, slovenia',
        'vienna, austria', 'amsterdam, netherlands', "los angeles, california",
        'ohio', 'baja mexico', 'peru', 'disneyland',
        'jalisco, mexico', 'jamaica', 'germany', 'switzerland'
    ];

    // var trashCan = [""];

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBRHi2TDexKettPUYff-1ezYxnOjm15NZE",
        authDomain: "project-one-6fbc9.firebaseapp.com",
        databaseURL: "https://project-one-6fbc9.firebaseio.com",
        projectId: "project-one-6fbc9",
        storageBucket: "project-one-6fbc9.appspot.com",
        messagingSenderId: "1085583764255"
    };

    firebase.initializeApp(config);

    //   create a variable to reference the database
    var database = firebase.database();

    //   capture button click
    $("#submit").click(function (event) {
        event.preventDefault();
        // grab values from text boxes
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();

        // code for handling the push
        database.ref().push({
            name: name,
            email: email
        });

        // firebase watcher .on("child_added")
        // databases.ref().on("")
        // storing the snapshot.val() in  variable for convenience
        database.ref().on("child_added", function (snapshot) {
            var snapshot = snapshot.val();
            console.log(snapshot.name);
            console.log(snapshot.email);

        }, function (errorObject) {
            console.log("THIS FAILED BRO: " + errorObject.code);

        });
    }); 

    function getLocationImage() {
        //initializes for loop to get 6 different locations
        var i;
        for (i = 0; i < 6; i++) {  

        //generates a random location from the locations array
            var location = vacations[Math.floor(Math.random() * vacations.length)];

        //logs location to the console
            console.log("random location is : " + location);

        // query - Searches the Unsplash API for search term
        // encodeURI() : for be able to consider the spaces for the list in words
        var access_key = '8a76ab2b11add964b157a4e5b50af0f90aa2d0ff072a5cd4d0688af17224d0c2'
        var url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=' + encodeURI(location) + '&client_id=' + access_key;

        $.ajax({
            url: url,
            dataType: 'json',
        })
            .done(function (response) {
                //console logs the entire response object
                console.log(response);

                //console logs item's description
                console.log(response.description);
    
                //console logs location name
                console.log(response.location.name);
                console.log(response.location);

                //stores URL in a variable
                var src = response.urls.regular;

                //creates anchor element
                var anchor = document.createElement("a");
                
                //creates URL attribute for link
                var link = document.createAttribute("href");
                link.value = src;
                
                //creates data-type attribute
                var type = document.createAttribute("data-type");
                type.value = "image";

                //creates img element
                var image = document.createElement("img");

                //creates img URL attribute
                var picture = document.createAttribute("src");
                picture.value = src;

                //appends URL to anchor HREF
                anchor.setAttributeNode(link);

                //appends data-type attribute to anchor
                anchor.setAttributeNode(type);

                //appends picture URL to img element
                image.setAttributeNode(picture);

                //appends img element to anchor
                anchor.appendChild(image);

                //appends entire anchor element with img to locations div
                var div = document.getElementById("locations");
            
                div.appendChild(anchor);
            
                })

            };
        };

    //pixabay API GET
    var key = '11184612-ba39f46d40d6f65f978010ca1';
    var url = 'https://pixabay.com/api/?key=' + key + '&q=' + location + '&image_type=photo&per_page=6'

    $.ajax({
        url: url,
        dataType: 'json',
    })
        .done(function (pix) {

            console.log('this is pixabay');
            console.log(pix);
            var zero = pix.hits[0].largeImageURL;
            var one = pix.hits[1].largeImageURL;
            var two = pix.hits[2].largeImageURL;
            var tres = pix.hits[3].largeImageURL;
            var qua = pix.hits[4].largeImageURL;
            var five = pix.hits[5].largeImageURL;

            $('#hash-0').append(" <a id='one'  href= " + one + " 'data-type='Image'></a>");
            $("#one").append("<img src=" + one + "/>");

            $('#hash-0').append(" <a id='two' href= " + two + " 'data-type='Image'></a>");
            $('#two').append("<img src=" + two + "/>");

            $('#hash-0').append(" <a id ='tres' href= " + tres + " 'data-type='Image'></a>");
            $('#tres').append("<img src=" + tres + "/>")

            $('#hash-0').append(" <a id='qua' href= " + qua + " 'data-type='Image'></a>");
            $('#qua').append("<img src=" + qua + "/>")

            $('#hash-0').append(" <a id='five' href= " + five + " 'data-type='Image'></a>");
            $('#five').append("<img src=" + five + "/>")
        })
    
    //travel API GET
    var keys = '58c0ed11-4504-4';
    var url = 'https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.3/search'
    $.ajax({
        url: url,
        headers: {
            'apikey': keys,
            'mode': 'sandbox',
            'Content-type': 'application/json'

        },

        method: "POST"
    })
        .done(function (victory) {
            console.log("YO: " + victory);
        })

    //calls images from APIs
    getLocationImage();

    //login modal start
    UIkit.modal('#myModal').show();

    //submit button initializes lightbox
    $("#submit").on("click", function () {
        $("img:first").trigger("click")
    });

    //lightbox close button links to results page
    $(document).on('hidden', 'div.uk-lightbox', function() {
        window.top.location.href = "results.html";
    });

});
