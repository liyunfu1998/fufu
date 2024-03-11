export default function exsitItem(
  cartItems: any,
  productID: any,
  color: any,
  size: any
) {
  let result;
  if (color) {
    result = cartItems.find(
      (item: any) =>
        item.productID === productID && item.color?.id === color?.id
    );
  } else if (size) {
    result = cartItems.find(
      (item: any) => item.productID === productID && item.size?.id === size?.id
    );
  } else {
    result = cartItems.find((item: any) => item.productID === productID);
  }

  return result;
}
