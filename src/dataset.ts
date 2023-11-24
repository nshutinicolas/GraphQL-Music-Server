import { Album, Artist, Playlist, Song } from "./types/types";

const mockSongs: Song[] = [
    {
        "id": "13958",
        "name": "Mama",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda60f590798413ez0Tv5VeQKMo.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda60f5901af3d6eno1.jpg",
        "genres": ["Gakondo"],
        "artistId": "10948",
        "plays": 44
    },
    {
        "id": "13784",
        "name": "Icyaka",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda6054e16bdac5dICYAKA by Noëlla IZERE(official video)(MP3_128K).mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda6054e15172052images (2).jpeg",
        "genres": ["Afrobeat"],
        "artistId": "10948",
        "plays": 155
    },
    {
        "id": "13629",
        "name": "Iby'Isi",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda60112e45c7541Noella_IZERE-IBY_ISI(Official_Video)(MP3_160K)[1].mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda60112e02ce214maxresdefault.jpg",
        "genres": ["Gakondo"],
        "artistId": "10948",
        "plays": 120
    },
    {
        "id": "13628",
        "name": "Ikirutibindi",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda60112d802a408IKIRUTIBINDI_by_Noëlla_Izere(MP3_160K)[1].mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda60112d4620c137bfl8BDHdxDAVv_I.jpg",
        "genres": ["Gakondo"],
        "artistId": "10948",
        "plays": 214
    },
    {
        "id": "13627",
        "name": "Icyo Uzaba",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda60112bf207813Icyo_uzaba_by_Noëlla_Izere(Lyrics_video)(MP3_160K)[1].mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda60112bccecadbrising-female-traditional-musician-noella-izere.jpg",
        "genres": ["Gakondo"],
        "artistId": "10948",
        "plays": 85
    },
    {
        "id": "13931",
        "name": "Katapilla",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda60e065c7be04ay2mate.com - Bruce Melodie katapilla Official Video.mp3",
        "imageUrl": "No image URL",
        "genres": ["RNB"],
        "artistId": "10892",
        "plays": 793
    },
    {
        "id": "13880",
        "name": "Game On",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda60a8f8b622df9Bruce Melodie _ Dip Doundou Guiss - GAME ON (Official BAL Anthem)(MP3_128K).mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda60a8f880c1ebcdownload (2).jpeg",
        "genres": ["Afrobeat"],
        "artistId": "10892",
        "plays": 411
    },
    {
        "id": "13766",
        "name": "Bado",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda6049dcc4b32afOL0Lpq7wKDE.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda6049dcb15e924unm.jpg",
        "genres": ["RNB"],
        "artistId": "10892",
        "plays": 1817
    },
    {
        "id": "13400",
        "name": "Abu Dhabi",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe724dea895fBruce Melodie - Abu Dhabi (Official Music Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fedf18a90164ac34ae1fda29b8fe781ac8d6d32a6bc7.jpg",
        "genres": ["RNB"],
        "artistId": "10892",
        "plays": 567
    },
    {
        "id": "13399",
        "name": "Blocka",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe7259aa0e99Bruce Melodie - Blocka ( Official Music Video )(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fe7255229d57Itahiwacu-Bruce-uzwi-nka-Bruce-Melodie.jpg",
        "genres": ["RNB"],
        "artistId": "10892",
        "plays": 236
    },
    {
        "id": "13398",
        "name": "Henzapu",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe725f9c597fBruce Melodie - Henzapu (Official Lyric Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fedf3be74372images.jpeg",
        "genres": ["RNB"],
        "artistId": "10892",
        "plays": 307
    },
    {
        "id": "13397",
        "name": "Ikinya",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe7298d87ac4Bruce Melodie - Ikinya (Official Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fe72932ef918Itahiwacu-Bruce-uzwi-nka-Bruce-Melodie.jpg",
        "genres": ["RNB"],
        "artistId": "10892",
        "plays": 164
    },
    {
        "id": "13396",
        "name": "Ikinyafu",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe72a9071bd7Bruce Melodie - Ikinyafu ft. Kenny Sol (Official Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fedf3001a8b6e2f9247929b404b2fe98ba6f32301e3b.jpg",
        "genres": ["RNB"],
        "artistId": "10892",
        "plays": 4620
    },
    {
        "id": "13395",
        "name": "Katerina",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe72b69837d1Bruce Melodie - Katerina (Official Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fedf2a86975151TY+665c-L._SS500_.jpg",
        "genres": ["RNB"],
        "artistId": "10892",
        "plays": 277
    },
    {
        "id": "13394",
        "name": "Saa Moya",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe72bf59f1e6Bruce Melodie - Saa Moya (Official Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fedf22a8367cmaxresdefault (1).jpg",
        "genres": ["RNB"],
        "artistId": "10892",
        "plays": 317
    },
    {
        "id": "13441",
        "name": "Ndaje",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe74a4f609ecThe Ben - Ndaje (Official Lyric Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5ff0f6a8d395e1560931316ndaje.jpeg",
        "genres": ["RNB"],
        "artistId": "10897",
        "plays": 1301
    },
    {
        "id": "13427",
        "name": "Ntacyadutanya",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe7425445960Ntacyadutanya by The Ben ft Priscillah (Official Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fe7422fed400ben-6097921560939663.jpg",
        "genres": ["RNB"],
        "artistId": "10897",
        "plays": 1041
    },
    {
        "id": "13426",
        "name": "Roho Yanjye",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe742e6a3c72Roho Yanjye - THE BEN (OFFICIAL LYRIC VIDEO)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fe742c528e3aben-6097921560939663.jpg",
        "genres": ["RNB"],
        "artistId": "10897",
        "plays": 847
    },
    {
        "id": "13425",
        "name": "Habibi",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe74353e6d33The Ben - Habibi (Official Music Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fe743118e3ebben-6097921560939663.jpg",
        "genres": ["RNB"],
        "artistId": "10897",
        "plays": 538
    },
    {
        "id": "13424",
        "name": "Kola",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe743c05ce2dThe Ben - Kola ( Official lyric Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fee2d53c4e5341hL4pxanNL._SR600,315_PIWhiteStrip,BottomLeft,0,35_SCLZZZZZZZ_FMpng_BG255,255,255.png",
        "genres": ["RNB"],
        "artistId": "10897",
        "plays": 366
    },
    {
        "id": "13423",
        "name": "Naremeye",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe7441f647d9The Ben - Naremeye (Official Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fe743f87c4f2ben-6097921560939663.jpg",
        "genres": ["RNB"],
        "artistId": "10897",
        "plays": 399
    },
    {
        "id": "13422",
        "name": "Vazi",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe745b1c3cd1The Ben - Vazi (Official Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fe7459a66715ben-6097921560939663.jpg",
        "genres": ["RNB"],
        "artistId": "10897",
        "plays": 496
    },
    {
        "id": "13421",
        "name": "Cant get Enough",
        "audioUrl": "https://storage.inyarwanda.com/storage/audios/inyarwanda5fe7461c4a4adThe Ben ft Otile Brown - Can_t get Enough (Official Video)(MP3_128K)_1.mp3",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fe745ff80814ben-6097921560939663.jpg",
        "genres": ["RNB"],
        "artistId": "10897",
        "plays": 329
    }
]

const mockArtists: Artist[] = [
    {
        "id": "10948",
        "name": "Noella Izere",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda60112af9b9735rising-female-traditional-musician-noella-izere.jpg",
        "biography": "No biography",
    },
    {
        "id": "10892",
        "name": "Bruce melody",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fe7255229d57Itahiwacu-Bruce-uzwi-nka-Bruce-Melodie.jpg",
        "biography": "No biography"
    },
    {
        "id": "10897",
        "name": "The Ben",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarwanda5fe7381e32445ben-6097921560939663.jpg",
        "biography": "No biography",
    },
    {
        "id": "11127",
        "name": "Emma",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarda61545100b4ae1im7.jpg",
        "biography": "No biography"
    },
    {
        "id": "11126",
        "name": "Bwiza",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarda614de908832e6em0-6717111624270505.jpg",
        "biography": "No biography"
    },
    {
        "id": "11125",
        "name": "Muchomante",
        "imageUrl": "https://storage.inyarwanda.com/storage/images/inyarda614de7e004795index11111111111111.jpg",
        "biography": "No biography"
    }
]

const mockAlbums: Album[] = [
    {id: "1", name: "First album", imageUrl: "https://img.url", artistId: "1", description: "first album from me", plays: 5},
    {id: "2", name: "Second album", imageUrl: "https://img.url", artistId: "1", description: "Love hits", plays: 3},
    {id: "3", name: "Third album", imageUrl: "https://img.url", artistId: "5"},
    {id: "5", name: "Forth album", imageUrl: "https://img.url", artistId: "5", description: "Most Wanted", plays: 2},
    {id: "6", name: "Sixth album", imageUrl: "https://img.url", artistId: "7", description: "Another one"},
    {id: "7", name: "Seventh album", imageUrl: "https://img.url", artistId: "4", description: "Killer hits only", plays: 1},
    {id: "9", name: "Nineth album", imageUrl: "https://img.url", artistId: "2", plays: 2},
]

const mockPlaylists: Playlist[] = [
    {id: "1", name: "Weekly hits", imageUrl: "https://img.url", plays: 42},
    {id: "5", name: "Most loved", imageUrl: "https://img.url", plays: 23},
    {id: "7", name: "Rwandan hits", imageUrl: "https://img.url", plays: 5},
    {id: "2", name: "Bujumbura Most wanted", imageUrl: "https://img.url", plays: 20},
    {id: "9", name: "Love songs", imageUrl: "https://img.url", plays: 120},
]

export { mockSongs, mockArtists, mockAlbums, mockPlaylists }
