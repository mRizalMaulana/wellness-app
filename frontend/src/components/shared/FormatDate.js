import {Fragment} from 'react';

const FormatDate = ({date}) => {
    let dateData = new Date(date);
    let dataDate = dateData.getDate();
    let dataMonth = dateData.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    let dataYear = dateData.getFullYear();
    let newDate = dataMonth + "/" + dataDate + "/" + dataYear;

    return (
        <Fragment>
            {newDate}
        </Fragment>
    );
}

export default FormatDate;