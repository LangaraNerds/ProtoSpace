import React from 'react'
import AlexImg from './alex-orlov.jpg'
import AngelineImg from './angeline-espiritu.jpg'
import DeboraImg from './debora-correia.jpg'
import GabrielImg from './gabriel-cordeiro.jpg'
import MarkImg from './mark-eco.jpg'
import PhatImg from './phat-thuan-nguyen.jpg'
import SiulyImg from './siuly-tamex.jpg'
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Email} from '../../assets/email-icon.svg';
import { ReactComponent as Behance} from '../../assets/behance -icon.svg';
import { ReactComponent as Linkedin} from '../../assets/linkedin-icon.svg';
import { ReactComponent as Github} from '../../assets/github-icon.svg';
import {Link} from "react-router-dom";


const Team = () => {
  return (
    <div className="full-background">
        <section className='team-section'>
          <div className='text-content'>
              <h2>
                Connect with us
              </h2>
              <p>Interested to know more? The nerds are here to help!</p>
          </div>
          <div className="team-profiles">
            <div className="team-member">
                <img src={AngelineImg} alt="Angeline Espiritu" className='team-member__img' />
                <h3 className="team-member__name">Angeline Espiritu</h3>
                <div className="tem-member__position">
                    <p>Project Manager</p>
                    <p>UI/UX Designer</p>
                </div>
                <div className="team-member__links">
                    <a href={''} target={'_blank'}>
                        <Email/>
                    </a>
                    <a href={''} target={'_blank'}>
                        <Behance/>
                    </a>
                    <a href={'https://www.linkedin.com/in/angelineespiritu/'} target={'_blank'}>
                        <Linkedin/>
                    </a>
                </div>
                </div>
            <div className="team-member">
                <img src={MarkImg} alt="Mark Wilton Eco" className='team-member__img' />
                <h3 className="team-member__name">Mark Wilton Eco</h3>
                <div className="tem-member__position">
                    <p>Lead UX Designer</p>
                    <p>UI Designer</p>
                </div>
                <div className="team-member__links">
                    <a href={''} target={'_blank'}>
                        <Email/>
                    </a>
                    <a href={''} target={'_blank'}>
                        <Behance/>
                    </a>
                    <a href={'https://www.linkedin.com/in/markeco/'} target={'_blank'}>
                        <Linkedin/>
                    </a>
                </div>
                </div>
            <div className="team-member">
                <img src={PhatImg} alt="Phat Thuan Nguyen" className='team-member__img' />
                <h3 className="team-member__name">Phat Thuan Nguyen</h3>
                <div className="tem-member__position">
                    <p>Lead UI Designer</p>
                    <p>UX Designer</p>
                </div>
                <div className="team-member__links">
                    <a href={''} target={'_blank'}>
                        <Email/>
                    </a>
                    <a href={''} target={'_blank'}>
                        <Behance/>
                    </a>
                    <a href={'https://www.linkedin.com/in/williamphatnguyen/'} target={'_blank'}>
                        <Linkedin/>
                    </a>
                </div>
                </div>
            <div className="team-member">
                <img src={AlexImg} alt="Alex Orlov" className='team-member__img' />
                <h3 className="team-member__name">Alex Orlov</h3>
                <div className="tem-member__position">
                    <p>Lead Developer</p>
                    <p>Full-stack Developer</p>
                </div>
                <div className="team-member__links">
                    <a href={''} target={'_blank'}>
                       <Email/>
                    </a>
                    <a href={'https://github.com/alexey432'} target={'_blank'}>
                        <Github/>
                    </a>
                    <a href={'https://www.linkedin.com/in/alexorl432/'} target={'_blank'}>
                        <Linkedin/>
                    </a>
                </div>
                </div>
            <div className="team-member">
                <img src={DeboraImg} alt="Debora Patrao Correia" className='team-member__img' />
                <h3 className="team-member__name">Debora Patrao Correia</h3>
                <div className="tem-member__position">
                    <p>Front-end Developer</p>
                </div>
                <div className="team-member__links">
                    <a href={''} target={'_blank'}>
                        <Email/>
                    </a>
                    <a href={'https://github.com/deborapatrao'} target={'_blank'}>
                        <Github/>
                    </a>
                    <a href={'https://www.linkedin.com/in/deborapcorreia/'} target={'_blank'}>
                        <Linkedin/>
                    </a>
                </div>
                </div>
            <div className="team-member">
                <img src={GabrielImg} alt="Gabriel Cordeiro" className='team-member__img' />
                <h3 className="team-member__name">Gabriel Cordeiro</h3>
                <div className="tem-member__position">
                    <p>Full-stack Developer</p>
                </div>
                <div className="team-member__links">
                    <a href={''} target={'_blank'}>
                        <Email/>
                    </a>
                    <a href={'https://github.com/inadequado'} target={'_blank'}>
                        <Github/>
                    </a>
                    <a href={'https://www.linkedin.com/in/gpcordeiro/'} target={'_blank'}>
                        <Linkedin/>
                    </a>
                </div>
                </div>
            <div className="team-member">
                <img src={SiulyImg} alt="Siuly Tamex" className='team-member__img' />
                <h3 className="team-member__name">Siuly Tamex</h3>
                <div className="tem-member__position">
                    <p>Full-stack Developer</p>
                </div>
                <div className="team-member__links">
                    <a href={''} target={'_blank'}>
                        <Email/>
                    </a>
                    <a href={'https://github.com/siuly'} target={'_blank'}>
                        <Github/>
                    </a>
                    <a href={'https://www.linkedin.com/in/siuly-tamez/'} target={'_blank'}>
                        <Linkedin/>
                    </a>
                </div>
                </div>
          </div>
        </section>
    </div>
  )
}

export default Team;