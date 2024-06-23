import "./Category.css";

export default function Category(){
    return(
        <div className="category">
        <h2>Category</h2>
        <section>
            <div className="item">
                <img src="src\assets\category\action.webp" alt="" />
                <h4>Action</h4>
            </div>
            <div className="item">
                <img src="src\assets\category\adventure.webp" alt="" />
                <h4>Adventure</h4>
            </div>
            <div className="item">
                <img src="src\assets\category\drama.webp" alt="" />
                <h4>Drama</h4>
            </div>
            <div className="item">
                <img src="src\assets\category\horror.webp" alt="" />
                <h4>Horror</h4>
            </div>
            <div className="item">
                <img src="src\assets\category\crime.webp" alt="" />
                <h4>Crime</h4>
            </div>
            <div className="item">
                <img src="src\assets\category\animation.webp" alt="" />
                <h4>Animation</h4>
            </div>
        </section>
        </div>
    )
}