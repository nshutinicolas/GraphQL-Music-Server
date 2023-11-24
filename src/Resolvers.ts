import { mockAlbums, mockArtists, mockPlaylists, mockSongs } from "./dataset"
import { Album, Playlist, Song } from "./types/types"
import axios from "axios"
import fs from "fs"

const Resolvers = {
    Song: {
        artist: (song: Song) => {
            return mockArtists.find(artist => artist.id == song.artistId)
        }
    },
	Album: {
		songs: (album: Album) => {
			return mockSongs.filter(song => song.albumId == album.id)
		},
		artist: (album: Album) => {
			return mockArtists.find(artist => artist.id == album.artistId)
		}
	},
	Playlist: {
		songs: (playlist: Playlist) => {
			return mockSongs.filter(song => song.playlistIds?.includes(playlist.id))
		}
	},
    Query: {
        fetchAllSongs: () => {
            return mockSongs
        },
        fetchSongById: (_: any, args: any) => {
            return mockSongs.find(song => song.id == args.id)
        },
        searchSongsByQuery:(_: any, args: any) => {
            return mockSongs.filter(song => song.name.toLocaleLowerCase().includes(args.query))
        },
		searchSongsByArtist:(_: any, args: any) => {
			return mockSongs.filter(song => song.artistId == args.id)
		},
		fetchAllArtists: async () => {
			
			return mockArtists
		},
		fetchArtistById: (_: any, args: any) => {
			return mockArtists.find(artist => artist.id == args.id)
		},
		fetchAllAlbums: () => {
			return mockAlbums
		},
		fetchAlbumById: (_: any, args: any) => {
			return mockAlbums.find(album => album.id == args.id)
		},
    }
}

export default Resolvers;
