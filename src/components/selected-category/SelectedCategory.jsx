import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openCloseChat } from "../../redux/actions/actions";
import CategoryBlock from "./top-row/CategoryBlock";
import Card from "../product-card/Card";
import PopUp from "../popup/PopUp";
import Chat from "../chat/Chat";
import "./selectedCategory.scss";

const categoriesBlockContent = [
    {
        key: 1,
        image: '20211007_tm_chilli_pepper_heatwave_improved_mixed.jpg',
        name: 'Hot Peppers',
        description: "Our collection of Hot Peppers include: Several varieties of Jalapeño, Cayenne, Jalmundo, Goat Horn, Serrano, Bulgarian Carrot, Devil's Tongue, Fatalii, Red Caribbean Habanero, Chocolate Habanero, Peruvian White Habanero, Pequin, Yellow Scotch Bonnet, Tabasco, Thai Hot. Our term Hot Peppers here covers the heat range of 12,000 to 450,000 Scoville Heat Units. "
    },
    {
        key: 3,
        image: 'bell-pepper-gf1334f38a_1920.jpg',
        name: 'Sweet Peppers',
        description: 'When perfectly stored, pepper seeds can be viable for up to 25 years, but generally 2-5 years is more realistic for good germination rates. The older the seeds get, the less likely they will sprout. Store seeds in a cool, dark, dry environment. Remember, seeds are meant to be grown, so plant them! Of course we still plant old seeds (a few years old) all the time, because they can still sprout. Just be aware that the germination rate will be lower, so just be expecting that not every seed will sprout.'
    },
    {
        key: 4,
        image: 'New-Guinness-World-Record-Carolina-Reaper-Peppers-FT-BLOG0622-cad2b4deca90487584a28441fb8451df.jpg',
        name: 'Super Hot Peppers',
        description: 'Buy Super Hot Peppers: Carolina Reaper, Trinidad Scorpions, and lots more wicked hot peppers. We bring you some of the hottest pepper in the world including the Carolina Reaper, still the official HOTTEST PEPPER in the world.'
    },
    {
        key: 5,
        image: 'serrano-peppers-g0aef408a5_1920.jpg',
        name: 'Green Chile Peppers',
        description: "These chiles are great in green chile stews, chile rellenos, salsas, hot sauces, and so much more. Looking for Hatch Green Chile seeds? You've come to the right place. Chile peppers are EASY to grow from seed!"
    }
]

const SelectedCategory = () => {

    const { name } = useParams();
    const category = name.toLocaleLowerCase().slice(0, 5);

    const hot = useSelector(state => state.products.hot);
    const products = useSelector(state => state.products.products);

    const categProducts = products.filter(product => product.categories.find(tag => tag.sys.id.startsWith(category)));

    const isActive = useSelector(state => state.popup);
    const dispatch = useDispatch();

    const [saleProducts, setSaleProducts] = useState(false);


    return (
        <div className="category-container">
            {category === 'hot p'
                ? <CategoryBlock
                    key={categoriesBlockContent[0].key}
                    image={categoriesBlockContent[0].image}
                    name={categoriesBlockContent[0].name}
                    description={categoriesBlockContent[0].description}
                />
                : category === 'sweet' ?
                    <CategoryBlock
                        key={categoriesBlockContent[1].key}
                        image={categoriesBlockContent[1].image}
                        name={categoriesBlockContent[1].name}
                        description={categoriesBlockContent[1].description} />

                    : category === 'hotte' ?
                        <CategoryBlock
                            key={categoriesBlockContent[2].key}
                            image={categoriesBlockContent[2].image}
                            name={categoriesBlockContent[2].name}
                            description={categoriesBlockContent[2].description} />

                        : <CategoryBlock
                            key={categoriesBlockContent[3].key}
                            image={categoriesBlockContent[3].image}
                            name={categoriesBlockContent[3].name}
                            description={categoriesBlockContent[3].description} />

            }

            <div className="category-content">
                <div className="sort-row">
                    <div className="row first">
                        <div className="item">
                            <div className="text">Filter:</div>
                            <div className="filter">
                                <div className="name">Price</div>
                                <img className="vector" src="/images/icons/arrDown.png" alt="" />
                            </div>
                        </div>


                        <div className="item">
                            <div>On Sale</div>
                            <input type="checkbox" onClick={() => setSaleProducts(!saleProducts)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="text">Sort by:</div>
                        <div className="filter">
                            <div className="name">Featured</div>
                            <img className="vector" src="/images/icons/arrDown.png" alt="" />
                        </div>

                        <div className="product-amount">{category === 'hot p' ? hot.length : categProducts.length} products</div>
                    </div>
                </div>


                <div className="allCards">
                    {!saleProducts ? (category === 'hot p' ?
                        hot.map(item => <Card key={item.namerow} {...item} />)
                        : categProducts &&
                        categProducts.map(item => <Card key={item.namerow} {...item} />))
                        : (category === 'hot p' ?
                            hot.filter(product => product.onSale === true).map(item => <Card key={item.namerow} {...item} />)
                            : categProducts &&
                            categProducts.filter(product => product.onSale === true).map(item => <Card key={item.namerow} {...item} />))
                    }
                </div>
            </div>

            <PopUp isActive={isActive} />

            <div className="chat-icon-container">
                <div></div>
                <div className="chat-icon" onClick={() => dispatch(openCloseChat())}>
                    <img src="/images/icons/chat.png" alt="" />
                </div>
            </div>

            <Chat />
        </div>
    )
}

export default SelectedCategory