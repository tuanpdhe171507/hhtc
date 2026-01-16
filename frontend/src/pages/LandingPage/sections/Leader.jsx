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
        max-width: 450px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
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

const BulletList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 30px;
    text-align: left;

    @media (max-width: 968px) {
        display: inline-block;
    }
`;

const BulletItem = styled.li`
    padding-left: 25px;
    position: relative;
    margin-bottom: 12px;
    font-size: 1.05rem;
    color: #334155;

    &:before {
        content: '•';
        position: absolute;
        left: 0;
        color: #2563eb;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 1;
    }
`;

const Leader = () => {
    return (
        <SectionContainer id="lanh-dao">
            <ContentWrapper>
                <ImageContainer data-aos="fade-right">
                    <img src="/images/leader.png" alt="Tống Văn Sông - Tổng Giám Đốc" />
                </ImageContainer>
                <TextContainer data-aos="fade-left">
                    <Name>Hoàng Minh Sơn</Name>
                    <Title>Tổng Giám Đốc</Title>
                    <Bio>
                        <p>
                            Với nền tảng công nghệ, nhân lực chất lượng và tài chính vững mạnh,
                            ông cam kết đẩy mạnh đổi mới, tăng tốc triển khai mạng xã hội hiện đại,
                            đáp ứng chuyển đổi số, hội nhập quốc tế và phụng sự đất nước trong kỷ nguyên số.
                        </p>
                        <p>
                            Ông là một chuyên gia uy tín, giàu kinh nghiệm trong các lĩnh vực công nghệ,
                            thông tin — truyền thông và chuyển đổi số. Trong quá trình công tác,
                            ông từng đảm nhiệm nhiều vị trí lãnh đạo, quản lý quan trọng như:
                        </p>
                    </Bio>
                    <BulletList>
                        <BulletItem>Tổng Biên tập Tạp chí Tin học Ngân hàng, Ngân hàng Nhà nước Việt Nam</BulletItem>
                        <BulletItem>Phó Tổng Biên tập Tạp chí Kiểm tra</BulletItem>
                        <BulletItem>Phó Ban Kinh tế, Tạp chí Cộng sản</BulletItem>
                    </BulletList>
                </TextContainer>
            </ContentWrapper>
        </SectionContainer>
    );
};

export default Leader;
