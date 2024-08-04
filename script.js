document.getElementById('pincodeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const pincode = document.getElementById('pincode').value;

    
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(response => response.json())
        .then(data => {
            if (data[0].Status === "Success") {
                
                const postOffice = data[0].PostOffice[0];

                
                const pincodeDetails = document.getElementById('pincodeDetails');
                pincodeDetails.innerHTML = `<p><strong>Name:</strong> ${postOffice.Name}</p>
                                            <p><strong>District:</strong> ${postOffice.District}</p>
                                            <p><strong>State:</strong> ${postOffice.State}</p>`;

               
                document.getElementById('popupForm').style.display = 'block';
            } else {
                alert("Invalid Pincode or no details available.");
            }
        })
        .catch(error => {
            console.error('Error fetching pincode details:', error);
            alert("An error occurred while fetching pincode details.");
        });
});

function closePopup() {
    
    document.getElementById('popupForm').style.display = 'none';
}
