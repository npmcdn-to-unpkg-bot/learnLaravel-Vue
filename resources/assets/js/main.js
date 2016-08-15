// import Vue from 'vue'
// import vueResource from 'vue-resource'
import moment from 'moment'

var columns = [{
	    name: 'id',
	    title: 'ID',
	    titleClass: 'center aligned',
	    dataClass: 'center aligned',
	}, 
	{
	    name: 'name',
	    title: 'Name'
	}, 
	{
	    name: 'address',
	    title: 'Address'
	}, 
	{
	    name: 'created_at',
	    title: 'Created',
	    callback: 'formatDate|MMMM Do YYYY, h:mm:ss a'
	}, 
	{
	    name: 'updated_at',
	    title: 'Updated',
	    callback: 'formatDate|MMMM Do YYYY, h:mm:ss a'

	}]
new Vue({
    el: '#app',
    data: {
        fields: columns,
        message: 'Laravel 5 + Vue.js'
    },
    methods: {
        formatDate: function(value, fmt) {
            if (value == null) return ''
            fmt = (typeof fmt == 'undefined') ? 'D MMM YYYY' : fmt
            return moment(value).format(fmt)
        }
    }
})
