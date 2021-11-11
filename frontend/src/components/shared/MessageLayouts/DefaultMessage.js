import {Fragment} from 'react';

const DefaultMessage = ({messagetype = "info", message}) => {
    const type = () => {
        switch (messagetype) {
            case 'error':
                return "bg-red-400";
            case 'success':
                return "bg-green-400";
            default:
                return "bg-blue-400";
        }
    };

    return (
        <Fragment>
            <div className='px-5 mt-2'>
                <label className={`block text-center w-full text-white py-2 ${type(messagetype)}`}>
                    {message}
                </label>
            </div>
        </Fragment>
    );
}

export default DefaultMessage;