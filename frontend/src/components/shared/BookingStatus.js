const BookingStatus = ({isRejected=false, isConfirmed=null}) => {
    const status = () => {
        if (!isRejected && !isConfirmed) {
            return {status: 'Pending', color: 'yellow'}
        }

        if (isRejected && !isConfirmed) {
            return {status: 'Rejected', color: 'red'}
        }

        if (!isRejected && isConfirmed) {
            return {status: 'Approved', color: 'green'}
        }
    }
    return (
            <div className={`text-${status().color}-500`}>
                {status().status}
            </div>
    );
}

export default BookingStatus;