// package: com.example.user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getId(): number;
    setId(value: number): User;
    getFirstName(): string;
    setFirstName(value: string): User;
    getLastName(): string;
    setLastName(value: string): User;
    clearPhoneNumbersList(): void;
    getPhoneNumbersList(): Array<PhoneNumber>;
    setPhoneNumbersList(value: Array<PhoneNumber>): User;
    addPhoneNumbers(value?: PhoneNumber, index?: number): PhoneNumber;
    getType(): UserType;
    setType(value: UserType): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: number,
        firstName: string,
        lastName: string,
        phoneNumbersList: Array<PhoneNumber.AsObject>,
        type: UserType,
    }
}

export class PhoneNumber extends jspb.Message { 
    getNumber(): string;
    setNumber(value: string): PhoneNumber;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhoneNumber.AsObject;
    static toObject(includeInstance: boolean, msg: PhoneNumber): PhoneNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PhoneNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhoneNumber;
    static deserializeBinaryFromReader(message: PhoneNumber, reader: jspb.BinaryReader): PhoneNumber;
}

export namespace PhoneNumber {
    export type AsObject = {
        number: string,
    }
}

export enum UserType {
    UNKNOWN = 0,
    USER = 1,
    ADMIN = 2,
}
