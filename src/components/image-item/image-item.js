import React, { Component } from "react";
import "./image-item.css";
import DeleteIcon from "@material-ui/icons/Delete";

export default class ImageItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.setState({ loading: false });
    }

    render() {
        const { index, img, onDelete, showImage } = this.props; //деструктурируем пропсы для сокращенной записи
        const content = this.state.loading ? (
            <div className="loader-container">
                <div className="loader-wheel"></div>
            </div>
        ) : (
            <div>
                <img
                    src={img.url}
                    index={index}
                    alt="gallery-item"
                    style={{ width: "100%" }}
                    onClick={() => showImage(img.url)}
                ></img>
                <DeleteIcon onClick={() => onDelete(index)} />
            </div>
        );
        return <div className="pics">{content}</div>;
    }
}
