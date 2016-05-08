
$(document).ready(function(){
    $("#convert").click(function() {
        var tl = $("#tl").val();
        var field = $("#id64");
        try {
            var id32 = parseInt(/=(\d+)&/.exec(tl)[1]);
            var id64 = id32 + 76561197960265728;
        } catch(err){
            field.text("Error! Make sure the trade link is correct!")
            return
        }
        field.text(id64).focus()[0].select();
    });
});
