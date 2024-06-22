import "./Carousal.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Carousal(){
    
    return(
        <Carousel className="carousal" centerMode centerSlidePercentage={80} autoPlay showThumbs={false} infiniteLoop={true} showStatus={false} interval={2000} transitionTime={1000}>
            <div className="slide" style={{backgroundImage: "url('src/assets/deadpool3.jpg')"}}>
                <div className="caption">
                    <h1>Deadpool and Wolverine</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nisi! Quisquam libero illum temporibus inventore officia aut esse, vitae, quam laudantium corrupti rem odit autem doloremque dignissimos consequatur hic animi sapiente cumque dolores voluptatem illo! Nobis consequatur iusto eveniet, ea accusamus, voluptatum soluta rerum animi maiores ipsa corporis. Saepe, repellat!</p>
                    <p>Language: English</p>
                </div>
            </div>
            <div className="slide" style={{backgroundImage: "url('src/assets/badboys4.jpg')"}}>
                <div className="caption">
                    <h1>Bad Boys: Ride or Die</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nisi! Quisquam libero illum temporibus inventore officia aut esse, vitae, quam laudantium corrupti rem odit autem doloremque dignissimos consequatur hic animi sapiente cumque dolores voluptatem illo! Nobis consequatur iusto eveniet, ea accusamus, voluptatum soluta rerum animi maiores ipsa corporis. Saepe, repellat!</p>
                    <p>Language: English</p>
                </div>
            </div>
            <div className="slide" style={{backgroundImage: "url('src/assets/thewatchers.jpg')"}}>
                <div className="caption">
                    <h1>The Watchers</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nisi! Quisquam libero illum temporibus inventore officia aut esse, vitae, quam laudantium corrupti rem odit autem doloremque dignissimos consequatur hic animi sapiente cumque dolores voluptatem illo! Nobis consequatur iusto eveniet, ea accusamus, voluptatum soluta rerum animi maiores ipsa corporis. Saepe, repellat!</p>
                    <p>Language: English</p>
                </div>
            </div>
        </Carousel>
    )
}