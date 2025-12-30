import Hyperspeed from "../components/Hyperspeed"
import '../styles/Test.css'
import Stack from '../components/Stack'
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import ButtonMain from "../components/ButtonMain"
import ButtonSec from "../components/ButtonSec"
import ButtonThird from '../components/ButtonThird'
import SciFiFooter from "../components/Footer"
import Countdown from "../components/CountDown"
import { useEffect, useState } from "react"
import cx1 from '../assets/imgs/cx.png'
import cx2 from '../assets/imgs/cxb2.png'
import cx3 from '../assets/imgs/cxg2.png'
import cx4 from '../assets/imgs/cxp1.png'
import { ScrollReveal } from '../hooks/ScrollReveal' // Import the component

export default function Test(){

    const [switchText, setSwitchText] = useState(false)
    const [spanText, setSpanText] = useState('Ex')

    const changeText = ()=>{
        setInterval(()=> {
            switchText ? setSwitchText(false) : setSwitchText(true)}, 2000)
    }

    const images = [cx1, cx2, cx3, cx4];

    const endTime = '2025-12-31T23:59:59';

    useEffect(()=> changeText, [])




    return(
        <main>

        <div className="hero">
             <Hyperspeed
                effectOptions={{
                onSpeedUp: () => { },
                onSlowDown: () => { },
                distortion: 'turbulentDistortion',
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 4,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [400 * 0.03, 400 * 0.2],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xFFFFFF,
                brokenLines: 0xFFFFFF,
                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                sticks: 0x03B3C3,
                }
            }}
            /> 

           
            
            {/* Nav */}
            


            {/* Main Content */}
             <div className="mainContent">
                 
                 <div className="content">
                    <Nav />
                    {/* <form className="searchbar" id="searchbar">
                        <input type="text" name="search" id="search" placeholder="search for event"/>
                    </form> */}
                </div>
                   
                   <div className="heroContent">
                        <div className="mainText">
                            <h1>Welcome <br /> </h1>
                            <h1 className={switchText ? "show" : 'hide'}>to Cyber <span>ExpoX</span></h1>
                            <h1 className={switchText ? "hide" : 'show'}>Game Explorer</h1>
                            <p>Make eSports a career. Represent Malawi</p>
                        </div>
                        <div className="actionButtons">
                            <ButtonMain text="Learn More"></ButtonMain>
                            <ButtonSec text="Veiw Events"></ButtonSec>
                        </div>

                        <div className="countdown">
                            <p>CountDown To Next Event</p>
                            <Countdown endTime={endTime}></Countdown>
                        </div>

                   </div>
            </div>

        </div>


            {/* What is cyex - Slides up from bottom */}
            <ScrollReveal animationType="slideUp">
                <div className="whatiscx">
                    <div className="whatiscximg"></div>
                    <div className="desc">
                        <h1>Who are we?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maxime, recusandae corrupti, beatae ut a fugiat repellendus 
                            at non sequi, veniam illo rem obcaecati repellat 
                            modi illum voluptates debitis cupiditate enim!</p>
                    </div>
                </div>
            </ScrollReveal>

            {/* Gallery - with staggered animations */}
            <div className="gallery">
                    
                    <ScrollReveal animationType="slideUp" delay={0}>
                        <div className="galleryText">
                            <h2>eSports In Pictures</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Exercitationem optio quibusdam provident quidem? 
                                Sequi, modi. Libero quisquam, veniam reiciendis nihil 
                                consequatur eius vero deserunt, 
                                placeat temporibus nisi aliquam, aliquid rem.</p>
                            <ButtonThird text='Visit Gallery >'></ButtonThird>
                        </div>
                    </ScrollReveal>

                    <hr />

                    <ScrollReveal animationType="scale" delay={0.2}>
                        <div className="galleryImages">
                            <div style={{width: 400, height: 400}}>
                            <Stack
                                randomRotation={true}
                                autoplay={true}
                                sensitivity={180}
                                sendToBackOnClick={true}
                                cards={images.map((src, i) => (
                                <img 
                                    key={i} 
                                    src={src} 
                                    alt={`card-${i + 1}`} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                                ))}
                            />
                            </div>
                        </div>
                    </ScrollReveal>

            </div>
            
            <ScrollReveal animationType="fade">
                <SciFiFooter></SciFiFooter>
            </ScrollReveal>

        </main>
    )
}