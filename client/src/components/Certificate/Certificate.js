import React, { useState } from "react";
import './Certificate.css';
import Certificate1 from '../Certificate/Digital_Certificate/Basic level of software enginnering.pdf'
import Certificate3 from '../Certificate/Digital_Certificate/Coursera 23PXHPVJ454H.pdf'
import Certificate5 from '../Certificate/Digital_Certificate/MA. DONNA D. FIDELINO  - Figma 101 P1 Cert of Participation(sgd) (1).pdf'
import Certificate6 from '../Certificate/Digital_Certificate/MA. DONNA D. FIDELINO  Certificate of Participation.pdf'
import Certificate7 from '../Certificate/Digital_Certificate/Ma. Donna D. Fidelino (1).pdf'
import Certificate8 from '../Certificate/Digital_Certificate/MA. DONNA D. FIDELINO - Basic Photography Techniques Cert of Participation(sgd) (1).pdf'
import Certificate9 from '../Certificate/Digital_Certificate/MA. DONNA D. FIDELINO - Figma 101 P2 Cert of Participation(sgd).pdf'
import Certificate10 from '../Certificate/Digital_Certificate/MARIA DONNA D. FIDELINO_signed.pdf'
import Certificate11 from '../Certificate/Digital_Certificate/008.pdf'
import Certificate12 from '../Certificate/Digital_Certificate/Programming for Beginners Using Python.pdf'
import Certificate13 from '../Certificate/Digital_Certificate/Programming for Intermediate Users Using Python.pdf'
import Certificate14 from '../Certificate/Digital_Certificate/WOPS_MA. DONNA D. FIDELINO.pdf'
import Certificate15 from '../Certificate/Digital_Certificate/Topic4_Ma. Donna Fidelino_20241023_110448_0000.pdf'
import Certificate16 from '../Certificate/Digital_Certificate/Topic2_Ma. Donna Fidelino_20241023_110727_0000.pdf'
import Certificate17 from '../Certificate/Digital_Certificate/Topic3_Ma. Donna Fidelino_20241023_110604_0000.pdf'
import Certificate18 from '../Certificate/Digital_Certificate/Topic1_Ma. Donna Fidelino_20241023_110815_0000.pdf'
import Fade from 'react-reveal/Fade';

// Import all PDF file
// Import more certificates as needed

const Certificate = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [visibleCertificates, setVisibleCertificates] = useState(3);

    const certificates = [
        { id: 1, name: "Basic level of software engineering", file: Certificate1 },
        { id: 12, name: "Programming for Beginners Using Python", file: Certificate12 },
        { id: 13, name: "Programming for Intermediate Users Using Python", file: Certificate13 },
        { id: 3, name: "Fundamentals of Cybersecurity", file: Certificate3 },
        { id: 5, name: "Figma 101 P1", file: Certificate5 },
        { id: 9, name: "Figma 101 P2", file: Certificate9 },
        { id: 6, name: "“AiLam Mo Dapat: Leveraging the Use of AI Tools in Academic Writing", file: Certificate6 },
        { id: 7, name: "Online Freelancing Journey", file: Certificate7 },
        { id: 8, name: "Basic Photography Techniques", file: Certificate8 },    
        { id: 10, name: "Empowering Women in Cybersecurity: A closer Look at Romance Scams", file: Certificate10 },
        { id: 11, name: "“DIGITAL ART UNLEASHED:CRAFTING MASTERPIECES IN THE VIRTUAL CANVAS”", file: Certificate11 },
        { id: 14, name: "Women in Public Service and Gender Issues", file: Certificate14 },
        { id: 15, name: "“Exploring the Direct Selling Business: A Pathway to IT preneurial Success, Great Life-lihood (Negosyo Para Sa’yo)", file: Certificate15 },
        { id: 16, name: " “The ICT Profciency Examination Your Gateway to Eligibility” ", file: Certificate16 },
        { id: 17, name: "“Money Moves: Gen Z’s Guide to Financial Success”  ", file: Certificate17 },
        { id: 18, name: " Exploring the Role of CAD in Structural Desig n: Tools, Techniques, and Trends", file: Certificate18 },
    ];
    const handleCertificateClick = (cert) => {
        setSelectedCertificate(cert);
    };

    const loadMore = () => {
        setVisibleCertificates(prevVisible => prevVisible + 3);
    };

    return (
        <section className="certificate-section" id="certificate">
            <div className="container">
            <div className='section-title'>
                <h5>Certificate </h5>
                <span className="line"></span>
            </div> 
                <div className="certificate-grid">
                    <Fade bottom cascade>
                        {certificates.slice(0, visibleCertificates).map((cert) => (
                            <div key={cert.id} className="certificate-item" onClick={() => handleCertificateClick(cert)}>
                                <div className="certificate-preview">
                                    <embed 
                                        src={cert.file} 
                                        type="application/pdf" 
                                        width="100%" 
                                        height="100%" 
                                    />
                                </div>
                                <h3 className="certificate-name">{cert.name}</h3>
                            </div>
                        ))}
                    </Fade>
                </div>
                {visibleCertificates < certificates.length && (
                    <div className="load-more-container">
                        <button className="load-more-btn" onClick={loadMore}>Load More</button>
                    </div>
                )}
            </div>
            {selectedCertificate && (
                <div className="certificate-modal" onClick={() => setSelectedCertificate(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setSelectedCertificate(null)}>&times;</span>
                        <h3>{selectedCertificate.name}</h3>
                        <embed 
                            src={selectedCertificate.file} 
                            type="application/pdf" 
                            width="100%" 
                            height="600px" 
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certificate;
