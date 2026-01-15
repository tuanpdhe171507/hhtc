import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
    padding: 80px 5%;
    background-color: #eff6ff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    color: #1e3a8a;
    margin-bottom: 1rem;
    text-align: center;
`;

const SectionDesc = styled.p`
    font-size: 1.1rem;
    color: #64748b;
    max-width: 800px;
    text-align: center;
    margin-bottom: 4rem;
    line-height: 1.6;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1200px;
`;

const IconCardWrapper = styled.div`
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    text-align: left;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
    border: 1px solid #f1f5f9;
    transition: all 0.3s;

    &:hover {
        border-color: #2563eb;
        box-shadow: 0 10px 20px rgba(37, 99, 235, 0.1);
    }
`;

const CardTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 10px;
    text-transform: uppercase;
`;

const CardDesc = styled.p`
    font-size: 0.95rem;
    color: #64748b;
    line-height: 1.5;
`;

const JobHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const JobType = styled.span`
    color: #2563eb;
    font-weight: bold;
`;

const Careers = () => {
    return (
        <SectionContainer id="tuyen-dung">
            <SectionTitle>Tuyển dụng nhân tài</SectionTitle>
            <SectionDesc>
                Gia nhập đội ngũ NASATECH để cùng chinh phục những thử thách công nghệ mới.
            </SectionDesc>
            <GridContainer>
                <IconCardWrapper data-aos="fade-up" data-aos-delay="100">
                    <JobHeader>
                        <CardTitle style={{ margin: 0 }}>Senior Frontend Dev</CardTitle>
                        <JobType>Full-time</JobType>
                    </JobHeader>
                    <CardDesc>Yêu cầu: ReactJS, TypeScript, 3+ năm kinh nghiệm. Mức lương hấp dẫn + Thưởng dự án.</CardDesc>
                </IconCardWrapper>
                <IconCardWrapper data-aos="fade-up" data-aos-delay="200">
                    <JobHeader>
                        <CardTitle style={{ margin: 0 }}>Product Designer</CardTitle>
                        <JobType>Full-time</JobType>
                    </JobHeader>
                    <CardDesc>Yêu cầu: Figma, UI/UX mindset tốt. Sáng tạo và có gu thẩm mỹ hiện đại.</CardDesc>
                </IconCardWrapper>
                <IconCardWrapper data-aos="fade-up" data-aos-delay="300">
                    <JobHeader>
                        <CardTitle style={{ margin: 0 }}>AI Research Engineer</CardTitle>
                        <JobType>Remote</JobType>
                    </JobHeader>
                    <CardDesc>Yêu cầu: Python, TensorFlow/PyTorch. Nghiên cứu các mô hình NLP/Computer Vision.</CardDesc>
                </IconCardWrapper>
            </GridContainer>
        </SectionContainer>
    );
};

export default Careers;
