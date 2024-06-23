import "./LatestRelease.css";

export default function LatestRelease(){
    const ul = document.querySelector("ul");
    function backward(){
        alert("backward")
    }
    function forward(){
        alert("forward")
    }
    return(
        <div className="latest-release">
            <h2>Latest Release</h2>
            <button className="backward" onClick={backward}>&lt;</button>
            <ul>
                <li>
                    <img src="src\assets\latest release\ahsoka poster.jpg" alt="" />
                    <h4>Ahsoka</h4>
                    <small>⭐7.7 | Action, Adventure, Sci-Fi</small>
                </li>
                <li>
                    <img src="src\assets\latest release\bad boys poster.webp" alt="" />
                    <h4>Bad Boys: Ride or Die</h4>
                    <small>⭐7.2 | Action, Crime, Drama</small>
                </li>
                <li>
                    <img src="src\assets\latest release\civil war poster.webp" alt="" />
                    <h4>Civil War</h4>
                    <small>⭐7.0 | War, Action, Drama</small>
                </li>
                <li>
                    <img src="src\assets\latest release\furiosa poster.webp" alt="" />
                    <h4>Furiosa</h4>
                    <small>⭐7.6 | Action, Adventure, Drama</small>
                </li>
                <li>
                    <img src="src\assets\latest release\godzilla x k0ng poster.webp" alt="" />
                    <h4>Godzilla X Kong:The New Empire</h4>
                    <small>⭐7.2 | Action, Adventure, Drama</small>
                </li>
                <li>
                    <img src="src\assets\latest release\inside out 2 poster.webp" alt="" />
                    <h4>Inside Out 2</h4>
                    <small>⭐7.2 | Adventure, Animation</small>
                </li>
                <li>
                    <img src="src\assets\latest release\kung fu panda poster.webp" alt="" />
                    <h4>Kung Fu Panda</h4>
                    <small>⭐7.2 | Adventure, Animation</small>
                </li>
                <li>
                    <img src="src\assets\latest release\planet of apes poster.webp" alt="" />
                    <h4>Kingdom of The Planet of the Apes</h4>
                    <small>⭐7.4 | Action, Adventure, Drama</small>
                </li>
                <li>
                    <img src="src\assets\latest release\the watchers poster.webp" alt="" />
                    <h4>The Watchers</h4>
                    <small>⭐7.2 | Action, Horror, Drama</small>
                </li>
            </ul>
            <button className="forward" onClick={forward}>&gt;</button>
        </div>
    )
}