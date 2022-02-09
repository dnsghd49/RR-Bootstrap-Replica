import "./style.css"
import Form from "react-bootstrap/Form"

function Search() {
    return (
        <div className="randomContainer">
            <div className="bgColorWay">
                <img className="moveTotheRight" src="https://www.instacart.com/image-server/x856/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="funny" />
            </div>
            <div className="top-left">
                <h2>Order groceries for delivery or pickup today</h2>
                <p>Whatever you want from local stores, brought right to your door.</p>
                <Form>
                    <Form.Control className="inputHeight" type="address" placeholder="Enter your addy!" />
                </Form>
            </div>
        </div>
    )
}

export default Search