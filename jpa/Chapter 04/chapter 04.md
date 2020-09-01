### 04. 엔티티 매핑
* 객체와 테이블 매핑 : @Entity, @Table
* 기본 키 매핑 : @Id
* 필드와 컬럼 매핑 : @Column
* 연관관계 매핑 : @ManyToOne, @JoinColumn

###### 4-1 @Entity
~~~
@Entity가 붙은 클래스는 JPA가 관리하는 것.

JPA가 엔티티 객체를 생성할 때 기본 생성자를 사용한다.
자바는 생성자가 하나도 없으면 다음과 같은 기본 생성자를 만든다.
public Example(){ }
~~~
###### 4-2 @Table
~~~
엔티티와 매핑할 테이블을 지정한다.
~~~
###### 4-3 다양한 매핑 사용
~~~
@Entity
@Table(name="Example")
public class Example() {
  @Id
  @Column(name="A")
  private String a;
  ....
}

@Enumerated(EnumType.STRING) -- 자바의 enum 사용
@Temporal(TemporalType.TIMESTAMP) -- 자바의 날짜 타입
@Lob -- CLOB, BLOB 타입
~~~
###### 4-4 데이터베이스 스키마 자동 생성
~~~
persistence.xml
-> 속성 추가 : 애플리케이션 실행 시점에 데이터베이스 테이블을 자동으로 생성
~~~
###### 4-5 DDL 생성 기능
~~~
@Column(name = "abc", nullable = false, length = 10)
                        --> not null
~~~
###### 4-6 기본 키 매핑
~~~
@Id 에 @GeneratedValue 추가
<<SEQUENCE>>
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "_SEQ_GENERATOR")
                                                                  --> 시퀀스 매핑
@SequenceGenerator
@TableGenerator
~~~
###### 4-7 필드와 컬럼 매핑 : 레퍼런스
~~~
@Column
@Enumerated
@Temporal
@Lob
@Transient : 매핑하지 않는다. 데이터베이스에 저장하지 않고 조회하지도 않는다.
              객체에 임시로 어떤 값을 보관하고 싶을 때 사용한다.
@Access
~~~
