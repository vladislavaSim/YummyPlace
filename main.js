let $container = document.querySelector('.container')
let $wrapper = document.querySelector('.wrapper')

let $breakfast = document.querySelector('#Breakfasts')
let $salads = document.querySelector('#Salads')
let $desserts = document.querySelector('#Desserts')
let $european = document.querySelector('#European')
let $asian = document.querySelector('#Asian')
let $all = document.querySelector('#All')

let $modalContainer = document.querySelector('.modal-container')
let $closeBtn = document.querySelector('.close-btn')
let $orderBox = document.querySelector('.order-box')
let $orderBtn = document.querySelector('.order')
let $cartBtn = document.querySelector('.cart')
let $cartBox = document.querySelector('.cart-box')

let $ul = document.querySelector('.order-list')
let $totalPrice = document.querySelector('.total-price')

let $sortingBox = document.querySelector('.sorting-box')
let $searchInput = document.querySelector('.search-input')

function FoodObjMaker(id, name, price, category, number) {
        this.id = id,
        this.name = name,
        this.price = price,
        this.category = category,
        this.img = id,
        this.number = 1
}
FoodObjMaker.prototype.incrementNumber = function () {
    this.number++
}
let foodArr = [
    new FoodObjMaker(1, 'Chili Chicken With Rice', 180, 'Asian'),
    new FoodObjMaker(2, 'Lasagna', 90, 'European'),
    new FoodObjMaker(3, 'Crispy Pecan Pie', 80, 'Desserts'),
    new FoodObjMaker(4, 'Greek Salad', 70, 'Salads'),
    new FoodObjMaker(5, 'Veal Fondue', 150, 'European'),
    new FoodObjMaker(6, 'Chicken Salad', 135, 'Salads'),
    new FoodObjMaker(7, 'Yoghurt Cake', 65, 'Desserts'),
    new FoodObjMaker(8, 'Chocolate Cake', 70, 'Desserts'),
    new FoodObjMaker(9, 'Burgundian Snails', 200, 'European'),
    new FoodObjMaker(10, 'Indian Lunch Deluxe', 220, 'Asian'),
    new FoodObjMaker(11, 'Berry Tart', 60, 'Desserts'),
    new FoodObjMaker(12, 'Bao Burgers', 90, 'Asian'),
    new FoodObjMaker(13, 'Chia Pudding + Granola', 80, 'Breakfast'),
    new FoodObjMaker(14, 'Entrecote', 160, 'European'),
    new FoodObjMaker(15, 'Healthy Plate', 120, 'Breakfast'),
    new FoodObjMaker(16, 'Tomato Soup', 80, 'European'),
    new FoodObjMaker(17, 'Imeretian Cheese Pie', 100, 'European'),
    new FoodObjMaker(18, 'Ajarian Cheese Pie', 110, 'European'),
    new FoodObjMaker(19, 'Georgian Dumplings', 85, 'European'),
    new FoodObjMaker(20, 'Chef Burger', 180, 'European'),
    new FoodObjMaker(21, 'Baked Lamb', 130, 'European'),
    new FoodObjMaker(22, 'Pizza', 115, 'European'),
    new FoodObjMaker(23, 'Shrimp Bowl', 130, 'Breakfast'),
    new FoodObjMaker(24, 'Sushi Set', 255, 'Asian'),
    new FoodObjMaker(25, 'Sushi for one', 120, 'Asian'),
    new FoodObjMaker(26, 'Mackerel Grill', 115, 'Asian'),
    new FoodObjMaker(27, 'Ukrainian Cheesecakes', 60, 'Breakfast'),
    new FoodObjMaker(28, 'Caramel Croissant', 45, 'Breakfast'),
    new FoodObjMaker(29, 'Chicken Noodle', 95, 'Asian'),
    new FoodObjMaker(30, 'Vegies Salad', 80, 'Salads'),
    new FoodObjMaker(31, 'Lentils Salad', 90, 'Salads'),
    new FoodObjMaker(32, 'Fried Chicken Salad', 145, 'Salads'),
    new FoodObjMaker(33, 'Caesar', 140, 'Salads'),
]


let array;

function cardCreator(arr) {
    $container.innerHTML = ''
    arr.map((item, key) => {
        let $foodCard = document.createElement('div')
        $foodCard.className = 'food-card'
        let $imgHolder = document.createElement('div')
        $imgHolder.className = 'img-holder'
        $imgHolder.innerHTML = '<img alt="food-pic" src=' + './img/' + item.id + '.jpg>'
        let $foodInfo = document.createElement('div')
        $foodInfo.className = 'food-info'
        let $foodTitle = document.createElement('p')
        $foodTitle.className = 'food-title'
        $foodTitle.innerHTML = item.name
        let $foodPrice = document.createElement('p')
        $foodPrice.className = 'food-price'
        let $add = document.createElement('button')
        $add.id = item.id
        $add.className = 'add'
        $add.innerHTML = 'Add'
        $imgHolder.append($add)
        $foodPrice.innerHTML = item.price + ' UAH'
        $foodInfo.append($foodTitle, $foodPrice)
        $foodCard.append($imgHolder, $foodInfo)
        $container.append($foodCard)
    })
}


let visible = 'All';
filter()
$breakfast.addEventListener('click', () => {
    visible = 'Breakfast'
    filter()
})
$salads.addEventListener('click', () => {
    visible = 'Salads'
    filter()
})
$desserts.addEventListener('click', () => {
    visible = 'Desserts'
    filter()
})
$european.addEventListener('click', () => {
    visible = 'European'
    filter()
})
$asian.addEventListener('click', () => {
    visible = 'Asian'
    filter()
})
$all.addEventListener('click', () => {
    visible = 'All'
    filter()
})

$sortingBox.addEventListener('click', (e) => {
    if(e.target.id === 'low-price') {
        array.sort((a, b) =>  a.price - b.price)
    } else if(e.target.id === 'high-price') {
        array.sort((a, b) =>  b.price - a.price)
    }
    $container.innerHTML = ''
    cardCreator(array)
})

function filter() {
    switch (visible) {
        case 'Breakfast':
             array = foodArr.filter(item => item.category === 'Breakfast');
             break;
        case 'Salads':
             array = foodArr.filter(item => item.category === 'Salads');
            break;
        case 'Desserts':
             array = foodArr.filter(item => item.category === 'Desserts');
             break;
        case 'European':
             array = foodArr.filter(item => item.category === 'European');
             break;
        case 'Asian':
             array = foodArr.filter(item => item.category === 'Asian');
             break;
        case 'All':
             array = foodArr
             break;
        default:
             array = foodArr;
             break;
    }
    cardCreator(array)
}
let $cartMessage = document.createElement('p')

function checkCartEmpty() {
    $cartMessage.className = 'cart-message'
    if($modalContainer.style.visibility === 'visible') {
        $orderBox.style.visibility = 'visible'
    }
    if(cartArr.length === 0) {
        $cartMessage.innerHTML = 'The cart is empty. <br> Let`s find something yummy!'
        $orderBtn.style.visibility = 'hidden'
        $orderBox.append($cartMessage)
    } else {
        $cartMessage.innerHTML = ''
        // $orderBtn.style.visibility = 'visible'
    }
}
$orderBtn.addEventListener('click', () => {
    $modalContainer.style.visibility = 'hidden'
    document.body.style.overflow = 'overlay'
    $orderBox.style.visibility = 'hidden'
})
document.body.addEventListener('click', (e) => {
    $totalPrice.innerHTML = getTotalPrice(cartArr)
    if(e.target.className === 'cart' || e.target.className === 'close-btn') {
        document.body.style.overflowX = '1px'
        if ($modalContainer.style.visibility === 'visible') {
            $modalContainer.style.visibility = 'hidden'
            document.body.style.overflow = 'overlay'
            $orderBox.style.visibility = 'hidden'
            $orderBtn.style.visibility = 'hidden'
            checkCartEmpty()
            updateCartNumber()
        } else {
            $modalContainer.style.visibility = 'visible'
            document.body.style.overflow = 'hidden'
            $orderBox.style.visibility = 'visible'
            $orderBtn.style.visibility = 'visible'
            checkCartEmpty()
            renderOrderList(cartArr)
            updateCartNumber()
        }
    }
})
function updateCartNumber() {
    let $cartLength = document.querySelector('.cart-number')
    $cartLength.innerHTML = ''
    if(cartArr.length > 0) {
        let res = cartArr.map(item => item.number).reduce((acc, c) => acc += c)
        console.log(res)
        if(res === 1) {
            $cartLength.innerHTML = res + ' item'
        } else {
            $cartLength.innerHTML = res + ' items'
        }
        $cartBox.append($cartLength)
    }
}


let cartArr = [];
$container.addEventListener('click', (e) => {
    if (e.target.className === 'add') {
        console.log(cartArr.length)
        $totalPrice.innerHTML = getTotalPrice(cartArr)
        if (cartArr.length > 0) {
            let duplicated = cartArr.find(item => item.id === +e.target.id)
            if (duplicated) {
                duplicated.incrementNumber()
            } else {
                cartArr.push(array.find(item => item.id == e.target.id))
            }
        } else {
            cartArr.push(array.find(item => item.id == e.target.id))
        }
        console.log(cartArr)
    }
    updateCartNumber()
})

function renderOrderList(arr) {
    $ul.innerHTML = ''
    arr.map((item, key) => {
        let $cartItem = document.createElement('li')
        $cartItem.className = 'cart-item'
        let $itemName = document.createElement('p')
        $itemName.innerHTML = item.name
        let $itemPrice = document.createElement('p')
        $itemPrice.innerHTML = item.price + ' UAH'
        let $number = document.createElement('input')
        $number.type = 'number'
        $number.value = item.number
        $number.min = '1'
        $number.addEventListener('change', (e) => {
            item.number = +e.target.value
            $totalPrice.innerHTML = getTotalPrice(cartArr)
        })
        let $deleteItemBtn = document.createElement('button')
        $deleteItemBtn.innerHTML = 'X'
        $deleteItemBtn.id = item.id
        $deleteItemBtn.className = 'remove-item'
        $cartItem.append($itemName, $itemPrice, $number, $deleteItemBtn)
        $ul.append($cartItem)
    })

}

$ul.addEventListener('click', (e) => {
    if(e.target.classList.value === 'remove-item') {
       cartArr = cartArr.filter(item => item.id !== +e.target.id)
        console.log(cartArr)
        $ul.innerHTML = ''
        renderOrderList(cartArr)
        $totalPrice.innerHTML = getTotalPrice(cartArr)
        checkCartEmpty()
    }
    checkCartEmpty()
    updateCartNumber()
})

function getTotalPrice(arr) {
    let res;
    if(arr.length > 0) {
       res = arr.map(item => {
           if(item.number > 1) {
               return res = item.number * item.price
           }
           return item.price
       }).reduce((acc, curr) => acc += curr)
        return $totalPrice.innerHTML = 'Total price is ' + res + ' UAH'
    } else {
        return $totalPrice.innerHTML = 'Total price is ' + 0 + ' UAH'
    }
}
$searchInput.addEventListener('change', (e) => {
    console.log(e.target.value)
    searchByName(e.target.value)
})
function searchByName(value) {
    let res = foodArr.map(item => item.name)
    console.log(res)
    let res2 = res.filter(item => value == item)
    console.log(res2)
    renderOrderList(res)
}

//fix scroll while modal is active
//add search by name
//add multipaging






//in a guest house Strelkivoye
// in the Azov sea
//Bobrovka dacha
// Lagernaya flat (bed, armchair, wardrobe, balcony, kitchen, bathroom)
//his parents house
// in a tent
// in Vova's house
// In Barcelona shower and bed
// in a car in the afternoon on parking
// wood Korobovy hutora
