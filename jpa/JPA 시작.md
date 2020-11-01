### JPA 시작

###### 2-1 이클립스 설치와 프로젝트 불러오기
###### 2-2 H2 데이터베이스 설치
~~~
1. http://www.h2database.com/html/main.html 에서 All Platforms (zip, 8 MB)을 다운받는다.
2. bin/h2.bat 을 실행한다.
3. http://localhost:8082 로 접속한다.
* 드라이버 클래스: org.h2.Driver
* JDBC URL : jdbc:h2:tcp://localhost/~/test
~~~
###### 2-3 라이브러리와 프로젝트 구조
~~~
hibernate-core
hibernate-entitymanager
hibernate-jpa-2.1-api

pom.xml 에 JPA,하이버네이트 , H2 데이터베이스 라이브러리를 추가한다.
~~~
###### 2-4 객체 매핑 시작
~~~
import javax.persistence.*;
@Entity
@Table(name="abc")
public class ABC {
  @Id
  @Column(name = "ID")
  private String id;
 
  //....
}

@Id : 기본키에 매핑한다.
@Column : 필드를 컬럼에 매핑한다.
~~~
###### 2-5 persistence.xml 설정
~~~
persistence.xml을 사용해서 필요한 설정 정보를 관리한다.
-> META-INF/persistence.xml
*JDBC 드라이버
*데이터 베이스 접속 아이디
*데이터베이스 접속 비밀번호
*데이터베이스 접속 URL

-데이터베이스 방언 설정 (Dialect)
방언 : SQL 표준을 지키지 않거나 특정 데이터베이스만의 고유한 기능을 JPA에서는 방언이라 부른다.
예) MySQL : VARCHAR,  Oracle : VARCHAR2
~~~
###### 2-6 애플리케이션 개발
~~~
*엔티티 매니저 설정

*트랜잭션 관리 
: JPA는 항상 트랜잭션 안에서 데이터를 변경해야 한다. 트랜잭션 없이 데이터를 변경하면
  예외가 발생한다.

*비지니스 로직
: 등록, 수정, 삭제, 조회

<JPQL>
검색 쿼리. JPA는 엔티티 객체를 중심으로 개발하므로 검색 할 때도 테이블이 아닌 
엔티티 객체를 대상으로 검색해야 한다. 결국 조건이 포함된 SQL문을 사용해야 한다.
JPA는 JPQL이라는 쿼리 언어로 해결한다.
  SELECT M.ID, M.NAME, M.AGE FROM MEMBER M
~~~
