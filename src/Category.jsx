import "./Category.css";

export default function Category(){
    return(
        <div className="category">
        <h2>Category</h2>
        <div className="slider">
            <div className="item">
                <img src="src\assets\action.webp" alt="" />
                <h4>Action</h4>
            </div>
            <div className="item">
                <img src="src\assets\adventure.webp" alt="" />
                <h4>Adventure</h4>
            </div>
            <div className="item">
                <img src="src\assets\drama.webp" alt="" />
                <h4>Drama</h4>
            </div>
            <div className="item">
                <img src="src\assets\horror.webp" alt="" />
                <h4>Horror</h4>
            </div>
            <div className="item">
                <img src="src\assets\crime.webp" alt="" />
                <h4>Crime</h4>
            </div>
            <div className="item">
                <img src="src\assets\animation.webp" alt="" />
                <h4>Animation</h4>
            </div>
        </div>
        </div>
    )
}