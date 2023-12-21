# Ecommerce Cart:
<img width="1280" alt="Screenshot 2023-12-22 at 01 11 45" src="https://github.com/knight-95/Groww-SDE-Assignment/assets/79582395/090324f7-a7fa-48f9-ab39-5c171738e35f">
 <h1>A complete NextJS eCommerce Store powered by: Chakra UI + Zustand</h1>
 <h3>Demo Link:   https://youtu.be/cuz1yY9FbNk</h3>
 


 
# Project Focus

### Checkout Page:

- Utilizes the provided API to fetch a **randomized cart** and available payment methods.
- Automatic **Shipping Charges inclusion** when cart value is below ₹499
- Apply Discount using coupons **DISCOUNT10 , DISCOUNT15** to apply 10% and 15% discount respectively
- Displays a **summary section** showcasing the cart total, shipping charges and discount applied.
- Includes a **call-to-action button** to proceed to the next step.
- Handles scenarios where the API may return an **empty product list**, rendering an appropriate empty state.
<img width="296" alt="Screenshot 2023-12-22 at 01 15 42 copy" src="https://github.com/knight-95/Groww-SDE-Assignment/assets/79582395/20428ea1-2812-4713-a7d8-34d8c15246da">

### Payment Options Page:

- Allow users to choose their **preferred payment method**.
- Renders **visually distinct representations** for each payment method obtained from the order-details API.
- Enables seamless switching between **payment methods**.
- Ensures **validation** for all instruments and incorporates **error/loading states**.

<img width="1280" alt="Screenshot 2023-12-22 at 02 48 38" src="https://github.com/knight-95/Groww-SDE-Assignment/assets/79582395/1840807d-0752-4ddf-8ffc-45bb06959505">



### Order Confirmation Page:
- A dedicated page for **order confirmation**.
- Displays **order details**, including the selected payment method.
- Introduces a **status message** indicating the success, failure, or pending state of the transaction.
- Randomizes the order status to provide a **varied user experience**.

# Caching
<img width="1280" alt="Screenshot 2023-12-22 at 01 23 10" src="https://github.com/knight-95/Groww-SDE-Assignment/assets/79582395/84679f70-3512-408d-b48c-00acf939be28">

- Cart items will be stored in local **cache as Key-Value pair**
- On refreshing cart, items won't be lost and no API Call shall be made


# Transaction Successful 

<img width="1280" alt="Screenshot 2023-12-22 at 01 14 46" src="https://github.com/knight-95/Groww-SDE-Assignment/assets/79582395/1a254418-c284-4580-a6b2-9249b5dd7ff5">

- Finish Order will **clear cache** and will again make an API Call to get another random cart
- User can download PDF Invoice for their order

# Transaction Failed 

<img width="1280" alt="Screenshot 2023-12-22 at 01 18 22" src="https://github.com/knight-95/Groww-SDE-Assignment/assets/79582395/9cd134e7-c233-4e98-8c97-089a589248a8">

- Redirected to payments page to **retry the payment**

