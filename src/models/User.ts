import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUrl,
  Length,
  Max,
  Min
} from "class-validator";

// TODO come up with some actual constraints

export default class User {

  @IsOptional()
  id: number | undefined;

  @Length(1, 50, {message: 'Given Name must be from $constraint1 to $constraint2 characters '})
  token: string | undefined;

  @Length(1, 50, {message: 'Access Level must be from $constraint1 to $constraint2 characters '})
  accessLevel: string | undefined;

  @Length(1, 50, {message: 'Username must be from $constraint1 to $constraint2 characters '})
  username: string | undefined;
}
