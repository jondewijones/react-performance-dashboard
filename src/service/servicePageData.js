import Utilities from '../utils/utiilites';
import { defaultChartOptions } from '../utils/defaultChartOptions';

export function buildServicePageData(data) {
    const pageData = [];

    // response times for today
    const responseTimesDay = {
        type: 'stat-block',
        container: '',
        title: 'Average response time for the last day',
        data: {
            figure: parseInt(data['average-1-day'].values[0][2]).toFixed(0),
            unit: 'ms'
        }
    };
    pageData.push(responseTimesDay);

    // response times for last 7 days
    const responseTimes7Days = {
        type: 'stat-block',
        container: '',
        title: 'Average response time for the last 7 days',
        data: {
            figure: parseInt(data['average-7-days'].values[0][2]).toFixed(0),
            unit: 'ms'
        }
    };
    pageData.push(responseTimes7Days);

    // response times for last 30 days
    const responseTimes30Days = {
        type: 'stat-block',
        container: '',
        title: 'Average response time for the last 30 days',
        data: {
            figure: parseInt(data['average-30-days'].values[0][2]).toFixed(0),
            unit: 'ms'
        }
    };
    pageData.push(responseTimes30Days);
    return pageData;
}