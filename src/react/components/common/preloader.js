import React from "react";

class Preloader extends Component {
render() {
    return (
        <div id="loader-wrapper">
        <div id="loader"></div>
        
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
        </div>       
    )
}
}
export default Preloader;