# Protocol Buffers Node.js Example

---

In this example i wrote a .proto file in `src/proto/user.proto` path

_user.proto_

```protobuf
syntax = "proto3";
package com.example.user;

message User {
  int32 id = 1;
  string first_name = 2;
  string last_name = 3;
  repeated PhoneNumber phone_numbers = 4;
  UserType type = 5;
}

message PhoneNumber { string number = 1; }

enum UserType {
  UNKNOWN = 0;
  USER = 1;
  ADMIN = 2;
}
```

Now we can compile this file with `src/shell/compile-proto.sh`

_compile-proto.sh_

```bash
PROTO_DIR=./src/proto

yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=${PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${PROTO_DIR} \
    ${PROTO_DIR}/*.proto

# Generate TypeScript code (d.ts)
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DIR} \
    -I ${PROTO_DIR} \
    ${PROTO_DIR}/*.proto
```

Read `src/server/db.ts` and `src/server/user.service.ts` to and `main.js` to learn how to create object using Protocol Buffers
	