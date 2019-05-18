import React, { Component } from "react";
import Hls from "hls.js";

class Scplayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.video = React.createRef();
  }
  componentDidMount() {
    let video = this.video;
    let { url, source, autoPlay } = this.props;
    if (source === "HLS" && Hls.isSupported()) {
      var hls = new Hls({
        enableWorker: false,
        autoStartLoad: true
      });
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, function() {
        hls.loadSource(url);
        hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
          if(autoPlay){
            video.play();
          }
        });
      });
    }else if(source === "File"){
      video.src=url;
    }
  }

  render() {
    const { width, height, source, url, controls, autoPlay, poster, muted } = this.props;
    return (
      <div>
        {source === "HLS" || source === "File" ? (
          <video
            ref={player => (this.video = player)}
            controls={controls}
            preload="auto"
            width={width || "100%"}
            height={height || "auto"}
            autoPlay={autoPlay}
            poster={poster}
            muted={muted}
          >
          </video>
        ) : (
          <iframe
            width={width}
            height={height}
            src={url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
            allowfullscreen
          />
        )}
      </div>
    );
  }
}

export default Scplayer;
