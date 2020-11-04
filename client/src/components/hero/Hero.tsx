import React, { FC } from 'react';
import { Row } from 'antd';
import PiggyBank from '../../assets/images/piggy_bank.jpg';
import './heroStyles.scss';

const Hero: FC = function () {
  return (
    <Row className='hero-container'>
      <img className='hero-image' alt='piggy bank' src={PiggyBank} />
    </Row>
  );
};

export default Hero;
