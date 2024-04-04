console.log('delete res')
document.querySelectorAll('.deleteReservationBtn').forEach(button => {
    button.addEventListener('click', function() {
        const reservationId = this.getAttribute('data-id');
        if(confirm("Are you sure you want to delete this reservation?")) {
            fetch(`/reservations/${reservationId}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                document.getElementById(`reservation-${reservationId}`).remove();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    });
});

