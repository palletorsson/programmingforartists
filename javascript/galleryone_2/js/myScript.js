console.log("hello gallery");

// my works including imgs
var works = [
 {
    "title": "Museum Meltdown",
    "description": "Museum Meltdown...game modifications...art museums.",
    "img": "img_1.jpg",
    "year": "1996"
 },
 {
    "title": "Sam",
    "description": "Sam...art.",
    "img": "img_2.jpg",
    "year": "1989"
 },
 {
    "title": "Video drome",
    "description": "info about Video drome ... art.",
    "img": "img_2.jpg",
    "year": "1999"
 },
 {
    "title": "Video mama",
    "description": "info about Video drome ... art.",
    "img": "img_1.jpg",
    "year": "1998"
 },
];

// get first image item by id and clone the element
var galleryItem = $(".target-div");
var workElement = galleryItem.clone();

var galleryDetail = $(".target-div-detail");
var galleryDetailClone = galleryDetail.clone();

var workDetail = $(".target-div-detail-info");
var workDetailClone = workDetail.clone();

console.log(galleryDetail.html());
galleryDetail.hide();

// get the gallery element
var worklist = $(".gallery");

// empty gallery element

// list all works
function showAll() {
  worklist.empty();
  $.each( works, function( i, val ) {
      $('.target-img', workElement).attr('src', "./img/" +val.img);
      $('.target-title', workElement).html(val.title);
      $('.target-year', workElement).html(val.year);
      $('.link-detail', workElement).attr("id", i);
      worklist.append( workElement.html() );
      addDetailClick();
  });
}
showAll();

// detailed view



function addDetailClick() { 
  $(".link-detail").click( 
    function() { 
        event.preventDefault(); 
        worklist.empty(); 
        var thework = works[this.id]; 
        var tempworks = "";
        for (var i = 0; i < thework.imgcount; i++) { 
          $('.detail-target-img', galleryDetailClone).attr('src', "./img/" + thework.imgprefix + "_" + (i+1) + ".jpg"); 
          tempworks = tempworks + galleryDetailClone.html(); 
        } 
        var detailInfo = $('.detail-target-title', workDetailClone).html(thework.title + " -  " + thework.year + " <hr> " + thework.description); 
        tempworks = tempworks + detailInfo.html(); 
        worklist.append( tempworks ); 
        addBackClick(); 
    } 
); }


function addBackClick() {
  $(".back-to-all-work").click(
    function() {
      console.log("fest")
      event.preventDefault();
      showAll();
    }
  );
}

// about logic
var aboutContent = $(".target-div-about");
var aboutLink = $(".about");
aboutContent.hide();
aboutLink.click(
  function() {
    event.preventDefault();
    worklist.empty();
    worklist.append(aboutContent.html());
    addBackClick();
  }
);

// contact logic
var contactContent = $(".target-div-contact");
var contactLink = $(".contact");
contactContent.hide();
contactLink.click(
  function() {
    event.preventDefault();
    worklist.empty();
    worklist.append(contactContent.html());
    addBackClick();
  }
);
