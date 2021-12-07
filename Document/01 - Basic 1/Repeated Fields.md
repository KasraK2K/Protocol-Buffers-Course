# Repeated Fields

---

- To make a `list` or an `array`, you can use the concept of repeated fields
- The list can take any number (0 or more) of elements you want
- The opposite of `repeated` is `singular` (we don't write  it)

Let's add a list of phone numbers to our Person example!

```protobuf
syntax = "proto3"

message Person {
	int32 age = 1;
	string first_name = 2;
	string last_name = 3;
	bytes small_picture = 4;
	bool is_profile_verified = 5;
	float height = 6;
		
	repeated string phone_number = 7;
}
```
&nbsp;&nbsp;

---

In the following please read [[Comments]] concept.

---