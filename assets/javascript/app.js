let tvShows = ['arrow', 'super-girl', 'flash', 'bad-ink', 'the-expanse', 'lost-in-space', 'ringworld', 'the-mandalorian'];

function addBtn(name){
    const btn = $('<button>');
    $(btn).addClass('tvButtons');
    $(btn).attr('data-type', name);
    btn.text(name);
    $('#buttons').append(btn);
    $('button.tvButtons').bind('click', function(event){
        // console.log(this.innerHTML);
        let queryString = this.innerHTML;
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        queryString + "&limit:10&api_key=POQHvWMKuG0bSteQ6PzCKHblrUDR68oO";
        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
                console.log(response);
                const giphy = $('<div>');
                const giphyImage = $('<img>');
                giphyImage.attr('src', response.data[0].images.fixed_height.url);
                giphy.append(giphyImage);
                $('#gifs').prepend(giphy);
            });
    });
};

function bntFunction(){
for(let i = 0; i < tvShows.length; i++){
    addBtn(tvShows[i]);
    // console.log(tvShows[i]);
    }
};

$('#submit').on('click', function(event){
    event.preventDefault();
    tvShows.push($('#input').val());
    $('#buttons').empty();
    bntFunction();
    // console.log(tvShows);
});

// $('#buttons').on('click', function(event){
//     console.log(this.innerHTML);
// });

bntFunction();

// $('button.tvButtons').bind('click', function(event){
//     console.log(this.innerHTML);
// });