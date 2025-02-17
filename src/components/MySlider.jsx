import Carousel from 'react-bootstrap/Carousel';

function MySlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="img/react-slider.jpg" className='w-100' alt="" />
                <Carousel.Caption>
                    <h3>Get Started with React JS</h3>
                    <p>Learn the basic fundamentals of React JS</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img/node-slider.jpg" className='w-100' alt="" />
                <Carousel.Caption>
                    <h3>Setting Up Node Environment</h3>
                    <p>Run Node JS application on any device</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img/react-hooks.png" className='w-100' alt="" />
                <Carousel.Caption>
                    <h3>A deep dive into React Hooks</h3>
                    <p>Master the art of react hooks in this blog</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MySlider;