import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { tours } from '../../../data/tours';

const SectionContainer = styled.div`
    padding: 100px 5%;
    background-color: #f8fafc;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: 60px 5%;
    }
`;

const SectionTitle = styled.h2`
    font-size: 28.8px;
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
    margin-bottom: 2.5rem;
    line-height: 1.6;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1400px;
`;

const ImageCard = styled.div`
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-12px);
        box-shadow: 0 25px 50px rgba(30, 58, 138, 0.15);
    }
`;

const CardImage = styled.div`
    height: 250px;
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.2));
    }
`;

const CardContent = styled.div`
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const CardCategory = styled.span`
    font-size: 0.75rem;
    font-weight: 700;
    color: #3b82f6;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
`;

const CardTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 12px;
    line-height: 1.4;
    height: 3.1em; /* Fixed height for exactly 2 lines to align content below */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const CardDesc = styled.div`
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.6;
    /* Removed margin-top: auto to keep content aligned close to the title */

    strong {
        display: block;
        margin-bottom: 4px;
        color: #0f172a;
        font-weight: 600;
    }

    ul {
        list-style: none;     
        padding-left: 0;
        margin: 0;
    }

    li {
        position: relative;
        padding-left: 20px;
        margin-bottom: 4px;
        font-size: 0.9rem;
    }

    li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #2563eb;
        font-weight: bold;
    }
`;

const Solutions = () => {
    const navigate = useNavigate();

    return (
        <SectionContainer id="san-pham">
            <SectionTitle>Sản phẩm du lịch</SectionTitle>
            <SectionDesc>
                Khám phá những hành trình được thiết kế tỉ mỉ, mang lại trải nghiệm độc đáo và đẳng cấp trên khắp thế giới.
            </SectionDesc>
            <GridContainer>
                {tours.map((tour, index) => (
                    <ImageCard
                        key={tour.id}
                        data-aos="fade-up"
                        data-aos-delay={100 * (index + 1)}
                        onClick={() => navigate(`/tour-chi-tiet/${tour.id}`)}
                    >
                        <CardImage bg={tour.image} />
                        <CardContent>
                            <CardCategory>{tour.category}</CardCategory>
                            <CardTitle>{tour.title}</CardTitle>
                            <CardDesc>
                                <strong>Giá trị nổi bật:</strong>
                                <ul>
                                    {tour.highlights.slice(0, 3).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </CardDesc>
                        </CardContent>
                    </ImageCard>
                ))}
            </GridContainer>
        </SectionContainer>
    );
};

export default Solutions;
