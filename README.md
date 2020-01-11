# How to deploy
```bash
# First commit changes,
git add -A .
git commit -m "Describe changes here"
git push

# Then, ssh into the server.
ssh jesus_cast_sosa@35.193.246.216
# Change user
sudo su daemon
# Find the folder
cd apps/wordpress/htdocs/wp-content/plugins/vmv/
# Now inside the other server, pull the changes
git pull
# Exit the server
exit && exit
```

# How to develop
```bash
# Start the build process, and leave it open.
# This will build the javascript files as you develop
./watch.sh
```

Description of files:
```
vmv.php <-- The top level file of the wordpress plugin
css/ <--- Contains all style files
html/ <--- Each file in this folder represents a view in the recording and store plugin
js/
  bundle.js <-- This is created by running the ./watch.sh and ./build.sh script
  main.js <-- This script is the top level for the javascript, and it's transformed into bundle.js
  lib/ <-- Contains some third party utility libraries 
  src/
    utilities.js <-- Mescellaneous utility functions to deal with kite.ly, place orders, getPrices, and processPaypalPayment
     models/ <-- Contains the data models for the different objects in the plugin
           country.js <-- Represents a country in the format required by the kite.ly API
           address.js <-- Holds the address of the receiver of the product. It uses the country model
           index.js <-- Exports all models.
           job.js <-- Holds the structure for a kite.ly job. This data is parsed and sent to the kite.ly API to place an order.
           product.js <-- Represents a kite.ly product, and has some methods to render it as HTML in the product list.
     views/ <-- Contains the different views / pages of the plugin.
            index.js <-- Exports all the views
            selection/ <-- The View where the user selects a product.
                    index.js <-- Contains code to render the list of products. It uses the Product model
                    price_data.json <-- All the JSON files below are used to feed data into the product list.
                    products_prices.json <--
                    products.json <--
                    toignore.json <--
            editor.js <-- The view where the image is adjusted in the product
            checkout.js <-- The view where the user writes the shipping address after editing a product.
            payment.js <-- Here the user uses paypal to pay for the product.
            payment_confirmation.js <-- Has a message after the payment has been processed
            product_history.js <-- Views a list of orders made
    constants.js <-- A set of utility constants
    edit.js <-- This is the edit view where the user adjust the position of the image and color of the product.
    example_product.js <-- Utility file that contains the data of a sample product
    image_preloader.js <-- Utility function to parse image data. Used in the editor.
    product_image.js <-- Utility function to parse image data. Used in the editor.
lib/ <-- Libraries used for audio recording
php/ <-- Contains the code to export the javascript app to wordpress.
    create_product.php <-- Exports the different wordpress plugins
    editor.php <-- Defines a wordpress shortcut to embedd html/editor.html into an iframe anywhere
    create_product_default_view.php <-- Defines a wordpress shortcut to embedd the product list selection
```