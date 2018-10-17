console.log("connecting");
$(document).ready(function() {
  $("button").on("click", function(e) {
    var num = $(this).attr("id");
    localStorage.setItem("num", num);
    console.log(num);
    $("body").empty();
    create();
  });
  var Xarr = [];
  var Oarr = [];
  var result = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["2", "4", "6"],
    ["0", "4", "8"]
  ];
  var grid = 0;
  var count = 0;
  var s = 0;
  var move = 0;
  var ScoreX = 0;
  var ScoreO = 0;
  flag = false;
  var num = localStorage.getItem("num");
  num = parseInt(num);
  if (num === 1) {
    randomMethod();
  }
  $(".box").on("click", function(e) {
    // debugger;
    var text = $(this).text();
    if (text === "") {
      if (count % 2 === 0) {
        $(this)
          .text("O")
          .addClass("styleFontO");
        count++;
        var id = $(this).attr("id");
        Oarr.push(id);
        move++;
        checkResult(Oarr, result, "O");
        if (num === 1) {
          randomMethod();
          count++;
        }
      } else {
        $(this)
          .text("X")
          .addClass("styleFontX");
        count++;
        var id = $(this).attr("id");
        Xarr.push(id);
        move++;
        checkResult(Xarr, result, "X");
      }
    } else {
      swal("you can not play here");
    }
  });

  function randomMethod() {
    var randomNum = parseInt(Math.random() * 9);
    var $ran = $(".box").eq(randomNum);
    var text = $ran.text();
    if (text === "") {
      console.log(text);
      $ran.addClass("styleFontX").text("X");
      Xarr.push(randomNum + "");
      move++;
      checkResult(Xarr, result, "X");
    } else {
      randomNum = parseInt(Math.random() * 9);
      randomMethod();
      if (move === 0) {
        Draw();
      }
    }
  }
  function checkResult(XOarr, result, XorO) {
    console.log(move);
    Draw();
    XOarr.sort();
    if (XOarr.length >= 3) {
      for (var i = 0; i < result.length; i++) {
        if (isMatch(result[i], XOarr)) {
          window.setTimeout(function() {
            if (XorO === "X") {
              ScoreX++;
              $("span")
                .eq(0)
                .text(ScoreX);
            } else {
              ScoreO++;
              $("span")
                .eq(1)
                .text(ScoreO);
            }
            swal(XorO + " has win");
            flag = true;
            console.log(flag);
          }, 100);
          create(Xarr, Oarr);
          reSet();
          move = 0;
          count = 0;
          break;
        } else {
          Draw();
        }
      }
    }
  }

  function Draw() {
    console.log(flag);
    if (move == 9) {
      create(Xarr, Oarr);
      flag = false;
      swal("Draw");
      reSet();
      move = 0;
      count = 0;
    }
  }
  function reSet() {
    window.setTimeout(function() {
      $(".box").text("");

      for (var a of $(".box")) {
        $(a).removeClass("styleFontX");
        $(a).removeClass("styleFontO");
      }
    }, 200);
    Xarr = [];
    Oarr = [];
    window.setTimeout(function() {
      if (num === 1) {
        Xarr = [];
        Oarr = [];
        randomMethod();
        count = 0;
        move = 0;
      }
    }, 300);
  }

  function isMatch(result, XOarr) {
    s = 0;
    for (var j = 0; j < XOarr.length; j++) {
      if (result.includes(XOarr[j])) {
        s++;
      }
    }
    if (s === 3) {
      count = 0;
      return true;
    }
  }

  function create(Xarr, Oarr) {
    var $re = $(".g");
    if (grid === 3) {
      console.log(grid);
      grid = 0;
      $re.empty();
    }
    var $div = $("<div/>").addClass("grid-container animated flash");
    for (var i = 0; i < 9; i++) {
      var $s = $("<div/>")
        .attr("id", i)
        .addClass("grid-item");
      if (Xarr.includes($s.attr("id"))) {
        $s.text("X");
      } else if (Oarr.includes($s.attr("id"))) {
        $s.text("O");
      }
      $div.append($s);
    }
    $re.append($div);
    grid++;
  }
});
