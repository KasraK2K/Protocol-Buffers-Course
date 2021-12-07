import { User, UserType } from "./src/proto/user_pb";
import { users } from "./src/server/db";
import { phoneNumberGen, createUser } from "./src/server/user.service";

const user: User = createUser(
  4,
  "John",
  "Doe",
  [
    phoneNumberGen("1234567890"),
    phoneNumberGen("0987654321"),
    phoneNumberGen("0954356784"),
  ],
  UserType.ADMIN
);

const serialize = user.serializeBinary();

const deserialize = User.deserializeBinary(serialize);

const object = deserialize.toObject();
console.log(object);

const allUsers = users.map((user) => user.toObject());
console.log(allUsers);
