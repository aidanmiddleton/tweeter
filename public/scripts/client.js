/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
        "content": {
          "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
      }
    ]
    
    const renderTweets = function(tweets) {
      for (let tweet of tweets) {
        let $currentTweet = createTweetElement(tweet);
        console.log(tweet)
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
      console.dir($tweet[0].innerHTML);
      // $tweet.append($header, )
      return $tweet;
    }

  
  renderTweets(data)
});