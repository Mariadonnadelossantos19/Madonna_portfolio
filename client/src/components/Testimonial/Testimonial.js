import React from "react";
import './Testimonial.css';
import AhmadImage from "../../Image/ahmad.jpg";
import TolinImage from "../../Image/tolin.jpg";
import JosephImage from "../../Image/mj.jpg";
import Slider from "react-slick";
import DonnaImage from "../../Image/mj.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from 'react-reveal/Zoom';


const Testimonial = () =>{
    const data=[
        {
            name:"Ahmad",
            position:"CEO of Ahmadics",
            des:"I like her work, he is hardworking and one of the best employee.",
            img: AhmadImage,

        },
        {
            name:"Mark Gilbert",
            position:"Full Stack Developer in Ahmadics",
            des:"She is one of the employee that can give innovation to our company.",
            img: TolinImage,

        },
        {
            name:"Mark Joseph",
            position:"Supervisor in Ahmadics",
            des:"I like her work, he is hardworking and one of the best employee.",
            img: JosephImage,


        },
        {
            name:"Elvin",
            position:"Graphic Designer of Ahmadics",
            des:"I like her work, he is hardworking and one of the best employee.",
            img: AhmadImage,

        },
        {
            name:"Cindy",
            position:"Graphic Designer of Ahmadics",
            des:"I like her work, he is hardworking and one of the best employee.",
            img: AhmadImage,

        },
        {
            name:"Jezreel",
            position:"Graphic Designer of Ahmadics",
            des:"I like her work, he is hardworking and one of the best employee.",
            img: AhmadImage,

        },
        {
            name:"Kenneth",
            position:"Graphic Designer of Ahmadics",
            des:"I like her work, he is hardworking and one of the best employee.",
            img: AhmadImage,

        },

    ];

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


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        initialSlide: 0,
        autoplay: true,
        rows:1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    
    return(
        <div className="container testimonial-section" id="testimonial">
            <div className='section-title'>
                <h5>Testimonial</h5>
                <span className="line"></span>
            </div>

            <div className="testimonial-slider">

                <Slider {...settings}>

                    {data.map((item,index)=>(
                    <Zoom>
                    
                        <div className="content-slider-main"> 
                            <div className="content-slider" key={index} style={{backgroundColor:colors[index]}}>
                            <img src={item.img} alt="testimonial image" className="center-image"/>
                            <p>{item.name}</p>
                            <p>{item.position}</p>
                            <p>{item.des}</p>
                            
                            </div>
                        </div> 
                    </Zoom> 
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial