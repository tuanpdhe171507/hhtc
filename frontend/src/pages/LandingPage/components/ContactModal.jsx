import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';

const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 0;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: #f8fafc;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
        background: #eff6ff;
        transform: translateX(5px);
    }

    i {
        font-size: 1.5rem;
        color: #2563eb;
    }
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;

    span:first-child {
        font-weight: 700;
        color: #1e3a8a;
        font-size: 0.9rem;
        text-transform: uppercase;
    }

    span:last-child {
        color: #475569;
        font-size: 1.1rem;
    }
`;

const ContactModal = ({ visible, onClose }) => {
    return (
        <Modal
            title={<h3 style={{ margin: 0, color: '#1e3a8a', fontWeight: 800 }}>THÔNG TIN LIÊN HỆ</h3>}
            open={visible}
            onCancel={onClose}
            footer={[
                <Button key="close" type="primary" onClick={onClose} style={{ borderRadius: '6px', height: '40px', padding: '0 30px' }}>
                    Đóng
                </Button>
            ]}
            centered
            width={500}
        >
            <ContactContent>
                <ContactItem>
                    <i className="bi bi-telephone-fill"></i>
                    <InfoBox>
                        <span>Hotline</span>
                        <span>+84 562 622 999</span>
                    </InfoBox>
                </ContactItem>

                <ContactItem>
                    <i className="bi bi-envelope-fill"></i>
                    <InfoBox>
                        <span>Email</span>
                        <span>vetinhquocgia.vn@gmail.com</span>
                    </InfoBox>
                </ContactItem>

                <ContactItem>
                    <i className="bi bi-geo-alt-fill"></i>
                    <InfoBox>
                        <span>Địa chỉ</span>
                        <span>199-201 Phạm Văn Đồng, Xuân Đỉnh, Hà Nội</span>
                    </InfoBox>
                </ContactItem>

                <ContactItem>
                    <i className="bi bi-globe"></i>
                    <InfoBox>
                        <span>Website</span>
                        <span>www.enasatech.vn</span>
                    </InfoBox>
                </ContactItem>
            </ContactContent>
        </Modal>
    );
};

export default ContactModal;
