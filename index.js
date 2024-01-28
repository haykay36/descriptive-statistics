class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }

  mean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.data.length;
  }

  median() {
    const sortedData = [...this.data].sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
      return sortedData[mid];
    }
  }

  mode() {
    const countMap = new Map();
    this.data.forEach(value => {
      countMap.set(value, (countMap.get(value) || 0) + 1);
    });

    let mode;
    let maxCount = 0;

    countMap.forEach((count, value) => {
      if (count > maxCount) {
        mode = value;
        maxCount = count;
      }
    });

    return mode;
  }
    range() {
      if (this.data.length === 0) {
        return null
      }
      const min = Math.min(...this.data);
      const max = Math.max(...this.data);
      const range = max - min;
      return range;
    }
      meanDeviation() {
    const meanValue = this.mean();
    const Differences = this.data.map(value => Math.pow(value - meanValue,1));
    const meanDeviation = Differences.reduce((acc, value) => acc + value, 0) / this.data.length;
    return meanDeviation;
  }
    
    populationVariance() {
    const meanValue = this.mean();
    const squaredDifferences = this.data.map(value => Math.pow(value - meanValue, 2));
    const variance = squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
    return variance;
    }
    sampleVariance() {
    const meanValue = this.mean();
    const squaredDifferences = this.data.map(value => Math.pow(value - meanValue, 2));
    const variance = squaredDifferences.reduce((acc, value) => acc + value, 0) / (this.data.length-1);
    return variance;
  }

  populationStandardDeviation() {
    const meanValue = this.mean();
    const squaredDifferences = this.data.map(value => Math.pow(value - meanValue, 2));
    const variance = squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
    return Math.sqrt(variance);
  }
   sampleStandardDeviation() {
    const meanValue = this.mean();
    const squaredDifferences = this.data.map(value => Math.pow(value - meanValue, 2));
    const variance = squaredDifferences.reduce((acc, value) => acc + value, 0) / (this.data.length-1);
    return Math.sqrt(variance);
  }
 
  calculateQuartiles() {
    const sortedData = [...this.data].sort((a, b) => a - b);
    const lowerHalf = sortedData.slice(0, Math.floor(sortedData.length / 2));
    const upperHalf = sortedData.length % 2 === 0 ? sortedData.slice(Math.floor(sortedData.length / 2)) : sortedData.slice(Math.floor(sortedData.length / 2) + 1);

    const Q1 = this.median(lowerHalf);
    const Q3 = this.median(upperHalf);

    return { Q1, Q3 };
  }

  QuartileDeviation() {
    const { Q1, Q3 } = this.calculateQuartiles();
    const quartileDeviation = (Q3 - Q1) / 2;

    return quartileDeviation;
  }
}
  


const data = [1, 4, 6, 1, 8, 15, 18, 1, 5, 1];
const statsCalculator = new DescriptiveStatistics(data);

console.log('Mean:', statsCalculator.mean());
console.log('Median:', statsCalculator.median());
console.log('Mode:', statsCalculator.mode());
console.log('Range', statsCalculator.range());
console.log('Mean Deviation', statsCalculator.meanDeviation());
console.log('populationVariance', statsCalculator.populationVariance());
console.log('sampleVariance', statsCalculator.sampleVariance());
console.log('Population Standard Deviation:', statsCalculator.populationStandardDeviation());
console.log('Sample Standard Deviation:', statsCalculator.sampleStandardDeviation());
console.log('Quartile Deviation', statsCalculator.QuartileDeviation());