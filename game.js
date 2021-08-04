player_1_name = localStorage.getItem("P1");
player_2_name = localStorage.getItem("P2");
player1score = 0;
player2score = 0;
console.log(player_1_name);
console.log(player_2_name);
document.getElementById("player_1_name").innerHTML = player_1_name + " : ";
document.getElementById("player_2_name").innerHTML = player_2_name + " : ";
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("playerQ").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("playerA").innerHTML = "Answer Turn - " + player_2_name;
function send(){
    text_value = document.getElementById("word").value;
    text_value_LC = text_value.toLowerCase();
    console.log(text_value_LC);

    letter1 = text_value_LC.charAt(1);
    console.log(letter1);

    lengthdiv2 = Math.floor(text_value_LC.length/2);
    letter2 = text_value_LC.charAt(lengthdiv2);
    console.log(letter2);

    lengthmin1 = text_value_LC.length-1;
    letter3 = text_value_LC.charAt(lengthmin1);
    console.log(letter3);

    removeL1 = text_value_LC.replace(letter1, "_");
    console.log(removeL1);

    removeL2 = removeL1.replace(letter2, "_");
    console.log(removeL2);

    removeL3 = removeL2.replace(letter3, "_");
    console.log(removeL3);
    
    Qword = "<h4 id='question'>Q. " + removeL3 + "</h4> <br>";
    Aword = "Answer: <input type='text' placeholder='answer' id='answer'> <br><br>";
    Button = "<button id='checkB' type='button' onclick='check()'>CHECK</button>";
    column = Qword + Aword + Button;
    document.getElementById("output").innerHTML = column;

    document.getElementById("word").value = "";
}

Qturn = "player 1";
Aturn = "player 2";

function check(){
    input = document.getElementById("answer").value;
    inputLC = input.toLowerCase();
    console.log("Answer in Lower Case is" + inputLC);
    if (inputLC == text_value_LC){
        if (Aturn == "player 2"){
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
        else{
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
    }
    if (Qturn == "player 2"){
        Qturn = "player 1";
        document.getElementById("playerQ").innerHTML = "Question Turn - " + player_1_name;
    }
    else {
        Qturn = "player 2";
        document.getElementById("playerQ").innerHTML = "Question Turn - " + player_2_name;
    }
    if (Aturn == "player 2"){
        Aturn = "player 1";
        document.getElementById("playerA").innerHTML = "Answer Turn - " + player_1_name;
    }
    else{
        Aturn = "player 2";
        document.getElementById("playerA").innerHTML = "Answer Turn - " + player_2_name;
    }
    document.getElementById("output").innerHTML = "";
}
