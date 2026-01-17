import React from 'react';
import styled from 'styled-components';
import {
    LineChartOutlined,
    HeartFilled,
    ClockCircleOutlined,
    SafetyCertificateFilled
} from '@ant-design/icons';

const SectionContainer = styled.div`
    padding: 80px 5%;
    background-color: #eff6ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 140px;

    @media (max-width: 768px) {
        padding: 60px 5%;
        margin-bottom: 100px;
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
    margin-bottom: 4rem;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    width: 100%;
    max-width: 1400px;
    margin-top: 50px;

    @media (max-width: 968px) {
        flex-direction: column;
        gap: 40px;
        text-align: center;
    }
`;

const LeftContent = styled.div`
    flex: 1;
`;

const RightContent = styled.div`
    flex: 1.2;
`;

const HeroImage = styled.img`
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`;

const WhyTitle = styled.h3`
    font-size: 2.2rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 25px;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

const WhyText = styled.p`
    font-size: 1.05rem;
    color: #4b5563;
    line-height: 1.8;
    margin-bottom: 20px;
`;

const RecruitButton = styled.button`
    background: #ff9800;
    color: white;
    padding: 14px 28px;
    border-radius: 10px;
    border: none;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 20px;

    &:hover {
        background: #f57c00;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(255, 152, 0, 0.3);
    }
`;

const BenefitsSection = styled.div`
    margin-top: 80px;
    width: 100%;
    max-width: 1400px;
    text-align: center;
`;

const BenefitsTitle = styled.h2`
    font-size: 28.8px;
    font-weight: 800;
    color: #1e3a8a;
    margin-bottom: 40px;
`;

const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const BenefitCard = styled.div`
    background: white;
    padding: 24px;
    border-radius: 20px;
    text-align: left;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
`;

const BenefitIcon = styled.div`
    width: 40px;
    height: 40px;
    background: #ffcc00;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #1e3a8a;
`;

const BenefitName = styled.h4`
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e3a8a;
`;

const BenefitDesc = styled.p`
    font-size: 0.95rem;
    color: #64748b;
    line-height: 1.4;
`;

const ProcessSection = styled.div`
    margin-top: 80px;
    width: 100%;
    max-width: 1400px;
    text-align: center;
`;

const ProcessTitle = styled.h2`
    font-size: 28.8px;
    font-weight: 800;
    color: #1e3a8a;
    margin-bottom: 60px;
`;

const ProcessGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ProcessCard = styled.div`
    background: white;
    padding: 30px;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
`;

const ProcessBadge = styled.div`
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background: #ffcc00;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 800;
    color: #1e3a8a;
    box-shadow: 0 4px 10px rgba(255, 204, 0, 0.3);
`;

const ProcessName = styled.h4`
    font-size: 1.2rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 12px;
    margin-top: 10px;
`;

const ProcessDesc = styled.p`
    font-size: 1rem;
    color: #64748b;
    line-height: 1.5;
`;

const Careers = () => {
    return (
        <SectionContainer id="tuyen-dung">
            <SectionTitle>Tham Gia Đội Ngũ Của Chúng Tôi</SectionTitle>
            <SectionDesc style={{ marginBottom: 0 }}>
                Khám phá cơ hội nghề nghiệp tại TravelGroup
            </SectionDesc>

            <ContentWrapper>
                <LeftContent data-aos="fade-right">
                    <WhyTitle>Tại sao chọn chúng tôi?</WhyTitle>
                    <WhyText>
                        Tại TravelGroup chúng tôi đang xây dựng 1 đội ngũ chuyên nghiệp đầy nhiệt huyết, cam kết đổi mới ngành du lịch lữ hành tại Việt Nam. Chúng tôi mang đến môi trường làm việc năng động, chế độ đãi ngộ cạnh tranh và cơ hội phát triển sự nghiệp.
                    </WhyText>
                    <WhyText>
                        Nếu bạn đang tìm kiếm 1 sự nghiệp đầy thách thức và cơ hội trong lĩnh vực du lịch lữ hành, hãy khám phá các vị trí tuyển dụng hiện tại của chúng tôi và tham gia đội ngũ.
                    </WhyText>
                    <RecruitButton>Xem vị trí tuyển dụng</RecruitButton>
                </LeftContent>

                <RightContent data-aos="fade-left">
                    <HeroImage src="/images/image1.png" alt="Join our team" />
                </RightContent>
            </ContentWrapper>

            <BenefitsSection>
                <BenefitsTitle data-aos="fade-up">Quyền lợi nhân viên</BenefitsTitle>
                <BenefitsGrid>
                    <BenefitCard data-aos="fade-up" data-aos-delay="100">
                        <BenefitIcon><LineChartOutlined /></BenefitIcon>
                        <BenefitName>Mức lương cạnh tranh</BenefitName>
                        <BenefitDesc>
                            Mức lương cạnh tranh, đánh giá đúng năng lực cá nhân. Thưởng và quyền mua cổ phần công ty với giá ưu đãi.
                        </BenefitDesc>
                    </BenefitCard>
                    <BenefitCard data-aos="fade-up" data-aos-delay="200">
                        <BenefitIcon><HeartFilled /></BenefitIcon>
                        <BenefitName>Bảo hiểm y tế</BenefitName>
                        <BenefitDesc>
                            Bảo hiểm xã hội, bảo hiểm y tế, Bảo hiểm thất nghiệp theo quy định của pháp luật.
                        </BenefitDesc>
                    </BenefitCard>
                    <BenefitCard data-aos="fade-up" data-aos-delay="300">
                        <BenefitIcon><ClockCircleOutlined /></BenefitIcon>
                        <BenefitName>Chính sách làm việc</BenefitName>
                        <BenefitDesc>
                            Không gian làm việc thoải mái, hỗ trợ thiết bị công nghệ tốt, thời gian làm việc phù hợp.
                        </BenefitDesc>
                    </BenefitCard>
                    <BenefitCard data-aos="fade-up" data-aos-delay="400">
                        <BenefitIcon><SafetyCertificateFilled /></BenefitIcon>
                        <BenefitName>Văn Hóa và môi trường làm việc</BenefitName>
                        <BenefitDesc>
                            Văn hóa mở, đề cao sức sáng tạo. Tổ chức các hoạt động nội bộ phát triển chuyên môn và kỹ năng.
                        </BenefitDesc>
                    </BenefitCard>
                </BenefitsGrid>
            </BenefitsSection>

            <ProcessSection>
                <ProcessTitle data-aos="fade-up">Quy Trình Tuyển Dụng</ProcessTitle>
                <ProcessGrid>
                    <ProcessCard data-aos="fade-up" data-aos-delay="100">
                        <ProcessBadge>1</ProcessBadge>
                        <ProcessName>Nộp hồ sơ</ProcessName>
                        <ProcessDesc>
                            Gửi đơn ứng tuyển qua cổng thông tin trực tuyến của chúng tôi, bao gồm CV và thư xin việc.
                        </ProcessDesc>
                    </ProcessCard>
                    <ProcessCard data-aos="fade-up" data-aos-delay="200">
                        <ProcessBadge>2</ProcessBadge>
                        <ProcessName>Sàng lọc ban đầu</ProcessName>
                        <ProcessDesc>
                            Bộ phận nhân sự sẽ xem xét hồ sơ và liên hệ để phỏng vấn sơ bộ qua điện thoại.
                        </ProcessDesc>
                    </ProcessCard>
                    <ProcessCard data-aos="fade-up" data-aos-delay="300">
                        <ProcessBadge>3</ProcessBadge>
                        <ProcessName>Phỏng vấn</ProcessName>
                        <ProcessDesc>
                            Nếu được chọn, bạn sẽ tham gia phỏng vấn trực tiếp hoặc trực tuyến với quản lý tuyển dụng.
                        </ProcessDesc>
                    </ProcessCard>
                    <ProcessCard data-aos="fade-up" data-aos-delay="400">
                        <ProcessBadge>4</ProcessBadge>
                        <ProcessName>Nhận offer</ProcessName>
                        <ProcessDesc>
                            Ứng viên được chọn sẽ nhận được thư mời làm việc và thông tin về quy trình onboarding.
                        </ProcessDesc>
                    </ProcessCard>
                </ProcessGrid>
            </ProcessSection>
        </SectionContainer>
    );
};

export default Careers;
