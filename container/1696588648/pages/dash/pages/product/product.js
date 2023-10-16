

(PROPS) => {
    return {
        REQUIRE: {
            COMPONENTS: [
                {
                    src: "../../../../data/pages/product-data/product-content.js",
                    name: "PRODUCT_CZE2OTY2NJI3NDYXMDI"
                },
            ],
            CSS: [
                {
                    src: "./product.css"
                }
            ]
        },

        RENDER: {
            FROM: (
                <div class="SEDE2OTYYMJG4OTCXMZG">

                   

                    <div class="SEDE2OTYYMZUZMTMZNZU"></div>

                </div>
            )
        },
        METHOD: () => {
            try {
                document.title = "Sản phẩm"
                const COMPONENTS = PROPS.REQUIRE.IS.COMPONENTS.INNIT
                COMPONENTS.PRODUCT_CZE2OTY2NJI3NDYXMDI({container: ".SEDE2OTYYMZUZMTMZNZU"}).CREATE()


            } catch (error) {
                console.error(error);
            }

        }
    }

}