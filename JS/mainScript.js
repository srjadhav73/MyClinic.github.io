function Read() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    
    if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
          } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
          }
    
   
  }
  function Read_Btn() {
    var dot1 = document.getElementById("dots1");
    var more1 = document.getElementById("more1");
    var btn1 = document.getElementById("myBtn1");
    
    if (dot1.style.display === "none") {
            dot1.style.display = "inline";
            btn1.innerHTML = "Read more";
            more1.style.display = "none";
          } else {
            dot1.style.display = "none";
            btn1.innerHTML = "Read less";
            more1.style.display = "inline";
          }
    
   
  }
  function Read_Btn2() {
    var dot2 = document.getElementById("dots2");
    var more2 = document.getElementById("more2");
    var btn2 = document.getElementById("myBtn2");
    
    if (dot2.style.display === "none") {
            dot2.style.display = "inline";
            btn2.innerHTML = "Read more";
            more2.style.display = "none";
          } else {
            dot2.style.display = "none";
            btn2.innerHTML = "Read less";
            more2.style.display = "inline";
          }
    
   
  }
   // Datepicker
   $(document).ready(function() {
    $('.datepicker').datepicker({
      autoclose: true
    });
  });

