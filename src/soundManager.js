import sfxEnter from "./assets/sounds/enter.wav";
import sfxMove from "./assets/sounds/move.wav";
import sfxConfirm from "./assets/sounds/confirm.wav";
import sfxConfirmDetail from "./assets/sounds/confirm_detail.wav";
import bgmTrack from "./assets/sounds/bgm.mp3";

let bgmAudio = null;
let isBgmPlaying = false;

export const startBGM = () => {
  if (!bgmAudio) {
    bgmAudio = new Audio(bgmTrack);
    bgmAudio.loop = true;  
    bgmAudio.volume = 0.15; 
  }

  // Só tenta dar o play se a música estiver parada
  if (!isBgmPlaying) {
    bgmAudio.play().then(() => {
      // Deu certo! Avisa no console e tranca para não tocar duas vezes
      console.log("✅ Música de fundo rodando!");
      isBgmPlaying = true;
    }).catch((erro) => {
      // Se o navegador bloquear, ele não muda a variável isBgmPlaying.
      // Assim, no próximo clique, ele tenta de novo!
      console.warn("Navegador aguardando mais interação para liberar o áudio...");
    });
  }
};

export const playEnter = () => {
  const audio = new Audio(sfxEnter);
  audio.volume = 0.5; 
  audio.play().catch(() => {}); 
};

export const playMove = () => {
  const audio = new Audio(sfxMove);
  audio.volume = 0.3; 
  audio.play().catch(() => {});
};

export const playConfirm = () => {
  const audio = new Audio(sfxConfirm);
  audio.volume = 0.6;
  audio.play().catch(() => {});
};

export const playConfirmDetail = () => {
  const audio = new Audio(sfxConfirmDetail);
  audio.volume = 0.6;
  audio.play().catch(() => {});
};