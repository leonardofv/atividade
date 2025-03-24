import ReactPlayer from "react-player";

import S from '../home/video.module.scss';

const Video = () => {

      return (
         <div className={S.containerVideo}>
            <ReactPlayer
               url='https://www.youtube.com/watch?v=m7l1T9dDSxw&ab_channel=TIMESBRASIL-LICENCIADOEXCLUSIVOCNBC'
               controls
               width='70%'
               height='600px'
            />
         </div>
      )
}

export default Video;
