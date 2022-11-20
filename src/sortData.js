import API from "./redux/api"
import {
    getFastGrow,
    getMostPopular,
    getNew,
    getOnSale,
    getProducts,
    getHot
} from "./redux/actions/actions"


export const sortData = async (dispatch) => {


    const response = await API.then()
    response.forEach(item => item.fields.categories = item.metadata.tags)
    const products = response.map(item => item.fields)

    const mostPopular = products.filter(product => product.categories.find(tag => tag.sys.id === 'mostPopular'))
    const onSale = products.filter(product => product.categories.find(tag => tag.sys.id === 'onSale'))
    const newPepper = products.filter(product => product.categories.find(tag => tag.sys.id === 'newPepper'))
    const fastGrow = products.filter(product => product.categories.find(tag => tag.sys.id === 'fastGrow'))
    const hot = products.filter(product => product.categories.find(tag => tag.sys.id === 'hotPepper'))


    dispatch(getProducts(products))
    dispatch(getMostPopular(mostPopular))
    dispatch(getOnSale(onSale))
    dispatch(getNew(newPepper))
    dispatch(getFastGrow(fastGrow))
    dispatch(getHot(hot))
}