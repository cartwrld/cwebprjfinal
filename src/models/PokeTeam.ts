import { IsOptional, Length, IsPositive } from 'class-validator';

export default class PokeTeam {
  // constructor ()
  //
  // constructor (teamID: number, teamName: string, poke1: number, poke2?: number,
  //   poke3?: number, poke4?: number, poke5?: number, poke6?: number)
  //
  // constructor(
  //   teamID?: number,
  //   teamName?: string,
  //   poke1?: number,
  //   poke2?: number,
  //   poke3?: number,
  //   poke4?: number,
  //   poke5?: number,
  //   poke6?: number,
  // ) {
  //   this.teamID = teamID;
  //   this.teamName = teamName;
  //   this.poke1 = poke1 || null;
  //   this.poke2 = poke2 || null;
  //   this.poke3 = poke3 || null;
  //   this.poke4 = poke4 || null;
  //   this.poke5 = poke5 || null;
  //   this.poke6 = poke6 || null;
  // }

  @IsOptional()
    teamID: number | undefined;

  @Length(1, 50, { message: 'Team Name must be from $constraint1 to $constraint2 characters' })
    teamName = '';

  @IsPositive({ message: 'Pokemon ID must be a positive number!' })
    poke1 = 0;

  @IsPositive({ message: 'Pokemon ID must be a positive number!' })
    poke2: number | undefined;

  @IsPositive({ message: 'Pokemon ID must be a positive number!' })
    poke3: number | undefined;

  @IsPositive({ message: 'Pokemon ID must be a positive number!' })
    poke4: number | undefined;

  @IsPositive({ message: 'Pokemon ID must be a positive number!' })
    poke5: number | undefined;

  @IsPositive({ message: 'Pokemon ID must be a positive number!' })
    poke6: number | undefined;
}
