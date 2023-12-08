import {
  IsOptional, Length, IsNotEmpty, IsIn, Max, Min, IsUrl, IsNumber,
} from 'class-validator';

const POKE_TYPES = ['', 'normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting',
  'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];

export default class Pokemon {
  constructor ()

  /**
   * Represents a Pokemon with attributes:
   *
   * @param id {number} unique identifier
   * @param name {string} name
   * @param t1 {string} primary type
   * @param t2 {string} secondary type
   * @param hp {number} hit points (HP)
   * @param atk {number} attack stat
   * @param def {number} defense stat
   * @param spatk {number} special attack stat
   * @param spdef {number} special defense stat
   * @param spd {number} speed stat
   * @param sprite {string} sprite image URL or path
   */
  constructor (
    id: number,
    name: string,
    t1: string,
    t2: string,
    hp: number,
    atk: number,
    def: number,
    spatk: number,
    spdef: number,
    spd: number,
    sprite: string)

  /**
   * Used for individual values that were missing when building the database.
   * For dealing with Pokemon retrieved from the initial PokeAPI call that didn't
   * have all the required information.
   */
  constructor(id?: number, name?: string, t1?: string, t2?: string, hp?: number, atk?: number,
    def?: number, spatk?: number, spdef?: number, spd?: number, sprite?: string) {
    this.pokeID = id;
    this.pokeName = name;
    this.pokeType1 = t1;
    this.pokeType2 = t2;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spatk = spatk;
    this.spdef = spdef;
    this.spd = spd;
    this.gen = Pokemon.setPokeGen(id);
    this.sprite = sprite;
  }

  @IsOptional()

  pokeID?: number;

  @Length(1, 50, { message: 'PokeName must be from $constraint1 to $constraint2 characters!' })
  @IsNotEmpty({message: 'You must enter a PokeName'})
  pokeName?: string | undefined;

  @IsIn(POKE_TYPES, { message: 'You must choose a valid PokeType!' })
  pokeType1?: string | undefined;

  @IsIn(POKE_TYPES, { message: 'You must choose a valid PokeType!' })
  @IsOptional()
  pokeType2?: string | undefined;

  @IsNumber({}, { message: 'Gen must be a number!' })
  @Max(10, { message: 'Gen 10 is the latest generation!' })
  @Min(1, { message: 'Gen 1 was the first generation!' })
  gen?: number | undefined;


  @IsNotEmpty({message: 'You must enter an HP stat!'})
  hp?: number | undefined;


  @IsNotEmpty({message: 'You must enter an ATK stat!'})
  atk?: number | undefined;


  @IsNotEmpty({message: 'You must enter an DEF stat!'})
  def?: number | undefined;


  @IsNotEmpty({message: 'You must enter an SP.ATK stat!'})
  spatk?: number | undefined;


  @IsNotEmpty({message: 'You must enter an SP.ATK stat!'})
  spdef?: number | undefined;


  @IsNotEmpty({message: 'You must enter an SPD stat!'})
  spd?: number | undefined;

  @IsUrl({}, { message: 'The sprite must be a valid URL' })
  sprite?: string | undefined;


  /**
   * Function for setting the Generation of the Pokemon based on the ID
   */
  private static setPokeGen(pokeid: number | undefined): number {
    if (pokeid === undefined) {
      return 10;
    }

    const pokeNum = pokeid;
    let pokeGen = 0;
    switch (true) {
      case pokeNum <= 151:
        pokeGen = 1;
        break;
      case pokeNum >= 151 && pokeNum < 252:
        pokeGen = 2;
        break;
      case pokeNum >= 252 && pokeNum < 387:
        pokeGen = 3;
        break;
      case pokeNum >= 387 && pokeNum < 495:
        pokeGen = 4;
        break;
      case pokeNum >= 495 && pokeNum < 650:
        pokeGen = 5;
        break;
      case pokeNum >= 650 && pokeNum < 722:
        pokeGen = 6;
        break;
      case pokeNum >= 722 && pokeNum < 810:
        pokeGen = 7;
        break;
      case pokeNum >= 810 && pokeNum < 906:
        pokeGen = 8;
        break;
      case pokeNum >= 906 && pokeNum < 1017:
        pokeGen = 9;
        break;
      case pokeNum >= 1010:
        pokeGen = 10;
        break;
      default:
        pokeGen = 10;
        break;
    }
    return pokeGen;
  }
}
