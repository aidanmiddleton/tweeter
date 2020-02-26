$(document).ready(function() {

   const countHandler = function() {
     $('.counter').text((140 - $(this).val().length))
     
   }
  $('.tweetEntryBox').keyup(countHandler);


});