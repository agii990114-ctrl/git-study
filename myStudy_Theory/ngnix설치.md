## 웹서버 / 웹 어플리케이션 서버 (WAS)


1. 웹서버 - Nginx, Apache HTTP Serverm, IIS (Internet Information Services)

클라이언트(보통 웹 브라우저)의 요청을 받아 HTML 문서, 이미지, CSS, JavaScript 파일과 같은 웹 콘텐츠를 전송하는 소프트웨어와, 그 소프트웨어가 설치된 하드웨어를 통칭하는 용어입니다. 쉽게 말해, 사용자가 인터넷 주소(URL)를 입력했을 때 그에 해당하는 정보를 찾아서 사용자에게 보여주는 역할을 담당하는 서버입니다.
2. 웹 어플리케이션 서버 (Web Application Server) - Apache Tomcat, Jeus, WebLogic, WebSphere

동적인 웹 콘텐츠를 생성하고 웹 애플리케이션의 비즈니스 로직을 실행하는 데 특화된 서버입니다. WAS는 단순한 웹 서버(Web Server)의 기능을 포함하면서도, 더 복잡하고 기능적인 역할을 수행하여 현대의 상호작용적인 웹 서비스를 가능하게 합니다.
3. doker에서의 nginx 다운방법
doker : 개발자들이 애플리케이션을 더 쉽고 효율적으로 개발, 배포, 실행할 수 있도록 돕는 컨테이너 기반의 가상화 플랫폼입니다. 쉽게 말해, **어떤 환경에서든 동일하게 작동하는 독립된 실행 환경(컨테이너)**을 만들고 관리하는 도구라고 할 수 있습니다.

nginx : Nginx(엔진엑스)는 현재 웹 서버 및 리버스 프록시 시장에서 가장 널리 사용되는 소프트웨어 중 하나입니다. 고성능과 높은 동시 접속 처리 능력을 제공하도록 설계되었으며, 특히 대규모 트래픽을 처리하는 환경에서 강력한 성능을 발휘합니다.

docker hub 사이트에서 nginx 검색
사이트에 접속하여 'docker pull nginx'로 되어있는 주소를 복사
VSCODE의 터미널에 복사한 주소를 붙여넣기 하고, ':latest'를 입력 - 최종 : docker pull nginx:latest
설치가 완료되면 doker images를 입력하여 이미지를 확인
'docker run -d -p 8080:80 nginx:latest'를 입력하여 nginx를 실행
docker desktop 어플에서 좌측의 'container'를 클릭한 후 'port'의 바로가기를 눌렀을 때, welcome이 나오면 정상 실행
5. 브라우져에서 Request, Respone 확인
Request (요청) : form 이나 a 태그와 같이 사용자의 요청사항을 확인할 수 있는 탭
Respone (응답) : 요청에 따라 제공된 정보를 확인할 수 있는 탭
