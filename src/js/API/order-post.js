const orderForm = document.querySelector('.modal-form-order');
orderForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); 

    if (orderForm.checkValidity()) {
        const formData = new FormData(orderForm);

        fetch('https://tasty-treats-backend.p.goit.global/api/orders', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Order submitted successfully:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        console.error('Form is invalid. Please check your input.');
    }
}
