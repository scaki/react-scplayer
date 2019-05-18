# React SCPlayer

Live, local and social network video player.Using this module;

  - HLS (.m3u8) Stream
  - Local files (mp4, WebM, ogg)
  - Various social network (YouTube, Dailymotion, Vimeo etc.)

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
*source* | string | null | Stream video "**HLS**" or for files "**File**"
*controls* | bool | false | Show control bar (only using HLS of File)
*autoPlay* | bool | false | Autoplay (only using HLS of File)
*muted* | bool | false | Mute video (only using HLS of File)
*poster* | string | null | Poster image url (only using HLS of File)
*width* | string | 100% | Video player width
*height* | string | auto | Video player height
