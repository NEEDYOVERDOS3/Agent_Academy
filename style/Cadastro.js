var videoPaths = [
    'Data Img/video/PRESTIGE STAR GUARDIAN SYNDRA 1080p.mp4',
    'Data Img/video/star-guardian-xayah-and-rakan-league-of-legends-moewalls-com.mp4',
    'Data Img/video/Battle Bunny Miss Fortune Animated Login Screen.mp4',
    'Data Img/video/arcane-jinx-league-of-legends-moewalls-com.mp4',
    'Data Img/video/Ahri - Spirit Blossom Animated Wallpaper 1080p (HD).mp4',
    'Data Img/video/MORGANA NEMESIS ESTELAR.mp4'
  ];
  
  
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }
  
  function changeBackgroundVideo() {
    var videoIndex = getRandomIndex(videoPaths.length);
    var video = document.getElementById('bg-video');
    video.src = videoPaths[videoIndex];
    video.load();
  }
  
  window.onload = changeBackgroundVideo;