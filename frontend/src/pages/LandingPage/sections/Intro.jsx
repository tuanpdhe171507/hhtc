import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
    padding: 80px 5%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: 60px 5%;
    }
`;

const SplitLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    max-width: 1200px;
    
    @media (max-width: 968px) {
        flex-direction: column;
        text-align: center;
    }
`;

const TextBlock = styled.div`
    flex: 1;
    h3 {
        font-size: 2rem;
        font-weight: 700;
        color: #1e3a8a;
        margin-bottom: 1.5rem;
    }
    p {
        font-size: 1.1rem;
        color: #475569;
        line-height: 1.7;
        margin-bottom: 1.5rem;
    }
`;

const ImageBlock = styled.div`
    flex: 1;
    img {
        width: 100%;
        border-radius: 20px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    }
`;

const Intro = () => {
    return (
        <SectionContainer id="gioi-thieu">
            <SplitLayout>
                <ImageBlock data-aos="fade-right">
                    <img src="/images/image.png" alt="Team" />
                </ImageBlock>
                <TextBlock data-aos="fade-left">
                    <h3>Về NASATECH</h3>
                    <p>
                        Được thành lập với sứ mệnh tiên phong trong lĩnh vực công nghệ vệ tinh và mạng xã hội, NASATECH cam kết mang đến những giải pháp đột phá. Đội ngũ kỹ sư tài năng của chúng tôi luôn nỗ lực không ngừng để kiến tạo tương lai số.
                    </p>
                    <p>
                        Chúng tôi tin rằng công nghệ là chìa khóa để giải quyết các vấn đề toàn cầu và kết nối con người gần nhau hơn. Hãy cùng chúng tôi xây dựng một thế giới thông minh và bền vững.
                    </p>
                </TextBlock>
            </SplitLayout>
        </SectionContainer>
    );
};

export default Intro;
