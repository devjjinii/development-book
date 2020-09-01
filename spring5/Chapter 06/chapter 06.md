### 6장 정리(스프링 소셜)

###### 6-1 스프링 소셜 구성하기
~~~
@EnableSocial
public class SocialConfig extends SocialConfigurerAdapter {
// ...
 @Override
 public staticUserIdSource getUserIdSource() {
  return new staticUserIdSource();
 }
}

public class staticUserIdSource implements UserIdSource {
  @Override
  public String getUserId() {
    return this.userId;
  }
}
~~~
###### 6-2 트위터 접속하기
~~~
 //스프링 소셜을 설정한다.
~~~
######  6-3 페이스북 접속하기
~~~
 //스프링 소셜을 설정한다.
~~~
######  6-4 서비스 공급자 접속 상태 보여주기
~~~
ConnectController

@Bean
public ConnectController connectController(
      ConnectionFactoryLocator connectionFactoryLocator,
      ConnectionRepository connectionRepository) {
      
       return new ConnectController(connectionFactoryLocator, connectionRepository);
      }
 
GET /connect
GET /connect/{공급자}
~~~
######  6-5 트위터 API 활용하기
~~~
//Twitter 객체를 사용한다. 
~~~
######  6-6 UsersConnectionRepository로 저장하기
~~~
JdbcUsersConnectionRepository 로 유저 접속 정보를 DB에 저장한다고 책에 나와있다.
extends SocialConfigurerAdapter
->유저 정보를 저장할때는, 암호화 필수.

6-6은 정확히 이해를 못했다.
~~~
######  6-7 스프링 소셜과 스프링 시큐리티 연계하기
~~~
스프링 시큐리티는 7장에서 공부한다.
~~~
