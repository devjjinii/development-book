### 02. 엘라스틱서치 살펴보기

19.9.25(수) : 일이 여유로워서 2장도 정리해본다.

#### 엘라스틱서치에서 제공하는 주요 API
* 인덱스 관리 API
* 문서 관리 API
* 검색 API
* 집계 API

##### 인덱스 관리 API
![el3](https://user-images.githubusercontent.com/53853730/65578438-c0006400-dfb0-11e9-991b-5ff94ebdb751.JPG)
~~~
인덱스 생성 PUT /movie
인덱스 삭제 DELETE /movie
~~~

##### 문서 관리 API
조회 <br>
![el4](https://user-images.githubusercontent.com/53853730/65578592-048bff80-dfb1-11e9-9f86-e727680fed7f.JPG)
~~~
..문서 생성, 문서 조회, 문서 삭제

_id를 지정하지 않고 인덱스명과 타입만 지정하면 UUID를 통해 무작위로 생성되기 때문에 지정해주는게 좋다.
업데이트 시 불편하다.
~~~

##### 검색 API
~~~
1. HTTP URI 형태의 파라미터를 URI에 추가해 검색하는 방법
2. RESTful API 방식인 QueryDSL을 사용해 요청 본문에 질의 내용을 추가해 검색하는 방법
~~~
1.
![el5](https://user-images.githubusercontent.com/53853730/65578928-b1ff1300-dfb1-11e9-981e-ccd964309631.JPG)

2.
![el6](https://user-images.githubusercontent.com/53853730/65579115-0dc99c00-dfb2-11e9-924b-37c70ad300e5.JPG)

##### 집계 API
~~~
각종 통계 데이터를 실시간으로 제공할 수 있는 강력한 기능이다.
버킷 안에 다른 버킷의 결과를 추가할 수 있다. 결합, 중첩, 조합하는 것이 가능하다.
~~~
![el7](https://user-images.githubusercontent.com/53853730/65579575-f63ee300-dfb2-11e9-91b7-3471c6e068ef.JPG)

