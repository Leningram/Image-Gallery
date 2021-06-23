import React, { Component } from "react";
import "./image-gallery.css";
import Close from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            tempImgSrc: ""
        };
    }

    render() {
        const { data } = this.props; //деструктурируем пропсы для сокращенной записи
        const showImage = (imgSrc) => {
            this.setState({ tempImgSrc: imgSrc });
            this.setState({ modal: true });
        };

        const images = data.map((img, index) => {
            return (
                <div className="pics" key={index}>
                    <img
                        src={img.url}
                        key={index}
                        alt="gallery"
                        style={{ width: "100%" }}
                        onClick={() => showImage(img.url)}
                    ></img>
                    <DeleteIcon onClick={() => this.props.onDelete(index)} />
                </div>
            );
        });
        return (
            <>
                <div className={this.state.modal ? "modal open" : "modal"}>
                    <img src={this.state.tempImgSrc} alt="Opened" />
                    <Close onClick={() => this.setState({ modal: false })} />
                </div>
                <div className="gallery">{images}</div>
            </>
        );
    }
}
