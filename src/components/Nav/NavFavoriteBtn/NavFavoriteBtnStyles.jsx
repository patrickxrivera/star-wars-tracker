import styled from 'styled-components';
import { Heart } from 'react-feather';
import { getBgColorFrom } from '../../Results/ResultCard/helpers/resultCardStylesHelpers';

const Btn = styled.button`
  position: fixed;
  transform: translateX(960px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  width: 145px;
  height: 44px;
  background: ${props => getBgColorFrom({ ...props }) || '#3e70ff'};
  border: none;
  color: #fff;
  border-radius: 5px;
  letter-spacing: 0.5px;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;

const SmallHeart = styled(Heart)`
  width: 13px;
  height: 13px;
  padding: 0 4.5px;
  stroke-width: 3;
`;

export { Btn, SmallHeart };
