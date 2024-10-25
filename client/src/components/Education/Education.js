import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdCastForEducation} from "react-icons/md"

import './Education.css'

const Education =()=>{

    const data=[
        {
           name: "Tigwi Elementary School",
           degree: "Best in English",
           year:"2014-2015",
           des:"I graduated from Tigwi Elementary School in the school year 2014-2015, earning the Best in English award.",

        },
        {
            name: "Tigwi National High School",
            degree: "With Honor",
            year:"2015-2019",
            des:"I graduated from Tigwi National High School with honor in the school year 2015-2019.",
 
         },
         {
         name: "Tigwi Senior high School",
         degree: "With Honor",
         year:"2019-2021",
         des:"I graduated from Tigwi Senior High School with honors in the school year 2019-2021, specializing in the Information and Communications Technology (ICT) strand. My studies focused on building foundational skills in technology, preparing me for a career in IT",

         },
         {
            name: "Marinduque State  University",
            degree: "Bachelor of Science in Information Technology",
            year:"2021-2025",
            des:"I am currently pursuing a Bachelor of Science in Information Technology at Marinduque State University, expected to graduate in 2025 ",
   
         },

    ]

    const colors=[
        "#001CCE",
        "#00C79F",
        "#FFB924",
        "#FF1042",  
    ]
    return(
        <div className='container education-section'id='education'>

            <div className='section-title'>
                <h5>Education </h5>
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
            icon={<MdCastForEducation />}
        >
            <h3 className="vertical-timeline-element-title">
                {item.name}
                </h3>
            <h5 className="vertical-timeline-element-subtitle" style={{color:"white"}}>
            {item.degree}
                </h5>
                

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

export default Education