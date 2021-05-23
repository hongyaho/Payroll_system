'use strict';
var DataBase=[
    {
        ID:"ID1",
        PW:"PW1"
    },{
        ID:"ID2",
        PW:"PW2"
    },{
        ID:"ID3",
        PW:"PW3"
    }
]
class Controller{
    static available=true;
    static NumOfAttempt=0;
    static MaxNum=5;
    static signal=false;
    static goNext(){
        // 다음 단계로 진행 신호
        return Controller.signal;
    }
    static activate(){
        alarmDev.alarm();
        alarmDev.timeCheck();
        Controller.NumOfAttempt=0;
        //AlarmDev실행(시도횟수 5회 이상인 경우)
    }
}

class alarmDev{
    
    static alarm(){
        var beepsound = new Audio('button-10.mp3');   
        beepsound.play();
        //알람을 울리는 기능
    }
    static timeCheck(){
        Controller.available=false;
        setTimeout(function(){
            Controller.available=true;
        },3000);
        // 시간을 측정하는 기능
    }
}
class Checker{
    static compareID(ID,PW){
        var found=false;
        for (var i=0;i<DataBase.length;i++){
            if (ID===DataBase[i].ID && PW===DataBase[i].PW){
                console.log(ID+ " is logged in!");
                found=true;
            }
        }
        if (found){
            return true;
        }else{
            return false;
        }
    }
}


function getInfo(){
    if (Controller.available==true){
        var employee_ID=document.getElementById("ID").value;
        var employee_PW=document.getElementById("PW").value;
        console.log("your ID: "+employee_ID+" your PW : "+employee_PW);
        console.log(Checker.compareID(employee_ID,employee_PW));
        if (Checker.compareID(employee_ID,employee_PW)){
            Controller.signal=true;
            console.log("success");
        }
        else{
            Controller.NumOfAttempt++;
            console.log(Controller.NumOfAttempt);
            alert("Wrong ID, PW");
            if (Controller.NumOfAttempt>=Controller.MaxNum){
                Controller.activate();
            }
        }
    }
    else{
        alert("You are not available");
    }
    
}