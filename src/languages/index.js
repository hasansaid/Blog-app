import english from './english';
import turkish from './turkish';
import db from '@yusuf-yeniceri/easy-storage';

const lang = db.ref ('lang').get ();
let exportedLang = turkish;

if (typeof lang == 'object' && Object.keys (lang).length == 0) {
  db.ref ('lang').set ('turkish');
} else {
  switch (lang) {
    case 'english':
      exportedLang = english;
      break;
    case 'turkish':
      exportedLang = turkish;
      break;
    default:
      break;
  }
}

export default exportedLang;
