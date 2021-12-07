# grpc_tools_node_protoc \
#   --js_out=import_style=commonjs,binary:./src/javascript \
#   --ts_out=./src/typescript \
#   --grpc_out=./src/grpc \
#   --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
#   -I ./src/proto \
#   src/proto/*.proto

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
    