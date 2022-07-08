import { Parallax } from 'react-parallax';
import Books from '../img/Book.jpg'

const SectionThree = (props) =>{

    return ( 

        <Parallax className='Image' bgImage={Books} strength={700}>
             <div className='content'>
                <span className='text-parallax'>Outro texto</span>
            </div>
        </Parallax>

    )


}

export default SectionThree;