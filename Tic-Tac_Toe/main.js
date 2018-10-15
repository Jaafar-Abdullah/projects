console.log("connecting");
$(document).ready(function() {
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
  var count = 0;
  var s = 0;
  var num = 2;

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
        checkResult(Oarr, result, "O");
      } else {
        $(this)
          .text("X")
          .addClass("styleFontX");
        count++;
        var id = $(this).attr("id");
        Xarr.push(id);
        checkResult(Xarr, result, "X");
      }
    } else {
      alert("you can not play here");
    }
  });

  function checkResult(XOarr, result, XorO) {
    if (XOarr.length >= 3) {
      for (var i = 0; i < result.length; i++) {
        if (isMatch(result[i], XOarr)) {
          window.setTimeout(function() {
            alert(XorO + " has win");
          }, 100);
          create(Xarr, Oarr, XorO);
          reSet(XorO);
          // debugger;
          //   break;
        } else if (Oarr.length === 5 && Xarr.length === 4) {
          alert("Draw");
          reSet();
        }
      }
    }
  }

  function reSet() {
    window.setTimeout(function() {
      $(".box").text("");

      for (var a of $(".box")) {
        $(a).removeClass("styleFontX");
        $(a).removeClass("styleFontO");
      }
    }, 500);
    Xarr = [];
    Oarr = [];
  }

  function isMatch(result, XOarr) {
    s = 0;

    // console.log(result);

    for (var j = 0; j < XOarr.length; j++) {
      // debugger;
      if (result.includes(XOarr[j])) {
        s++;
      }
    }
    if (s === 3) {
      count = 0;
      return true;
    }
  }

  function create(Xarr, Oarr, XorO) {
    console.log(Oarr);

    var $re = $(".results");
    var $div = $("<div/>").addClass("grid-container");
    var $winner = $("<div/>")
      .addClass("winner")
      .text(XorO + " has win");
    $re.append($($winner));
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
  }
});
function change_page() {
  window.location.href = "index.html";
}
