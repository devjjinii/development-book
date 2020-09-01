### 16장 정리(스프링 테스트)

* 스프링 테스트 지원 기능은 단위, 통합 테스트에 중점을 두고 있다.
* JUnit &j TestNG
###### 16-1 JUnit과 TestNG로 단위 테스트 작성하기
~~~
<!-- https://mvnrepository.com/artifact/junit/junit -->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>test</scope>
</dependency>
~~~
###### 16-2 단위/통합 테스트 작성하기
~~~
Mock Object(목 객체)
@Test
~~~
###### 16-3 스프링 MVC 컨트롤러에 대한 단위 테스트 작성하기
~~~
Mockito.mock(Service.class); ..//
~~~
###### 16-4 통합 테스트 시 애플리케이션 컨텍스트 관리하기
###### 16-5 통합 테스트에 테스트 픽스처 주입하기
~~~
@RunWith(SpringRunner.class)
~~~
###### 16-6 통합 테스트에서 트랜잭션 관리하기
~~~
@Transactional
@TransactionConfiguration의 defaultRollback 속성을 false
@Rollback(false)
~~~
###### 16-7 통합 테스트에서 DB 액세스하기
~~~
JdbcTemplate
@Sql(scripts = "classpath:/abc.sql")
~~~
###### 16-8 스프링 공통 테스트 애너테이션 활용하기
~~~
@Repeat
@Timed
@IfProfileValue
~~~
###### 16-9 스프링 MVC 컨트롤러에 대한 통합 테스트 작성하기
###### 16-10 REST 클라이언트에 대한 통합 테스트 작성하기
~~~
extends RestGatewaySupport
~~~
