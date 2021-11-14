const BookingStatus = ({isRejected=null, isConfirmed=null}) => {
    const status = () => {
        switch (isRejected && !!isConfirmed) {
            case !!isRejected && !!isConfirmed:
                return { status: 'Pending', color: 'yellow' }
            case !!isRejected && isConfirmed:
                return { status: 'Approved', color: 'green' }             
            default:
                return { status: 'Rejected', color: 'red' }
        }
    }
    return (
            <div className={`text-${status().color}-500`}>
                {status().status}
            </div>
    );
}

export default BookingStatus;