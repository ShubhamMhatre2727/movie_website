import "./SideBar.css"

function SideBar() {

  return (
    <div className="sidebar">
      <img className="logo" src="src\assets\FreeStream.svg" alt="" />
      
      <div className="feed">
        <p><small>New Feed</small></p>
        <h3><img src="src\assets\browse.svg" alt="" />Browse</h3>
        <h3><img src="src\assets\watchlist.svg" alt="" />Watchlist</h3>
        <h3><img src="src\assets\reminder.svg" alt="" />Remind</h3>
      </div>

      <h3 className="exit"><img src="src\assets\exit.svg" alt="" />Exit</h3>
    </div>
  );
}

export default SideBar;