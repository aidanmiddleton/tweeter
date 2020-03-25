$(document).ready(() => {
    

//uses createTweetElement to format the data being recieved from the server, prepends them to the tweet container in chronological order
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      let $currentTweet = createTweetElement(tweet);
      $('.tweets-container').prepend($currentTweet);
    }
  };
  
// V-- creates tweet elements through jquery creation of elements, followed by appending in order to create the articles. Ensures classes will be correct, and that styling will be properly applied. 

  const createTweetElement = function(tweet) {
    const $tweet = $('<article>').addClass('tweet');
    const $header = $('<header>');
    const $tweetHeader = $('<div>').addClass('tweetHeader');
    const $avatar = $('<img>').addClass('tweetPic').attr('src', tweet.user.avatars);
    const $userName = $('<p>').addClass('usersName').text(tweet.user.name);
    const $usersHandle = $('<p>').addClass('usershandle').text(tweet.user.handle);
    const $tweetContents = $('<p>').addClass('tweetContents').text(tweet.content.text);
    const $tweetFooter = $('<footer>').addClass('tweetFooter').text(`posted ${moment(tweet.created_at).fromNow()}`);
    const $iconsDiv = $('<div>').addClass('icons');
    const $retweet = $('<i>').addClass("fas fa-retweet");
    const $heart = $('<i>').addClass("fas fa-heart");
    const $flag = $('<i>').addClass("fas fa-flag");


    $tweetHeader.append($avatar, $userName, $usersHandle);
    $iconsDiv.append($retweet, $flag, $heart);
    $header.append($tweetHeader);
    $tweetFooter.append($iconsDiv);
    $tweet.append($header, $tweetContents, $tweetFooter);
    return $tweet;
  };

//retrieves tweets from server and calls the renderTweets function

  const loadTweets = function() {
    $('.tweets-container').empty();
    $.get('/tweets', function(result) {
      renderTweets(result);
    })
  };

  loadTweets()

  const clearForm = function() {
    $( ".submission-form .tweetEntryBox" ).val(null);
    $( ".submission-form .counter").text(140);
  };

// jquery functions to handle the creation and posting of new tweets by users, including auto feed refresh, and validation error handling

  $( ".submission-form" ).submit(function( event ) {
    event.preventDefault();
    const characterLength = $('.tweetEntryBox').val().length
    if (characterLength > 140) {
      $('#error').slideDown('slow')
      .text('🛑 Chatterbox over here! keep it under 140 characters pls. 🛑')
      .delay(3000)
      .slideUp('slow');
    } else if (characterLength === 0) {
      $('#error').slideDown('slow')
      .text("🛑 Sorry dude, but you can't post a blank tweet! 🛑")
      .delay(3000)
      .slideUp('slow')
    } else {
    let $tweet = $(this).serialize();
    $.post('/tweets', $tweet, function() {
      console.log('the post worked')
      loadTweets();
      clearForm();
    })
   }
  });



  $('.arrow').click(function() {
    $('.new-tweet')
    .slideToggle(500)
    .focus();
    $('.tweetEntryBox').focus()
  })

  topButton = document.getElementById("top-button");

  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }

  $('#top-button').click(

    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

  )


});


