# Naming Conventions

---

- Refer to [style](https://developers.google.com/protocol-buffers/docs/style)
- Use **CamelCase** to message names
- Use **underscore_separated_names** for fields

```protobuf
message MyMessage {
	string my_long_field = 1;
}
```

- use **CamelCase** for Enums and **CAPITAL_WITH_UNDERSCORE** for values names

```protobuf
enum Foo {
	UNKNOWN = 0;
	FIRST_VALUE = 1;
	SECOND_VALUE = 2;
}
```
&nbsp;&nbsp;

---

In the following please read [[Services]] concept.

---