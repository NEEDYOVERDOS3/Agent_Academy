/*=============== MOSTRA/DESAPARECE SENHA LOGIN ===============*/
const passwordAccess = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Troca o Sigilo por letras normais
      input.type === 'password' ? input.type = 'text'
						              : input.type = 'password'

      // Icone muda
      iconEye.classList.toggle('ri-eye-fill')
      iconEye.classList.toggle('ri-eye-off-fill')
   })
}
passwordAccess('password','loginPassword')

/*=============== MOSTRA/DESAPARECE criando conta ===============*/
const passwordRegister = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Troca o Sigilo por letras normais
      input.type === 'password' ? input.type = 'text'
						              : input.type = 'password'

      // Icone muda
      iconEye.classList.toggle('ri-eye-fill')
      iconEye.classList.toggle('ri-eye-off-fill')
   })
}
passwordRegister('passwordCreate','loginPasswordCreate')

/*=============== MOSTRA/DESAPARECE LOGIN & CRIAR CONTA (troca de tela) ===============*/
const loginAcessRegister = document.getElementById('loginAccessRegister'),
      buttonRegister = document.getElementById('loginButtonRegister'),
      buttonAccess = document.getElementById('loginButtonAccess')

buttonRegister.addEventListener('click', () => {
   loginAcessRegister.classList.add('active')
})

buttonAccess.addEventListener('click', () => {
   loginAcessRegister.classList.remove('active')
})

/*======================== LIVE WALLPAPER ========================*/
var videoPaths = [
    'assets/img/Data Img/video/PRESTIGE STAR GUARDIAN SYNDRA 1080p.mp4',
    'assets/img/Data Img/video/star-guardian-xayah-and-rakan-league-of-legends-moewalls-com.mp4',
    'assets/img/Data Img/video/Battle Bunny Miss Fortune Animated Login Screen.mp4',
    'assets/img/Data Img/video/arcane-jinx-league-of-legends-moewalls-com.mp4',
    'assets/img/Data Img/video/Ahri - Spirit Blossom Animated Wallpaper 1080p (HD).mp4',
    'assets/img/Data Img/video/MORGANA NEMESIS ESTELAR.mp4'
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