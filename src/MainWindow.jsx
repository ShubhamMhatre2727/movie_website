import Carousal from "./Carousal";
import Category from "./Category";
import LatestRelease from "./LatestRelease";
import "./MainWindow.css";

export default function MainWindow(){
    return(
        <main className="main">
        <Carousal/>
        <Category/>
        <LatestRelease/>
        </main>
    )
}