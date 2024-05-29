# imgGenerator
이 레포지토리는 사용자가 입력한 프롬프트를 토대로 이미지를 생성하는 웹 애플리케이션입니다.

OpenAI API를 활용하여 사용자에게 독창적인 AI 생성 이미지를 제공합니다.

기능

사용자 친화적인 인터페이스: 사용자가 프롬프트를 입력하고 생성된 이미지를 쉽게 볼 수 있는 직관적인 인터페이스 제공

AI 기반 이미지 생성: OpenAI의 강력한 API를 활용하여 텍스트 프롬프트 기반으로 맞춤형 이미지 생성

맞춤화 옵션: 사용자가 세부 설명을 제공하여 필요에 맞춘 이미지를 생성 가능

실시간 생성: 실시간으로 이미지를 생성하여 빠르고 원활한 사용자 경험 제공

시작하기

imgGenerator 프로젝트를 시작하려면 아래의 지침을 따르세요.

필수 조건

Node.js (버전 14 이상)
npm (버전 6 이상)
OpenAI API 키

설치

레포지토리 클론:
git clone https://github.com/yourusername/imgGenerator.git


cd imgGenerator

의존성 설치:

npm install

환경 변수 설정:

루트 디렉토리에 .env 파일을 생성하고 OpenAI API 키를 추가하세요:

OPENAI_API_KEY=your_openai_api_key

애플리케이션 실행개발

서버 시작:

npm start

브라우저에서 다음 주소로 이동:

http://localhost:3000

imgGenerator 웹 애플리케이션 인터페이스를 볼 수 있습니다.

사용 방법

프롬프트 입력: 생성하고자 하는 이미지의 세부 설명을 프롬프트 입력 필드에 입력합니다.

이미지 생성: "Generate" 버튼을 클릭하여 프롬프트를 OpenAI API로 전송하고 이미지를 생성합니다.

보기 및 다운로드: 생성된 이미지를 페이지에서 보고 필요 시 다운로드할 수 있습니다.
