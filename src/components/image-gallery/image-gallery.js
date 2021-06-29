import React, { Component } from "react";
import "./image-gallery.css";
import Close from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false, // показ модального окна для просмотра изображения
            tempImgSrc: "",
            drag: false // показ поля для переноса файлов
        };
        this.dragStartHandler = this.dragStartHandler.bind(this);
        this.dragLeaveHandler = this.dragLeaveHandler.bind(this);
        this.onDropHandler = this.onDropHandler.bind(this);
    }

    dragStartHandler(e) {
        e.preventDefault();
        this.setState({ drag: true });
    }

    dragLeaveHandler(e) {
        e.preventDefault();
        this.setState({ drag: false });
    }

    onDropHandler(e) {
        e.preventDefault();
        const files = [...e.dataTransfer.files]; //Получаем массив перенесенных файлов
        const imageTypes = ["image/gif", "image/jpeg", "image/jpg", "image/pjpeg", "image/x-png", "image/png"]; //массив для проверки типа файла
        files.forEach((file) => {
            if (imageTypes.indexOf(file.type) !== -1) {
                let reader = new FileReader();
                reader.onloadend = () => {
                    this.props.onAdd(reader.result); // передаем изображение в кодировке Base64
                };
                reader.readAsDataURL(file);
            }
        });
        this.setState({ drag: false });
    }

    render() {
        const { data, onDelete } = this.props; //деструктурируем пропсы для сокращенной записи
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
                        alt="gallery-item"
                        style={{ width: "100%" }}
                        onClick={() => showImage(img.url)}
                    ></img>
                    <DeleteIcon onClick={() => onDelete(index)} />
                </div>
            );
        });
        return (
            <>
                {this.state.drag ? (
                    <div
                        className="drop-area"
                        onDragStart={(e) => this.dragStartHandler(e)}
                        onDragLeave={(e) => this.dragLeaveHandler(e)}
                        onDragOver={(e) => this.dragStartHandler(e)}
                        onDrop={(e) => this.onDropHandler(e)}
                    >
                        Отпустите файлы, чтобы загрузить их
                    </div>
                ) : (
                    <div>
                        <div className={this.state.modal ? "modal open" : "modal"}>
                            <img src={this.state.tempImgSrc} alt="Opened" />
                            <Close onClick={() => this.setState({ modal: false })} />
                        </div>
                        <div
                            className="gallery"
                            onDragStart={(e) => this.dragStartHandler(e)}
                            onDragLeave={(e) => this.dragLeaveHandler(e)}
                            onDragOver={(e) => this.dragStartHandler(e)}
                        >
                            {images}
                        </div>
                    </div>
                )}
            </>
        );
    }
}
