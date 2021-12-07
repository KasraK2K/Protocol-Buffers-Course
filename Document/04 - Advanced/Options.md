# Options

---

- Options allow to alter the behavior of the protoc compiler when generating code for specific languages
- There are few  bundled options (read the [docs](https://developers.google.com/protocol-buffers/docs/proto3#options), here are a few:

```protobuf
option csharp_namespace = "Google.Protobuf.WellKnownTypes";
option cc_enable_areas = true;
option go_package = "github.com/golang/protobuf/ptypes/duration"
option java_package = "com.google.protobuf";
option java_outer_classname = "DurationProto";
option java_multiple_files = true;
option objc_class_prefix = "GPB";
```
&nbsp;&nbsp;

---

In the following please read [[Naming Conventions]] concept.

---