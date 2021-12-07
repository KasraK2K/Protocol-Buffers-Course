# Types

---

As follow i show you some code and picture to know how to write .proto files
As you can see this is a simple .proto file version 3 that declare **`MyMessage`**.
&nbsp;&nbsp;

## Simple Message
![[protobuf-02.png]]

```protobuf
syntax = "proto3"

message MyMessage {
	int32 id = 1;
	string first_name = 2;
	bool is_validated = 3;
}
```
&nbsp;&nbsp;

## Scalar Types

### Number
- Number can take various format based on what values you expect them to have: `double`, `float`, `int32`, `int64`,  `uint32`, `uint64`, `sint32`, `sint64`, `fixed32`, `fixed64`, `sfixed32`, `sfixed64`
- Integer: For now, let's use `int32`
(There's a discussion in the advanced section of advantages of each specific type)
- Floating point numbers:
	- `float` (32 bits)
	- `double` (63 bits) - for more precision (if you really need it)

### Boolean
- Boolean can hold `True` or `False`.
- It is represented as `bool` in protobuf


### String
- String represents an arbitrary length of next.
- It is represented as `string` in Protobuf
- A string must always contains UTF-8 encoded or 7-bit ASCII text

### Bytes
- Bytes represents any sequence of bytes array
- It is represented as `bytes` in Protobuf
- It will be up to you to interpret what this bytes mean
- For example you could use these bytes to include a small image
&nbsp;&nbsp;

## Summary
Let's create a simple person .proto file

```protobuf
syntax = "proto3"

message Person {
	int32 age = 1;
	string first_name = 2;
	string last_name = 3;
	bytes small_picture = 4;
	bool is_profile_verified = 5;
	float height = 6;
}
```
&nbsp;&nbsp;

---

In the following please read [[Tags]] concept.

---