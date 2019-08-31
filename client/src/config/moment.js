import moment from 'moment';

moment.updateLocale('en', {
  relativeTime: {
    future : '%s sonra',
    past : '%s önce',
    s : 'birkaç saniye',
    ss : '%d saniye',
    m : 'bir dakika',
    mm : '%d dakika',
    h : 'bir saat',
    hh : '%d saat',
    d : 'bir gün',
    dd : '%d gün',
    M : 'bir ay',
    MM : '%d ay',
    y : 'bir yıl',
    yy : '%d yıl',
  }
});

