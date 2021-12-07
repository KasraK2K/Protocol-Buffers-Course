# Removing Fields

---

Let's remove a field to our schema

_version 1:_
```protobuf
message MyMessage {
	int32 id = 1;
	string first_name = 2;
}
```
&nbsp;&nbsp;

_version 2:_
```protobuf
message MyMessage {
	reserved 2;
	reserved "first_name";
	int32 id = 1;
}
```

- If old code doesen't find the field anymore, the default value will be used
- Oppositely, if we read old data with the new code, the deleted field will just be dropped
- **Default values should always be interpreted with care**
- When removing a fields, you should **ALWAYS** reserve the tag and the name
- This prevents the tag to be re-used and this prevent the name to be re-used
- This is necessary to prevent conflicts in the codebase

The alternative is that instead of removing a field, you rename it to **`OBSOLETE_<fild_name>`**.

_The downside is that you may have to populate that field while your client get upgraded to use the newer filed that replace it (which has a new tag)_
&nbsp;&nbsp;

---

In the following please read [[Reserved Keyword]] concept.

---