# Enums

---

- If you know all the value a field can take in advance, you can use leverage the `Enum` type
- `Enum` must start by the tag 0 (which is the default value)

Let's add an Enum to our Person for the field Eye Color

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
}
```