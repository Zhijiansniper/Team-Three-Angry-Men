  function myFunction() {
      var x1 = document.getElementById("userName").value;
      var x2 = 92122;
      localStorage.setItem("userName", x1);
      localStorage.setItem("zipcode", x2);
      localStorage.setItem("hour", "6");
      localStorage.setItem("day", "3");
      window.location = "mainpage.html";
  }

  function myFunction2() {
      var x1 = document.getElementById("userName").value;
      var x2 = 92122;
      localStorage.setItem("userName", x1);
      localStorage.setItem("zipcode", x2);
      localStorage.setItem("hour", "6");
      localStorage.setItem("day", "3");
      window.location = "zipcode1.html";
  }
