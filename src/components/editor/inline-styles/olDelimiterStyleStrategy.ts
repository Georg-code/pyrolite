import findRangesWithRegex from '../../../utils/findRangesWithRegex';

const createOLDelimiterStyleStrategy = () => {
  const olDelimiterRegex = /^\d{1,3}\. /g;

  return {
    style: 'OL-DELIMITER',
    findStyleRanges: (block: { getText: () => any; }) => {
      const text = block.getText();
      const olDelimiterRanges = findRangesWithRegex(text, olDelimiterRegex);
      return olDelimiterRanges;
    },
    styles: {
      position: 'absolute',
      transform: 'translateX(calc(-100% - 12px))'
    }
  };
};

export default createOLDelimiterStyleStrategy;