import { Parallax } from 'react-parallax';
import Xbox from '../img/Xbox.jpg'
import { FaReact, FaJs, FaCss3, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

const SectionTwo = () =>{

    return ( 

        <Parallax className='Image' bgImage={Xbox} strength={500}>
             <div className='container'>
                <h1>Minha História com a programação</h1>
                <p className='text'>
                    A minha história com a programação se inicia quando eu tinha apenas 12 anos de idade. Naquela época eu havia iniciado um curso de Desenvolvimento de jogos por conta da minha paixão por games e nele tive o meu primeiro contato com a programação. De início eu comecei usando a linguagem C# para desenvolver meus pequenos jogos e após algum tempo acabei largando a programação um pouco de lado e fui retomar meus estudos apenas quando entrei no curso Técnico em Informática no IF Sul de Minas Gerais. Retomei meus estudos com C++ participando de maratonas de programação, HTML e CSS. A partir desse momento eu mergulhei de cabeça neste universo e a cada dia minha paixão pela área cresce ainda mais. Hoje eu utilizo das seguintes linguagens, bibliotecas e Frameworks:
                </p>
                <div className='stackList'>
                    <div className='item'>
                        <p>HTML 5</p>
                        <FaHtml5 />
                    </div>
                    <div className='item'>
                        <p>CSS 3</p>
                        <FaCss3 />
                    </div>
                    <div className='item'>
                        <p>JavaScript</p>
                        <FaJs />
                    </div>
                    <div className='item'>
                        <p>React Js</p>
                        <FaReact />
                    </div>
                    <div className='item'>
                        <p>Node Js</p>
                        <FaNodeJs />
                    </div>
                    <div className='item'>
                        <p>Next Js</p>
                        <SiNextdotjs />
                    </div>
                </div>
             </div>
        </Parallax>

    )


}

export default SectionTwo;