let options = {
    chart: {
        type: 'line',
        height: "280px",
        fontFamily: "Nunito",
        toolbar: {
            show: false,
        }
    },
    stroke: {
        curve: "smooth",
        width: 8,
        colors: ["#6E00FF"],
    },
    markers:{
        size: 7,
        colors: ["#6E00FF"]
    },
    grid:{
        strokeDashArray: 10,
    },
    series: [{
        name: 'engagement',
        data: [5,3,10,8,29,19,22,8]
    }],
    xaxis: {
        categories: ["Feb","Mar","Apr","May","Jun","Jul","Agu1"]
    }
}

let chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();


//circle

let optionsRadial = {
    series: [48],
    chart: {
        height: 280,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '60%',
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    formatter: function(val) {
                        return parseInt(val);
                    },
                    color: '#777',
                    fontSize: '40px',
                    fontWeight: 500,
                }
            },
        },
    },
    stroke: {
        lineCap: "round"
    },
    fill: {
        colors: ["#FFB100"],
    }
};

let chartRadial = new ApexCharts(document.querySelector("#emailChart"), optionsRadial);

chartRadial.render();