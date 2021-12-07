# Reserved Keyword

---

- You can reserve TAGS and FIELD NAMES
- You cant mix TAGS and FIELD NAMES in the same `reserved` statement

```protobuf
message Foo {
	reserve 2, 15, 9 to 11;
	reserve "foo", "bar";
}
```
- We reserve TAGS to prevent new fields from re-using tags (which would break old code at runtime)
- We reserve FIELD NAMES to prevent code bugs
- **DO NOT `EVER` REMOVE ANY RESERVED TAGS**
&nbsp;&nbsp;

---

In the following please read [[Beware of Defaults]] concept.

---