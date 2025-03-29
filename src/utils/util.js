export const APP_LOGO_URL = "https://img.icons8.com/fluency/48/hamburger.png";
export const CART_LOGO_URL = "https://img.icons8.com/fluency/48/shopping-cart-loaded--v1.png";

export const getRestaurantMenuLink = (resId) => `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.455203&lng=78.3665765&restaurantId=${resId.substring(
      4
    )}&catalog_qa=undefined&submitAction=ENTER`