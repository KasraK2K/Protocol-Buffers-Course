# Renaming Fields

---

Let's rename a field in our schema

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
	int32 id = 1;
	string person_first_name = 2;
}
```

- In this case nothing changes! Field names can be changed freely
- **Only the tag number is important for protobuf**
&nbsp;&nbsp;

---

In the following please read [[Removing Fields]] concept.

---