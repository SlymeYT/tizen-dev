var host = "https://youtube.com/";
(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function(){
        $(document.body).load(host+'/tv');

    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();
