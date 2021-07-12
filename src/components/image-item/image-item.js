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
        console.log(this.state.loading);
        const content = this.state.loading ? (
            <div className="loadingio-spinner-rolling-sfoaij7v4zk">
                <div className="ldio-nqybr7h0e6">
                    <div></div>
                </div>
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
