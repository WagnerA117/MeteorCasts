import _ from 'lodash';
import {Meteor} from 'meteor/meteor'
import {Employees} from '../imports/collections/employees';
import {images,helper} from 'faker';

Meteor.startup(()=> {
    //Great place for the fake data

    //first check if there is data present

    const numberRecords = Employees.find({}).count();

    console.log(numberRecords);

    if(!numberRecords){

        _.times(2500,()=>{

            const{
                email,
                name,
                phone
            } = helper.createCard();

            Employees.insert({
                avatar: images.avatar(),
                name,
                email,
                phone,
            })
        });
    }
});