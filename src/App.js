import React, { Component } from "react";
import "./App.css";
import ImageGallery from "./components/image-gallery/image-gallery";
import AddForm from "./components/image-add/image-add";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFetching: true,
            error: null
        };
        this.addImage = this.addImage.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
        this.maxId = 11; //Счетчик для добавления уникальных id к новым элементам
    }

    // Получаем начальные изображения по ссылки из тестового задания
    componentDidMount() {
        fetch("https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json")
            .then((response) => response.json())
            .then((result) => this.setState({ data: result.galleryImages }));
    }
    //
    addImage(url) {
        //создаем объект с новым изображением
        const newImage = {
            url,
            id: this.maxId++
        };
        //и добавляем его к остальным
        this.setState(({ data }) => {
            const newArray = [...data, newImage];
            return {
                data: newArray
            };
        });
    }

    deleteImage(id) {
        this.setState(({ data }) => {
            // удаляем изображение из массива по его индексу
            const newArr = [...data.slice(0, id), ...data.slice(id + 1)];
            return {
                data: newArr
            };
        });
    }

    render() {
        return (
            <div className="main-wrapper">
                <h1 style={{ textAlign: "center" }}>Image Gallery</h1>
                <AddForm onAdd={this.addImage} />
                <ImageGallery onAdd={this.addImage} data={this.state.data} onDelete={this.deleteImage} />
            </div>
        );
    }
}
