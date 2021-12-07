# Tags

---

In Protocol Buffers, field names are not important! (but when programming the fields are important)
For protobuf the important element is the **`tag`**

- Smallest tag is **`1`**
- Largest tag: **`2^29 - 1`**, or **`536,870,911`**
- You also cannot use the numbers 19000 through 19999
- Tags numbered from 1 to 15 use `1 byte` in space, so use them for frequently populated fields
- Tags numbered from 16 to 2047 use `2 bytes`
- There is a concept of `reserved` tag that will be see in the advanced lectures
&nbsp;&nbsp;

---

In the following please read [[Repeated Fields]] concept.

---