### 3장 정리(스프링 MVC)

###### 3-1 간단한 스프링 MVC 웹 애플리케이션 개발하기
~~~
java
->config
->model
->client 
->controller
->services
    ->service
    ->serviceImpl
->interceptor
->util

resources
->.properties
-> logabck

webapp
->resources
  ->js, css
->WEB-INF
 ->views
    ->.jsp
~~~
###### 3-2 @RequestMapping에서 요청 매핑하기
~~~
@RequestMapping(value = "/url/url", method = { RequestMethod.GET, RequestMethod.POST })
~~~
###### 3-3 핸들러 인터셉터로 요청 가로채기
~~~
public class InfoInterceptor extends HandlerInterceptorAdapter {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (logger.isInfoEnabled()) {
           // log 찍을 내용.
        }
        return true;
    }
}
~~~
###### 3-4 유저 로케일 해석하기
~~~
*SessionLocaleResolver

SessionLocaleResolver resolver = new SessionLocaleResolver();
resolver.setDefaultLocale(new Locale(""));
~~~
###### 3-5 로케일별 텍스트 메시지 외부화하기
~~~
.properties 파일을 작성해서
<spring:message> 이용한다.
~~~
###### 3-6 이름으로 뷰 해석하기
~~~
->ViewResolver 
public class config extends WebMvcConfigurerAdapter {
 @Bean
    public InternalResourceViewResolver internalResourceViewResolver() {
        InternalResourceViewResolver internalResourceViewResolver = new InternalResourceViewResolver();
        internalResourceViewResolver.setPrefix("/WEB-INF/views/");
        internalResourceViewResolver.setSuffix(".jsp");
        internalResourceViewResolver.setOrder(1);
        return internalResourceViewResolver;
    }
}
~~~
###### 3-7 뷰와 콘텐트 협상 활용하기
###### 3-8 뷰에 예외 매핑하기
~~~
throw Exception
HttpStatus. 500, 404 
~~~
###### 3-9 컨트롤러에서 폼 처리하기
###### 3-10 마법사 폼 컨트롤러로 다중 페이지 폼 처리하기
~~~
form id 
(@RequestParam("id") String id , required= false, defaultValue="") {
   //...
}
~~~
###### 3-11 표준 애너테이션(JSR-303)으로 빈 검증하기
~~~
->@Valid
@NotNull
@Pattern
@Size
...
~~~
###### 3-12 엑셀 및 PDF 뷰 생성하기
~~~
엑셀 업로드는 sync 참조!!
pdf 뷰는 spring02 참조!!
~~~

