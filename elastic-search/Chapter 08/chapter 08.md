### 08. 엘라스틱서치 클라이언트

* 엘라스틱서치 클라이언트 이해하기
* <del>Transport 클라이언트</del>
* High Level REST 클라이언트

#### REST 클라이언트
*Java High Level REST Client <br>
*HTTP 방식을 이용해 엘라스틱서치와 통신한다. <br>
*내부적으로는 HttpClient 모듈을 사용한다. <br>

~~~
<<HIGH Level Client>>

<!-- Elasticsearch -->
		<dependency>
			<groupId>org.elasticsearch.client</groupId>
			<artifactId>elasticsearch-rest-high-level-client</artifactId>
			<version>6.6.2</version>
		</dependency>
 
public RestHighLevelClient client() {
		RestHighLevelClient client = new RestHighLevelClient(
				RestClient.builder(new HttpHost(esHost, 9200, "http")));
		return client;
	}
~~~

--> 엘라스틱 레파지토리 
