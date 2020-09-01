### 9장 정리(데이터 액세스)

###### 스프링 데이터 소스 구성하기
~~~
@Bean
  DataSource dataSource() {
     BasicDataSource dataSource = new BasicDataSource();
        dataSource.setDriverClassName(driverClassName);
        dataSource.setUrl(url);
        //....
  }
~~~
###### 9-1 JDBC 템플릿으로 DB 수정하기
~~~
JDBC 사용시 반복 루트
1. 데이터 소스에서 DB 접속한다.
2. PreparedStatment  객체 생성한다.
3. 매개변수 바인딩한다.
4. PreparedStatement 실행한다.
5. SQLException 처리한다.
6. 구문 및 접속 개체 삭제한다.

자바8
@Override
public void insert(final ABC abc){
  JdbcTemplate jdbcTemplate = new JdbcTemplate(this.dataSource);
  jdbcTemplate.update(con ->  {
          PreparedStatments ps = con.prepareStatement(INSERT_SQL);
          prepareStatement(ps, abc);
          return ps;
         });
}
---
@Override
public void insert(ABC abc) {
  JdbcTemplate jdbcTemplate = new JdbcTemplate(this.dataSource);
  jdbcTemplate.update(INSERT_SQL, ps -> prepareStatement(ps, abc);
}
---
@Override
public void insert(Collection<ABC> abc) {
  JdbcTemplate jdbcTemplate = new JdbcTemplate(this.dataSource);
  jdbcTemplate.batchUpdate(INSERT_SQL, abc, abc.size(), this::prepareStatement);
}

~~~
###### 9-2 JDBC 템플릿으로 DB 조회하기
~~~
JDBC 사용시 반복 루트
1. 데이터 소스에서 DB 접속한다.
2. PreparedStatment  객체 생성한다.
3. 매개변수 바인딩한다.
4. PreparedStatement 실행한다.
//추가부분
5. 반환된 ResultSet을 순회한다.
6. ResultSet 에서 데이터를 꺼낸다.
/////
7. SQLException 처리한다.
8. 구문 및 접속 개체 삭제한다.
~~~
###### 9-3 JDBC 템플릿을 간단하게 생성하기
~~~
JdbcTemplate jdbcTemplate;
~~~
###### 9-4 JDBC 템플릿에서 기명 매개변수 사용하기
~~~
?,? 이런식으로 표현하는데 
NamedParameterJdbcTemplate를 이용해서 sql문을 바인딩하면 가독성이 향상된다.
~~~
###### 9-5 스프링 JDBC 프레임워크에서 예외 처리하기
~~~
java.sql.SQLException
최상위 DataAccessException
~~~
###### 9-6 ORM 프레임워크 활용하기
![ffffff](https://user-images.githubusercontent.com/53853730/65733915-9445c100-e10b-11e9-8c15-fc5e9f2ea01e.JPG)
~~~
하이버네이트
1. XML 로 매핑한 객체를 하이버네이트 API를 이용해 저장한다.
2. JPA 어노테이션을 붙인 객체를 하이버네이트 API를 이용해 저장한다.
3. JPA 어노테이션을 붙인 객체를 JPA를 이용해 저장한다.

2.
@Entity
@Table()

@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name = "")
~~~
###### 9-7 스프링에서 ORM 리소스 팩토리 구성하기
~~~
 @Autowired
    private DataSource dataSource;
    
  @Bean
  SqlSessionFactory sqlSessionFactory() throws IOException {
         SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
         sessionFactory.setDataSource(dataSource);
          //....
  }
~~~
###### 9-8 하이버네이트 컨텍스트 세션으로 객체 저장하기
###### 9-9 JPA 컨텍스트를 주입하여 객체 저장하기
###### 9-10 스프링 데이터 JPA로 JPA 코드 간소화하기
~~~
..extends CrudRepository< , Long>
..extends JpaRepository< >
@Query("select i from Abc i order by i.ordr asc")
List<Abc> listByAbc();
~~~
