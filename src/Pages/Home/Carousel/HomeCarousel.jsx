
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const HomeCarousel = () => {
    return (
        <div className='my-3 mb-10 z-0'>
            <AwesomeSlider
                media={[
                    {
                        source: 'https://i.ibb.co.com/GTk7wbB/slide1.jpg',
                    },
                    {
                        source: 'https://i.ibb.co.com/PcgkLxR/slide2.jpg',
                    },
                    {
                        source: 'https://i.ibb.co.com/mHd1c7G/slide3.jpg',
                    },
                ]}
            />
        </div>
    );
};

export default HomeCarousel;