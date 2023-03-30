import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const prouct = {
    id: '1',
    title: 'Coffee mug - card',
    img: './coffee-mug.png',
}

export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard
                    product={prouct}
                    className="bg-dark"
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
                <ProductCard
                    product={prouct}
                    className="bg-dark"
                >
                    <ProductCard.Image className="custom-image" style={{boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'}} />
                    <ProductCard.Title className="text-white text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>
                <ProductCard
                    product={prouct}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductCard.Image style={{boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'}}/>
                    <ProductCard.Title style={{fontWeight: 'bold'}}/>
                    <ProductCard.Buttons style={{
                        display: 'flex',
                        justifyContent: 'end',
                    }}/>
                </ProductCard>
            </div>
        </div>
    )
}
