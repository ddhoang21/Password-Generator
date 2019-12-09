function generate() {
    var values = {
        "uppers": [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" 
        ],
        "lowers": [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ],
        "digits": [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
        ],
        "special": [
            "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'", '"'
        ],
    };
    
    var password = "";

    var uppers = values["uppers"];
    var lowers = values["lowers"];
    var digits = values["digits"];
    var special = values["special"];

    var length = document.getElementById("range").value;
    
    