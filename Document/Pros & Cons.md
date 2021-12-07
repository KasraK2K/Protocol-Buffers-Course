# Pros & Cons

---

- Protocol Buffers is defined by a .proto text file
- You can easily read it and understand it as a human

## Advantages
- Data is fully typed
- Data is compressed automatically (less CPU usage)
- Schema (defined using .proto file) is needed to generate code and read the data
- Documentation can be embedded in the schema
- Data can be read across any language (C#, Java, Go, Python, JavaScript, etc...)
- Schema can evolve over time, in a safe manner (schema evolution)
- **3-10x** smaller, **20-100x** faster than XML
- Code is generated for you automatically!

## Disadvantages
- Protobuf support for some languages might be lacking (but the main one is fine)
- Can't **open** the serialized data with the text editor (because it's compressed and serialized)

_Today Protocol Buffers is used as Google for almost all their internal applications._
_They have over 48000 Protobuf message types in 12000 .proto files_
_If it's working for Google, there's a great chance it will be working for you!_
&nbsp;&nbsp;

## How are Protocol Buffers used
![[protobuf-01.png]]
&nbsp;&nbsp;

---

In the following please read [[Basics 1]] concept.
Also you can read some [[Examples]]

---