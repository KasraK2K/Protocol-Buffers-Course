# Packages

---

- It is very important to define the package in which your protocol buffer messages live
	- When your codes gets compile, it will be placed at the package you indicated
	- It also helps to prevent name conflicts between messages
	(my.package.Person)
- Packages will help all the different languages compile correctly from .proto files (Java, C#, Python, Go, etc..)
&nbsp;&nbsp;

_date.proto_

```protobuf
// <project root>/proto/date.proto
syntax = "proto3"

// add package for date
package my.date;

message Date {
  int32 year = 1;
  int32 month = 2;
  int32 day = 3;
}
```
&nbsp;&nbsp;

_person.proto_
```protobuf
// <project root>/proto/person.proto
// The syntax of this file is proto3
syntax = "proto3"

import "proto/date.proto"

// add package for person
package person;

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
	
	// change Date to my.date.Date because Date is in my.date package
	my.date.Date birthday = 9;
	
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
```
&nbsp;&nbsp;

---

In the following please read [[Setup Protoc Compiler]] concept.

---