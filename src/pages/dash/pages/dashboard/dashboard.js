(PROPS) => {
    return {
        REQUIRE: {
            COMPONENTS: [
                {
                    src: "../../../../libs/simplebar/simplebar.min.js",
                    name: "SIMPLE_BAR"
                },
                {
                    src: "../../../../libs/chart/chart.min.js",
                    name: "CHART"
                }
            ],
            CSS: [
                {
                    src: "./dashboard.css"
                },
                {
                    src: "../../../../libs/simplebar/simplebar.min.css"
                }
            ]
        },
        RENDER: {
            FROM: (
                <div id="ZTE2OTYWNTC3NZU5ODU">
                    <div class="YJE2OTYWNTM1MDGZMTA"><span>Thống kê sơ bộ</span></div>
                    <div class="DJE2OTYWNTM1OTG0NJI">
                        <div class="AZE2OTYWNTM2MZGYNDY">
                            <canvas id="BDE2OTYWNTY5MTYXMZG"></canvas>
                        </div>
                    </div>
                </div>
            )
        },

        METHOD: () => {

            document.title = "Bảng điều khiển"

            const COMPONENTS = PROPS.REQUIRE.IS.COMPONENTS.INNIT
            const SIMPLE_BAR = COMPONENTS.SIMPLE_BAR
            const CHART = COMPONENTS.CHART
            const contenter = new SIMPLE_BAR(document.querySelector("#contenter"))
            const menu = new SIMPLE_BAR(document.querySelector("#menu"))

            var data = {
                labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 5","Tháng 5","Tháng 5","Tháng 5",],
                datasets: [{
                    label: 'Chart',
                    data: [65, 59, 80, 81, 56, 55, 90],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }]
            }

            var options = {
                maintainAspectRatio: false,
                scales: {
                    y: {
                        stacked: true,
                        grid: {
                            display: true,
                            color: "rgba(255,99,132,0.2)"
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0.3
                    }
                }
            };



            new CHART("BDE2OTYWNTY5MTYXMZG",
                {
                    type: "line",
                    data: data,
                    options: options
                }
            )
        }
    }
}





