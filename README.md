# React SCPlayer

Live, local and social network video player.Using this module;

  - HLS (.m3u8) Stream
  - Local files (mp4, WebM, ogg)
  - Various social network (YouTube, Dailymotion, Vimeo vs.)

you can play video files.

### Installation
```sh
$ npm install react-scplayer
```
or

```sh
$ yarn add react-scplayer
```
### Simple Using
```sh
...
import Scplayer from "scplayer";
...
    <Scplayer url="VIDEO_FILE_URL" />
```

### Props

| Prop | Type | Default | Description
| ------ | ------ | ------ | ------ |
*url* | string | null | Video file or stream url
*source* | string | null | For stream video "**HLS**" or for files "**File**"
*controls* | bool | false | For show control bar add this prop
*autoPlay* | bool | false | For autoplay using
*muted* | bool | false | For mute video
*poster* | string | null | Poster image url
*width* | string | 100% | Video player witdh
*height* | string | auto | Video player height