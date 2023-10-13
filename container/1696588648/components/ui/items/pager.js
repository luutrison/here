/**
* WRITTEN BY LƯU TRÍ SƠN - A HANDSOME WRITTER
**/

const UI_PAGER = (props) => {
    var THIS = {}

    const IS = HERE_DTE2OTCXODIWOTY4MJY.IS
    const SETTING = HERE_DTE2OTCXODIWOTY4MJY.SETTING

    const contructor = (props) => {
        return {
            unit: props.unit ? props.unit : 0,
            number: props.number ? props.number : 0,
            current: props.current ? props.current : 1,
            onClick: props.onClick,
            container: props.container
        }
    }

    const pager = () => {
        try {
            const propse = contructor(props)

            var arrContentPrev = []

            var arrContentNext = []

            /**
             * Số lượng tờ giấy trọng một tệp nhỏ sẽ được tính bằng 
             * Tổng số lượng của cái gì đáy / Số lượng hiển thị của một cái gì đấy trong một tờ giấy
             * Nếu như có dư một số lượng nhỏ và không phải số nguyên thì cho sang <trang giấy> tiếp theo
             */

            const numcalc = propse.number / propse.unit
            var prow = Math.round(numcalc)


            if (numcalc - prow > 0) {
                prow = prow + 1
            }


            /**
             * Phần này sẽ cài đặt số lượng tối đa mà một thứ gì đấy được hiển thị trong một <tờ giấy>
             * bao gồm những phím để chuyển sang <trang giấy> trước đó hoặc kế tiếp
             */

            const MAX_ITEM_PAGER = SETTING.MAX_ITEM_PAGER ? SETTING.MAX_ITEM_PAGER : 6

            const AROUND_ITEM = SETTING.AROUND_ITEM ? SETTING.AROUND_ITEM : 2


            const elementPager = ({ num, special }) => {

                var kichhoat = String()
                /**
                 * Nếu như mà cái hiện tại mà được kích hoạt thì giá trị là đúng, lúc đấy hiển thị khác với những 
                 * thành phần còn lại để phân biệt được bằng mắt
                 */
                if (num == propse.current) {
                    kichhoat = 'kichhoat="dung"'
                }

                const current = special ? special : num


                const element = $(
                    `
                    <div class="BTE2OTCWMZYWOTU2ODE" ${kichhoat}>
                        <span>${current}</span>
                    </div>
                    `
                )

                if (!special) {
                    HERE_DTE2OTCXODIWOTY4MJY.IS.DOM.SET_EVENT_BY_NAME({
                        element: $(element),
                        name: "click",
                        callBack: () => {
                            propse.onClick({ element, current })
                        }
                    })
                }


                return element
            }



            for (var num = 1; num < propse.current; num++) {
                if (propse.current > AROUND_ITEM + 1) {
                    if (num == 1) {
                        const element = elementPager({ num: num })
                        const special = elementPager({ special: "..." })

                        arrContentPrev.push(element)
                        arrContentPrev.push(special)
                    }
                    else {
                        if (num >= propse.current - AROUND_ITEM) {
                            arrContentPrev.push(elementPager({ num: num }))
                        }
                    }
                }
                else {
                    arrContentPrev.push(elementPager({ num: num }))
                }
            }

            for (var num = propse.current; num <= prow; num++) {
                if (propse.current + AROUND_ITEM < prow) {
                    if (num <= propse.current + AROUND_ITEM) {
                        if (num < propse.current + AROUND_ITEM) {
                            arrContentNext.push(elementPager({ num: num }))
                        }
                        else {
                            arrContentNext.push(elementPager({ num: num }))
                            if(propse.current + AROUND_ITEM + 1 < prow){
                                arrContentNext.push(elementPager({ special: "..." }))
                            }
                        }
                    }
                    else if(num == prow){
                        arrContentNext.push(elementPager({ num: num }))
                    }
                }
                else {
                    arrContentNext.push(elementPager({ num: num }))
                }
            }



            return [...arrContentPrev, ...arrContentNext]

        } catch (err) { console.log(err) }
    }

    const element = () => {
        try {
            const propse = contructor(props)
            const html = $(
                `
                <div class="EJE2OTCWMZQ1NJYXMDC">
                    <div class="ETE2OTCWMZQ2NTA5MJI">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                    </div>
                    <div class="YTE2OTCWMZQ4ODMYNTE">

                    </div>
                    <div class="EJE2OTCWMZQ5MTIWNDE">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                    </div>
                </div>
                `
            )

            const arritems = pager()

            arritems.forEach(element => {
                $(html).find(".YTE2OTCWMZQ4ODMYNTE").append(element)
            })

            $(propse.container).append(html)
        } catch (err) { console.error(err); }

    }

    THIS.CREATE = () => {
        try {
            element()
        } catch (error) { console.log(error) }
    }

    return THIS

}

UI_PAGER