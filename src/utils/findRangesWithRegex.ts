const findRangesWithRegex = (text: any, regex: { exec: (arg0: any) => any; }) => {
    let ranges = [];
    let matches;
  
    do {
      matches = regex.exec(text);
      if (matches) {
        ranges.push([matches.index, matches.index + matches[0].length - 1]);
      }
    } while (matches);
  
    return ranges;
  };
  
  export default findRangesWithRegex;