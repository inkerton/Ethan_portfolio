//next image
import inage from "next/image";

//cpmponents
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer-motion
import { motion} from 'framer-motion';

//variants
import {fadeIn } from '../variants';

const Home = () => {
  return (
  <div className='bg-primary/60 h-full'>
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-block/30 
    to-block/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
      h-full container mx-auto">
        {/* title */}
        <h1 className="h1">
          Tansforming Ideas <br /> Into{' '} 
          <span className="text-accent"> Digital Reality</span>
        </h1>
        {/* subtitle */}
        <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          lorem ipsum hhgv gvhgc vnbccdcds dshvchjsv
          fdvbnbfd hfvdjhvhd jhfdvbhjvigugr jhvdhjbf
          djhsvjhfsdhjdvfb kdbvhfjygyu jhsvdjhv
        </p>
        {/* btn */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>
      </div>
    </div>
    
    {/* image */}
    <div>
      <div>
        image
      </div>
    </div>
  </div>);
};

export default Home;
