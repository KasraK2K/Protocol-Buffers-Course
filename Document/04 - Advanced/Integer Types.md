# Integer Types

---

- There exist many ways to represent an integer in protocol buffers:
`int32`, `int64`,  `uint32`, `uint64`, `sint32`, `sint64`, `fixed32`, `fixed64`, `sfixed32`, `sfixed64`
- Each type is basically constructed to handle:
	1. Range of allowed values: 64 bits has more values than 32 bits
	2. Whether negative values are allowed
	3. Size efficiency on serialization
- This is advanced and means for performance and space optimization
&nbsp;&nbsp;

## Range of allowed values
- 32 bit:
	- **int32** / **sint32**: `-2,147,483,648` to `2,147,483,647`
	- **unit32**: `0` to `4,294,967,295`
-  64 bit:
	- **int32** / **sint32**: `-9,223,372,036,854,775,808` to `9,223,372,036,854,775,807`
	- **unit32**: `0` to `18,446,744,073,709,551,615`
&nbsp;&nbsp;

## Negative values
1. `unit32`, `unit64` do not allow negative values
2. `int32`, `int64` do note encode negative values efficiently (negative values constantly use 10 bytes in space)
3. `sint32`, `sint64` encode negative values well (through the use of a technique called ZigZag)

Chose accordingly base on if your field can have negative values!
&nbsp;&nbsp;

## Size efficiency
- `unit32`, `unit64`, `int32`, `int64`, `sint32`, `sint64` are variable encoding meaning that  if they can use less space, they will (for small values)
- `fixed32` use 4 bytes constantly. more efficient than unit32 if values are often grater than 2^28
- `fixed64` use 8 bytes constantly. more efficient than unit64 if values are often grater than 2^56
&nbsp;&nbsp;

---

In the following please read [[Advanced Data Types]] concept.

---