/**
* WRITTEN BY LƯU TRÍ SƠN - A HANDSOME WRITTER
**/

const PRODUCT_CONTENT = (PROPS) => {

    const sampleData = [
        {
            name: "Tên sản phẩm",
            msp: "YTE2OTYZNZC1MDA0MDI",
            nsx: "20/09/2023",
            cslc: "20/09/2023",
            id: "CDE2OTYZNZC1NTA1OTM",
            image: "/@{release}/designs/images/10112023.webp",
            show: true
        },
        {
            name: "Sản phẩm search",
            msp: "YTE2OTYZNZC1MDA0MDI",
            nsx: "20/09/2023",
            cslc: "20/09/2023",
            id: "CDE2OTYZNZC1NTA1OTM",
            image: "/@{release}/designs/images/10112023.webp",
            show: true
        },
        {
            name: "Tên sản phẩm",
            msp: "YTE2OTYZNZC1MDA0MDI",
            nsx: "20/09/2023",
            cslc: "20/09/2023",
            id: "CDE2OTYZNZC1NTA1OTM",
            image: "/@{release}/designs/images/10112023.webp",
            show: true
        }
    ]

    var THIS = {}



    const contructor = () => {
        return {
            container: PROPS.container,
        }
    }


    const IS = HERE_IS_EJE2OTC1NDUYMZM3ODI
    const MODULES = IS.MODULES.INNIT


    const MAIN_CONTAINER = () => {
        try {
            const html = $(
                `
                <div>
                    <div class="DDE2OTYZODQ1OTYWMTA"></div>
                    <div class="BZE2OTYZODIYMJG5MTY"></div>
                    <div class="ADE2OTCWMZCZNTA5NTE"></div>
                </div>
                `
            )

            const container = ".BZE2OTYZODIYMJG5MTY"
            const scanContainer = ".DDE2OTYZODQ1OTYWMTA"
            const pagerContainer = ".ADE2OTCWMZCZNTA5NTE"

            return {
                html, container, scanContainer, pagerContainer
            }
        } catch (error) {
            console.error(error)
        }

    }


    const items = (props) => {
        const iprops = {
            name: props.name,
            msp: props.msp,
            nsx: props.nsx,
            cslc: props.cslc,
            id: props.id,
            image: props.image,
            show: props.show

        }

        const imageLink = IS.CONVERT.SPECIAL_CONTENT({ content: iprops.image })

        return $(
            `
            <div class="S81696235564446">
                <div class="SZTE2OTYYMZE5MTC4MZU">
                    <div class="SEDE2OTYYMZI1MTA4MZU">
                        <div class="SCJE2OTYYMZE5ODA2MJY"><img src="${imageLink}" /></div>
                        <div class="SATE2OTYYMZQ2NJC4NZE">
                            <div class="SDZE2OTYYMZUWNTMYMDC"><span class="SDJE2OTYYMZI1NJUYODM">${iprops.name}</span>
                                <div class="SADE2OTYYMZQZNTQZNTG">
                                    <div class="SCTE2OTYYMZQ0MDY5NDM"><span class="SDTE2OTYYMZQZMZCYNZG">MSP -</span><span class="SDTE2OTYYMZQZMZCYNZG">${iprops.msp}</span></div>
                                    <div class="SCTE2OTYYMZQ0MDY5NDM"><span class="SDTE2OTYYMZQZMZCYNZG">NSX -</span><span class="SDTE2OTYYMZQZMZCYNZG">${iprops.nsx}</span></div>
                                </div>
                            </div>
                            <div class="SDZE2OTYYMZUWNTMYMDC">
                                <div class="SADE2OTYYMZQZNTQZNTG">
                                    <div class="SCTE2OTYYMZQ0MDY5NDM"><span class="SDTE2OTYYMZQZMZCYNZG">CSLC -</span><span class="SDTE2OTYYMZQZMZCYNZG">1 ngày trước</span></div>
                                    <div class="SCTE2OTYYMZQ0MDY5NDM"><span class="SDTE2OTYYMZQZMZCYNZG">HT -</span><span class="SDTE2OTYYMZQZMZCYNZG">${iprops.ht}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="SYTE2OTYYMZI3MJY3ODY">
                        <button class="btn SEDE2OTYYMZM5ODQZMTE" id="cje2oty1mda0mzgxnjc" type="button"><svg class="bi bi-pen" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"></path>
                        </svg>Chỉnh sửa</button>
                        <button class="btn SEDE2OTYYMZM5ODQZMTE" id="yte2oty1mda0ndc3ntk" type="button"><svg class="bi bi-trash" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                        </svg>Xóa</button>
                    </div>
                </div>
            </div>
            `
        )

    }

    THIS.SCAN_CONTAINER_ELEMENT = () => {
        try {
            const IPROPS = contructor()

            const html = $(
                `
                <div id="DJE2OTYZODIZMTYZOTY">
                    <div id="zde2oty0otu3mzqxnzk"></div>

                    <div class="aze2otyzotq4mdc0nta">
                        <div id="CZE2OTYZOTQZNTK1NTY">
                            <input id="BDE2OTYZODI2MTIYMDM" placeholder="Tìm kiếm sản phẩm"></input>
                            <button><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                        </div>
                        <div id="cde2oty0otm0ntc3mtc"></div>
                    </div>
                </div>
                `
            )

            HERE_IS_EJE2OTC1NDUYMZM3ODI.MODULES.INNIT.UI_SELECT_DJE2OTY2NJY4MDIZOTI({
                container: $(html).find("#cde2oty0otm0ntc3mtc"),
                options: [
                    {
                        name: "Toàn bộ",
                        selected: true,
                        value: 1
                    },
                    {
                        name: "Hiện tại",
                        value: 2
                    }
                ]
            }).CREATE()

            HERE_IS_EJE2OTC1NDUYMZM3ODI.MODULES.INNIT.UI_SELECT_DJE2OTY2NJY4MDIZOTI({
                container: $(html).find("#zde2oty0otu3mzqxnzk"),
                id: "ade2oty0otk1mduzmja",
                options: [
                    {
                        name: "Mới nhất",
                        selected: true,
                        value: 1
                    },
                    {
                        name: "Cũ nhất",
                        value: 2
                    },
                    {
                        name: "Đắt đến rẻ",
                        value: 3
                    },
                    {
                        name: "Rẻ đến đắt",
                        value: 4
                    },
                ]
            }).CREATE()


            const PAGER = MODULES.UI_PAGER_ZJE2OTCWMZC0MDCWNDY
            const CONTAINER = MAIN_CONTAINER()

            const params = IS.ROUTE.PARAMS.DATA

            PAGER({
                unit: 8,
                number: 182,
                current: params.pages,
                onClick: (props) => {
                    IS.ROUTE.LOAD({name: "dash.product", params: {pages: props.current}})
                },
                container: $(IPROPS.container).find(CONTAINER.pagerContainer)
            }).CREATE()

            const SCAN_CONTAINER = $(IPROPS.container).find(CONTAINER.scanContainer)

            $(SCAN_CONTAINER).append(html)
        } catch (error) { }

    }


    THIS.SCAN_CONTAINER = () => {
        try {
            THIS.SCAN_CONTAINER_ELEMENT()

            const IPROPS = contructor()

            const CONTAINER = MAIN_CONTAINER()

            const INSIDE_CONTAINER = $(IPROPS.container).find(CONTAINER.container)

            const items = $(INSIDE_CONTAINER).find(".S81696235564446")

            IS.DOM.SET_EVENT_BY_NAME({
                element: "#BDE2OTYZODI2MTIYMDM",
                name: "input",
                callBack: (element) => {

                    const current = element.currentTarget
                    const content = $(current).val()

                    if (String(content).trim() == String()) {
                        $(INSIDE_CONTAINER).html(String())
                        items.each((num, element) => {
                            $(INSIDE_CONTAINER).append(element)
                        })
                    }
                    else {
                        var arrSearch = []
                        items.each((num, element) => {
                            const html = $(element).html()
                            if (String(html).search(content) >= 0) {
                                arrSearch.push(element)
                            }
                        })

                        $(INSIDE_CONTAINER).html(String())
                        arrSearch.forEach(element => {
                            $(INSIDE_CONTAINER).append(element)
                        })

                    }

                }
            })

        } catch (error) { console.error(error) }

    }

    THIS.CREATE = () => {
        try {
            const IPROPS = contructor()

            const CONTAINER = MAIN_CONTAINER()
            $(IPROPS.container).append(CONTAINER.html)
            const INSIDE_CONTAINER = $(IPROPS.container).find(CONTAINER.container)

            var arrElements = []
            sampleData.forEach(element => {
                const item = items(element)
                IS.DOM.SET_EVENT_BY_NAME({
                    element: $(item).find("#cje2oty1mda0mzgxnjc"),
                    name: "click",
                    callBack: (current) => {
                        IS.ROUTE.LOAD({ name: "dash.product.edit", params: { id: element.id } })
                    }
                })

               
                IS.DOM.SET_EVENT_BY_NAME({
                    element: $(item).find("#yte2oty1mda0ndc3ntk"),
                    name: "click",
                    callBack: (current) => {
                        MODULES.UI_POPUP_BDE2OTY4MJQ1OTG3NJM({
                            title: "Thông báo!",
                            notification: "Bạn có muốn xóa sản phẩm này ?",
                            container: "#container",
                            okay: {
                                onClick: () => {
                                    const notification = MODULES.UI_SHIPPER_NOTIFICATION_EJE2OTCXODEYMJU2MJC({
                                        container: "body"
                                    })
                                    notification.CREATE({
                                        notification: "Vui lòng đợi một chút"
                                    })

                                    setTimeout(() => {
                                        notification.DONE({
                                            notification: "Sản phẩm đã đưọc xóa",
                                            title: "Đã xóa thành công",
                                            type: "success",
                                            buttonName: "Đóng"
                                        })
                                    }, 2000);
                                }
                            }

                        }).CREATE()
                    }
                })

                arrElements.push(item)
            })

            arrElements.forEach(element => {
                $(INSIDE_CONTAINER).append(element)
            })

            THIS.SCAN_CONTAINER()

        } catch (error) { console.error(error) }

    }

    return THIS

}



PRODUCT_CONTENT