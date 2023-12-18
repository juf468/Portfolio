const ImageGallery = ({ images }) => {
	return (
		<div className="image-gallery">
			{images.map((image, index) => (
				<img src={image} alt={`${index}`} key={index} className="image-item" />
			))}
		</div>
	);
};

export default ImageGallery;
