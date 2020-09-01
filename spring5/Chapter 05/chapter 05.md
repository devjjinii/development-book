### 5장 정리(스프링MVC 비동기처리)

###### 5-1 트롤러에서 TaskExecutor로 요청을 비동기 처리하기
~~~
//Spring Boot
->Application.java
@EnableScheduling
...
@Bean
public TaskScheduler taskScheduler(){
    ThreadPoolTaskScheduler taskScheduler = new ThreadPoolTaskScheduler();
    taskScheduler.setPoolSize(20);

    return taskScheduler;
}

->Executer.java
@Scheduled(cron = "${cron.cache.airweather}")
~~~
###### 5-2 응답 출력기
https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/servlet/mvc/method/annotation/ResponseBodyEmitter.html
~~~
ResponseBodyEmitter
여러개의 오브젝트를 보낼 수 있다.
~~~
###### 5-3 비동기 인터셉터
~~~
3장에서.. 인터셉터를 다룬내용
//1.preHandle -> controller 호출 전
//2.postHandle -> controller 호출 후
//3.afterCompletion -> controller + view 출력 후
--------------------------------------------------------------------

핸들러 인터셉터를 사용해 웹 요청을 가로채고 원하는 선/후처리를 할 수 있다.
AsyncHandlerInterceptor는 비동기 처리용 인터셉터 인터페이스다.
afterConcurrentHandlingStarted() 메서드는 postHandle()이나 afterCompletion() 대신 호출된다.
~~~
###### 5-4 웹소켓
~~~
서버/클라이언트 양방향 통신을 할 수 있다.
@EnableWebSocket

nodejs 프로젝트의 소켓을 참조하자.
~~~
###### 5-5 스프링 웹플럭스로 리액티브 애플리케이션 개발하기
~~~
// p.311 책 내용
@Override
public Flux<Reservation> query(String coutName) {
  return Flux.fromIterable(reservations)
      .filter(r->Objects.equals(r.getCourtName(), courtName);
}

// query() 메서드는 예약리스트에 기반한 Flux 객체를 반환하며 Flux 는 
해당되지 않는 예약건을 필터링 한다.

@EnableWebFlux
..
타임리프 뷰 내용이 나오는데, 타임리프 아직 어색하다. 스프링 부트로 프로젝트를 생성하면
기본적으로 제공하는 뷰가 타임리프인데,  문법 등이 조금 달라서 (나는 그냥 내장톰캣 사용하지 않고)
jsp로 사용하고 있다. 하지만 지금 진행하는 프로젝트는 앵귤러랑 타임리프가 섞여 있어서
열심히 공부중이다.
~~~
###### 5-6 리액티브 컨트롤러로 폼 처리하기
~~~
form 은 1. http get 요청하면 초기 폼 뷰를 유저에게 반환하고
        2. http post 전송하면 유저가 입력한 데이터를 검증한 다음에 처리를 한다.
여기서 뷰로 핸들링(에러페이지나 성공페이지) 할 수가 있는데 문구 등 properties 로 관리 할 수 있다.

폼 데이터 검증 -> validator 인터페이스를 이용한다.
~~~
###### 5-7 리액티브 REST 서비스로 JSON 발행/소비하기
~~~
@ResponseBody or @RestController

1. 발행하기
@RestController
@RequestMapping("/abc")
public class abcController(){

 ..../
 @GetMapping
 public Flux<abc> listAll() {
    return service.findAll();
 }
}

2. 소비하기
@PostMapping
public Flux<abc> find(@RequestBody Mono<abcQuery> query) {
  return query.flatMapMany(q-> service.query(q.getabcName()));

}
~~~
###### 5-8 비동기 웹 클라이언트
###### 5-9 리액티브 핸들러 함수 작성하기
~~~
@RequestMapping을 붙여 요청하는 대신에 HandlerFunction 인터페이스를 이용할 수 있다.

@FunctionalInterface
public interface HandlerFunction<T extends ServerResponse> {
  Mono<T> handle(ServerRequest request);
}
~~~
