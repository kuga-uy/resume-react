import React from 'react'


const StackCard = () => {
    return (
        <>
        <div className="tech-stack-card">
        <h5 className="tech-stack-title">My Tech Stack:</h5>
            <div className="tech-stack-wrapper">
                <img src="assets/image 5.png" className="stack-icon logo-5" alt="tech-stack"/>
                <img src="assets/image 1.png" className="stack-icon logo-1" alt="tech-stack"/>
                <img src="assets/image 3.png" className="stack-icon logo-3" alt="tech-stack"/>
                <img src="assets/image 4.png" className="stack-icon logo-4" alt="tech-stack"/>
                <img src="assets/image 5.png" className="stack-icon logo-5" alt="tech-stack"/>
                <img src="assets/image 1.png" className="stack-icon logo-1" alt="tech-stack"/>
                <img src="assets/image 3.png" className="stack-icon logo-3" alt="tech-stack"/>
            </div>

                <div className="stack-point-container">
                    <div className="stack-point">
                    </div>
                    <div className="stack-point">
                        <div className="stack-intern-point">
                        </div>
                    </div>
                    <div className="stack-point">
                    </div>
                </div>
            </div>  
        </>
    )
}

export {StackCard}