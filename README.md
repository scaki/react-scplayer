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
*controls* | bool | false | For show control bar add this prop (only using HLS of File)
*autoPlay* | bool | false | For autoplay using (only using HLS of File)
*muted* | bool | false | For mute video (only using HLS of File)
*poster* | string | null | Poster image url (only using HLS of File)
*width* | string | 100% | Video player witdh
*height* | string | auto | Video player height
