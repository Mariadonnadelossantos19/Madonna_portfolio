import React,{useState} from 'react';
import { FcExpand, FcCollapse } from "react-icons/fc";

import Zoom from 'react-reveal/Zoom';

const ProjectList =({name,des,projectlink,techused})=>{

    const [show,setshow]= useState(false);
    const handleShowandCollapse =()=>{

        setshow (!show);

    };


    const colors=[
        "#FFB924",
        "#FF8042",
        "#001CCE",
        "#48098A",
        "#FF6347",
        "#FF1042",   
    ];

    return(
<Zoom>
    <div className={show ? "project-list-opened project-list": 'project-list'}
     onClick={handleShowandCollapse}
       
       onMouseEnter={()=>setshow(true)}
       onMouseLeave={()=>setshow(false)}
       >
       
        <div className='title-and-collapse-option '>
            <h5>{name}</h5>
            <p>{show ? <FcCollapse size={20}/> : <FcExpand size={20}/>}</p>
        </div>
        <div className='description'>
        {show ? (<p>{des}</p>):(<p>{des.substring(0,15)}...<p style={{color:"orange"}}></p></p>)}
        </div>

        <div className='row'>
            {techused && techused.map((tech,index)=>(
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
                    
                    <div className='tech-used-in-project' >
                        <p style={{backgroundColor:colors[index]}}>{tech.techname}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className='live-demo-button'>
            <a target='_' href={projectlink}>Live Demo</a>
        </div>


      

    </div>
</Zoom>
    );
};
export default ProjectList