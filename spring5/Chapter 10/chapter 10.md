### 10장 정리(스프링 트랜잭션 관리)

###### 10-1 트랜잭션 관리의 중요성
##### 데이터 무결성과 일관성을 보장하는 필수 기법
* 원자성
* 일관성
* 독립성
* 지속성

###### 10-2 트랜잭션 관리자 구현체 선정하기
~~~
PlatformTransactionManager
> DataSourceTransactionManager

@Bean
public DataSourceTransactionManager transactionManager() {
  DataSourceTransactionManager transactionManager = new DataSourceTransactionManager();
  transactionManager.setDataSource(dataSource());
  return transactionManager;
}
~~~
###### 10-3 트랜잭션 관리자 API를 이용해 프로그램 방식으로 트랜잭션 관리하기
~~~
PlatformTransactionManager 는 트랜잭션 관리를 추상화한 인터페이스이다.
getTransaction(), commit(), rollback()
~~~
###### 10-4 트랜잭션 템플릿을 이용해 프로그램 방식으로 트랜잭션 관리하기
~~~
TransactionTemplate가 트랜잭션 관리자를 참조할 수 있으면 재생성 가능하다.

private PlatformTransactionManager transactionManager;
TransactionTemplate transactionTemplate = new TransactionTemplate(transactionManager);

@Bean
public TransactionTemplate transactionTemplate() {
  TransactionTemplate transactionTemplate = new TransactionTemplate();
  transactionTemplate.setTransactionManager(transactionManager());
  return transactionTemplate;
}

@Bean
public ..... {
  ......setTransactionTemplate(transactionTemplate());
}
~~~
###### 10-5 @Transactional을 붙여 선언적으로 트랜잭션 관리하기
~~~
@EnableTransactionManagement
@Transactional
~~~
###### 10-6 트랜잭션 전달 속성 전달하기
~~~
@Transactional(propagation = Propagation.____)
_____ : REQUIRED, REQUIRES_NEW, SUPPORTS, NOT_SUPPORTED, MANDATORY, NEVER, NESTED
~~~
###### 10-7 트랜잭션 격리 속성 설정하기
~~~
@Transactional(isolation = Isolation.____)
_____ : DEFAULT, READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE
~~~
###### 10-8 트랜잭션 롤백 속성 설정하기
~~~
@Transactional(propagation = ,
               rollbackFor = ,
               noRollbackFor = )
~~~
###### 10-9 트랜잭션 타임아웃, 읽기 전용 속성 설정하기
~~~
@Transactional(isolation = ,
               timeout = ,
               readOnly = true)
~~~
###### 10-10 로드타임 위빙을 이용해 트랜잭션 관리하기
~~~
@Configuration
@EnableTransactionManagement(mode = AdviceMode.ASPECTJ)
@EnableLoadTimeWeaving
~~~

~~~
트랜잭션, 배치 레파지토리 참조!
~~~
