import { Parallax } from 'react-parallax';
import Dev from '../img/Developer.jpg';
import Logo from '../img/Logo.png';

const SectionOne = () =>{

    return ( 

        <Parallax className='Image' bgImage={Dev} strength={600}>
            <header>
                <div className="logo"><img src={Logo} alt='João Victor Oliveira'></img></div>
                <div className="navLinks">
                    <p>História</p>
                    <p>Formação</p>
                    <p>Curiosidades</p>
                    <p>Contato</p>
                </div>
            </header>
             <div className='content'>
                <span className='text-parallax'>João Victor Oliveira</span>
            </div>
        </Parallax>

    )


}

export default SectionOne;