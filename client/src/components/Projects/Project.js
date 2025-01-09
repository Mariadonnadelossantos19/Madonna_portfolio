import React from 'react';
import ProjectList from './ProjectList';
import './Project.css';

const Project = () => {
    const data = [
        {
            name: "Madonna Stack Job Portal",  
            des: "welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            projectlink: "https://mariadonnadelossantos19.github.io/cindy-cafe/home.html",
            techused: [
                {
                    techname: "Node js"    
                },
                {
                    techname: "Express  js"    
                },
                {
                    techname: "React js"    
                },
                {
                    techname: "Next js"    
                },
            ]
        },

        {
            name: "Madonna Stack Event Management Portal",  
            des: "welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            projectlink: "https://mariadonnadelossantos19.github.io/cindy-cafe/home.html",
            techused: [
                {
                    techname: "django"    
                },
                {
                    techname: "Express  js"    
                },
                {
                    techname: "Vue js"    
                },
                {
                    techname: "Nuxt js" 
                },
            ]
        },
        {
            name: "Madonna Stack Social Media ",  
            des: "welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            projectlink: "https://mariadonnadelossantos19.github.io/cindy-cafe/home.html",
            techused: [
                {
                    techname: "Node js"    
                },
                {
                    techname: "Express  js"    
                },
                {
                    techname: "Typescript"    
                },
                {
                    techname: "Nuxt js" 
                },
            ]
        },

        {
            name: "Madonna Stack Video Streaming ",  
            des: "welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            projectlink: "https://mariadonnadelossantos19.github.io/cindy-cafe/home.html",
            techused: [
                {
                    techname: "Node js"    
                },
                {
                    techname: "Express  js"    
                },
                {
                    techname: "Typescript"    
                },
                {
                    techname: "Angualar js"   
                },
            ]
        },

        {
            name: "Madonna Stack Online Platform ",  
            des: "welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            projectlink: "https://mariadonnadelossantos19.github.io/cindy-cafe/home.html",
            techused: [
                {
                    techname: "Node js"    
                },
                {
                    techname: "Express  js"    
                },
                {
                    techname: "Typescript"    
                },
                {
                    techname: "Angualar js"   
                },
            ]
        },

        {
            name: "Madonna Stack E-commerce  ",  
            des: "welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            projectlink: "https://mariadonnadelossantos19.github.io/cindy-cafe/home.html",
            techused: [
                {
                    techname: "Node js"    
                },
                {
                    techname: "Express  js"    
                },
                {
                    techname: "Material UI"    
                },
                {
                    techname: "Redux"   
                },
                {
                    techname: "React js"    
                },
            ]
        },
    ]
    return (
        <div className='container'>

            <div className='section-title' id='project'>
                <h5>Projects </h5>
                <span className="line"></span>
            </div>
        <div className='row'>
            {data.map((item,index)=>(
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index} >
                    <ProjectList {...item}/>
                   
                </div>
            ))}
       

        </div>
            
        </div>

         
    )
}

export default Project;