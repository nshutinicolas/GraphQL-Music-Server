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
        song: [Song]
    }

    type Query {
        "Fetch all songs in collection"
        fetchAllSongs: [Song]
        "Fetch song from ID"
        fetchSong(id: ID!): Song
        "Search for a song that has title matching"
        searchSong(containing: String): [Song]
    }
`

export default Schema;
/**
 * Possible acions on song
 * Search by genres
 * Search by artist
 * Search by name
 */
