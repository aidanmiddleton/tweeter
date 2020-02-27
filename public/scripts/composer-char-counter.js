$(document).ready(function() {

  const countHandler = function() {
    //  const tweetEntryBox = $('.tweetEntryBox').siblings().first();
    const tweetEntryBox = $('.tweetEntryBox').siblings().first().children('.counter')
    tweetEntryBox.text((140 - $(this).val().length))
    if ((140 - $(this).val().length )< 0) {
      tweetEntryBox.css({color: 'red'});
    }
     
   }
  $('.tweetEntryBox').keyup(countHandler);


});