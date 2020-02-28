$(document).ready(function() {

  const countHandler = function() {
    const tweetEntryBox = $('.tweetEntryBox').siblings().first().children('.counter')
    tweetEntryBox.text((140 - $(this).val().length))
    if ((140 - $(this).val().length )< 0) {
      tweetEntryBox.css({color: 'red'});
    } else {
      tweetEntryBox.css({color: 'rgb(248, 130, 34)'})
    }
     
   }
  $('.tweetEntryBox').keyup(countHandler);


});