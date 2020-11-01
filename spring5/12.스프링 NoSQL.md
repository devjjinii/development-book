### 12장 정리(스프링 NoSQL)
* 관계형 DB(오라클, PostgreSQL)
* 문서 저장소(몽고디비, 카우치베이스)
* 키-값 저장소(레디스)
* 컬럼 저장소(카산드라)
* 그래프 저장소(Neo4j)

###### 12-1 몽고디비
~~~
몽고디비 포트 : 27017
@bean
public Mongo mongo() throws .... {
  return new MongoClient();
}
<!-- https://mvnrepository.com/artifact/org.springframework.data/spring-data-mongodb -->
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-mongodb</artifactId>
    <version>2.1.1.RELEASE</version>
</dependency>

MongoTemplate mongo;
~~~
###### 12-2 레디스
~~~
레디스 포트 : 6379
http://redis.io/download 다운로드 후 redis-server로 실행한다.

Jdeis jedis = new Jdeis("localhost");
jedis.set("",);

레디스는 String 또는 byte[]형 객체만 처리 가능한 키-값 저장소라서 직렬화하는 과정이 필요하다.

public class ABC implements Serializable {
 //...setter & getter
}
// redis config
@Bean
public RedisTemplate<String, ABC> redisTemplate(RedisConnectionFactory connectionFactory) {
  RedisTemplate template = new RedisTemplate();
  template.setConnectionFactory(connectionFactory);
  return template;
  
@Bean
public RedisConnectionFactory redisConnectionFactory() {
  return new JedisConnectionFactory();
}
~~~
###### 12-3 Neo4j
###### 12-4 카우치베이스

