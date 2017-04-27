Template.home.onCreated(function() {
  //Meteor.subscribe('genomes');
  console.log("home template created");

});


Template.home.onRendered(function () {
   $(document).ready(function(){
/*start slide show at slide one on page load*/
       let slideIndex = 0;
       showSlides();
/*import slides from html code, define slides as a variable*/
       function showSlides() {
           let i;
           let slides = document.getElementsByClassName("mySlides");
           for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";
           }
/* copied from W3 website...automate slides in sequential order */
           slideIndex++;
           if (slideIndex> slides.length) {slideIndex = 1}
           slides[slideIndex-1].style.display = "block";
           setTimeout(showSlides, 10000); // Change image every 10 seconds
       }
/* set up gitter sidecar chat...copied from gitter/sidecar*/
   ((window.gitter = {}).chat = {}).options = {
           room: 'phamerator/Lobby'

   };
    });
  });

/*Template.home.onRendered(function () {
   $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
});*/
