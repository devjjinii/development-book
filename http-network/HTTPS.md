## 웹을 안전하게 지켜주는 HTTPS

* HTTP의 약점
  * 평문 통신이기 때문에 도청 가능
    * ->TCP/IP는 도청 가능한 네트워크
      * 통신 암호화 : SSL이나 TLS같은 프로토콜을 조합해서 HTTP의 통신 내용을 암호화 할 수 있다. (HTTPS)
      * 콘텐츠 암호화
  * 통신 상대를 확인하지 않기 때문에 위장 가능
    * SSL로 상대를 확인 할 수 있다. SSL은 암호화뿐만 아니라 상대를 확인하는 수단으로 증명서를 제공하고 있다.
  * 완전성을 증명할수 없기 때문에 변조 가능
    * 중간자 공격

* HTTP + 암호화 + 인증 + 완전성 보호 = HTTPS
* 공개키 암호화 방식
  * 공통키 암호의 문제를 해결하려고 한 것이 공개키 암호화 방식이다. 서로 다른 두개의 키를 사용한다.   
  한쪽은 비밀키라 하고 한쪽은 공개키라 한다. 공개키는 누구에게나 넘겨줘도 괜찮다.   
  비밀키가 복호화해서 사용한다.
    * 문제점 : 공개키가 진짜인지 아닌지 증명 할 수 없다. -> 인증기관(CA)과 그 기관이 발행하는 공개키 증명서가 이용되고 있다.