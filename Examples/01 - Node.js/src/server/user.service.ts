import { PhoneNumber, User, UserType } from "../proto/user_pb";

export function phoneNumberGen(number: string) {
  return new PhoneNumber().setNumber(number);
}

export function createUser(
  id: number,
  firstName: string,
  lastName: string,
  phoneNumbers: PhoneNumber[],
  type: UserType
): User {
  return new User()
    .setId(id)
    .setFirstName(firstName)
    .setLastName(lastName)
    .setPhoneNumbersList(phoneNumbers)
    .setType(type);
}
