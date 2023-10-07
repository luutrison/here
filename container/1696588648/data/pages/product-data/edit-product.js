const EDIT_PRODUCT_ZTE2OTY2NJI4MDAYOTE = (PROPS) => {
    var THIS = {}

    const IS = HERE.IS
    const MODULES = IS.MODULES.INNIT

    const contructor = () => {
        return {
            container: PROPS.container
        }
    }

    const element = () => {

        try {
            const eprops = contructor()

            const html = (
                `
                <div class="yze2oty2njmyntiymdm">
                    <div class="bje2oty2njmxnziwnja">
                        <div class="yze2oty2njmxode0ntk">
                            <img src="/1696588648/designs/images/10112023.webp"></img>
                            <button class="ate2oty2njm5mze5mze">Đổi ảnh sản phẩm</button>
                        </div>
                        <div class="cze2oty2njq4mdm5nze">

                            <div class="yze2oty2njuzndmwmjy cje2oty2nzm3ntm3ntm">
                                <span>Mã sản phẩm</span>
                                <span>ZZE2OTY2NJUZNJUXMJM</span>
                            </div>

                            <div class="yze2oty2njuzndmwmjy cje2oty2nzm3ntm3ntm">
                                <span>Ngày sản xuất</span>
                                <span>26/8/2023</span>
                            </div>

                            <div class="yze2oty2njuzndmwmjy cje2oty2nzm3ntm3ntm">
                                <span>Cho phép hiển thị</span>
                                <span class="yze2oty2njc0otmwodk"></span>
                            </div>

                            <div class="bte2oty2njm2ntc1otu cje2oty2nzm3ntm3ntm">
                                <span>Tên sản phẩm</span>
                                <input placeholder="Nhập tên sản phẩm"></input>
                            </div>

                            <div id="bje2oty2odczntk4mta"></div>




                        </div>


                    </div>

                    <div>
                        <textarea name="editor" id="bde2oty2otewnjg4nza" rows="10" cols="80"></textarea>
                    </div>

                </div>
                `
            )

            const ele = $(IS.CONVERT.SPECIAL_CONTENT({ content: html }))

            $(eprops.container).append(ele)

            MODULES.UI_SWITCH_BTE2OTY2NJY4MZE5MZU({
                container: ".yze2oty2njc0otmwodk",
                options: {
                    on: true
                }
            }).CREATE()

            const editor = CKEDITOR.replace('bde2oty2otewnjg4nza')

        } catch (err) { console.error(err) }

    }

    THIS.CREATE = () => {
        element()
    }

    return THIS

}

EDIT_PRODUCT_ZTE2OTY2NJI4MDAYOTE