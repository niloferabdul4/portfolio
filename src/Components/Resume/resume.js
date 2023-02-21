import React from 'react';
import resume from '../../assets/Resume.pdf';
import {Page } from 'react-pdf';
import {Document} from 'react-pdf/dist/esm/entry.webpack';


const Resume = () => {
    return (
        <Document file={resume} height='500px'>
            <Page pageNumber={1}/>
        </Document>
    );
}

export default Resume;
