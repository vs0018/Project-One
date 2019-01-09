$(document).ready(function () {

    // variable for list for spots 
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
    var location = vacations[Math.floor(Math.random() * vacations.length)];
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
                



    // encodeURI() : for be able to consider the spaces for the list in words 

    function getLocationImage() {
        var i;
        for (i = 0; i < 6; i++) {

            var access_key = '8a76ab2b11add964b157a4e5b50af0f90aa2d0ff072a5cd4d0688af17224d0c2'

            // client_id - API key
            // orientation - landscape / portrait
            // query - Searches the Unsplash API for search term
            var url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=' + encodeURI(location) + '&client_id=' + access_key;


                var div = document.getElementById("locations");
            
                div.appendChild(anchor);
            
            });

        };
    };

//pixabay GET
            var key = '11184612-ba39f46d40d6f65f978010ca1';
            var url = 'https://pixabay.com/api/?key=' + key + '&q=' +location + '&image_type=photo&per_page=6'
            $.ajax({
                url: url,
                rel: "next",
                dataType: 'json',
            })
                .done(function (response) {
                        console.log(response);
                        console.log(response.description);
         
                        console.log(response.location.name);
        
                        console.log(response.location);
                        var src = response.urls.regular;
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
        };






        var key = '11184612-ba39f46d40d6f65f978010ca1';
        var url = 'https://pixabay.com/api/?key=' + key + '&q=' + encodeURI(location) + '&image_type=photo&per_page=6'
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

                

//new apit stuff


            })

        var keys = '58c0ed11-4504-4';
        var url ='https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.3/search'
        $.ajax({ 
            url: url,
            headers:{
                'apikey': keys,
                'mode': 'sandbox',
                'Content-type': 'application/json'
              
            },
           
            method: "POST"
        })
        .done(function(victory){
            console.log("YO: " + victory);
        })

    }





    getLocationImage();
    //login modal start
UIkit.modal('#myModal').show();

})















//submit button
    var lightbox = document.getElementById('locations')
    
    UIkit.lightbox(lightbox).show(0)

});
