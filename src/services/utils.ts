export function capFirstLetter(val: string) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

export function TypePalette(pt1:string| undefined | null,pt2:string | undefined | null) {
  let tp = {
    t1brd: '',
    t1bg: '',
    t2brd: '',
    t2bg: '',
    tc: 'white',
    brd_grd: '',
    bg_grd: ''
  }

  tp = getTypePalette(tp, pt1,pt2);

  if (tp.t2brd !== '' && tp.t2bg !== '') {
    tp.bg_grd = `linear-gradient(to right bottom, ${tp.t1bg}, ${tp.t2bg})`
    tp.brd_grd = `linear-gradient(to right bottom, ${tp.t1brd}, ${tp.t2brd})`
    tp.tc = 'white'
  } else {
    tp.brd_grd = tp.t1brd
    tp.bg_grd = tp.t1bg
  }
  return tp
}

// Define a method to get the color based on Pokémon type
export function getTypePalette(tp: any, t1: string|undefined|null, t2: string | null | undefined) {

  // @ts-ignore
  switch (t1.toLowerCase()) {
    case 'normal':      tp.brd_grd = '#cccccc'; tp.bg_grd = '#d8d8d8'; tp.t1brd = '#cccccc'; tp.t1bg = '#d8d8d8'; tp.tc = '#333333'; break;
    case 'fire':        tp.brd_grd = '#DC143C'; tp.bg_grd = '#e74e6c'; tp.t1brd = '#DC143C'; tp.t1bg = '#e74e6c'; break;
    case 'water':       tp.brd_grd = '#235fee'; tp.bg_grd = '#628df4'; tp.t1brd = '#235fee'; tp.t1bg = '#628df4'; break;
    case 'grass':       tp.brd_grd = '#27CB4F'; tp.bg_grd = '#68db84'; tp.t1brd = '#27CB4F'; tp.t1bg = '#68db84'; break;
    case 'electric':    tp.brd_grd = '#FFFF00'; tp.bg_grd = '#e8e868'; tp.t1brd = '#FFFF00'; tp.t1bg = '#e8e868'; tp.tc = '#333333'; break;
    case 'ice':         tp.brd_grd = '#98e4ff'; tp.bg_grd = '#bef2ff'; tp.t1brd = '#98e4ff'; tp.t1bg = '#bef2ff'; tp.tc = '#333333'; break;
    case 'fighting':    tp.brd_grd = '#800000'; tp.bg_grd = '#923232'; tp.t1brd = '#800000'; tp.t1bg = '#923232'; break;
    case 'poison':      tp.brd_grd = '#800080'; tp.bg_grd = '#953695'; tp.t1brd = '#800080'; tp.t1bg = '#953695'; break;
    case 'ground':      tp.brd_grd = '#F4A460'; tp.bg_grd = '#fac592'; tp.t1brd = '#F4A460'; tp.t1bg = '#fac592'; tp.tc = '#333333'; break;
    case 'flying':      tp.brd_grd = '#aac5e8'; tp.bg_grd = '#c2d6f1'; tp.t1brd = '#aac5e8'; tp.t1bg = '#c2d6f1'; tp.tc = '#333333'; break;
    case 'psychic':     tp.brd_grd = '#ff899a'; tp.bg_grd = '#fcbac7'; tp.t1brd = '#ff899a'; tp.t1bg = '#fcbac7'; tp.tc = '#333333'; break;
    case 'bug':         tp.brd_grd = '#808000'; tp.bg_grd = '#9a9a3b'; tp.t1brd = '#808000'; tp.t1bg = '#9a9a3b'; break;
    case 'rock':        tp.brd_grd = '#8B4513'; tp.bg_grd = '#96633f'; tp.t1brd = '#8B4513'; tp.t1bg = '#96633f'; break;
    case 'ghost':       tp.brd_grd = '#483D8B'; tp.bg_grd = '#605893'; tp.t1brd = '#483D8B'; tp.t1bg = '#605893'; break;
    case 'dark':        tp.brd_grd = '#424242'; tp.bg_grd = '#828282'; tp.t1brd = '#424242'; tp.t1bg = '#828282'; break;
    case 'dragon':      tp.brd_grd = '#7B68EE'; tp.bg_grd = '#9c8df6'; tp.t1brd = '#7B68EE'; tp.t1bg = '#9c8df6'; break;
    case 'steel':       tp.brd_grd = '#bebebe'; tp.bg_grd = '#acacac'; tp.t1brd = '#bebebe'; tp.t1bg = '#acacac'; tp.tc = '#333333'; break;
    case 'fairy':       tp.brd_grd = '#ffbec8'; tp.bg_grd = '#ffcfd7'; tp.t1brd = '#ffbec8'; tp.t1bg = '#ffcfd7'; tp.tc = '#333333'; break;
    default:            tp.brd_grd = '#FFFFFF'; tp.bg_grd = '#FFFFFF'; tp.t1brd = '#FFFFFF'; tp.t1bg = '#FFFFFF'; tp.tc = '#333333'; break;
  }
  if (t2 !== '' &&  t2 !== null && t2 !== undefined ) {
    switch (t2.toLowerCase()) {
      case 'normal':      tp.t2brd = '#cccccc'; tp.t2bg = '#d8d8d8'; tp.tc = '#333333'; break;
      case 'fire':        tp.t2brd = '#DC143C'; tp.t2bg = '#e74e6c'; break;
      case 'water':       tp.t2brd = '#235fee'; tp.t2bg = '#628df4'; break;
      case 'grass':       tp.t2brd = '#27CB4F'; tp.t2bg = '#68db84'; break;
      case 'electric':    tp.t2brd = '#FFFF00'; tp.t2bg = '#e8e868'; tp.tc = '#333333'; break;
      case 'ice':         tp.t2brd = '#98e4ff'; tp.t2bg = '#bef2ff'; tp.tc = '#333333'; break;
      case 'fighting':    tp.t2brd = '#800000'; tp.t2bg = '#923232'; break;
      case 'poison':      tp.t2brd = '#800080'; tp.t2bg = '#953695'; break;
      case 'ground':      tp.t2brd = '#F4A460'; tp.t2bg = '#fac592'; tp.tc = '#333333'; break;
      case 'flying':      tp.t2brd = '#aac5e8'; tp.t2bg = '#c2d6f1'; tp.tc = '#333333'; break;
      case 'psychic':     tp.t2brd = '#ff899a'; tp.t2bg = '#fcbac7'; tp.tc = '#333333'; break;
      case 'bug':         tp.t2brd = '#808000'; tp.t2bg = '#9a9a3b'; break;
      case 'rock':        tp.t2brd = '#8B4513'; tp.t2bg = '#96633f'; break;
      case 'ghost':       tp.t2brd = '#483D8B'; tp.t2bg = '#605893'; break;
      case 'dark':        tp.t2brd = '#424242'; tp.t2bg = '#828282'; break;
      case 'dragon':      tp.t2brd = '#7B68EE'; tp.t2bg = '#9c8df6'; break;
      case 'steel':       tp.t2brd = '#bebebe'; tp.t2bg = '#acacac'; tp.tc = '#333333'; break;
      case 'fairy':       tp.t2brd = '#ffbec8'; tp.t2bg = '#ffcfd7'; tp.tc = '#333333'; break;
      // default:            tp.t2brd = ''; tp.t2bg = ''; tp.tc = '#333333'; break;
    }
  }
  return tp;
}
