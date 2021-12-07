# Advanced Data Types

---
&nbsp;&nbsp;

## OneOf
You can use `oneof` to tell protocol buffers that only one field can have a value:

```protobuf
message MyMessage {
	int32 id = 1;
	oneof example_oneof {
		string my_string = 2;
		bool my_bool = 3;
	}
}
```
- oneof field cannot be repeated
- Evolving schemes using oneof is complicated (see documentation)
- On read, all field will be null except that last one that was set at write
&nbsp;&nbsp;

## Maps
Maps can be used to map scalar (except **float** / **double**) to values of any type

```protobuf
message MyMessage {
	int32 id = 1;
	map<string, result> results = 2;
}
```
- Map fields cannot be repeated
- There's no ordering for map (it's a key => value store)
&nbsp;&nbsp;

## Well Known Types
- Protocol Buffers contains a set of Well Known Types - e.g. advanced types known to all programming languages
- The list is [here](https://developers.google.com/protocol-buffers/docs/reference/csharp/namespace/google/protobuf/well-known-types)
&nbsp;&nbsp;

### Timestamp
- One of the types is **`Timestamp`** - field are `secounds` and `nanosecounds` (UTC)
- Don't forget to use the `import` statement

```protobuf
syntax = "proto3"

import "google/protobuf/timestamp.proto"

message MyMessage {
	google.protobuf.Timestamp my_field = 1;
}
```
&nbsp;&nbsp;

### Duration
- Duration is another Well Known Types
- It represents the time span between tow timestamps
- It contains, just like Timestamp, `second` and `nanosecounds`

```protobuf
syntax = "proto3"

import "google/protobuf/timestamp.proto"
import "google/protobuf/duration.proto"

message MyMessage {
	google.protobuf.Timestamp msg_date = 1;
	google.protobuf.Duration validaty = 2;
}
```
&nbsp;&nbsp;

---

In the following please read [[Options]] concept.

---