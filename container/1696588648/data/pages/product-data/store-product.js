const sample_data = [
    {
        name: "Tên sản phẩm",
        msp: "YTE2OTYZNZC1MDA0MDI",
        id: "CDE2OTYZNZC1NTA1OTM",
        image: "/@{release}/designs/images/10112023.webp",
        ht: true,
        numLeft: 10,
        viewTage: 200,
        require: 20,
        notification: true
    },
]

const STORE_PRODUCT = () => {
    var THIS = {}

    const IS = HERE_DTE2OTCXODIWOTY4MJY.IS

    const element = () => {
        try {

            const iprops = {
                name: props.name,
                msp: props.msp,
                nsx: props.nsx,
                cslc: props.cslc,
                id: props.id,
                image: props.image,
                ht: props.ht
    
            }
    
            const imageLink = IS.CONVERT.SPECIAL_CONTENT({content: iprops.image})

            const html = $(
                // `
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
                // `
            )
        } catch (error) { console.error(error); }
    }

}

STORE_PRODUCT