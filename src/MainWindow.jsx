import Carousal from "./Carousal";
import Category from "./Category";
import "./MainWindow.css";

export default function MainWindow(){
    return(
        <main className="main">
        <Carousal/>
        <Category/>
        </main>
    )
}