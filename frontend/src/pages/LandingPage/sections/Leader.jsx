import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
    width: 100%;
    padding: 100px 5%;
    background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
`;

const ContentWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 80px;

    @media (max-width: 968px) {
        flex-direction: column;
        gap: 40px;
        text-align: center;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    
    img {
        width: 100%;
        max-width: 320px;
        border-radius: 20px;
        box-shadow: 0 15px 30px rgba(37, 99, 235, 0.1);
    }
`;

const TextContainer = styled.div`
    flex: 1.5;
`;

const Name = styled.h2`
    font-size: 3.5rem;
    font-weight: 800;
    color: #2563eb;
    margin-bottom: 5px;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    color: #64748b;
    margin-bottom: 30px;
`;

const Bio = styled.div`
    font-size: 1.1rem;
    color: #475569;
    line-height: 1.8;
    
    p {
        margin-bottom: 20px;
    }
`;

const Leader = () => {
    return (
        <SectionContainer id="lanh-dao">
            <ContentWrapper>
                <ImageContainer data-aos="fade-right">
                    <img src="/images/leader.png" alt="Bà Hoàng Thị Thanh Thủy - Tổng Giám Đốc" />
                </ImageContainer>
                <TextContainer data-aos="fade-left">
                    <Name>Hoàng Thị Thanh Thủy</Name>
                    <Title>Tổng Giám Đốc</Title>
                    <Title>Công Ty Cổ Phần Tập Đoàn Du Lịch Việt Nam</Title>
                    <Bio>
                        <p>
                            Với niềm đam mê mãnh liệt trong việc kết nối những giá trị văn hóa và con người qua mỗi hành trình,
                            Bà Hoàng Thị Thanh Thủy cam kết mang lại những trải nghiệm du lịch đẳng cấp, chuyên nghiệp
                            và đầy cảm hứng cho mọi khách hàng của TravelGroup.
                        </p>
                        <p>
                            Bà là người dẫn dắt tập đoàn với tầm nhìn chiến lược, không ngừng đổi mới sáng tạo để khẳng định
                            vị thế của TravelGroup là một trong những đơn vị lữ hành hàng đầu, góp phần quảng bá hình ảnh
                            đất nước và con người Việt Nam đến với bạn bè quốc tế trong kỷ nguyên mới.
                        </p>
                    </Bio>
                </TextContainer>
            </ContentWrapper>
        </SectionContainer>
    );
};

export default Leader;
