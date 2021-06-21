import React, { Component } from "react";
import "./image-gallery.css";
import Close from "@material-ui/icons/Close";

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: false,
            tempImgSrc: ""
        };
    }

    render() {
        const showImage = (imgSrc) => {
            this.setState({ tempImgSrc: imgSrc });
            this.setState({ model: true });
            console.log(this.state.tempImgSrc);
        };

        const images = this.props.data.map((img, index) => {
            return (
                <div className="pics" key={index}>
                    <img
                        src={img.url}
                        key={index}
                        alt="gallery"
                        style={{ width: "100%" }}
                        onClick={() => showImage(img.url)}
                    ></img>
                </div>
            );
        });
        return (
            <>
                <div className={this.state.model ? "model open" : "model"}>
                    <img src={this.state.tempImgSrc} alt="Opened" />
                    <Close onClick={() => this.setState({ model: false })} />
                </div>
                <div className="gallery">{images}</div>
            </>
        );
    }
}
