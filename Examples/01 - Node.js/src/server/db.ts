import { User, UserType } from "../proto/user_pb";
import { createUser, phoneNumberGen } from "./user.service";

const phone1 = phoneNumberGen("1234567890");
const phone2 = phoneNumberGen("9876543210");
const phone3 = phoneNumberGen("1233214566");

export const users: User[] = [
  createUser(1, "Alex", "Banks", [phone1, phone2], UserType.UNKNOWN),
  createUser(2, "Jim", "Kazama", [phone1, phone2, phone3], UserType.ADMIN),
  createUser(3, "Alex", "Banks", [phone3], UserType.USER),
];
