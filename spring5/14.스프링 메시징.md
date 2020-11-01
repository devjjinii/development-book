### :star2: 14장 정리(스프링 메시징)

* 토픽 & 큐 
: 메시지를 메시지 큐에 보내 '리스닝'하는 모든 클라이언트에 브로드캐스트하고 싶다면
  토픽에 메시지를 보낸다. 메시지를 특정 클라이언트에게만 보내고 싶다면 큐에 보낸다.
###### 14-1 스프링에서 JMS 메시지 주고받기
~~~
Private private JmsTemplate;

JMS 템플릿은 JMS 연결, 세션을 얻고 해제하는 일을 한다.
MessageCreator 객체로 만든 JMS 메시지를 전송한다.

.setDefaultDestination
~~~
###### 14-2 JMS 메시지 변환하기
~~~
SimpleMessageConverter
TextMessage <-> 문자열, BytesMessage <-> 바이트 배열,  MapMessage <-> 맵, ObjectMessage <-> 직렬화 

~~~
###### 14-3 JMS 트랜잭션 관리하기
~~~
TransactionManager
@Transactional
@EnableTransactionManagement
~~~
###### 14-4 스프링에서 메시지 주도 POJO 생성하기
~~~
@MessageDriven
~~~
###### 14-5 JMS 커넥션 캐싱/풀링하기
~~~
@Bean
public ConnectionFactory cachingConnectionFactory() {
  return new CachingConnectionfactory(connectionFactory());
}
~~~
###### 14-6 스프링에서 AMQP 메시지 주고받기
~~~
RabbitMQ
RabbitTemplate RabbitGatewaySupport
~~~
###### 14-7 스프링 카프카로 메시지 주고받기
~~~
Apache Kafka
KafkaTemplate MessageListenerContainer
@EnableKafka
@KafkaListener
~~~
