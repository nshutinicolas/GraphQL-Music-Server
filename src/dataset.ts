import { Album, Artist, Playlist, Song } from "./types/types";

const mockSongs: Song[] = [
    {id: "1", name: "Song 1", audioUrl: "https://audio.url", artistId: "2", plays: 0, genres: ["Hiphop"], imageUrl: "https://image.url", albumId: "9", playlistIds: ["2", "9"]},
    {id: "2", name: "Song 2", audioUrl: "https://audio.url", artistId: "1", plays: 3, genres: ["Rnb"], imageUrl: "https://image.url", albumId: "1", playlistIds: ["7", "1"]},
    {id: "3", name: "Song 3", audioUrl: "https://audio.url", artistId: "5", plays: 0, genres: ["Hiphop"], imageUrl: "https://image.url", albumId: "5"},
    {id: "4", name: "Song 4", audioUrl: "https://audio.url", artistId: "7", plays: 8, genres: ["Hiphop"], imageUrl: "https://image.url", playlistIds: ["9", "2", "5"]}
]

const mockArtists: Artist[] = [
    {id: "1", name: "Artist 1", imageUrl: "https://img.url"},
    {id: "2", name: "Artist 2", imageUrl: "https://img.url"},
    {id: "4", name: "Artist 4", imageUrl: "https://img.url"},
    {id: "5", name: "Artist 5", imageUrl: "https://img.url"},
    {id: "7", name: "Artist 7", imageUrl: "https://img.url"},
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
