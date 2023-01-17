  // When the user scrolls the page, execute scrollbarProgress
  window.onscroll = function() {scrollbarProgress()};
  
  function scrollbarProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-indicator").style.width = scrolled + "%";
  }