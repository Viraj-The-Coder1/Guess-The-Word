function login(){
    player_1 = document.getElementById("player_1_input").value;
    player_2 = document.getElementById("player_2_input").value;
    localStorage.setItem("P1", player_1);
    localStorage.setItem("P2", player_2);
    window.location = "game.html";
}