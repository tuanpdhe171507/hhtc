import React from 'react';
import styled from 'styled-components';
import {
    HomeOutlined,
    PhoneOutlined,
    MailOutlined,
    SafetyCertificateOutlined,
    GlobalOutlined,
    CheckCircleFilled
} from '@ant-design/icons';

const SectionContainer = styled.div`
    padding: 30px 5%;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 20px 5%;
        gap: 20px;
    }
`;

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
    max-width: 800px;
`;

const MainTitle = styled.h2`
    font-size: 28.8px;
    font-weight: 800;
    color: #1e3a8a;
    margin-bottom: 1rem;
    letter-spacing: -1px;
`;

const Subtitle = styled.p`
    font-size: 1.15rem;
    color: #475569;
    line-height: 1.6;
`;

const SplitLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    max-width: 1400px;
    width: 100%;
    
    @media (max-width: 968px) {
        flex-direction: column;
        gap: 30px;
        
        &:nth-child(even) {
            flex-direction: column-reverse;
        }
    }
`;

const TextBlock = styled.div`
    flex: 1;
`;

const HeaderWrapper = styled.div`
    margin-bottom: 2rem;
    
    h3 {
        font-size: 24.5px;
        font-weight: 800;
        color: #1e3a8a;
        margin-bottom: 0.5rem;
        position: relative;
        display: inline-block;
        
        &::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, #1e3a8a, #3b82f6);
            border-radius: 2px;
        }
    }

    @media (max-width: 768px) {
        text-align: center;
        h3 {
            font-size: 1.8rem;
            &::after {
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
`;

const InfoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const InfoItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    
    .icon-box {
        width: 44px;
        height: 44px;
        background: #eff6ff;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1e3a8a;
        font-size: 1.2rem;
        flex-shrink: 0;
        transition: all 0.3s ease;
    }
    
    .content {
        .label {
            display: block;
            font-size: 0.85rem;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 0.2rem;
        }
        .value {
            font-size: 1.1rem;
            color: #1e293b;
            line-height: 1.5;
            font-weight: 500;
        }
    }

    &:hover .icon-box {
        background: #1e3a8a;
        color: #fff;
        transform: scale(1.1);
    }
`;

const Badge = styled.div`
    background: #e0f2fe;
    color: #0369a1;
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 0.9rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 1rem;
`;

const ImageBlock = styled.div`
    flex: 1.2;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 20px;
        left: 20px;
        right: -20px;
        bottom: -20px;
        border: 2px solid #e2e8f0;
        border-radius: 24px;
        z-index: -1;
    }

    img {
        width: 100%;
        border-radius: 24px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        transition: all 0.5s ease;
        display: block;
        
        &:hover {
            transform: scale(1.02);
            box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.25);
        }
    }

    @media (max-width: 968px) {
        &::before {
            display: none;
        }
    }
`;

const Intro = () => {
    return (
        <SectionContainer id="gioi-thieu">
            <SectionHeader data-aos="fade-up">
                <MainTitle>Giới Thiệu Về Chúng Tôi</MainTitle>
                <Subtitle>
                    Hành trình xây dựng niềm tin và những giá trị bền vững cùng TravelGroup.
                </Subtitle>
            </SectionHeader>
            {/* First Row: Profile */}
            <SplitLayout>
                <ImageBlock data-aos="fade-right">
                    <img src="/images/image.png" alt="Travel Group Office" />
                </ImageBlock>
                <TextBlock data-aos="fade-left">
                    <HeaderWrapper>
                        <h3>Về Travel Group</h3>
                    </HeaderWrapper>
                    <InfoList>
                        <InfoItem>
                            <div className="icon-box"><HomeOutlined /></div>
                            <div className="content">
                                <span className="label">Doanh nghiệp</span>
                                <span className="value">Công ty Cổ Phần Tập Đoàn Du Lịch Việt Nam - TravelGroup</span>
                            </div>
                        </InfoItem>
                        <InfoItem>
                            <div className="icon-box"><SafetyCertificateOutlined /></div>
                            <div className="content">
                                <span className="label">Mã số thuế</span>
                                <span className="value">0109443994</span>
                            </div>
                        </InfoItem>
                        <InfoItem>
                            <div className="icon-box"><GlobalOutlined /></div>
                            <div className="content">
                                <span className="label">Trụ sở chính</span>
                                <span className="value">Số 199 Phạm Văn Đồng, phường Xuân Đỉnh, thành phố Hà Nội</span>
                            </div>
                        </InfoItem>
                        <InfoItem>
                            <div className="icon-box"><PhoneOutlined /></div>
                            <div className="content">
                                <span className="label">Hotline</span>
                                <span className="value">024 6685 1289</span>
                            </div>
                        </InfoItem>
                        <InfoItem>
                            <div className="icon-box"><MailOutlined /></div>
                            <div className="content">
                                <span className="label">Thư điện tử</span>
                                <span className="value">Dulich999.vn@gmail.com</span>
                            </div>
                        </InfoItem>
                    </InfoList>
                </TextBlock>
            </SplitLayout>

            {/* Second Row: License */}
            <SplitLayout>
                <TextBlock data-aos="fade-right">
                    <Badge>
                        <SafetyCertificateOutlined /> Giấy phép lữ hành quốc tế
                    </Badge>
                    <HeaderWrapper>
                        <h3>Pháp lý & Chứng nhận</h3>
                    </HeaderWrapper>
                    <InfoList>
                        <InfoItem>
                            <div className="icon-box"><SafetyCertificateOutlined /></div>
                            <div className="content">
                                <span className="label">Số giấy phép</span>
                                <span className="value">01-2561/2023/CDLQGVN-GPLHQT</span>
                            </div>
                        </InfoItem>
                        <InfoItem>
                            <div className="icon-box"><SafetyCertificateOutlined /></div>
                            <div className="content">
                                <span className="label">Cơ quan cấp</span>
                                <span className="value">Bộ Văn hóa, Thể thao và Du lịch - Cục Du lịch Quốc gia Việt Nam</span>
                            </div>
                        </InfoItem>
                        <InfoItem>
                            <div className="icon-box"><CheckCircleFilled style={{ color: '#10b981' }} /></div>
                            <div className="content">
                                <span className="label">Phạm vi kinh doanh</span>
                                <span className="value">
                                    • Kinh doanh lữ hành đối với khách du lịch vào Việt Nam (Inbound)
                                    <br />
                                    • Kinh doanh lữ hành đối với khách du lịch ra nước ngoài (Outbound)
                                </span>
                            </div>
                        </InfoItem>
                    </InfoList>
                </TextBlock>
                <ImageBlock data-aos="fade-left">
                    <img src="/images/image1.png" alt="Travel License" />
                </ImageBlock>
            </SplitLayout>
        </SectionContainer>
    );
};

export default Intro;

