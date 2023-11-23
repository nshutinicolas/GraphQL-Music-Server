import { mockArtists, mockSongs } from "./dataset"
import { Song } from "./types/types"

const Resolvers = {
    Song: {
        artist: (song: Song) => {
            return mockArtists.find(artist => artist.id == song.artistId)
        }
    },
    Query: {
        fetchAllSongs: () => {
            return mockSongs
        },
        fetchSong: (_: any, args: any) => {
            return mockSongs.find(song => song.id == args.id)
        },
        searchSong:(_: any, args: any) => {
            return mockSongs.filter(song => song.name.toLocaleLowerCase().includes(args.containing))
        }
    }
}

export default Resolvers;
