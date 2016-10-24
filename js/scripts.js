$(document).ready(function() {
    var flavors = ["chocolate", "vanilla", "strawberry", "coffee"]

    flavors.forEach(function(flavor) {
          $('ul').append("<li>"+flavor+"</li>");
  });
});
