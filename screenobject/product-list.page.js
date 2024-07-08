import { $ } from '@wdio/globals'


class ProductList{

    get productPrice(){
        return $$('//');
    }
    

}

export default new ProductList();