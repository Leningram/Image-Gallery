import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export default class ImageItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 2000);
    }

    render() {
        const { index, img, onDelete, showImage } = this.props;
        const content = this.state.loading ? (
            <div>Loading...</div>
        ) : (
            <div className="pics" key={index}>
                <img
                    src={img.url}
                    key={index}
                    alt="gallery-item"
                    style={{ width: "100%" }}
                    onClick={() => showImage(img.url)}
                ></img>
                <DeleteIcon onClick={() => onDelete(index)} />
            </div>
        );
        return (
            <div className="pics" key={index}>
                {content}
            </div>
        );
    }
}
