### 7장 정리(스프링 시큐리티)

###### 7-1 URL 접근 보안하기
~~~
extends AbstractSecurityWebApplicationInitializer
,
WebApplicationInitializer 클래스에 @EnableWebSecurity 추가한 후 
WebSecurityConfigurerAdapter 를 상속한다.

.CSFR 공격 방어 로직 추가
~~~
###### 7-2 웹 애플리케이션 로그인하기
~~~
HTTP, 뷰(폼), 로그아웃, 아이디 저장
암호화 bcryptPassWordEncoder.
//..spring06-security 참조!!
~~~
###### 7-3 유저 인증하기
~~~
<!-- 권한에 관계없이 접속 가능한 영역(guest)도 접속 가능 -->
<intercept-url pattern="/user/**" access="permitAll" />
~~~
###### 7-4 접근 통제 결정하기
~~~
<session-management>
<!-- 동시접속 허용 여부 -->
	<concurrency-control max-sessions="1" expired-url="/user/login.do" error-if-maximum-exceeded="true" />
</session-management>
<!-- 로그인한 사용자 영역 -->
<intercept-url pattern="/**" access="hasAnyRole('ROLE_USER','ROLE_TEST','ROLE_ADMIN','ROLE_GUEST')" />
~~~
###### 7-5 메서드 호출 보안하기
~~~
public class UserAuthenticationService implements UserDetailsService {
	@Autowired
	BCryptPasswordEncoder passwordEncoder;
//..
}
~~~
###### 7-6 뷰에서 보안 처리하기
~~~
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<sec:authorize access="hasRole('ROLE_USER')" var=""></sec:authorize>
~~~
###### 7-7 도메인 객체 보안 처리하기
~~~
스프링 시큐리티는 자체로 ACL을 설정하는 전용 모듈을 지원한다.
열심히 구글링을 해본다.
~~~
###### 7-8 웹플럭스 애플리케이션에 보안 기능 추가하기
https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/annotation/web/reactive/EnableWebFluxSecurity.html
~~~
@EnableWebFluxSecurity
~~~
