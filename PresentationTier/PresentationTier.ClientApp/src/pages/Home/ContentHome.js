
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import 'tippy.js/dist/tippy.css';
import config from '../../config';

const musics = [
    "https://i1.sndcdn.com/artworks-ZF324zfciFzAk3K4-ykUn4g-t500x500.jpg",
    "https://i1.sndcdn.com/artworks-FoAiCzJRyuUXhsUJ-dmCU1A-t500x500.jpg",
    "https://i1.sndcdn.com/avatars-000528602226-1uvsmj-t500x500.jpg",
    "https://i1.sndcdn.com/avatars-sBsooodhLCuDtKaw-sK9V7g-t500x500.jpg"
]
const MusicsRowContainer = styled.div`
    background-color:  var(--color-background);
    color: var(--color-white);
    padding: 20px 50px 0px;
    position: relative;
    width: 100%;
    height: 80%;
    .heading{
        font-size: 18px;
        user-select: none;
    }
`
const MusicsSlider = styled.div`
    display: grid;
    gap: 6px;
    grid-template-columns: repeat( ${musics.length},200px);
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    padding-top: 10px;
    padding-bottom: 20px;
    scroll-behavior: smooth;

    &:hover .musicItem{
        opacity: 1;
    }

    .musicItem{
        transform: scale(1);
        max-width: 300px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transform: center left ;
        position: relative;
    }

    img{
        width: 100%;
        height: 90%;
        object-fit: cover;
    }
    .musicName{
        position: relative;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0px;
        height: 50px;
        text-align: center;
        font-size: 14px;
        background-color: rgba(0 ,0,0,0.65);
    }
}`

    
function ContentHome(){

    return (
        <MusicsRowContainer>
                <Link to={config.routes.playlist} className='heading'> 
                    Lunar Playlist
               </Link>                 
               <MusicsSlider>
                    {
                        musics.map((music, index) => (
                            <div key={index} className= 'musicItem' >
                                <img src={music} alt="" />
                                <div className="musicName" >Music Name</div>
                            </div>
                        ))
                    }
                </MusicsSlider>
                <Link to={config.routes.favorite} className='heading'> 
                    Phổ Biến
               </Link> 
                <MusicsSlider>
                    {
                        musics.map((music, index) => (
                            <div key={index} className= 'musicItem' >
                                <img src={music} alt="" />
                                <div className="musicName" >Music Name</div>
                            </div>
                        ))
                    }
                </MusicsSlider>
        </MusicsRowContainer>
    )
}
export default ContentHome

