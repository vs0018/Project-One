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

    database.ref('array/').once('value').then(function(snapshot) {
        var snapshot = snapshot.val().savedLocations;
        console.log(snapshot);
        var URL1 = snapshot[0] || "https://unsplash.it/400/320/?random";
        var URL2 = snapshot[1] || "https://unsplash.it/400/320/?random";
        var URL3 = snapshot[3] || "https://unsplash.it/400/320/?random";
        var URL4 = snapshot[4] || "https://unsplash.it/400/320/?random";
        var URL5 = snapshot[5] || "https://unsplash.it/400/320/?random";

        $("#dest1").attr("src", URL1);
        // $("#cover1").attr("href", URL1);

        $("#dest2").attr("src", URL2);
        // $("#cover2").attr("href", URL2);

        $("#dest3").attr("src", URL3);
        // $("#cover3").attr("href", URL3);

        $("#dest4").attr("src", URL4);
        // $("#cover4").attr("href", URL4);

      });