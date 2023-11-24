type Artist = {
    id: string
    name: string
    imageUrl?: string
    biography?: string
}

type Song = {
    id: string
    name: string
    audioUrl: string
    imageUrl?: string
    plays?: number
    genres?: string[]
    artistId: string
    albumId?: string
    playlistIds?: string[]
}

type Album = {
    id: string
    name: string
    description?: string
    imageUrl?: string
    artistId: string
    plays?: number
}

type Playlist = {
    id: string
    name: string
    description?: string
    imageUrl?: string
    plays?: number
}

export { Artist, Song, Album, Playlist }
