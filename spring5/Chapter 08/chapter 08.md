### 8장 정리(스프링 모바일)

###### 8-1 스프링 모바일 없이 기기 감지하기
~~~
private boolean isMobile(HttpServletRequest request) {
    	String ua = request.getHeader("User-Agent").toLowerCase();
    	
      if (ua == null) {
            return false;
      }
        
    	if (ua.matches(" 조건문 ")) {
            return true;
      } else {
            return false;
      }
    }
~~~
###### 8-2 스프링 모바일을 이용해 기기 감지하기
~~~
DeviceResolverRequestFilter
DeviceResolverHandlerInterceptor
~~~
###### 8-3 사이트 기본 설정
~~~
SitePreferenceRequestFilter
SitePreferenceHandlerInterceptor
~~~
###### 8-4 기기 정보에 따라 뷰 렌더링하기
~~~
Device device = DeviceUtils.getCurrentDevice(request);
~~~
###### 8-5 사이트 스위칭 구현하기
~~~
SiteSwitcherHandlerInterceptor

//sso.
if(isMobile(request)) {
        		response.sendRedirect("https://....&channel=MOBILE");
        	} else {
        		response.sendRedirect("https://....&channel=PC");
        	}
~~~
