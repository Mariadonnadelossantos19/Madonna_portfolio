import React from 'react';
import './WorkExperience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {MdWork} from "react-icons/md";
const WorkExperience =()=>{

    const data=[
        {
            companyname:"Google",
            position:"junior software Developer",
            des:" welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            year:"2020-2022",
            techskills:[
                {
                    techname:"Node js"
                },
                {
                    techname:"Express js"
                },
                {
                    techname:"React js"
                },
                {
                    techname:"Material UI"
                },

            ]

        },
        {
            companyname:"Xiaomi",
            position:"Full Stack Developer",
            des:" welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            year:"2023-2024",
            techskills:[
                {
                    techname:"Java"    
                   },
                   {
                       techname:"Kotlin"    
                   },
                   {
                       techname:"Python"    
                   },
                   {
                       techname:"c#"    
                   },

            ]

        },

        {
            companyname:"Google",
            position:"Full Stack Developer",
            des:" welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            year:"2024-2025",
            techskills:[
                {
                    techname:"Node js"    
                   },
                   {
                       techname:"Express  js"    
                   },
                   {
                       techname:"Typescript"    
                   },
                   {
                       techname:"Angualar js"   
                   },

            ]

        },
        {
            companyname:"Nas-Daily Company",
            position:"Full Stack Developer",
            des:" welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            year:"2026-2027",
            techskills:[
                {
                    techname:"Node js"    
                   },
                   {
                       techname:"Express  js"    
                   },
                   {
                       techname:"Typescript"    
                   },
                   {
                       techname:"Angualar js"   
                   },

            ]

        },
        {
            companyname:"Apple",
            position:"Full Stack Developer",
            des:" welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            year:"2020-2022",
            techskills:[
                {
                    techname:"Node js"    
                   },
                   {
                       techname:"Express  js"    
                   },
                   {
                       techname:"Typescript"    
                   },
                   {
                       techname:"Angualar js"   
                   },

            ]

        },
        {
            companyname:"Microsoft",
            position:"Full Stack Developer",
            des:" welcome to my projects portfolio, where innovation meets execution. Dive into a collection of my meticulously crafted creations, each representing a blend of creativity and technical expertise. Explore how I transform ideas into impactful solutions through intuitive design and robust functionality.",
            year:"2027-2029",
            techskills:[
                {
                    techname:"Node js"    
                   },
                   {
                       techname:"Express  js"    
                   },
                   {
                       techname:"Typescript"    
                   },
                   {
                       techname:"Angualar js"   
                   },

            ]

        },
       
    ];


    const colors=[
        "#800000",
        "#FF8042",
        "#001CCE",
        "#48098A",
        "#FF6347",
        "#FF1042",   
    ];
    return (
        <div className='container workexperience-section'id='work'>
            <div className='section-title'>
                <h5>Work Experience</h5>
                <span className="line"></span>
            </div>
            <div className='timeline-section'>

            <VerticalTimeline lineColor='#FF1042'>
                {data.map((item,index)=>(
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: colors[index], color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FFBB24'}}
                    date={item.year}
                    dateClassName='date-class'
                    iconStyle={{ background: colors[index], color: '#fff' }}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">
                        {item.companyname}
                        </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    {item.position}
                        </h4>
                        <div className='row'>

                        {item.techskills.map((tec,index)=>(

                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                                <div className='tech-skills'>
                                    <p>{tec.techname}</p>
                                </div>
                            </div>

                        ))} 
                        </div>


                    <p>
                    {item.des}
                    </p>
                </VerticalTimelineElement>
                
                

                ))}
            
            

            
            </VerticalTimeline>

            </div>

        </div>
    )
}

export default WorkExperience
