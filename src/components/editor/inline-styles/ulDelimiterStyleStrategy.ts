import findRangesWithRegex from '../../../utils/findRangesWithRegex';

const createULDelimiterStyleStrategy = () => {
  const ulDelimiterRegex = /^\* /g;

  return {
    style: 'UL-DELIMITER',
    findStyleRanges: (block: { getText: () => any; }) => {
      const text = block.getText();
      const ulDelimiterRanges = findRangesWithRegex(text, ulDelimiterRegex);
      return ulDelimiterRanges;
    },
    styles: {
      fontWeight: 'bold',
      position: 'absolute',
      transform: 'translateX(calc(-100% - 12px))'
    }
  };
};

export default createULDelimiterStyleStrategy;