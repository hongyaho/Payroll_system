## Extracting the Responsibilities <br><br>

### Use Case UC-1<br>

---

| Responsibility Description                                         | Type | Concept Name  |
| :----------------------------------------------------------------- | :--- | :------------ |
| 시스템 내부와 외부 request를 받고 결과를 내보내는 동작을 조절한다. | D    | Controller    |
| 관리자가 입력한 식별번호 데이터를 담고 있다.                       | K    | ID            |
| 직원 식별번호가 타당한 지 확인한다.                                | D    | ID Checker    |
| 타당한 직원 식별번호를 담고 있다.                                  | K    | ID Storage    |
| 알람이 울리도록 신호를 조정한다.                                   | D    | AlarmOperator |
| 시간을 측정한다.                                                   | D    | TimeOperator  |
| 관리자의 잘못 입력한 횟수를 센다.                                  | D    | CountOperator |
| 관리자의 입력 권한을 주거나, 제한한다.                             | D    | Controller    |

<br><br>
| Concept pair | Association description | Association name |
| :------------ | :--------------------- | :------------ |
| ID < - > ID Checker | 관리자가 입력한 식별번호를 이용하여 타당한 지 확인한다. | 확인할 ID 전달 |
| Controller < - > ID Checker | 관리자가 입력한 식별번호를 확인하기 위한 요청을 보낸다. | 요청 보내기 |
| ID Checker < - > ID Storage | 올바른 식별번호인지 확인하기 위해 직원 식별번호 저장소를 활용한다. | 데이터 제공 |
| CountOperator < - > Controller | 일정한 횟수 이상 잘못 입력하였을 시, 관리자의 입력 권한을 제한한다. | 입력 허가
| CounterOperator < - > AlarmOperator | 일정한 횟수 이상 잘못 입력하였을 시, 알람이 울린다. | 경고음 발생 |
| CounterOperator < - > TimeOperator | 일정한 횟수 이상 잘못 입력하였을 시, 입력이 정지될 시간을 측정한다. | 입력 정지 시간 측정 |
<br><br>

### Use Case UC-2 <br>

---

| Responsibility Description                                                  | Type | Concept Name        |
| :-------------------------------------------------------------------------- | :--- | :------------------ |
| 시스템 내부와 외부 request를 받고 결과를 내보내는 동작을 조절한다.          | D    | Controller          |
| 직원 식별번호 별 출퇴근 사진, GPS 마커가 표시된 지도가 들어있다.            | K    | Info Storage        |
| 입력한 직원의 식별번호와 날짜에 해당하는 정보를 추출한다.                   | D    | Database Connection |
| 웹 페이지 상에서 정보들이 어떻게 배치되어야 하는 지 나타내는 HTML 문서이다. | K    | Interface Page      |
| HTML 문서를 가져와 웹 상에 보여준다.                                        | D    | PageMaker           |

<br><br>
| Concept pair | Association description | Association name |
| :------------ | :--------------------- | :------------ |
| Info Storage < - > Database Connection | 직원 식별번호 별로 저장되어 있는 데이터에서 관리자가 입력한 직원의 식별번호에 해당하는 정보를 가져온다. | 해당 데이터 가져오기 |
| PageMaker < - > Interface Page | HTML 문서에 맞게 웹 페이지 화면을 구성한다. | 웹 페이지 준비 |
| Database Connection < - > Page Maker | 웹 페이지 상에 추출된 데이터가 보이도록 한다. | 해당 데이터 보여주기 |
