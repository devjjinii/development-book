### 04. 데이터 검색
특정 문장이 검색어로 요청되면 분석기를 통해 분석된 토큰의 일치 여부를 판단해서 그 결과 점수를 매긴다.

* 검색 API
* Query DSL 이해하기
* Query DSL의 주요 쿼리
* 부가적인 검색 API

##### 검색 API
~~~
*URI 검색
*Request Body 검색
~~~
![z1](https://user-images.githubusercontent.com/53853730/65936124-77d0be00-e456-11e9-9433-666813c14058.JPG) <br>
![z2](https://user-images.githubusercontent.com/53853730/65936125-77d0be00-e456-11e9-8155-f0d0c1642bae.JPG) <br>

##### Query DSL 이해하기
![z3](https://user-images.githubusercontent.com/53853730/65936305-3096fd00-e457-11e9-8add-93933f868849.JPG) <br>
~~~
Query DSL 로 쿼리를 작성하려면 미리 정의된 문법에 따라 JSON 구조를 작성해야 한다.
{
  "size" :
  "from" :
  "timeout" :
  "_source" : { }
  "query" : { }
  "aggs" : { }
  "sort" : { }
}
~~~
![z4](https://user-images.githubusercontent.com/53853730/65936576-05f97400-e458-11e9-8a13-967a7b3dd04f.JPG) <br>
![z5](https://user-images.githubusercontent.com/53853730/65936578-06920a80-e458-11e9-9fab-95fd11bd3c67.JPG) <br>

###### Query DSL의 주요 쿼리 <br>
* Match Query : 텍스트, 숫자 , 날짜 등이 포함된 문장을 형태소 분석을 통해 텀으로 분리한 후 <br>
텀을 이용해 검색 질의를 수행한다. 검색어가 분석돼야 할 경우에 사용한다. <br> 
* Term Query <br>
* Bool Query <br>
![z6](https://user-images.githubusercontent.com/53853730/65936795-cd0dcf00-e458-11e9-91f3-56ac09328c26.JPG) <br>
* 등..

