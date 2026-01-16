import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
    padding: 80px 5%;
    background-color: #f8fafc;
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
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1200px;
`;

const ImageCard = styled.div`
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15);
    }
`;

const CardImage = styled.div`
    height: 250px;
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center;
`;

const CardContent = styled.div`
    padding: 25px;
    text-align: center;
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

const Solutions = () => {
    return (
        <SectionContainer id="giai-phap">
            <SectionTitle>Sản phẩm & Giải pháp</SectionTitle>
            <SectionDesc>
                Nền tảng không chỉ kết nối người dùng mà còn cung cấp các tính năng hữu ích để chia sẻ xu hướng, sản phẩm và dịch vụ công nghệ, mang lại trải nghiệm tối ưu cho người dùng.
            </SectionDesc>
            <GridContainer>
                <ImageCard data-aos="fade-right" data-aos-delay="100">
                    <CardImage bg="/images/image1.png" />
                    <CardContent>
                        <CardTitle>Sự kiện công nghệ</CardTitle>
                        <CardDesc>Tổ chức và quản lý các sự kiện trực tuyến quy mô lớn với công cụ livestream chuyên nghiệp.</CardDesc>
                    </CardContent>
                </ImageCard>
                <ImageCard data-aos="fade-left" data-aos-delay="200">
                    <CardImage bg="/images/image2.png" />
                    <CardContent>
                        <CardTitle>Cửa hàng số ERIC</CardTitle>
                        <CardDesc>Giải pháp thương mại điện tử tích hợp, hỗ trợ doanh nghiệp tiếp cận khách hàng tiềm năng.</CardDesc>
                    </CardContent>
                </ImageCard>
            </GridContainer>
        </SectionContainer>
    );
};

export default Solutions;
