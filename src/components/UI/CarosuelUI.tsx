
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { weHelpData } from '@/mock/home_content';
import ImageBlock from './ImageBlock';


interface Product {
    id: number;
   para : string
}

export default function CarosuelUI() {
    const [products, setProducts] = useState<Product[]>([]);    
    
    useEffect(() => {

        
        setProducts(weHelpData);

    }, []);

    const productTemplate = (product: Product, ) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                  <ImageBlock text={product.para} index={product.id} className='_carosel'></ImageBlock>
                </div>
            </div>
        );
    };
    
    return (
        <div >
            <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="340px"
            itemTemplate={productTemplate} />
        </div>
    )
}
        