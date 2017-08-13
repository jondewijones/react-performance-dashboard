import Utilities from '../utils/utiilites';
import { defaultChartOptions } from '../utils/defaultChartOptions';

export function buildTrafficPageData(data) {

    const pageData = [];

    // current active users
    const activeUsers = {
        type: 'highlight-block',
        container: '',
        title: 'active users\nonline now',
        data: {
            figure: data['active-users'].values[0][0]
        }
    };
    pageData.push(activeUsers);

    // visits per hour for today
    const visitsToday = {
        type: 'chart-block',
        container: '',
        title: 'Today\'s activity on ONS.gov.uk',
        config: Object.assign({}, defaultChartOptions, {
            xAxis: {
                categories: Utilities.returnChildValues(data['today'].values, 0, Utilities.convertToHours),
                labels: {
                    autoRotation: 0
                },
                tickInterval: 2
            },
            yAxis: {
                title: {
                    text: 'Visits',
                    align: 'high',
                    offset: 0,
                    rotation: 0,
                    y: -15
                }
            },
            series: [{
                data: Utilities.returnChildValues(data['today'].values, 1, parseInt),
                type: 'column',
                name: 'Visits',
                showInLegend: false
            }]
        })
    };
    pageData.push(visitsToday);

    // daily visits for the month
    const visitsThisMonth = {
        type: 'chart-block',
        container: 'hello',
        title: 'Visits this month',
        config: Object.assign({}, defaultChartOptions, {
            xAxis: {
                categories: Utilities.returnChildValues(data['visits-daily-30-days'].values, 0, Utilities.convertToDateString),
                labels: {
                    autoRotation: 0
                },
                tickInterval: 4
            },
            yAxis: {
                title: {
                    text: 'Visits',
                    align: 'high',
                    offset: 0,
                    rotation: 0,
                    y: -15
                }
            },
            series: [{
                data: Utilities.returnChildValues(data['visits-daily-30-days'].values, 1, parseInt),
                type: 'line',
                name: 'Visits',
                showInLegend: false
            }]
        })
    };
    pageData.push(visitsThisMonth);

    // browser share
    const browserStats = {
        type: 'chart-block',
        container: '',
        title: 'Most popular browsers used to browse ONS.gov.uk',
        config: Object.assign({}, defaultChartOptions, {
            chart: {
                type: 'pie'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: Utilities.returnPieChartData(data['browsers'].values, 6)
            }]
        })
    };
    pageData.push(browserStats);

    return pageData;

}