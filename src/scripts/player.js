(function() {
  let player = document.getElementById("video");
  const playerContainer = $(".player");
  const onPlay = () => {
    player.play();

      if (playerContainer.hasClass("paused")) {
        player.pause()
      } else {
        player.play()
      }
  }

  let eventsInit =() => {
    $(".player__start").click((e) => {
      e.preventDefault();

      onPlay();
    });

    $(".player__main-start").click((e) => {
      e.preventDefault();

      onPlay();
    });

    $(".player__playback").click((e) => {
      const bar = $(e.currentTarget);
      const clickedPosition = e.originalEvent.layerX;
      const newBtnPositionPercent = (clickedPosition / bar.width()) * 100;
      const newPlaybackPositionSec = (player.duration / 100) * newBtnPositionPercent;

      $(".player__playback-btn").css({
        left: `${newBtnPositionPercent}%`
      });

      $(".player__playback-colored").css({
        width: `${newBtnPositionPercent}%`
      });
    
      player.currentTime = newPlaybackPositionSec;
    });

    $(".player__sound-bar").click((e) => {
      const bar = $(e.currentTarget);
      const clickedPosition = e.originalEvent.layerX;
      const newBtnPositionPercent = (clickedPosition / bar.width()) * 100;
      const newPlaybackPositionSec = (1 / 100) * newBtnPositionPercent;

      $(".player__sound-btn").css({
        left: `${newBtnPositionPercent}%`
      });
      
      $(".player__sound-bar-colored").css({
        width: `${newBtnPositionPercent}%`
      });

      player.volume = newPlaybackPositionSec > 0 ?
        newPlaybackPositionSec :
        0;

      if (newPlaybackPositionSec <= 0) {
      $(".player__sound").addClass("muted");
      } else {
        $(".player__sound").removeClass("muted");
      }
    });

    $(".player__sound").click((e) => {
      const soundBtn = $(e.currentTarget);

      if (soundBtn.hasClass("muted")) {
        soundBtn.removeClass("muted");
        player.volume = 1;

        $(".player__sound-btn").css({
          left: "100%"
        });
        
        $(".player__sound-bar-colored").css({
          width: "100%"
        });
        
      } else {
        soundBtn.addClass("muted");
        player.volume = 0;

        $(".player__sound-btn").css({
          left: "0"
        });
        
        $(".player__sound-bar-colored").css({
          width: "0"
        });
      }
    });

  };

  const onPlayerReady = () => {
    let interval;
    const durationSec = player.duration;

    if (typeof interval != "undefined") {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      const complitedSec = player.currentTime;
      const complitedPercent = (complitedSec / durationSec) * 100;

      if (complitedPercent < 100) {
        $(".player__playback-btn").css({
          left: `${complitedPercent}%`
        });
        $(".player__playback-colored").css({
          width: `${complitedPercent}%`
        });
      }   
    }, 1000);
  };

  player.onplay = () => {
    playerContainer.addClass("paused");
  };

  player.onpause = () => {
    playerContainer.removeClass("paused");
  };

  player.onended = () => {
    $(".player__playback-btn").css({
      left: "0"
    });

    $(".player__playback-colored").css({
      width: "0"
    });
  };

  eventsInit();

  onPlayerReady();
})()