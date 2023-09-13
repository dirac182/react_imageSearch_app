import ImageShow from "./ImageShow";
import"./ImageList.css";

function ImageList({imageList}){
    const renderedImages = imageList.map((image) => {
        return <ImageShow key={image.id} image={image} />
    });

    return <div className="image-list">{renderedImages}</div>
};
export default ImageList;