$(document).ready(function() {

   const countHandler = function() {
    //  const tweetEntryBox = $('.tweetEntryBox').siblings().first();
     const tweetEntryBox = $('.tweetEntryBox').siblings().first().children('.counter')
     console.log(tweetEntryBox);
     tweetEntryBox.text((140 - $(this).val().length))
     
   }
  $('.tweetEntryBox').keyup(countHandler);


});