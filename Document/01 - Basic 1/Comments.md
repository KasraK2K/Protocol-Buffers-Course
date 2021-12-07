# Comments

---

- It is possible to embed comments in your .proto file
- It is actually recommended to use comments as a form of documentation for your schemes
- Comments can be of these tow forms:
```protobuf
// this is a comment
/* this is a
   multiline comment */
```
&nbsp;&nbsp;

Let's add comments to our Person!

```protobuf
// The syntax of this file is proto3
syntax = "proto3"

/* Personis used to identify users
 * acorss our system */
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

In the following please read [[Default Values for fields]] concept.

---