import React from 'react';
import { AboutWrapper, AboutText, SectionHeader, AboutDivider, Horizontal } from './styles';



export const AboutPage: React.FC = () => {
    return (
        <AboutWrapper>
            <AboutDivider>
            <Horizontal>
                <SectionHeader>About Us</SectionHeader>
                <AboutText>The Avenues Law Review was founded in 2018 by Olivia Gross. We aim to foster deeper and more empathetic thinking through discussing controversial topics—framed within the context of the history of the Supreme Court and the Constitution. All the articles on this website were written by Avenues students. They display the blooming characteristics necessary to form a more conscientious political future.</AboutText>
            </Horizontal>
            remind me to do this later
            </AboutDivider>
        </AboutWrapper>
    )
}