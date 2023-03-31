import {format} from 'date-fns';
import {isDate} from 'lodash';

export const getFormattedDateTimeString = (dateToFormat) => {
    if (!isDate(new Date(dateToFormat))) {
        return dateToFormat;
    }

    if(dateToFormat === null) {
        return "";
    }

    return format(new Date(dateToFormat), 'yyyy-MM-dd hh:mm:ss a', {
        awareofUnicodeToken: true
    });
};