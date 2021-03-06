## 간단한 프로토콜 HTTP

* REQUEST & RESPONSE <br> 
  * HTTP는 클라이언트로부터 request가 송신되며, 그 결과가 서버로부터 response로 되돌아온다. <br>

~~~
<< HTTP METHOD >> 

○ GET - 리소스 획득 : 리퀘스트 URI로 식별된 리소스를 가져올 수 있도록 요구한다.
○ POST - 엔티티 전송 : 엔티티를 전송하기 위해 사용한다.
○ PUT - 파일 전송 : 파일을 전송하기 위해서 사용한다. ( FTP...)
○ HEAD - 메세지 헤더 취득 : GET과 같은 기능이지만 메시지 바디는 반환하지 않는다.
○ DELETE - 파일 삭제 : 파일을 삭제하기 위해 사용된다.
○ OPTIONS - 제공하고 있는 메소드의 문의
○ TRACE - 경로 조사 : Web 서버에 접속해서 자신에게 통신을 되돌려 받는 루프백을 발생시킨다.
          리퀘스트를 보낼 때에 "Max-Forwards" 라는 헤더 필드에 수치를 포함시켜 서버를 통과할 때마다 그 수치를 줄여간다.
○ CONNECT - 프록시에 터널링 요구 : TCP 통신을 터널링 시키기 위해서 사용한다.
~~~

* 지속 연결 <br>
  * TCP 커넥션의 연결과 종료를 반복되는 오버헤드를 줄여주기 때문에 서버에 대한 부하가 경감된다. <br>
  오버헤드를 줄인만큼 HTTP 리퀘스트와 리스폰스가 빠르게 완료되기 때문에 웹 페이지를 빨리 표시할 수 있다. <br>
    * 여러 리퀘스트를 보낼 수 있도록 파이프라인화를 가능하게 한다. <br>
  
 * 쿠키 <br>
   * HTTP 는 stateless 프로토콜이다.  이전에 교환했었던 리스폰스와 리퀘스트를 관리하지 않는다. <br>
      * 쿠키 + (리퀘스트와 리스폰스에 쿠키 정보를 추가해서 클라이언트의 상태를 파악한다.) <br>
   * 쿠키는 서버에서 리스폰스로 보내진 Set-Cookie 라는 헤더 필드에 의해 쿠키를 클라이언트에 보존하게 된다. <br>
      * 응답 : Cookie : sid=123123123123123

  


