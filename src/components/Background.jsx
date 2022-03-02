
import { ReactComponent as Shape1 } from './../assets/utils/shape1.svg';
import { ReactComponent as Particle1 } from './../assets/utils/particle1.svg';
import { ReactComponent as Particle2 } from './../assets/utils/particle2.svg';
import { ReactComponent as Particle3 } from './../assets/utils/particle3.svg';
import { ReactComponent as Particle4 } from './../assets/utils/particle4.svg';
import './background.css';

const Background = (props) => {

    const { n } = props;

    const displayBackground = () => {
        switch (n) {
            case 1:
                return <Background1 />
            case 2:
                return <Background2 />
            case 3:
                return <Background3 />
            default:
                return <div className='bg'></div>;
        }
    }

    return ( 
        <div className='bg-wp'>
            {displayBackground()}
        </div>
    );
}

const Background1 = () => {
    return (
      <div className='bg'>
        <Shape1 className="shape1" style={{bottom: 0, left: 0, transform: 'translate(-50%, 50%)'}}/>
        <Shape1 className="shape1" style={{bottom: 0, right: 0, transform: 'translate(50%, 50%)'}}/>
        <Particle3 className="particle" style={{bottom: "23%", right: "23%"}} />
        <Particle3 className="particle" style={{top: "18%", right: "25%"}} />
        <Particle3 className="particle" style={{top: "14%", left: "34%"}} />
        <Particle1 className="particle" style={{top: "21%", right: "6%"}} />
        <Particle1 className="particle" style={{bottom: "3%", left: "51%"}} />
        <Particle1 className="particle" style={{bottom: "21%", left: "21%"}} />
        <Particle1 className="particle" style={{top: "7%", left: "45%"}} />
        <Particle1 className="particle" style={{top: "18%", left: "7%"}} />
        <Particle3 className="particle" style={{top: "71%", left: "8%"}} />
        <Particle3 className="particle" style={{top: "23%", left: "17%"}} />
        <Particle1 className="particle" style={{bottom: "3%", right: "19%"}} />
        <Particle1 className="particle" style={{top: "14%", right: "32%"}} />
      </div>
    )
}
  
const Background2 = () => {
    return (
      <div className='bg'>
        <Shape1 className="disappear-small fixed" style={{ width: "300px", bottom: 0, left: 0, transform: 'translate(-50%, 50%)' }} />
        <Shape1 className="disappear-small fixed" style={{ width: "300px", bottom: 0, right: 0, transform: 'translate(50%, 50%)' }} />
        <Particle3 className="particle disappear-small" style={{top: "45%", left: "8%"}} />
        <Particle3 className="particle disappear-small" style={{top: "46%", left: "91%"}} />
        <Particle3 className="particle disappear-small" style={{top: "15%", left: "3%"}} />
        <Particle1 className="particle disappear-small" style={{top: "14%", left: "95%"}} />
        <Particle1 className="particle disappear-small" style={{top: "30%", left: "14%"}} />
        <Particle1 className="particle disappear-small" style={{top: "68%", left: "6%"}} />
        <Particle1 className="particle disappear-small" style={{top: "27%", left: "81%"}} />
        <Particle1 className="particle disappear-small" style={{top: "69%", left: "85%"}} />
  
      </div>
    );
}

const Background3 = () => {
    return (
      <div className='bg' id="bg3">
        <Shape1 style={{width: "300px", bottom: 0, left: 0, transform: 'translate(-50%, 50%)'}}/>
        <Shape1 style={{width: "300px", bottom: 0, right: 0, transform: 'translate(50%, 50%)'}}/>
        <Particle3 className="particle" style={{bottom: "23%", right: "23%"}} />
        <Particle3 className="particle" style={{top: "18%", right: "25%"}} />
        <Particle3 className="particle" style={{top: "14%", left: "34%"}} />
        <Particle1 className="particle" style={{top: "21%", right: "6%"}} />
        <Particle1 className="particle" style={{bottom: "3%", left: "51%"}} />
        <Particle1 className="particle" style={{bottom: "21%", left: "21%"}} />
        <Particle1 className="particle" style={{top: "7%", left: "45%"}} />
        <Particle1 className="particle" style={{top: "18%", left: "7%"}} />
        <Particle3 className="particle" style={{top: "71%", left: "8%"}} />
        <Particle3 className="particle" style={{top: "23%", left: "17%"}} />
        <Particle1 className="particle" style={{bottom: "3%", right: "19%"}} />
        <Particle1 className="particle" style={{top: "14%", right: "32%"}} />
      </div>
    )
  }

export default Background;