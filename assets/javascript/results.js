$(document).ready(function () {
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

    //pixabay API GET
    var key = '11184612-ba39f46d40d6f65f978010ca1';
    var pix_url = 'https://pixabay.com/api/?key=' + key + '&q=' + encodeURI(location) + '&image_type=photo&per_page=6'

    $.ajax({
        url: pix_url,
        dataType: 'json',
    })
        .done(function (pix) {

            console.log('this is pixabay');
            console.log(pix);
            var zero = pix.hits[0].tags;
            var one = pix.hits[1].tags;
            var two = pix.hits[2].tags;
            var tres = pix.hits[3].tags;


            $('#hash-0').attr("src", pix.hits[0].largeImageURL);
            $("#zero a").replaceWith("<a data-caption='Destination 1' href=" + pix.hits[0].largeImageURL + " class='uk-position-cover'></a>");
            $("#uno p").replaceWith("<p class='uk-text-meta uk-margin-remove'><time datetime='2016-04-01T19:00'>" + zero + " </time></p>");

            $('#hash-1').attr("src", pix.hits[1].largeImageURL);
            $("#one a").replaceWith("<a data-caption='Destination 2' href=" + pix.hits[1].largeImageURL + " class='uk-position-cover'></a>");
            $("#dos p").replaceWith("<p class='uk-text-meta uk-margin-remove'><time datetime='2016-04-01T19:00'>" + one + " </time></p>");


            $('#hash-2').attr("src", pix.hits[2].largeImageURL);
            $("#two a").replaceWith("<a data-caption='Destination 3' href=" + pix.hits[2].largeImageURL + " class='uk-position-cover'></a>");
            $("#three p").replaceWith("<p class='uk-text-meta uk-margin-remove'><time datetime='2016-04-01T19:00'>" + two + " </time></p>");


            $('#hash-3').attr("src", pix.hits[3].largeImageURL);
            $("#tres a").replaceWith("<a data-caption='Destination 4' href=" + pix.hits[3].largeImageURL + " class='uk-position-cover'></a>");
            $("#qua p").replaceWith("<p class='uk-text-meta uk-margin-remove'><time datetime='2016-04-01T19:00'>" + tres + " </time></p>");





        })
   

})