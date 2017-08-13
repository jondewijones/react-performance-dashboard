export default class Utilities {

    static returnChildValues(arr, arrIndex, convertFunc) {
        return arr.map(item => {
            return convertFunc ? convertFunc(item[arrIndex]) : item[arrIndex];
        })
    }

    static returnPieChartData(arr, iterations) {
        const data =[];
        let i = 0;

        for (i = 0; i < iterations; i++) {
            data.push({
                name: arr[i][0],
                y: parseInt(arr[i][1])
            });
        }
        return data;
    }

    static convertToHours(value) {
        return value + ":00";
    }

    static convertToDateString(value) {
        const year = value.substring(0, 4);
        const month = value.substring(4, 6);
        const day = value.substring(6, 8);
        return day + '/' + month + '/' + year;
    }

}