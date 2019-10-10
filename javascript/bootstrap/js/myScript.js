// test json


// from the edited html select and clone list item.
var galleryItem = $('.kopimi');
var workelement = galleryItem.clone();

// temporary video bool
var showVideo = false;

// sellect and hide a detail view
var singleItem = $('.singleItem');
singleItem.hide();

// empty the container
$( ".listworks" ).empty();

// show all projects from json
$.each( artworks, function( i, val ) {
  $('.text-target', workelement).html(val.art_title +" ("+ val.art_year +")");
  $('.target-img', workelement).attr('src', "./img/" +val.artwork_short + "/"+ val.artwork_short + "1.jpg");
  $('.target-title', workelement).html(val.art_title);
  $('.target-year', workelement).html(val.art_year);
  $('.link-detail', workelement).attr("id", i);
  if (val.art_show == true) {
    $( ".listworks" ).append( workelement.html() );
  }
});




// first empty and then show all images belonging to a project,
// images lifes in folder /img/artwork_short/artwork_short+num.jpg - "artwork_short": "evil",
// num is number of images - "art_imgs": 7,

$( ".link-detail" ).on( "click", function() {

  $( ".listworks" ).empty();

  //  set current projekt
  let showThis = artworks[this.id].artwork_short;

  // show all images
  for(i=2; i < artworks[this.id].art_imgs; i++) {
    $('.text-target', workelement).html('');
    $('.target-img', workelement).attr('src', "./img/" +artworks[this.id].artwork_short + "/"+ artworks[this.id].artwork_short + i +".jpg");
    $('.target-title', workelement).html(artworks[this.id].art_title);
    $('.target-year', workelement).html(artworks[this.id].art_year);
    $('.link-detail', workelement).removeClass("link-detail").addClass("show-img");
    $('.show-img', workelement).attr('id', i);
    $('.show-img', workelement).attr('data-work', this.id);
    $('.single-text', singleItem).html(artworks[this.id].art_title + " - " + artworks[this.id].art_year);
    $('.listworks').append( workelement.html() );
  }

  if (artworks[this.id].art_video != 0) {
    $("#ytplayer iframe").remove();
    $('<iframe width="100%" height="315" frameborder="0" allowfullscreen></iframe>')
        .attr("src", "http://www.youtube.com/embed/" + artworks[this.id].art_video)
        .appendTo(".video-content");
        showVideo = true;
  } else {
    $("#ytplayer iframe").remove();
    showVideo = false;
  }

 $('.lead').html("<span> <a href='./index.html'>works</a> </span><span>/</span> <span><a  class='link-detail' id='"+this.id+"'>"+artworks[this.id].art_title+"</a></span>");
 $('.jumbotron-heading').text(artworks[this.id].art_maker);

 // show a single item
 $( ".show-img" ).on( "click", function() {
    $( ".video-content" ).hide();
    $( ".listworks" ).hide();
    $('.single-image', singleItem).attr('src', './img/' + showThis + '/'+ showThis + this.id +'.jpg');
    singleItem.show();
 });

});

// hide and show detailed images
$( ".single-image" ).on( "click", function() {
    $( ".listworks" ).show();
    singleItem.hide();
    if (showVideo == true) {
        $( ".video-content" ).show()
    }
});
