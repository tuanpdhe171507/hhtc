import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import {
    ArrowLeftOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
    StarFilled,
    ClockCircleOutlined,
    CheckCircleFilled
} from '@ant-design/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { tours } from '../../../data/tours';

const PageContainer = styled.div`
    background-color: #fff;
    min-height: 100vh;
`;

const ContentWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 120px 5% 80px;

    @media (max-width: 768px) {
        padding: 100px 5% 60px;
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
    margin-bottom: 2rem;
    transition: color 0.3s;
    
    &:hover {
        color: #1e3a8a;
    }
`;

const TourHeader = styled.div`
    margin-bottom: 3rem;
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

const HeroImage = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 3rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        height: 300px;
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

const ContactButton = styled.button`
    width: 100%;
    background: #1e3a8a;
    color: #fff;
    border: none;
    padding: 1rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.3s;
    margin-bottom: 1.5rem;

    &:hover {
        background: #1e40af;
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

                <HeroImage>
                    <img src={tour.imageDetail} alt={tour.title} />
                </HeroImage>

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
                        <ContactButton>Đặt Tour Ngay</ContactButton>
                        <div style={{ color: '#64748b', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span><CalendarOutlined /> Khởi hành:</span>
                                <strong>Hàng ngày</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span><ClockCircleOutlined /> Thời gian:</span>
                                <strong>{tour.stats.duration}</strong>
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
