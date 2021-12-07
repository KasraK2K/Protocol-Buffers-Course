# Defining Multiple Message

- It is possible, in the same `.proto` file, to define multiple types
- It is then supper easy to reference them if we need to

Let's create a message Date and add that to our Person as field for a birthday

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
	
	enum EyeColor {
		UNKNOWN_EYE_COLOR = 0;
		EYE_GREEN = 1;
		EYE_BROWN = 2;
		EYE_BLUE = 3;
	}
	
	EyeColor eye_color = 8;
	
	Date birthday = 9;
}

message Date {
  int32 year = 1;
  int32 month = 2;
  int32 day = 3;
}
```
&nbsp;&nbsp;

---

In the following please read [[Nesting Messages]] concept.

---