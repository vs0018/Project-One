//array variables for saving current img src code and R swipes
var currentImg = [];
var savedLocations = [];
var idNum = 0;

$(document).ready(function () {

    // variable list for unsplash spots 
    var vacations = [

        "Hawaii", "Thailand", "Spain",
        "Toronto", "Japan", "California", "Czech Republic", "Italy", "Brazil",
        "Australia", "Greece", "New York",
        "Saudi Arabia", "London", "France", "Poland",
        "Croatia", "Latvia", "Hungary",
        "Russia", "Portugal", "Slovenia",
        "Austria", "Netherlands", "Mexico", "Peru", "Florida",
        "Jamaica", "Germany", "Switzerland"
    ];

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
        //submit button initializes lightbox
        $("img:first").trigger("click")



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

                    //stores URL in a variable
                    var src = response.urls.regular;

                    //creates anchor element
                    var anchor = document.createElement("a");

                    //creates URL attribute for link
                    var link = document.createAttribute("href");
                    link.value = src;

                    //creates data-type attributes
                    var type = document.createAttribute("data-type");
                    type.value = "image";

                    //creates data-type attributes
                    var liID = document.createAttribute("id");
                    liID.value = idNum;
                    idNum++;

                    //creates img element
                    var image = document.createElement("img");

                    //creates img URL attribute
                    var picture = document.createAttribute("src");
                    picture.value = src;

                    //appends URL to anchor HREF
                    anchor.setAttributeNode(link);


                    //appends data-type attributes to anchor
                    anchor.setAttributeNode(type);
                    anchor.setAttributeNode(liID);

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

    //calls images from APIs
    getLocationImage();

    //login modal start
    UIkit.modal('#myModal').show();


    //lightbox close button links to results page
    $(document).on('hidden', 'div.uk-lightbox', function () {
        //send info to database
        database.ref('array/').set({
            savedLocations
        }, function (error) {
            if (error) {
                console.log("FAILED: " + errorObject.code);
            } else {
                console.log("Data Saved Successfully!");
            }
        });
        //redirect page
        window.top.location.href = "match.html";
    });

    //grabs src code of current img and pushes to array
    $(document).on('itemshown', 'div.uk-lightbox', function () {
        currentImg.length = 0;
        console.log(this);
        var current = this.getElementsByClassName("uk-active").item(0);
        console.log(current);
        var img = current.getElementsByTagName("img").item(0);
        console.log(img);
        var src = img.getAttribute("src");
        console.log(src);
        currentImg.push(src);
    });

    //log R taps in lightbox and push img src to array
    $(document).on('tap', 'a.uk-slidenav-next', function () {
        console.log("Success!");
        savedLocations.push(currentImg[0]);
    });

    //log L taps and remove node
    $(document).on('tap', 'a.uk-slidenav-previous', function () {
        console.log("Bummer!");
        console.log(this)
        //NEED CODE TO REMOVE ITEM FROM DOM

    });

});