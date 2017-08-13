export const defaultChartOptions = {
    credits: {
        enabled: false
    },
    lang: {
        thousandsSep: ','
    },
    title: "",
    chart: {
        style: {
            fontFamily: '"Open Sans",Helvetica,Arial,sans-serif',
            fontSize: '14px'
        },
        spacingTop: 15,
        spacingBottom: 15,
        spacingLeft: 0,
        spacingRight: 0,
        marginTop: 32,
        height: 300
    },
    colors: ['#3B7A9E', '#FF9933', '#9E9E9E', '#55A9DC', '#E6645C', '#886DB3', '#6CC080'],
    tooltip: {
        shared: true,
        useHTML: true,
        style: {
            "padding": "8px 16px 8px 16px"
        },
        backgroundColor: 'rgba(234,234,234, 1)',
        borderWidth: 1,
        borderRadius: 0,
        borderColor: 'rgba(208,210,211, 1)',
        shadow: false
    }
};
