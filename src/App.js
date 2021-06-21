import React from "react";
import ImageGallery from "./components/image-gallery/image-gallery";
import AddForm from "./components/image-add/image-add";

let data = [
    {
        url: "https://images.unsplash.com/photo-1593901138884-02ee723a96f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2002&q=80",
        width: 640,
        height: 426,
        id: 1
    },
    {
        url: "https://images.unsplash.com/photo-1562170824-b547dae88b97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
        width: 1920,
        height: 1200,
        id: 2
    },
    {
        url: "https://images.unsplash.com/photo-1554791072-277bba66f220?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1927&q=80",
        width: 640,
        height: 426,
        id: 3
    },
    {
        url: "https://images.unsplash.com/photo-1510739859545-e7b9e979de86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
        width: 436,
        height: 650,
        id: 4
    },
    {
        url: "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550740.jpg",
        width: 600,
        height: 400,
        id: 5
    },
    {
        url: "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964008.jpg",
        width: 509,
        height: 339,
        id: 6
    },
    {
        url: "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964011.jpg",
        width: 900,
        height: 450,
        id: 7
    },
    {
        url: "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550755.jpg",
        width: 480,
        height: 640,
        id: 8
    },
    {
        url: "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964013.jpg",
        width: 472,
        height: 640,
        id: 9
    },
    {
        url: "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550745.jpg",
        width: 640,
        height: 425,
        id: 10
    }
];
// const addImage = (imgSrc) => {
//     const newItem = {
//         url: imgSrc,
//         id: data.length + 1
//     };
//     data = data.concat(newItem);
// };

function App() {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Ecwid Image Gallery</h1>
            <AddForm />
            <ImageGallery data={data} />
        </>
    );
}

export default App;
