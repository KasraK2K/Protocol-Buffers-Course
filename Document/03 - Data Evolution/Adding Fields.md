# Adding Fields

---

Let's add a field to our schema (new tag number)

_version 1:_
```protobuf
message MyMessage {
	int32 id = 1;
}
```
&nbsp;&nbsp;

_version 2:_
```protobuf
message MyMessage {
	int32 id = 1;
	string first_name = 2;
}
```

- If that field is sent to old code, the old code will not know what that tag number corresponds to the field will be ignored (or dropped)
- Oppositely, if we read old data with the new code, the new field will not be found and the default value will be assumed (empty string)
- **Default values should always be interpreted with care**
&nbsp;&nbsp;

---

In the following please read [[Renaming Fields]] concept.

---