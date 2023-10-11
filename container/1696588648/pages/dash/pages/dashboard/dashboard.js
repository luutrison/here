(PROPS) => {
    return {
        REQUIRE: {
           
            CSS: [
                {
                    src: "./dashboard.css"
                }
            ]
        },
        RENDER: {
            FROM: (
                <div id="ZTE2OTYWNTC3NZU5ODU">

                    <div class="DJE2OTYWNJG3NZM0MJY">
                        <div class="YJE2OTYWNTM1MDGZMTA">
                            <span>Thống kê sơ bộ</span>
                            <button id="SDTE2OTYYMZAYMTK1MZA">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"></path></svg>
                            </button>

                        </div>

                        <div>
                            <div class="DJE2OTYWNTM1OTG0NJI">
                                <div class="BJE2OTYWNJCZNTY0NDE">Doanh số tháng 9</div>
                                <div class="AZE2OTYWNTM2MZGYNDY">
                                    <canvas id="BDE2OTYWNTY5MTYXMZG"></canvas>
                                </div>
                            </div>
                        </div>

                        <div>


                        </div>
                    </div>
                </div>
            )
        },

        METHOD: () => {
            try{
            
                document.title = "Bảng điều khiển"

                const MODULES = PROPS.MODULES.INNIT
                const SIMPLE_BAR = MODULES.SIMPLEBAR_BZE2OTY5MJI4MTEWNDQ
                const CHART = MODULES.CHART_YTE2OTY5MJI3NTG5MTU
    
    
                if (!$("#contenter").attr("data-simplebar")) {
                    const contenter = new SIMPLE_BAR(document.querySelector("#contenter")).recalculate();
                }
    
                if (!$("#menu").attr("data-simplebar")) {
                    const menu = new SIMPLE_BAR(document.querySelector("#menu"))
                }
    
    
                var data = {
                    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9",],
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
            }catch(err){console.error(err);}
        }
    }
}





