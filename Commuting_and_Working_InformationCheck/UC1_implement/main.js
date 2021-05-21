'use strict';
var DataBase=[
    {
        ID:"ID-1",
        PW:"myPassword-1"
    },{
        ID:"ID-2",
        PW:"myPassword-2"
    },{
        ID:"ID-3",
        PW:"myPassword-3"
    }
]
class Controller{
    static available=true;
    //constructor
    construcor(){
        this.NumOfAttempt=0;
        this.MaxNum=5;
        this.signal=false;
    }
    goNext(){
        // 다음 단계로 진행 신호
        return this.signal;
    }
    activate(){
        alarmDev.alarm();
        alarmDev.timeCheck();
        this.NumOfAttempt=0;
        //AlarmDev실행(시도횟수 5회 이상인 경우)
    }
    retry(){
        //사용자로부터 다시 입력 받기
    }
}

class alarmDev{
    static alarm(){
        //알람을 울리는 기능
    }
    static timeCheck(){
        // 시간을 측정하는 기능
    }
}
class Checker{
    static compareID(ID,PW){
        for (const i=0;i<DataBase[i].length;i++){
            if (ID==DataBase[i].ID && PW==DataBase[i].PW){
                console.log(ID+ "is logged in!");
                return true;
            }
        }
        return false;
    }
}

const ctrl= new Controller();
function getInfo(){
    var employee_ID=document.getElementById("ID").value;
    var employee_PW=document.getElementById("PW").value;
    console.log("your ID: "+employee_ID+"your PW : "+employee_PW);
    if (Checker.compareID(employee_ID,employee_PW)){
        ctrl.signal=true;
    }else{
        ctrl.NumOfAttempt++;
        if (ctrl.NumOfAttempt>=ctrl.MaxNum){
            alarmDev.alarm();
            alarmDev.timeCheck();
        }
    }
}