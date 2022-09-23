import { FC, useState, ChangeEvent } from 'react';
import Styled from './Layout.styles';
import { IKey } from '../../types/types';
import { KeyList } from '../KeyList';
import {
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
  fa0,
  faC,
  faSquareRootVariable,
  faPercent,
  faXmark,
  faMinus,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Layout: FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;

    setValue(currentValue);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleSquareRoot = () => {
    const result = Math.sqrt(Number(value));

    setValue(String(result));
  };

  const handlePercent = () => {
    console.log('developing...');
  };

  const handleDivision = () => {
    const arr = String(value).split('');

    if (
      arr[arr.length - 1] === '/' ||
      arr[arr.length - 1] === '*' ||
      arr[arr.length - 1] === '-' ||
      arr[arr.length - 1] === '+'
    ) {
      arr.pop();

      setValue(arr.join('') + '/');

      return;
    }

    setValue(value + '/');
  };

  const handleEnterSeven = () => {
    setValue(value + '7');
  };

  const handleEnterEight = () => {
    setValue(value + '8');
  };

  const handleEnterNine = () => {
    setValue(value + '9');
  };

  const handleMultiple = () => {
    const arr = String(value).split('');

    if (
      arr[arr.length - 1] === '/' ||
      arr[arr.length - 1] === '*' ||
      arr[arr.length - 1] === '-' ||
      arr[arr.length - 1] === '+'
    ) {
      arr.pop();

      setValue(arr.join('') + '*');

      return;
    }

    setValue(value + '*');
  };

  const handleEnterFour = () => {
    setValue(value + '4');
  };

  const handleEnterFive = () => {
    setValue(value + '5');
  };

  const handleEnterSix = () => {
    setValue(value + '6');
  };

  const handleMinus = () => {
    const arr = String(value).split('');

    if (
      arr[arr.length - 1] === '/' ||
      arr[arr.length - 1] === '*' ||
      arr[arr.length - 1] === '-' ||
      arr[arr.length - 1] === '+'
    ) {
      arr.pop();

      setValue(arr.join('') + '-');

      return;
    }

    setValue(value + '-');
  };

  const handleEnterOne = () => {
    setValue(value + '1');
  };

  const handleEnterTwo = () => {
    setValue(value + '2');
  };

  const handleEnterThree = () => {
    setValue(value + '3');
  };

  const handlePlus = () => {
    const arr = String(value).split('');

    if (
      arr[arr.length - 1] === '/' ||
      arr[arr.length - 1] === '*' ||
      arr[arr.length - 1] === '-' ||
      arr[arr.length - 1] === '+'
    ) {
      arr.pop();

      setValue(arr.join('') + '+');

      return;
    }

    setValue(value + '+');
  };

  const handleEnterZero = () => {
    setValue(value + '0');
  };

  const handleEnterDoubleZero = () => {
    setValue(value + '00');
  };

  const handleEnterPoint = () => {
    setValue(value + '.');
  };

  const handleEqual = () => {
    if (value !== '') {
      const arr = String(value).split('');

      for (var i = 0, counter = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
          counter++;
        } else {
          break;
        }
      }

      arr.splice(0, counter);

      if (arr.length !== 0) {
        const result = arr.join('');

        if (result === '') {
          setValue(eval(''));

          return;
        }

        setValue(eval(result));

        return;
      }
    }

    setValue('');
  };

  const keys: IKey[] = [
    { name: 'clear', icon: faC, action: handleClear },
    { name: 'sqrt', icon: faSquareRootVariable, action: handleSquareRoot },
    { name: 'percent', icon: faPercent, action: handlePercent },
    { name: 'division', content: '/', action: handleDivision },
    { name: 'seven', icon: fa7, action: handleEnterSeven },
    { name: 'eight', icon: fa8, action: handleEnterEight },
    { name: 'nine', icon: fa9, action: handleEnterNine },
    { name: 'multiple', icon: faXmark, action: handleMultiple },
    { name: 'four', icon: fa4, action: handleEnterFour },
    { name: 'five', icon: fa5, action: handleEnterFive },
    { name: 'six', icon: fa6, action: handleEnterSix },
    { name: 'minus', icon: faMinus, action: handleMinus },
    { name: 'one', icon: fa1, action: handleEnterOne },
    { name: 'two', icon: fa2, action: handleEnterTwo },
    { name: 'three', icon: fa3, action: handleEnterThree },
    { name: 'plus', icon: faPlus, action: handlePlus },
    { name: 'zero', icon: fa0, action: handleEnterZero },
    {
      name: 'doubleZero',
      content: '00',
      action: handleEnterDoubleZero,
    },
    { name: 'point', content: '.', action: handleEnterPoint },
    { name: 'equal', icon: faEquals, action: handleEqual },
  ];

  return (
    <Styled.Wrapper>
      <Styled.BoxInput>
        <Styled.InputField
          type={'text'}
          value={value}
          onChange={handleChange}
        />
      </Styled.BoxInput>

      <Styled.BoxKeys>
        <KeyList keys={keys} />
      </Styled.BoxKeys>
    </Styled.Wrapper>
  );
};

export default Layout;
