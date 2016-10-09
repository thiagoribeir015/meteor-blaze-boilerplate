import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import moment from 'moment';

import { Tasks } from '../api/tasks.js'
import './task.js';
import './body.html';

// global helper
Template.registerHelper('formatDate', (date, format) => {
    return moment(date).format(format);
});

//init Template.state reactive variable;
Template.body.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
});


Template.body.helpers({

    tasks() {
        //if reactive state has hideCompleted=true;
        if (Template.instance().state.get('hideCompleted')) {
            return Tasks.find({ checked: { $ne: true } }, //only unchecked tasks;
                { sort: { createdAt: -1 } } //newest at the top;
            );
        }

        return Tasks.find({}, { sort: { createdAt: -1 } }); //newest at the top;
    },

    incompleteTasksCount() {
        return Tasks.find({ checked: { $ne: true } }).count();
    }

});

Template.body.events({
    //'eventName cssSelector'
    'submit .new-task' (event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        Tasks.insert({
            text,
            createdAt: new Date(),
        });

        target.text.value = '';
    },

    'change .hide-completed input' (event, template) {
        template.state.set('hideCompleted', event.target.checked);
    },

});
