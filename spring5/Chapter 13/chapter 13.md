### :star2: 13장 정리(스프링 자바 엔터프라이즈 서비스와 원격 기술)

###### 13-1 스프링 빈을 JMX MBean으로 등록하기
###### 13-2 JMX 알림 주고받기
###### 13-3 스프링에서 원격 JMX MBean 액세스하기
###### 13-4 스프링에서 이메일 보내기
~~~
<<JavaMail API>>
Message message = new MimeMessage(session);
message.setForm(new InternetAddress("devjin@localhost"));
message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("admin@localhost"));
message.setSubject("mail subject");
message.setContent("메일내용", "text/plain");
Transport.send(message);
---
<<MailSender>>
private MailSender mailSender;
---
<<이메일 템플릿>>
~~~
###### 13-5 스프링 쿼츠로 작업 스케줄링하기
~~~
<<크론 표현식>>
초 분 시 일 월 요일 년도(옵션)
0  30 15  *  *  ?
-> 매일 3시 30분에 실행한다.
~~~
###### 13-6 스프링으로 작업 스케줄링하기
~~~
@EnableScheduling
@Bean
public TaskScheduler taskScheduler(){
    ThreadPoolTaskScheduler taskScheduler = new ThreadPoolTaskScheduler();
    taskScheduler.setPoolSize(20);
    return taskScheduler;
}

@Scheduled(cron = "${abc}") abc -> 프로퍼티로 크론식
public void abc() { }
~~~
###### 13-7 RMI로 서비스 표출/호출하기
###### 13-8 HTTP로 서비스 표출/호출하기
###### 13-9 JAX-WS로 SOAP 웹 서비스 표출/호출하기
###### 13-10 규약우선 SOAP 웹 서비스
###### 13-11 스프링 웹 서비스로 SOAP 웹 서비스 표출/호출하기
###### 13-12 스프링 웹 서비스와 XML 마샬링을 이용해 SOAP 웹 서비스 개발하기
~~~
public static <T> T fromXml(String xml, Class<T> classOfT) throws JAXBException {
    JAXBContext jaxbContext = JAXBContext.newInstance(classOfT);
    Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
    Object object = unmarshaller.unmarshal(new StringReader(xml));
    return Primitives.wrap(classOfT).cast(object);
}

// ...
return JaxbUtil.fromXml(response, Vo.class);
~~~
