/** Progressive enhancement untuk pemutar audio ketika aset nyata tersedia. */
(() => {
  "use strict";

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
  }

  function initAudioPlayer(player) {
    const audio = player.querySelector("audio");
    const controls = player.querySelector("[data-audio-controls]");
    if (!audio || !controls) return;
    const playButton = controls.querySelector("[data-audio-play]");
    const muteButton = controls.querySelector("[data-audio-mute]");
    const time = controls.querySelector("[data-audio-time]");
    const progress = controls.querySelector("[data-audio-progress]");
    const volume = controls.querySelector("[data-audio-volume]");
    const rate = controls.querySelector("[data-audio-rate]");
    if (!playButton || !muteButton || !time || !progress || !volume || !rate) return;

    const updatePlayButton = () => { const paused = audio.paused; playButton.textContent = paused ? "Putar" : "Jeda"; playButton.setAttribute("aria-label", paused ? "Putar audio" : "Jeda audio"); };
    const updateMuteButton = () => { const muted = audio.muted || audio.volume === 0; muteButton.textContent = muted ? "Aktifkan suara" : "Bisukan"; muteButton.setAttribute("aria-label", muted ? "Aktifkan suara audio" : "Bisukan audio"); };
    const updateTimeDisplay = () => { time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`; };
    const updateProgress = () => { progress.value = Number.isFinite(audio.duration) && audio.duration > 0 ? String((audio.currentTime / audio.duration) * 100) : "0"; };
    const handleSeek = () => { if (Number.isFinite(audio.duration)) audio.currentTime = (Number(progress.value) / 100) * audio.duration; };
    const handleVolume = () => { audio.volume = Number(volume.value); audio.muted = false; updateMuteButton(); };
    const handlePlaybackRate = () => { audio.playbackRate = Number(rate.value); };
    const handleAudioError = () => { controls.hidden = true; };

    controls.hidden = false;
    playButton.addEventListener("click", () => { if (audio.paused) audio.play().catch(handleAudioError); else audio.pause(); });
    muteButton.addEventListener("click", () => { audio.muted = !audio.muted; updateMuteButton(); });
    progress.addEventListener("input", handleSeek);
    volume.addEventListener("input", handleVolume);
    rate.addEventListener("change", handlePlaybackRate);
    audio.addEventListener("play", updatePlayButton);
    audio.addEventListener("pause", updatePlayButton);
    audio.addEventListener("ended", updatePlayButton);
    audio.addEventListener("timeupdate", () => { updateTimeDisplay(); updateProgress(); });
    audio.addEventListener("loadedmetadata", () => { updateTimeDisplay(); updateProgress(); });
    audio.addEventListener("volumechange", updateMuteButton);
    audio.addEventListener("error", handleAudioError);
    updatePlayButton(); updateMuteButton(); updateTimeDisplay(); updateProgress();
  }

  document.querySelectorAll("[data-audio-player]").forEach(initAudioPlayer);
})();
