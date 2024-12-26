// Select elements
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('pre');
const nextButton = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const songList = document.getElementById('song-list');
const songCover=document.getElementById('song_cover');

// Playlist array
const songs = [
  { title: 'Amaran Song', src:'data/Amaran.mp3',cover:'data/amaran_cover.jpg' },
  { title: 'Nerukku ner Bgm', src:'data/Nerukku.mp3', cover:'data/nerukku_ner.jpg' },
  { title: 'Murugan-song', src: 'data/Murugan.mp3', cover:'data/murugan.jpg' },
  {title:'Master Bgm', src:'data/masterBgm.mp3', cover:'data/masterCover.jpg'},
  {title:'Leo Song', src:'data/Leo.mp3', cover:'data/leoCover.jpg'}
];

let currentSongIndex = 0;

// Load playlist into the UI
function loadPlaylist() {
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.addEventListener('click', () => playSong(index));
    songList.appendChild(li);
  });
}

// Play the current song
function playSong(index) {
  currentSongIndex = index;
  songCover.src=songs[index].cover;
  audioPlayer.src = songs[index].src;
  songTitle.textContent = songs[index].title;
  audioPlayer.play();
  playButton.textContent = 'Pause';
}

// Toggle play/pause
function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playButton.textContent = 'Play';
  }
}

// Play next song
function playNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong(currentSongIndex);
}

// Play previous song
function playPrev() {
  currentSongIndex =
    (currentSongIndex - 1 + songs.length) % songs.length;
  playSong(currentSongIndex);
}

// Event listeners
playButton.addEventListener('click', togglePlay);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);

// Load playlist on page load
 loadPlaylist();
