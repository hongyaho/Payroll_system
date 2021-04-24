# Domain model

## UC1

### 1. Extracting the responsibility
Responsibility Description | Type | Concept   Name
-- | -- | --
시스템 request와 관련된 동작을 조절한다 | D | Controller
직원이 입력한 키보드값 | D | KeyboardEntry
직원이 입력한 아이디와 비밀번호 | K | LoginInput
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


