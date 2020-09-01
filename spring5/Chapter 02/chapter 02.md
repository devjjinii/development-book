### 2장 정리(스프링 코어)

###### 2-1 자바로 POJO 구성하기 
#### POJO = Java Bean 이라고 생각하면 될 것 같다.
~~~
public class ABC {
  private String a;
  private String b;
  
  setter & getter
  tostring..
}
~~~
###### 2-2 생성자 호출해서 POJO 생성하기
~~~
public abstract class ABC {
  private String a;
  private String b;
  
  public ABC() {}
  public ABC(String a,String b) {
    this.a=a;
    this.b=b;
  }
  setter & getter
  tostring..
}

public class DEF extends ABC{
  public DEF(){}
  public DEF(String a, String b){
    super(a,b)
  }
  
  //getter & setter
}
~~~
###### 2-3 POJO 레퍼런스와 자동 연결을 이용해 다른 POJO와 상호 작용하기
~~~
@Autowired 를 이용한다.

@Autowired
private ABC abc;
~~~
###### 2-4 @Resource와 @Inject를 붙여 POJO 자동 연결하기
~~~
@Autowired 대신에 @Resource, @Inject
차이점  : autowired 는 spring framework 에서 사용하는 어노테이션
          resource, inject 는 자바에서 지원하는 어노테이션
          이름으로 연결 혹은 타입으로 연결
~~~
###### 2-5 @Scope를 붙여 POJO 스코프 지정하기
~~~
@Scope : 빈 스코프를 지정하는 어노테이션
@Component
.getBean()
~~~
###### 2-6 외부 리소스(텍스트, XML, 프로퍼티, 이미지 파일)의 데이터 사용하기
~~~
@PropertySource

//프로퍼티 설정값
@Value("classpath:.....")
private Url url;
~~~
###### 2-7 프로퍼티 파일에서 로케일마다 다른 다국어 메시지를 해석하기
###### 2-8 애너테이션을 이용해 POJO 초기화/폐기 커스터마이징하기
###### 2-9 후처리기를 만들어 POJO 검증/수정하기
~~~
2장이라 빠르게 넘기려 했는데 모르는게 많이 나왔다.
@PostConstruct, @PreDestory 를 이용해 POJO를 초기화 또는 destory 하는 방법을 알았는데,
@PostConstruct  는 본 것같기도 하다.
~~~
###### 2-10 팩토리(정적 메서드, 인스턴스 메서드, 스프링 FactoryBean)로 POJO 생성하기 96
###### 2-11 스프링 환경 및 프로파일마다 다른 POJO 로드하기
~~~
local, dev, prod, stg .. 
@Profile("dev")
@Profile({"local","dev"})

setActiveProfiles(,);
//tomcat(was) 구동시 설정
-Dspring.profiles.active=dev
~~~
###### 2-12 POJO에게 IoC 컨테이너 리소스 알려주기
###### 2-13 애너테이션을 활용해 애스펙트 지향 프로그래밍하기
~~~
나는 @Aspect는, 로그 찍을 때만 사용해봤다.
AOP에서 말하는 애스펙트란 어디에서 무엇을 할 것인지를 합쳐 놓은 개념이라 생각하면 된다.
~~~
###### 2-14 조인포인트 정보 가져오기
###### 2-15 @Order로 애스펙트 우선순위 설정하기
~~~
crossFilter랑 관련해서 order 설정을 해본 것 같은데 기억이 잘 나지 않는다.
@Order(0) //우선순위값
또는 @Order(const 값으로 준것 같다.)
~~~
###### 2-16 애스펙트 포인트컷 재사용하기
###### 2-17 AspectJ 포인트컷 표현식 작성하기
###### 2-18 인트로덕션을 이용해 POJO에 기능 더하기
###### 2-19 AOP를 이용해 POJO에 상태 추가하기
###### 2-20 AspectJ 애스펙트를 로드 타임 위빙하기
###### 2-21 스프링에서 AspectJ 애스펙트 구성하기
###### 2-22 AOP를 이용해 POJO를 도메인 객체에 주입하기
###### 2-23 스프링 TaskExecutor로 동시성 적용하기
~~~
엑셀 내용을 읽어와서 DB에 insert 할때 사용해봤다.
코드는 .. 트리거 컨트롤러를 생성해서
@Component("abc")
public class Executer{
  public void upload(String abc) {
    service.****..;
    
  }
}
 public ResponseVo trigger(
            @RequestParam String beanName,
            @RequestParam final String methodName
       )
      //beanName => abc
      //methodName => upload 
      ...
      
이런식으로 진행했다.
~~~
###### 2-24 POJO끼리 애플리케이션 이벤트 주고받기
