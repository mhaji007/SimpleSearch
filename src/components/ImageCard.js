import React from 'react';

// This component is going to be responsible for rendering one image at a time.
// Once the image is rendered, this component is going to detemine how large the
// image is and then adjust the grid-row-end rule to accomaodate for that image
// size.

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);

    }

    render() {
        const {description, urls} = this.props.image;

        return (
            <div>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;
