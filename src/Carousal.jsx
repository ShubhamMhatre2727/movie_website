import "./Carousal.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Carousal(){
    
    return(
        <Carousel className="carousal" autoPlay showThumbs={false} infiniteLoop={true} showStatus={false} interval={2000} transitionTime={1000}>
                <div className="slide" style={{background:' url("assets/deadpool3.jpg")'}}>
                <div className="caption">
                    <h1>Deadpool & Wolverine</h1>
                    <small>lorem5</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at repellendus fugit tempore esse quo libero eius aspernatur, enim minus?</p>
                </div>
                </div>
                <div className="slide" style={{background:' url("assets/deadpool3.jpg")'}}>
                <div className="caption">
                    <h1>Deadpool & Wolverine</h1>
                    <small>lorem5</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at repellendus fugit tempore esse quo libero eius aspernatur, enim minus?</p>
                </div>
                </div>
                <div className="slide" style={{background:' url("assets/deadpool3.jpg")'}}>
                <div className="caption">
                    <h1>Deadpool & Wolverine</h1>
                    <small>lorem5</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at repellendus fugit tempore esse quo libero eius aspernatur, enim minus?</p>
                </div>
                </div>
            </Carousel>
    )
}