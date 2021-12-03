player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
console.log(player1_name);
player1_score=0;
player2_score=0;
//document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn : "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn : "+player2_name;
function send(){
    no1=document.getElementById("no1").value;
    no2=document.getElementById("no2").value;
     actual_ans=no1*no2;
     question_number="<h4>"+no1+" x "+no2+"</h4>";
     input_box="<br>ans: <input type='number' id='ans_input' placeholder='Answer here!'>";
     check_btn="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row=question_number+input_box+check_btn;
     document.getElementById("output").innerHTML=row;
     document.getElementById("no1").value="";
     document.getElementById("no2").value="";
}
ans_turn="player2";
ques_turn="player1";
function check(){
    get_ans=document.getElementById("ans_input").value;
    if(get_ans==actual_ans){
        console.log("enter the check");
        console.log("ans_turn"+ans_turn);
        if(ans_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
            console.log("enter the if");
            console.log("player1_score"+player1_score);
            console.log("player2_score"+player2_score);
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
            console.log("enter the else");
            console.log("player1_score"+player1_score);
            console.log("player2_score"+player2_score);
        }
    }
    if(ques_turn=="player1"){
        ques_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn : "+player2_name;
    }
    else{
        ques_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn : "+player1_name;
    }
    if(ans_turn=="player1"){
        ans_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn : "+player2_name;
        console.log("ans_turn"+ans_turn);
        console.log("player1_name"+player1_name);
        console.log("player2_name"+player2_name);
    }
    else{
        ans_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn : "+player1_name;
        console.log("ans_turn"+ans_turn);
        console.log("player1_name"+player1_name);
        console.log("player2_name"+player2_name);
    }
    document.getElementById("output").innerHTML="";
}