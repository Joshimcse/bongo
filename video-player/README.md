<div align="center">

# Bongo's Video Player

A Simple video player application with `Play`, `Forward`, `Rewind` functionalities using React. In this player I'm using `Functional Design Patterns` to develop these three functionalities.

[![Netlify Status](https://api.netlify.com/api/v1/badges/941f4aa8-c88b-4607-aaf0-32ab566e1a73/deploy-status)](https://app.netlify.com/sites/bongo-test/deploys)

[![Live](https://img.shields.io/badge/click%20here%20for-live%20demo-373277.svg?style=for-the-badge)](https://bongo-test.netlify.app/)

</div>

## Quick Start

```
git clone --depth=1 https://github.com/Joshimcse/bongo.git <PROJECT_NAME>

cd <PROJECT_NAME>/video-player
```

Run `npm install` in order to install dependencies. At this point you can run `npm start` to see the example app at http://localhost:3000.

## pseudocode of this program

```
//Initialize React State
isPlay ← false
playbackRate ← 1


// Play & Pause
procedure togglePlay()
  if (isPlay = true) then
    the video will pause
    isPlay ← false
  else
    the video will play
    isPlay ← true;
end procedure


// forward
procedure forward()
  if ((duration - currentTime) < 10) then
    currentTime ← duration
  else
    currentTime ← currentTime + 10
end procedure


// rewind
procedure rewind()
  if (currentTime < 10) then
    currentTime ← 0
  else
    currentTime ← currentTime - 10
end procedure


On end of media:
  isPlay ← false
  playbackRate ← 1
```
