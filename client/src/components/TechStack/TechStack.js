import React,{useState} from 'react';
import './TechStack.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const TechStack = () => {

    const data =[
        {
            name: "Full Stack Developer"
        },
        {
            name: "Node js"
        },
        {
            name: "React js"
        },
        {
            name: "Vue js"
        },
        {
            name: "Express js"
        },{
            name: "Vue js"
        },
        {
            name: "Nuxt js"
        },
        {
            name: "Angular js"
        },
        {
            name: "Node js"
        },
        {
            name: "Vanila js"
        },
        {
            name: " Javascript"
        },
        {
            name: "Typescript"
        },
        {
            name: "Python"
        },
        {
            name: "Django"
        },
        {
            name: "UI/UX Design"
        },
      
    ]

    const colors =[
        "#FFBB28",
        "#FF8042",
        "#001CCE",
        "#48098A",
        "#FF6347",
        "#FF1042",
        "#E67E22",
        "#F39C12",
        "#F1C40F",
        "#2ECC71",
        "#27AE60",
        "#16A085",
        "#1ABC9C ",
        "#3498DB",
        "#2980B9",
    ];

    const [showMoreTechStack,setshowMoreTechStack]  =useState(6);
    const loadMore =()=>{
        setshowMoreTechStack((prev)=>prev+3);
    }   
   
    return(
        <div className='container techstack-section' id='techstack'> 
            <div className='section-title'>
                <h5>Tech Stack</h5>
                <span className="line"></span>
            </div>

            <div className='row'>
                {data.slice(0,showMoreTechStack).map((item,index)=>(
                    
                 <Fade right>
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                          <div className={index===0?'tech-content-marked tech-content':'tech-content'}>
                            <span className='tech-number'style={{backgroundColor: colors[index]}} >
                                {index+1}
                            </span>
                          <p>{item.name}</p>
                          </div> 
                    </div> 
                </Fade> 

            ))}  
            </div>
            
            {showMoreTechStack >= data.length ? null:( 
                <Zoom>
            <span className='load-more-tech-stack'onClick={ loadMore}>
                Load more  
            </span>
            </Zoom>   
 )}
 
            
        </div>
    )
}

export default TechStack  