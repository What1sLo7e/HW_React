import React, { useState } from 'react';

// const IMAGE_BASE_URL = 'https://console.firebase.google.com/project/a-level-reacr/storage/a-level-reacr.appspot.com/files';

// const Upload = () => {
    

//     const onChangeImage = (e) => {
//         const newImage = e.target.files[0];

//         if (newImage) {
//             setImage(newImage);
//         } else {
//             setImage(null);
//         }
//     }

//     const uploadToFirebase = () => {
//         if (image) {
//             const formData = new FormData();
//             formData.append('File', image);
//             // https://firebasestorage.googleapis.com/v0/b/[STORAGE_NAME]/o?name=[FILE_NAME_WITH_EXTENSION]
//             const urlWithName = `${IMAGE_BASE_URL}?name=${image.name}`

//             fetch(urlWithName, {
//                 method: 'POST',
//                 body: formData
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data)
//                 })
//                 .catch(err => console.log(err));
//         }
//     }

//     const onClickImagesList = () => {
//         fetch(IMAGE_BASE_URL)
//             .then(res => res.json())
//             .then(({ items }) => {
//                 // firebasestorage.googleapis.com/v0/b/[STORAGE_NAME]/o/[IMAGE_NAME]?alt=media
//                 const images = items.map(image => `${IMAGE_BASE_URL}/${image.name}?alt=media`);
//                 setImages(images);
//             });
//     };

//     return (
//         <>
//             <h1>Upload Page</h1>
//             <input type='file' onChange={onChangeImage}/>
//             <button type='button' onClick={uploadToFirebase}>Upload to Firebase</button>
//             <button type='button' onClick={onClickImagesList}>getImagesList</button>
//             {images.length > 0 && images.map(image => <img src={image} alt=""/>)}
//         </>
//     )
// };

// export default Upload;