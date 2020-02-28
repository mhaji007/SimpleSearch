import React from 'react';

// This component is going to be responsible for rendering one image at a time.
// Once the image is rendered, this component is going to detemine how large the
// image is and then adjust the grid-row-end rule to accomaodate for that image
// size.

class ImageCard extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            spans: 0
        };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this
            .imageRef
            .current
            .addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);

        this.setState({spans});

    }

    render() {
        const {description, urls} = this.props.image;

        return (
            <div
                style={{
                    gridRow: `span ${this.state.spans}`
                }}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;
