# Nesting Messages

---

- It is possible to define types within types
- The reason could be:
	- Avoiding naming conflicts
	- Enforcing some level of "locality" for that type
- You can nest types as deeply as you want

Lets create a field Address and use that in our Person to have a multiple addresses

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
	
	// Define Address with Nesting Message
	message Address {
		string addres_line_1 = 1;
		string addres_line_2 = 2;
		string zip_code = 3;
		string city = 4;
		string country = 5;
	}
	
	repeated Address address = 10;
}

message Date {
  int32 year = 1;
  int32 month = 2;
  int32 day = 3;
}
```
&nbsp;&nbsp;

---

In the following please read [[Importing Types]] concept.

---