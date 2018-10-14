console.log("connecting");
$(document).ready(function () {
    var Xarr = [];
    var Oarr = [];
    var count = 0;
    $(".box").on("click", function () {
        var text = $(this).text();
        if(text === "")
        {
            if(count % 2 === 0)
            {
                $(this).text("O").addClass("styleFont");
                count++;
                var id = $(this).attr("id");
                Oarr.push(id);
                console.log(id);
            }
            else
            {
            $(this).text("X").addClass("styleFont");
            count++;
            var id = $(this).attr("id");
            Xarr.push(id);
            console.log(Xarr);
            }  
        }
        else
        {
            alert("you can not play here");
        }
        
    });
    
  });