//Классы для корзины:
// class CartList {}
// class CartItem {}
// чтобы сделать по аналогии с ProductList и ProductItem, наверное!))
// Скорее всего будет метод который добавляет в массив товары сформированные 
// в "class CartItem", чтобы в дальнейшем можно было выборочно удалять их из этого массива.
// Еще будет метод который считает сумарную стоимость добавленых товаров, типа "Итого:"  



class ProductList {
  constructor(container = '.products') {
      this.container = container;
      this.goods = [];
      this.allProducts = [];
      this._fetchProducts();
      this._render();
      this.calcSum (); // метод который считает общую сумму
  }

  _fetchProducts() {
      this.goods = [
          {id: 1, title: 'Notebook', price: 20000},
          {id: 2, title: 'Mouse', price: 1500},
          {id: 3, title: 'Keyboard', price: 5000},
          {id: 4, title: 'Gamepad', price: 4500},
      ];
  }

  calcSum () {
      return this.allProducts.reduce((sum, current) => sum += current.price,0);
  }

  _render() {
      const block = document.querySelector(this.container);
      for (let product of this.goods) {
          const productObject = new ProductItem(product);
          this.allProducts.push(productObject);
          block.insertAdjacentHTML('beforeend', productObject.render());
      }
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;
  }

  render() {
      return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

new ProductList();

// const products = [
//     {id: 1, title: 'Notebook', price: 20000},
//     {id: 2, title: 'Mouse', price: 1500},
//     {id: 3, title: 'Keyboard', price: 5000},
//     {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//                 <img src="${img}" alt="Some img">
//                 <div class="desc">
//                     <h3>${item.title}</h3>
//                     <p>${item.price} \u20bd</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//             </div>`;
//
// const renderProducts = list => {
//   document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };

// const renderProduct = (title, price) => {
//     return `<div class="product-item">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="buy-btn">Добавить в корзину</button>
//             </div>`;
// };
//
// const renderProducts = list => {
//     const productList = list.map(item => renderProduct(item.title, item.price));
//     document.querySelector('.products').innerHTML = productList;
// };

// renderProducts(products);