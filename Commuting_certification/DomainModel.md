# Domain model

## UC1

### 1. Extracting the responsibility
Responsibility Description | Type | Concept   Name
-- | -- | --
시스템 request와 관련된 동작을 조절한다 | D | Controller
직원이 입력한 키보드값 | D | KeyboardEntry
키보드값으로 부터 저장된 아이디와 비밀번호 | K | LoginInput
직원이 입력한 아이디와 비밀번호가 유효한지 확인한다 | D | KeyChecker
DB에서 아이디 비밀번호를 확인하기위해 질의문 준비 | D | DatabaseConnection
요청이 온대로 화면을 만든다 | D | PageMaker
알림창이나 진행현황을 표출해준다 | K | InterfacePage


### 2. Extracting the Associations
Concept   pair | Association   Description | Association   name
-- | -- | --
KeyboardEntry <-> LoginInput | 입력받은 키보드값을 통해    LoginInput값을 저장한다 | Convey data
LoginInput <-> Controller | 입력받은 로그인정보를 컨트롤러로 전달한다 | Conveys data
Controller <-> KeyChecker | 입력받은 loginInfo값이 유효한 정보인지    확인해줄것을 KeyChecker에게 요청한다 | Convey request
KeyChecker <-> DatabaseConnection | 요청받은 값을 데이터베이스에서 검색 후    올바른 값인지 확인을 해준다 | Convey request
Controller <-> PageMaker | 처리된 결과에 따라 적절한 화면을    만들것을 요청한다 | Convey request
PageMaker <-> InterfacePage | 만들어진 화면을 표출한다 | Prepares

### 3. Extracting the Attributes
Concept | Attributes | Attribute   Description
-- | -- | --
LoginInfo | ID | 유저가 입력한 아이디
LoginInfo | PW | 유저가 입력한 비밀번호
InterfacePage | View | 로그인이 실패했는지, 성공했는지 여부를    알려주는 알림창 및 화면



## UC-2 출근인증, UC3 퇴근인증

### 1. Extracting the responsibility
Responsibility Description | Type | Concept   Name
-- | -- | --
시스템 request와 관련된 동작을 조절한다 | D | Controller
카메라를 통해 사진을 촬영한다 | D | CameraEntry
Gps를 통해 좌표정보를 받아온다 | D | GpsEntry
전송하기위한 직원의 얼굴사진과 gps데이터를 담는다 | K | AuthInfo
데이터베이스로 Post 하기 위해 연결을 준비한다 | D | DatabaseConnection
실행 결과대로 알림 화면을 만든다 | D | PageMaker
알림창이나 화면을 표출한다 | K | InterfacePage

### 2. Extracting the Associations
Concept   pair | Association   Description | Association   name
-- | -- | --
CameraEntry <-> AuthInfo | 카메라를 통해 촬영한 얼굴사진을    AuthInfo로 넣는다 | Convey data
GpsEntry <-> AuthInfo | Gps를 통해 받아온 위치정보를    AuthInfo로 넣는다 | Convey data
AuthInfo <-> Controller | 입력받은 인증정보를 컨트롤러로 전달한다 | Conveys data
Controller <-> DatabaseConnection | 인증정보를 데이터베이스에 저장한다 | Save data
Controller <-> PageMaker | 처리된 결과에 따라 적절한 화면을    만들것을 요청한다 | Convey request
PageMaker <-> InterfacePage | 만들어진 화면을 표출한다 | Prepares

### 3. Extracting the Attributes
Concept | Attributes | Attribute   Description
-- | -- | --
AuthInfo | 얼굴사진 | 직원이 촬영한 얼굴사진
AuthInfo | Gps좌표 | 얼굴사진이 촬영된 위치좌표
InterfacePage | View | 전송이 실패했는지, 성공했는지 여부를    알려주는 알림창 및 화면
