import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';
import VenueSelection from '../../pages/VenueSelection';
import './ProgressBar.css'

function ProgressBar (props) {

    let history = useHistory();
    
    if (props.stage==='1') {
        return ( 
            <div class='container'>
                    <div class='updatedDot' contentEditable="false">
                        <div><span class='updatedLine'></span></div>
                        <p class="caption-venue">
                        VENUE
                        </p>
                    </div>
                <div class='dot' contentEditable="false">
                    <div><span class='line'></span></div>
                    <p class="caption-date">
                        DATE
                    </p>
                </div>
                <div class='dot' contentEditable="false">
                    <div><span class='line'></span></div>
                    <p class="caption-details">
                    DETAILS
                    </p>
                </div>
                <div class='dot' contentEditable="false">
                    <div><span class='line4'></span></div>
                    <p class="caption-submit">
                        SUBMIT
                    </p>
                </div>
            </div>
        )
    }

    else if(props.stage==='2') {
        return ( 
            <div class='container'>
                    <div class='updatedDot' contentEditable="false" onClick={() => history.goBack()}>
                        <div><span class='updatedLine'></span></div>
                        <p class="caption-venue">
                        VENUE
                        </p>
                    </div>
                <div class='updatedDot' contentEditable="false" onClick={() => window.location.reload(false)}>
                    <div><span class='updatedLine'></span></div>
                    <p className="caption-date">
                        DATE
                    </p>
                </div>
                <div className='dot' contentEditable="false">
                    <div><span className='line'></span></div>
                    <p className="caption-details">
                    DETAILS
                    </p>
                </div>
                <div className='dot' contentEditable="false">
                    <div><span className='line4'></span></div>
                    <p className="caption-submit">
                        SUBMIT
                    </p>
                </div>
            </div>
        )
    }

    else if(props.stage==='3') {
        return ( 
            <div className='container'>
                    <div className='updatedDot' contentEditable="false" onClick={() => history.goBack(2)}>
                        <div><span className='updatedLine'></span></div>
                        <p className="caption-venue">
                        VENUE
                        </p>
                    </div>
                <div className='updatedDot' contentEditable="false" onClick={() => {history.goBack()}}>
                    <div><span className='updatedLine'></span></div>
                    <p className="caption-date">
                        DATE
                    </p>
                </div>
                <div className='updatedDot' contentEditable="false" onClick={() => window.location.reload(false)}>
                    <div><span className='updatedLine'></span></div>
                    <p className="caption-details">
                    DETAILS
                    </p>
                </div>
                <div className='dot' contentEditable="false">
                    <div><span className='line4'></span></div>
                    <p className="caption-submit">
                        SUBMIT
                    </p>
                </div>
            </div>
        )
    }

    else {
        return ( 
            <div className='container'>
                    <div className='updatedDot' contentEditable="false" onClick={() => history.goBack(3)}>
                        <div><span className='updatedLine'></span></div>
                        <p className="caption-venue">
                        VENUE
                        </p>
                    </div>
                <div className='updatedDot' contentEditable="false" onClick={() => history.goBack(2)}>
                    <div><span className='updatedLine'></span></div>
                    <p className="caption-date">
                        DATE
                    </p>
                </div>
                <div className='updatedDot' contentEditable="false" onClick={() => history.goBack(1)}>
                    <div><span className='updatedLine'></span></div>
                    <p className="caption-details">
                    DETAILS
                    </p>
                </div>
                <div className='updatedDot' contentEditable="false" onClick={() => window.location.reload(false)}>
                    <div><span className='line4'></span></div>
                    <p className="caption-submit">
                        SUBMIT
                    </p>
                </div>
            </div>
        )
    }
}
    
export default ProgressBar;
    