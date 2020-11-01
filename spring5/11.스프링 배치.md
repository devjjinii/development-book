### 11장 정리(스프링 배치)
* 데몬 레파지토리를 참조하자!

###### 11-1 스프링 배치 기초 공사하기
~~~
-DB, 프로퍼티, 트랜잭션 설정한다.
@EnableBatchProcessing , DB 초기화
JobRepository, JobRegistry, JobLauncher
~~~
###### 11-2 데이터 읽기/쓰기
~~~
*sync, daemon 레파지토리를 참조한다.
엑셀 파일 등 배치돌려서 insert, delete 할 수 있다.

FlatFleItemReaderBuilder
JdbcBatchItemWriter
~~~
###### 11-3 커스텀 ItemWriter/ItemReader 작성하기
~~~
UserRegistration;

@Override
public void write(List<?extends UserRegistration> items) throws Exception {
  items.forEach(this::write);
}
~~~
###### 11-4 출력하기 전에 입력 데이터 처리하기
~~~
데이터를 가공한다.
ItemProcesser<I,O> 는 null을 반환하고 작업을 중단시킬 수 있다.

@Bean
public ItemProcessor<UserRegistration, UserRegistration> userResgistrationValidationItemProcessor() {
  return new userResgistrationValidationItemProcessor();
}
~~~
###### 11-5 트랜잭션을 걸어 편하게 삽시다
~~~
PlatformTransactionManager(transactionManager)
~~~
###### 11-6 재시도
~~~
RetryTemplate
@EnableRetry
@Retryable(backoff = @Backoff(delay = 1000, maxDelay = 10000, multiplier =2 ))
~~~
###### 11-7 스텝 실행 제어하기
~~~
*순차 스텝
*동시성 스텝
*조건 스텝
~~~
###### 11-8 잡 실행하기
~~~
TaskExecutor
JobLanucher
@EnableScheduling

cron!!
~~~
###### 11-9 잡을 매개변수화하기
~~~
JobParameters 객체는 JobLauncher를 이용해 잡을 실행 할 때 생성된다.
ExecutionContexts 에서 가져올 수 있다.
@StepScope
~~~
