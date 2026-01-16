import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
    padding: 80px 5%;
    min-height: 80vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: 60px 5%;
    }
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    color: #1e3a8a;
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const SectionDesc = styled.p`
    font-size: 1.1rem;
    color: #64748b;
    max-width: 800px;
    text-align: center;
    margin-bottom: 4rem;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1200px;
`;

const IconCardWrapper = styled.div`
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
    border: 1px solid #f1f5f9;
    transition: all 0.3s;

    &:hover {
        border-color: #2563eb;
        box-shadow: 0 10px 20px rgba(37, 99, 235, 0.1);
        
        div {
            background-color: #2563eb;
            color: white;
        }
    }
`;

const IconBox = styled.div`
    width: 70px;
    height: 70px;
    background-color: #eff6ff;
    color: #2563eb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0 auto 20px;
    transition: all 0.3s;
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

const Features = () => {
    return (
        <SectionContainer id="tinh-nang">
            <SectionTitle>Tính năng nổi bật</SectionTitle>
            <SectionDesc>
                Khám phá những công cụ mạnh mẽ giúp bạn kết nối và sáng tạo không giới hạn trên nền tảng của chúng tôi.
            </SectionDesc>
            <GridContainer>
                <IconCardWrapper data-aos="zoom-in" data-aos-delay="100">
                    <IconBox><i className="bi bi-shield-check"></i></IconBox>
                    <CardTitle>Bảo mật tuyệt đối</CardTitle>
                    <CardDesc>Hệ thống mã hóa đầu cuối bảo vệ thông tin cá nhân và dữ liệu của bạn an toàn.</CardDesc>
                </IconCardWrapper>
                <IconCardWrapper data-aos="zoom-in" data-aos-delay="200">
                    <IconBox><i className="bi bi-lightning-charge"></i></IconBox>
                    <CardTitle>Tốc độ vượt trội</CardTitle>
                    <CardDesc>Trải nghiệm mượt mà, không gián đoạn với công nghệ tối ưu hóa hiệu năng cao.</CardDesc>
                </IconCardWrapper>
                <IconCardWrapper data-aos="zoom-in" data-aos-delay="300">
                    <IconBox><i className="bi bi-people"></i></IconBox>
                    <CardTitle>Cộng đồng lớn mạnh</CardTitle>
                    <CardDesc>Kết nối với hàng triệu người dùng, chia sẻ đam mê và mở rộng mạng lưới của bạn.</CardDesc>
                </IconCardWrapper>
                <IconCardWrapper data-aos="zoom-in" data-aos-delay="400">
                    <IconBox><i className="bi bi-graph-up-arrow"></i></IconBox>
                    <CardTitle>Phân tích thông minh</CardTitle>
                    <CardDesc>Công cụ AI hỗ trợ phân tích xu hướng và đề xuất nội dung phù hợp nhất.</CardDesc>
                </IconCardWrapper>
            </GridContainer>
        </SectionContainer>
    );
};

export default Features;
