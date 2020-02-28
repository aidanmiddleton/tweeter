/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
    
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      let $currentTweet = createTweetElement(tweet);
      $('.tweets-container').prepend($currentTweet);
    }
  };
  
  const createTweetElement = function(tweet) {
    const $tweet = $('<article>').addClass('tweet');
    const $header = $('<header>')
    const $tweetHeader = $('<div>').addClass('tweetHeader');
    const $avatar = $('<img>').addClass('tweetPic').attr('src', tweet.user.avatars);
    const $userName = $('<p>').addClass('usersName').text(tweet.user.name);
    const $usersHandle = $('<p>').addClass('usershandle').text(tweet.user.handle);
    const $tweetContents = $('<p>').addClass('tweetContents').text(tweet.content.text);
    const $tweetFooter = $('<footer>').addClass('tweetFooter').text(`posted ${tweet.created_at}`);
    
    $tweetHeader.append($avatar, $userName, $usersHandle);
    $header.append($tweetHeader);
    $tweet.append($header, $tweetContents, $tweetFooter);
    return $tweet;
  }

  const loadTweets = function() {
    $.get('/tweets', function(result) {
      renderTweets(result);
    })
  }

  loadTweets()

  const clearForm = function() {
    $( ".submission-form .tweetEntryBox" ).val(null);
    $( ".submission-form .counter").text(140);
  }

  $( ".submission-form" ).submit(function( event ) {
    event.preventDefault();
    const characterLength = $('.tweetEntryBox').val().length
    if (characterLength > 140) {
      alert('You are over the character limit');
    } 
    if (characterLength === 0) {
      alert("You didn't enter anything in!");
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
  })

});