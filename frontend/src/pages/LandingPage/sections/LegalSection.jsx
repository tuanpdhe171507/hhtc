import React, { useState } from 'react';
import styled from 'styled-components';
import { SafetyCertificateOutlined, RightOutlined, CheckCircleFilled } from '@ant-design/icons';

const SectionContainer = styled.div`
    padding: 100px 5%;
    background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 60px 5%;
    }
`;

const HeaderSection = styled.div`
    text-align: center;
    margin-bottom: 4rem;
    max-width: 800px;
    z-index: 2;
`;

const Title = styled.h2`
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

const InteractiveWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 60px;
    width: 100%;
    max-width: 1100px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    padding: 40px;
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05);
    z-index: 2;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 24px;
        border-radius: 30px;
    }
`;

const TabList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const TabItem = styled.div`
    padding: 24px;
    background: ${props => props.active ? '#ffffff' : 'transparent'};
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props => props.active ? '#e2e8f0' : 'transparent'};
    box-shadow: ${props => props.active ? '0 10px 20px rgba(30, 58, 138, 0.05)' : 'none'};

    &:hover {
        background: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'};
        transform: ${props => props.active ? 'none' : 'translateX(10px)'};
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: ${props => props.active ? '#1e3a8a' : '#475569'};
        margin-bottom: 4px;
        transition: color 0.3s;
    }

    p {
        font-size: 0.9rem;
        color: #64748b;
        margin: 0;
    }

    .icon {
        color: #3b82f6;
        opacity: ${props => props.active ? 1 : 0};
        transform: translateX(${props => props.active ? '0' : '-20px'});
        transition: all 0.3s;
    }
`;

const PreviewArea = styled.div`
    position: relative;
    width: 100%;
    height: 680px; /* Fixed height for portrait document feel */
    background: #ffffff;
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);

    @media (max-width: 968px) {
        height: 500px;
    }
`;

const ImageTransition = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Shows full image without cropping */
    border-radius: 4px;
    animation: fadeIn 0.5s ease;

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

const BadgeOverlay = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    padding: 10px 20px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 0.85rem;
    color: #1e3a8a;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const DecorativeCircle = styled.div`
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
    top: -200px;
    right: -200px;
    z-index: 1;
`;

const SubNavButton = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    color: #1e3a8a;
    transition: all 0.3s;
    z-index: 10;
    border: 1px solid #e2e8f0;

    &:hover {
        background: #1e3a8a;
        color: white;
        transform: translateY(-50%) scale(1.1);
    }

    &.left { left: 20px; }
    &.right { right: 20px; }
`;

const PageIndicator = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(4px);
    color: white;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
`;

const LegalSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);

    const categories = [
        {
            id: 1,
            title: 'Giấy phép kinh doanh',
            desc: 'Được cấp bởi Sở Kế hoạch và Đầu tư',
            items: [
                { img: '/images/kinhdoanh.jpg', tag: 'Business License' }
            ]
        },
        {
            id: 2,
            title: 'Giấy phép lữ hành',
            desc: 'Cấp bởi Cục Du lịch Quốc gia Việt Nam',
            items: [
                { img: '/images/kinh_doanh_lu_hanh.jpg', tag: 'Tourism License' }
            ]
        },
        {
            id: 3,
            title: 'Hồ sơ pháp lý khác',
            desc: 'Chứng nhận thuế và văn bản liên quan',
            items: [
                { img: '/images/xac_nhan_thue.jpg', tag: 'Tax Certificate 1' },
                { img: '/images/xac_nhan_thue_2.jpg', tag: 'Tax Certificate 2' }
            ]
        },
    ];

    const activeCategory = categories[activeIndex];
    const activeItem = activeCategory.items[subIndex];
    const hasMultipleItems = activeCategory.items.length > 1;

    const handleCategoryChange = (index) => {
        setActiveIndex(index);
        setSubIndex(0); // Reset sub-index when category changes
    };

    const nextSub = (e) => {
        e.stopPropagation();
        setSubIndex((prev) => (prev + 1) % activeCategory.items.length);
    };

    const prevSub = (e) => {
        e.stopPropagation();
        setSubIndex((prev) => (prev - 1 + activeCategory.items.length) % activeCategory.items.length);
    };

    return (
        <SectionContainer id="phap-ly">
            <DecorativeCircle />
            <HeaderSection data-aos="fade-up">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '1rem' }}>
                    <SafetyCertificateOutlined style={{ fontSize: '1.5rem', color: '#3b82f6' }} />
                    <span style={{ textTransform: 'uppercase', fontWeight: '800', letterSpacing: '2px', color: '#3b82f6', fontSize: '0.85rem' }}>Trust & Quality</span>
                </div>
                <Title>Hồ sơ Pháp lý</Title>
                <Subtitle>
                    Nền tảng vững chắc cho mọi hành trình bền vững. Chúng tôi cung cấp đầy đủ các chứng nhận pháp lý
                    để bạn hoàn toàn yên tâm khi đồng hành cùng HHTravel Group.
                </Subtitle>
            </HeaderSection>

            <InteractiveWrapper data-aos="fade-up" data-aos-delay="200">
                <TabList>
                    {categories.map((cat, index) => (
                        <TabItem
                            key={cat.id}
                            active={activeIndex === index}
                            onClick={() => handleCategoryChange(index)}
                        >
                            <div>
                                <h3>{cat.title}</h3>
                                <p>{cat.desc}</p>
                            </div>
                            <RightOutlined className="icon" />
                        </TabItem>
                    ))}
                </TabList>

                <PreviewArea>
                    {hasMultipleItems && (
                        <>
                            <SubNavButton className="left" onClick={prevSub}>
                                <RightOutlined style={{ transform: 'rotate(180deg)' }} />
                            </SubNavButton>
                            <SubNavButton className="right" onClick={nextSub}>
                                <RightOutlined />
                            </SubNavButton>
                            <PageIndicator>
                                {subIndex + 1} / {activeCategory.items.length}
                            </PageIndicator>
                        </>
                    )}

                    <ImageTransition
                        key={`${activeCategory.id}-${subIndex}`}
                        src={activeItem.img}
                        alt={activeCategory.title}
                    />

                    <BadgeOverlay>
                        <CheckCircleFilled style={{ color: '#10b981' }} />
                        {activeItem.tag}
                    </BadgeOverlay>
                </PreviewArea>
            </InteractiveWrapper>
        </SectionContainer>
    );
};

export default LegalSection;
