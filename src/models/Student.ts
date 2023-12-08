import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  Length,
  MaxLength,
} from "class-validator";

export default class Student {
  //id = 0;
  // id: number | undefined;

  @IsOptional()
  id!: number;

  @Length(1, 50, {
    message:
      "PokeName must be between $constraint1 and $constraint2 characters!",
  })
  givenName!: string;

  @MaxLength(50, {
    message: "Family Name can be at most, $constraint1 characters",
  })
  @IsOptional()
  familyName!: string;

  @IsEmail({}, { message: "Email must be in a valid email format" })
  email!: string;

  @IsPhoneNumber("CA", { message: "Phone number must be in Canadian format" })
  phone!: string;

  @MaxLength(200, { message: "Address can be at most $constraint1 characters" })
  @IsOptional()
  address!: string;
}
