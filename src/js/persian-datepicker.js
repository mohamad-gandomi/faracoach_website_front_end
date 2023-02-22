import $ from "jquery/src/jquery.js";
import persianDate from 'persian-date'
window.persianDate=persianDate;
import { persianDatepicker } from "persian-datepicker/dist/js/persian-datepicker.js";
import 'persian-datepicker/dist/css/persian-datepicker.css'

$('.date-input').persianDatepicker({
    inline: true,
    altField: '#altDateInput',
    altFormat: 'YYYY/MM/DD',
    toolbox: {
        enabled: false
    },
    navigator:{
        text: {
            btnNextText: '',
            btnPrevText: '',
    
        }
    },
    monthPicker: {
        "enabled": false,
    },
    yearPicker: {
        "enabled": false,
    },

    // minDate: 1676810871085,
    // mxDate: 1676810871085,
    
});