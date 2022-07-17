import React, { useState } from 'react';
import {
    TextareaAutosize,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    Button,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SingleComponentRun from './SingleComponentRun';
import axios from 'axios';
import { HOST_URL } from '../../../../data/data';

const SingleStep = ({ step, activeStep, setActiveStep, disabled, stepsQnt }) => {
    const [loading, setLoading] = useState(false)

    const handleGoBack = () => {
        setActiveStep(activeStep - 1)
    }

    const handleFinish = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        const params = {
            step_id: step.step_id
        }

        try {
            const resp = await axios.post(`${HOST_URL}/api/step/end`, {
                ...params
            }, {
                headers: {
                    "x-access-token": user.accessToken
                }
            });

            console.log(resp);

            setActiveStep(activeStep + 1)


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className={`single-step`}>
            <Accordion disabled={disabled} expanded={!disabled ? true : false}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {`Step ${step.step_number}`}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <h4 className={'field-title'}>Description</h4>
                    {/* <TextareaAutosize key={step.name} placeholder={`Step number`} style={{ width: '100%', height: 100 }} value={step.step_description} /> */}
                    <p>{step.step_description}</p>
                    {/*<button value={data.image} onClick={(e) => handleTextChange(e.target.value, index)}> add photo</button>*/}
                    <h4>Photos</h4>
                    <div className={"photo-container"}>
                        <div className={"photo-btn"} >
                            <label className={"label-photo"} htmlFor={"photo-image"}>
                                <span><ImageIcon /></span>
                                <span>Add photo</span>
                            </label>
                            <input className={"input-image hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} />
                        </div>
                        <div className={"photo-btn"} >
                            <label className={"label-photo"} htmlFor={"photo-image2"}>
                                <span><ImageIcon /></span>
                                <span>Add photo</span>
                            </label>
                            <input className={"input-image2 hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} />
                        </div>
                        <div className={"photo-btn"} >
                            <label className={"label-photo"} htmlFor={"photo-image3"}>
                                <span><ImageIcon /></span>
                                <span>Add photo</span>
                            </label>
                            <input className={"input-image3 hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} />
                        </div>
                        <div className={"photo-btn"} >
                            <label className={"label-photo"} htmlFor={"photo-image4"}>
                                <span><ImageIcon /></span>
                                <span>Add photo</span>
                            </label>
                            <input className={"input-image4 hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} />
                        </div>
                    </div>

                    <h4>Components</h4>
                    <SingleComponentRun stepId={step.step_id} />
                    <TextareaAutosize placeholder={`Note`} style={{ width: '100%', height: 100 }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {activeStep > 0 ? <Button onClick={handleGoBack}>Go back</Button> : <div></div>}
                        {activeStep < stepsQnt - 1 ? <Button onClick={handleFinish}>Finish step</Button> : <Button>Handle total finish</Button>}

                    </div>
                </AccordionDetails>
            </Accordion>
        </section>
    );
}

export default SingleStep;