import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"

const prouct = {
    id: '1',
    title: 'Coffee mug - card',
    img: './coffee-mug.png',
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={prouct}>
                    <ProductImage />
                    <ProductTitle title={'JAJAS'} />
                    <ProductButtons />

                </ProductCard>
                <ProductCard product={prouct}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    )
}
