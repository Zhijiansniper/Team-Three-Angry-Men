function myFunction() {
    var x1 = document.getElementById("myselect").value;
    var x2 = document.getElementById("myhours").value;
    localStorage.setItem("hour", x1);
    localStorage.setItem("day", x2);
}
