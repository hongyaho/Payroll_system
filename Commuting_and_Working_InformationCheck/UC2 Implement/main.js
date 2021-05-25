"use strict";
var Database = [{
    ID: "ID1",
    Date: "2021-05-01",
    img: "./img/test.png"
}, {
    ID: "ID2",
    Date: "2021-05-02",
    img: "./img/test2.png"
}, {
    ID: "ID3",
    Date: "2021-05-03",
    img: "./img/test3.png"
}]

var input = {
    inputID: 0,
    dateInfo: 0
}

var message = "선택한 날짜에 데이터가 없습니다."

class Alert {
    static prompt(m) {
        alert(m)
    }
}

class pageMaker {
    static showResultPage() {
        window.location.href = './showResult.html'
    }
}

class DatabaseConnection {
    static isExist(dateInfo, inputID) {
        console.log(dateInfo, inputID)
        for (var i=0; i < Database.length; i++) {
            console.log(Database[i])
            if ((dateInfo === Database[i].Date) && (inputID === Database[i].ID))
                return true
            else return false
        }
    }
}

class Controller {
    static isAvailableID = false;
    static requestMakePage() {
        if (this.isAvailableID && DatabaseConnection.isExist(input.dateInfo, input.inputID))
            pageMaker.showResultPage()
        else this.alert(message)
    }
    static alert(m) {
        Alert.prompt(m)
    }
}

function goNextfromUC1() {
    alert('UC1에서 유효한 식별번호임이 확인 되었을 시 이동됩니다.');
    Controller.isAvailableID = true;
    getInput()
}

function getInput() {
    if (Controller.isAvailableID) {
        input.inputID = document.getElementById("inputID").value;
        input.dateInfo = document.getElementById("calendar").value;
        Controller.requestMakePage();
    }
}