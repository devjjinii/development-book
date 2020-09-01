### 4장 정리(스프링 REST)

###### 4-1 REST 서비스로 XML 발행하기
~~~
//@RequestMapping, @PathVariable

public class JaxbUtil {
    public static <T> T fromXml(String xml, Class<T> classOfT) throws JAXBException {
        JAXBContext jaxbContext = JAXBContext.newInstance(classOfT);
        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
        Object object = unmarshaller.unmarshal(new StringReader(xml));
        return Primitives.wrap(classOfT).cast(object);
    }
}

return JaxbUtil.fromXml(responseData, SaraminResponseVo.class);
+크롤링

@RequestMapping("/member/*/{id}")
@ResponseBody
public Member getMember(@PathVariable("id") String id) {
...
}
~~~
###### 4-2 REST 서비스로 JSON 발행하기
~~~
1. @ResponseBody
2. GSON

API 연결할 때 그냥 많이 한다. 가끔 몇몇 api에서는 xml 로 
받아야 할 때가 있는데 데이터 다룰때 손이 더 많이가서 xml에 비하면 JSON 은 ❤️ 다.
~~~
###### 4-3 스프링으로 REST 서비스 액세스하기
~~~
HTTP 요청 메서드(GET, POST, ...) , curl !~
~~~
###### 4-4 RSS/아톰 피드 발행하기
~~~
RSS . ATOM 에 대해 알아본다.
구글 검색을 해보았는데, 뭔지 모르겠다.
~~~
