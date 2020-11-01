### 05. 데이터 집계

* 집계
* 메트릭 집계
* 버킷 집계
* 파이프라인 집계
* 근삿값으로 제공되는 집계 연산

##### 집계
~~~
데이터를 그룹화하고 (SQL, GROUP BY) 통계를 구하는 기능이다.
집계를 중첩해 사용할 수 있다.
하위 집계가 상위 집계의 버킷을 다시 집계하는 식이다.

{
  "query" : {             --질의를 수행한다.
    "constant_score" : {
      "filter" : {
        "match" : <필드 조건>
       }
    }
  } ,
  
  "aggs" : {              --aggregataions와 같고 집계를 수행한다.
    "<집계 이름>" : {
      "<집계 타입>" : {
        "field" : "<필드명>"
      }
    }
  }
}
~~~

###### 메트릭 집계
~~~
* 합산 집계
{
  "aggs" : {
    "total_bytes" : {
      "sum" : {
        "field" : "bytes"
       }
    }
  }
}

* 평균 집계
{
  "aggs" : {
    "avg_bytes" : {
      "avg" : {
        "field" : "bytes"
      }
    }
  }
}
* 최솟값 : min
* 최댓값 : max
* 개수 : value_count
* 통계 : bytes_stats
{
  "aggs" : {
    "bytes_stats" : {
      "stats" : {
        "field" : "bytes"
      }
    }
  }
}
-> 결과
{
  "aggregations" : {
    "bytes_stats" : {
      "count" : ,
      "min" : ,
      "max" : ,
      "avg" : ,
      "sum" :
    }
  }
}
* 확장 통계 : bytes_extends_stats
             extended_stats
* 카디널리티 
{
  "query" : {
    "constant_score" : {
      "filter" : {
        "match" : { "geoip.country_name" : "Korea" }
      }
    }
  }
}
~~~

###### 버킷 집계
~~~
버킷을 생성한다는 것은 집계된 결과 데이터 집합을 메모리에 저장한다는 의미이기 때문에 중첩되는 단계가 깊어질수록
메모리 사용량은 좀 더 증가해서 성능에 악영향을 줄 수 있다. 그래서 기본적으로 사용 가능한 최대 버킷 수가 미리 정의되어 있다.
search.max_buckets 값을 변경하는 것으로 조정할 수 있다.

* 범위 집계
* 날짜 범위 집계
* 히스토그램 집계
* 날짜 히스토그램 집계
* 텀즈 집계
~~~

###### 파이프라인 집계
~~~
* 형제 집계 : 동일 선상의 위치에서 수행되는 새 집계를 의미한다. 
* 부모 집계
~~~

###### .
~~~
엘라스틱서치는 루씬에서 기본적으로 제공하는 그루핑 기술인 Facet API를 사용하지 않는다.
루씬은 분산 처리를 지원하지 않기 때문에 Facet에서 제공하는 집계 기능이 대용량의 분산 처리에는
적합하지 않기 때문이다. 그래서 엘라스틱서치는 독자적인 Aggregation API를 제공한다.
~~~
