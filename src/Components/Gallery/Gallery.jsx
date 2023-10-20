const ImageGallery = ({ images }) => {
	return (
		<div className="image-gallery">
			{images.map((image, index) => (
				<div className="image-item" key={index}>
					<img src={image} alt={`Image ${index}`} />
				</div>
			))}
		</div>
	);
};

export default ImageGallery;
