console.log("connecting");
$(document).ready(function () {
    var Xarr = [];
    var Oarr = [];
    var result = [["0","1","2"],["3","4","5"],["6","7","8"],
                  ["0","3","6"],["1","4","7"],["3","5","8"],
                  ["3","4","6"],["0","4","8"]];
    var count = 0;
    var s =0;
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
                checkResult(Oarr,result);
            }
            else
            {
            $(this).text("X").addClass("styleFont");
            count++;
            var id = $(this).attr("id");
            Xarr.push(id);
            }  
        }
        else
        {
            alert("you can not play here");
        }
        
    });
    
    function checkResult(XOarr,result)
    {
        XOarr.sort();
        result.sort();
        // console.log(XOarr);
        // console.log(result);
        if (XOarr.length >= 3)
    {
    for (var i =0 ; i< result.length ;i++){
        if(isMatch(result[i],XOarr))
        {
            console.log("win");
            break;
        }
        }
    }
        
    }

    function isMatch(result, XOarr)
    {
        s =0;
        // console.log(result);

        for (var j=0 ; j< XOarr.length;j++)
        {
            // debugger;
            if(result.includes(XOarr[j]))
            {
                console.log(XOarr[j]);
                s++;
            }
        }
        if (s===3)
        {
            return true;

        }
        else 
        {
            return false;
        }
    }
    
    
    
  });