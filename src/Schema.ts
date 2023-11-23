const Schema = `#graphql
    enum Genre {
        HIPHOP
        RNB
        POP
        CULTURAL
    }
    "Representation of the artist model"
    type Artist {
        id: ID!
        name: String!
        imageUrl: String
    }

    type Song {
        id: ID!
        name: String!
        audioUrl: String!
        imageUrl: String
        plays: Int
        genres: [Genre]
        artist: Artist
    }

    type Album {
        id: ID!
        name: String!
        description: String
        imageUrl: String
        songs: [Song]
        artist: Artist
    }

    type Playlist {
        id: ID!
        name: String!
        description: String
        imageUrl: String
        songs: [Song]
    }

    type Query {
        "Fetch all songs available"
        fetchAllSongs: [Song]
        "Fetch song by ID"
        fetchSongById(id: ID!): Song
        "Search for a song that has title matching a query"
        searchSongsByQuery(query: String): [Song]
        "Search song by an artist"
        searchSongsByArtist(id: ID!): [Song]
        "Fetch all artists available"
        fetchAllArtists: [Artist]
        "Fetch artist by ID"
        fetchArtistById(id: ID!): Artist
        "Fetch all albums from collection"
        fetchAllAlbums: [Album]
        "Fetch album by ID"
        fetchAlbumById(id: ID!): Album
    }
`

export default Schema;
/**
 * TODO: Possibility of using Fragment to extract out pagination and id, name fields
 * Possible acions on song
 * Search by genres
 * Search by artist
 * Search by name
 */
