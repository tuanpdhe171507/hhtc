import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import {
    ArrowLeftOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
    StarFilled,
    ClockCircleOutlined,
    CheckCircleFilled,
    PhoneOutlined,
    MessageOutlined,
    SafetyCertificateOutlined,
    DollarOutlined,
    CustomerServiceOutlined
} from '@ant-design/icons';
import { Image } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { tours } from '../../../data/tours';

const PageContainer = styled.div`
    background-color: #fff;
    min-height: 100vh;
`;

const ContentWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding: 80px 5% 160px;

    @media (max-width: 768px) {
        padding: 80px 5% 120px;
    }
`;

const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    color: #64748b;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 0.5rem;
    transition: color 0.3s;
    
    &:hover {
        color: #1e3a8a;
    }
`;

const TourHeader = styled.div`
    margin-bottom: 1.5rem;
`;

const Category = styled.span`
    display: inline-block;
    background: #eff6ff;
    color: #1e3a8a;
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.3;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 15px;
    height: 500px;
    margin-bottom: 3rem;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        height: auto;
    }
`;

const MainPhoto = styled.div`
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    cursor: pointer;
    overflow: hidden;

    img, .ant-image, .ant-image-img {
        width: 100%;
        height: 100% !important;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    &:hover img, &:hover .ant-image-img {
        transform: scale(1.05);
    }

    @media (max-width: 968px) {
        height: 350px;
    }
`;

const SidePhotos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 15px;

    @media (max-width: 968px) {
        display: none;
    }
`;

const SidePhoto = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;

    img, .ant-image, .ant-image-img {
        width: 100%;
        height: 100% !important;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    &:hover img, &:hover .ant-image-img {
        transform: scale(1.08);
    }
`;

const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 50px;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
    }
`;

const SectionTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Description = styled.div`
    font-size: 1.15rem;
    color: #475569;
    line-height: 1.8;
    margin-bottom: 3rem;
    
    p {
        margin-bottom: 1.5rem;
    }
`;

const HighlightBox = styled.div`
    background: #f8fafc;
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid #e2e8f0;
    margin-bottom: 3rem;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }

    li {
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 600;
        color: #1e293b;
    }

    @media (max-width: 640px) {
        ul {
            grid-template-columns: 1fr;
        }
    }
`;

const ItineraryTimeline = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ItineraryItem = styled.div`
    display: flex;
    gap: 20px;
`;

const DayCircle = styled.div`
    width: 40px;
    height: 40px;
    background: #1e3a8a;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 0.9rem;
    flex-shrink: 0;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 40px;
        bottom: -2rem;
        left: 50%;
        width: 2px;
        background: #e2e8f0;
        display: ${props => props.isLast ? 'none' : 'block'};
    }
`;

const ItineraryContent = styled.div`
    h4 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 0.5rem;
    }
    p {
        color: #64748b;
        line-height: 1.6;
        white-space: pre-line;
    }
`;

const Sidebar = styled.aside`
    position: sticky;
    top: 100px;
    height: fit-content;
    background: #fff;
    border-radius: 24px;
    padding: 2rem;
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
    border: 1px solid #e2e8f0;

    @media (max-width: 968px) {
        position: static;
    }
`;

const PriceTag = styled.div`
    margin-bottom: 2rem;
    .label {
        font-size: 0.9rem;
        color: #64748b;
        display: block;
    }
    .value {
        font-size: 2.2rem;
        font-weight: 800;
        color: #1e3a8a;
    }
`;

const ConsultationBox = styled.div`
    background: #f8fafc;
    border-radius: 20px;
    padding: 1.5rem;
    border: 1px solid #e2e8f0;
    margin-bottom: 2rem;

    h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 1rem;
        text-align: center;
    }
`;

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
`;

const ActionButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    border-radius: 12px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1rem;

    &.primary {
        background: #1e3a8a;
        color: white;
        &:hover { background: #1e40af; transform: translateY(-2px); }
    }

    &.secondary {
        background: #0068ff;
        color: white;
        &:hover { background: #0056d2; transform: translateY(-2px); }
    }
`;

const TrustBadge = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 10px;
    border: 1px solid #f1f5f9;

    .icon {
        width: 35px;
        height: 35px;
        background: #eff6ff;
        color: #1e3a8a;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
    }

    .text {
        font-size: 0.85rem;
        font-weight: 600;
        color: #475569;
    }
`;

const TourDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Find tour by id
    const tour = tours.find(t => t.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!tour) {
        return (
            <PageContainer>
                <Header onContactClick={() => { }} />
                <ContentWrapper>
                    <BackButton onClick={() => navigate('/')}>
                        <ArrowLeftOutlined /> Quay lại
                    </BackButton>
                    <h1>Không tìm thấy tour</h1>
                </ContentWrapper>
                <Footer />
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <Header onContactClick={() => { }} />
            <ContentWrapper>
                <BackButton onClick={() => navigate('/')}>
                    <ArrowLeftOutlined /> Quay lại
                </BackButton>

                <TourHeader>
                    <Category>{tour.category}</Category>
                    <Title>{tour.title}</Title>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', color: '#64748b', fontWeight: '500' }}>
                        <span><EnvironmentOutlined /> {tour.stats.location}</span>
                        <span><ClockCircleOutlined /> {tour.stats.duration}</span>
                        <span><StarFilled style={{ color: '#f59e0b' }} /> {tour.stats.rating}</span>
                    </div>
                </TourHeader>

                <Image.PreviewGroup>
                    <GalleryContainer>
                        <MainPhoto>
                            <Image src={tour.gallery?.[0] || tour.imageDetail} alt={tour.title} />
                        </MainPhoto>
                        <SidePhotos>
                            <SidePhoto>
                                <Image src={tour.gallery?.[1] || tour.imageDetail} alt={tour.title} />
                            </SidePhoto>
                            <SidePhoto>
                                <Image src={tour.gallery?.[2] || tour.imageDetail} alt={tour.title} />
                            </SidePhoto>
                            <SidePhoto>
                                <Image src={tour.gallery?.[3] || tour.imageDetail} alt={tour.title} />
                            </SidePhoto>
                            <SidePhoto>
                                <Image src={tour.gallery?.[4] || tour.imageDetail} alt={tour.title} />
                            </SidePhoto>
                        </SidePhotos>
                    </GalleryContainer>
                </Image.PreviewGroup>

                <MainGrid>
                    <div>
                        <SectionTitle>Mô tả chuyến đi</SectionTitle>
                        <Description>
                            {tour.description.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </Description>

                        <SectionTitle>Giá trị nổi bật</SectionTitle>
                        <HighlightBox>
                            <ul>
                                {tour.highlights.map((item, i) => (
                                    <li key={i}><CheckCircleFilled style={{ color: '#10b981' }} /> {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>

                        <SectionTitle>Lịch trình trải nghiệm</SectionTitle>
                        <ItineraryTimeline>
                            {tour.itinerary.map((item, index) => (
                                <ItineraryItem key={index}>
                                    <DayCircle isLast={index === tour.itinerary.length - 1}>
                                        {item.day}
                                    </DayCircle>
                                    <ItineraryContent>
                                        <h4>Ngày {item.day}: {item.title}</h4>
                                        <p>{item.desc}</p>
                                    </ItineraryContent>
                                </ItineraryItem>
                            ))}
                        </ItineraryTimeline>
                    </div>

                    <Sidebar>
                        <PriceTag>
                            <span className="label">Giá chỉ từ</span>
                            <span className="value">{tour.price}</span>
                        </PriceTag>

                        <ConsultationBox>
                            <h4>Liên hệ tư vấn ngay</h4>
                            <ContactGrid>
                                <ActionButton href="tel:02466851289" className="primary">
                                    <PhoneOutlined /> Gọi 024 6685 1289
                                </ActionButton>
                                <ActionButton href="https://zalo.me/02466851289" target="_blank" className="secondary">
                                    <MessageOutlined /> Chat qua Zalo
                                </ActionButton>
                            </ContactGrid>
                        </ConsultationBox>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <TrustBadge>
                                <div className="icon"><SafetyCertificateOutlined /></div>
                                <div className="text">Cam kết chất lượng 100%</div>
                            </TrustBadge>
                            <TrustBadge>
                                <div className="icon"><DollarOutlined /></div>
                                <div className="text">Giá tốt nhất thị trường</div>
                            </TrustBadge>
                            <TrustBadge>
                                <div className="icon"><CustomerServiceOutlined /></div>
                                <div className="text">Hỗ trợ 24/7 tận tâm</div>
                            </TrustBadge>
                        </div>

                        <div style={{ color: '#64748b', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 5px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span><CalendarOutlined /> Khởi hành:</span>
                                <strong style={{ color: '#1e293b' }}>Hàng ngày</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span><ClockCircleOutlined /> Thời gian:</span>
                                <strong style={{ color: '#1e293b' }}>{tour.stats.duration}</strong>
                            </div>
                        </div>
                    </Sidebar>
                </MainGrid>
            </ContentWrapper>
            <Footer />
        </PageContainer>
    );
};

export default TourDetail;
