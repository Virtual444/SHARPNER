
document.addEventListener("DOMContentLoaded", () => {

    const categoryLists = document.querySelectorAll('ul');

    axios.get('http://localhost:3000/get-products')
        .then(response => {
            //console.log(response);
            const productsByCategory = response.data.productsByCategory;
            //console.log(productsByCategory);
            displayProductsByCategory(productsByCategory);
        })
        .catch(err => {
            console.log(err);
        });

        function displayProductsByCategory(productsByCategory) {
            categoryLists.forEach(categoryList => {
                const categoryName = categoryList.id;
                const products = productsByCategory[categoryName] || [];
    
                categoryList.innerHTML = ''; 
    
                const categoryHeader = document.createElement('h2');
                categoryHeader.textContent = categoryName;
                categoryList.appendChild(categoryHeader);
    
                
                    products.forEach(product => {
                        const listItem = document.createElement('li');

                listItem.innerHTML = `
                    <div>
                        <h4>${product.name}</h4>
                        <button class="delete-button">Delete</button>
                    </div>
                `;

                const deleteButton = listItem.querySelector('.delete-button');
                deleteButton.addEventListener('click', () => {
                    deleteProduct(product.id); 
                });
                        categoryList.appendChild(listItem);
                    });
                });
            }



            function deleteProduct(productId) {
                axios.delete(`http://localhost:3000/delete-product/${productId}`)
                    .then(response => {
                        console.log(response);
                        location.reload();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
           
    

const button = document.getElementById('button');
button.addEventListener("click", () => {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemCategory = document.getElementById('category').value;

    const details = {
        name:itemName,
        price:itemPrice,
        category: itemCategory
    }
    console.log(details);
    axios.post(`http://localhost:3000/add-products`, details)
    .then(response => {
        console.log(response);
        location.reload();
    })
    .catch(err => {
        console.log(err);
    })

   
})


});


