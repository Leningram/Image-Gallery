import React, { Component } from "react";
import "./image-add.css";
import { Button, TextField } from "@material-ui/core";

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        //Очищаем текстовое поле
        this.setState({
            text: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    fullWidth
                    type="text"
                    label="Введите URL изображения"
                    value={this.state.text}
                    onChange={this.onValueChange}
                ></TextField>
                <Button variant="contained" color="primary" type="submit">
                    Загрузить
                </Button>
            </form>
        );
    }
}
