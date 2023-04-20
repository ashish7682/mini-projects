function A0() {
    let x = document.getElementById("demo").value;
    if (x == "") {
      document.getElementById("demo").value = "";
    } else {
      document.getElementById("demo").value += "+";
    }
  }
  function A1() {
    let x = document.getElementById("demo").value;
    if (x == "") {
      document.getElementById("demo").value = "";
    } else {
      document.getElementById("demo").value += "-";
    }
  }
  function A2() {
    let x = document.getElementById("demo").value;
    if (x == "") {
      document.getElementById("demo").value = "";
    } else {
      document.getElementById("demo").value += "*";
    }
  }
  function A3() {
    let x = document.getElementById("demo").value;
    if (x == "") {
      document.getElementById("demo").value = "";
    } else {
      document.getElementById("demo").value += "/";
    }
  }
  function A4() {
    let x = document.getElementById("demo").value;
    if (x == "") {
      document.getElementById("demo").value = "";
    } else {
      document.getElementById("demo").value += "%";
    }
  }
  function myfunction() {
    let x = document.getElementById("demo").value;
    if(x=="")
    {
        document.getElementById("demo").value = "";
    }
    else{
        demo.value = eval(x);
    }
  }