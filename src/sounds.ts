export interface Sound {
  id: string
  fileId: string
  artist: string | null
  songName: string
  name: string // Keep for backward compatibility
  path: string
  startTime: number // Start time in seconds
}

export const SOUNDS: Sound[] = [
  {
    id: 'run',
    fileId: '2',
    artist: 'Undertale OST',
    songName: '032 Run',
    name: 'Undertale OST - 032 Run',
    path: `${process.env.PUBLIC_URL}/audio/tracks/2 - Undertale OST - 032 Run.mp3`,
    startTime: 0,
  },
  {
    id: 'danse-macabre',
    fileId: '3',
    artist: 'Saint-Saëns',
    songName: 'Danse Macabre',
    name: 'Saint-Saëns - Danse Macabre',
    path: `${process.env.PUBLIC_URL}/audio/tracks/3 - Saint-Saëns - Danse Macabre.mp3`,
    startTime: 78.5, // 1:18
  },
  {
    id: 'thriller',
    fileId: '4',
    artist: 'Michael Jackson',
    songName: 'Trhiller',
    name: 'Michael Jackson - Trhiller',
    path: `${process.env.PUBLIC_URL}/audio/tracks/4 - Michael Jackson - Trhiller.mp3`,
    startTime: 41, // 0:40
  },
  {
    id: 'what-was-i-made-for',
    fileId: '6',
    artist: 'Billie Eilish',
    songName: 'What Was I Made For?',
    name: 'Billie Eilish - What Was I Made For?',
    path: `${process.env.PUBLIC_URL}/audio/tracks/6 - Billie Eilish - What Was I Made For.mp3`,
    startTime: 16.7, // 0:17
  },
  {
    id: 'lacrimosa',
    fileId: '7',
    artist: 'Mozart',
    songName: 'Lacrimosa',
    name: 'Mozart - Lacrimosa',
    path: `${process.env.PUBLIC_URL}/audio/tracks/7 - Mozart - Lacrimosa.mp3`,
    startTime: 144, // 2:24
  },
  {
    id: 'reverie',
    fileId: '8',
    artist: 'Debussy',
    songName: 'Rêverie',
    name: 'Debussy - Rêverie',
    path: `${process.env.PUBLIC_URL}/audio/tracks/8 - Debussy - Rêverie.mp3`,
    startTime: 4, // 0:04
  },
  {
    id: 'uwa-so-holiday',
    fileId: '9',
    artist: 'Understal OST',
    songName: '018 Uwa So Holiday',
    name: 'Understal OST - 018 Uwa So Holiday',
    path: `${process.env.PUBLIC_URL}/audio/tracks/9 - Understal OST - 018 Uwa So Holiday.mp3`,
    startTime: 0,
  },
  {
    id: 'les-schtroumpfs',
    fileId: '10',
    artist: 'Les Schtroumpfs',
    songName: 'Opening theme',
    name: 'Les Schtroumpfs - Opening theme',
    path: `${process.env.PUBLIC_URL}/audio/tracks/10 - Les Schtroumpfs - Opening theme.mp3`,
    startTime: 3.5, // 0:03
  },
  {
    id: 'undyne',
    fileId: '11',
    artist: 'Undertale OST',
    songName: '030 Undyne',
    name: 'Undertale OST - 030 Undyne',
    path: `${process.env.PUBLIC_URL}/audio/tracks/11 - Undertale OST - 030 Undyne.mp3`,
    startTime: 0,
  },
  {
    id: 'wrong-enemy',
    fileId: '12',
    artist: 'Undertale OST',
    songName: '060 Wrong Enemy',
    name: 'Undertale OST - 060 Wrong Enemy',
    path: `${process.env.PUBLIC_URL}/audio/tracks/12 - Undertale OST - 060 Wrong Enemy.mp3`,
    startTime: 0,
  },
  {
    id: 'badum-tss',
    fileId: '13',
    artist: null,
    songName: 'Ba Dum Tss',
    name: 'Ba Dum Tss',
    path: `${process.env.PUBLIC_URL}/audio/tracks/13 - Ba Dum Tss.mp3`,
    startTime: 6.8, // 0:06
  },
  {
    id: 'sound-of-silence',
    fileId: '14',
    artist: 'Simon & Garfunkel',
    songName: 'The Sound of Silence',
    name: 'Simon & Garfunkel - The Sound of Silence',
    path: `${process.env.PUBLIC_URL}/audio/tracks/14 - Simon & Garfunkel - The Sound of Silence.mp3`,
    startTime: 3.8, // 0:04
  },
  {
    id: 'my-war',
    fileId: '15',
    artist: 'SNK',
    songName: 'My War',
    name: 'SNK - My War',
    path: `${process.env.PUBLIC_URL}/audio/tracks/15 - SNK - My War.mp3`,
    startTime: 5.7, // 0:05
  },
  {
    id: 'rosalina-observatory',
    fileId: '16',
    artist: 'Mario Galaxy',
    songName: "Rosalina's Observatory",
    name: "Mario Galaxy - Rosalina's Observatory",
    path: `${process.env.PUBLIC_URL}/audio/tracks/16 - Mario Galaxy - Rosalina's Observatory.mp3`,
    startTime: 9.7, // 0:09
  },
  {
    id: 'enemy-approaching',
    fileId: '17',
    artist: 'Undertale OST',
    songName: '009 Enemy Approaching',
    name: 'Undertale OST - 009 Enemy Approaching',
    path: `${process.env.PUBLIC_URL}/audio/tracks/17 - Undertale OST - 009 Enemy Approaching.mp3`,
    startTime: 0,
  },
  {
    id: 'for-the-fans',
    fileId: '18',
    artist: 'Undertale OST',
    songName: 'For the Fans',
    name: 'Undertale OST - For the Fans',
    path: `${process.env.PUBLIC_URL}/audio/tracks/18 - Undertale OST - For the Fans.mp3`,
    startTime: 0,
  },
  {
    id: 'one-piece-funny',
    fileId: '19',
    artist: 'One Piece',
    songName: 'Funny',
    name: 'One Piece - Funny',
    path: `${process.env.PUBLIC_URL}/audio/tracks/19 - One Piece - Funny.mp3`,
    startTime: 34.5, // 0:25
  },
]
