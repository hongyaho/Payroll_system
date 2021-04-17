### Usecase

Actor | Actor’s   Goal | Use   Case Name
-- | -- | --
Employee | 고용주에게 전달받은 아이디와 비밀번호를 입력한다 | UC-1: 로그인
Employee | 카메라를 얼굴에 맞추고 촬영 버튼을 눌러서 사진을 찍는다 | UC-1: 로그인   UC-2: 로그아웃
Employee | 얼굴사진을 확인하고 전송버튼이나 재촬용버튼을 클릭해    원하는 처리를 진행한다. | UC-1: 로그인   UC-2: 로그아웃
Employee | 로그아웃 버튼을 클릭해 근무를 끝낸다 | UC-2: 로그아웃
Mobile | 5분간격으로 위치정보를 자동전송한다 | UC-3: 근무중   UC-4: 시스템
Mobile | 촬영된 사진과함께 촬영한 순간의 위치좌표를 저장한다 | UC-1, UC-2
Online   Server | 사진과 위치좌표를 시스템으로 업로드한다 | UC-1, UC-2,    UC-4 시스템
