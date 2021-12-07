# Services

---

- Protocol buffers can define Service on top of Messages
- A service is a `set of endpoints` your application can be accessible from

```protobuf
service SearchService {
	rpc Search (SearchRequest) returns (SearchResponse);
}
```

- Services need to be interpreted by a framework to generate associated code
- The main framework is **`gRPC`**  but you may find other in web

![[protobuf-04.png]]

- The advantage of Service and RPC (remote procedure calling) is that you can call your Server API from any client seamlessly
- gRPC for example is used by Google, Netflix, CoreOS (etc) , Google Cloud API, and is gaining popularity fast

```protobuf
syntax = "proto3"

message SearchRequest {
	int32 person_id = 1;
}

message SearchResponse {
	int32 person_id = 1;
	string person_name = 2;
}

service SearchService {
	rpc Search(SearchRequest) returns (SearchResponse);
}
```