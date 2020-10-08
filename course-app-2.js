const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/play-ground',{useUnifiedTopology: true,useNewUrlParser: true });

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    let result=await Course.find({name: 'spring'})
        .and([{price:{$lte: 15}}])
    console.log(result);
}



getCourses().then(function (){
    console.log('Success')
}).catch(reason => {
    console.log('Failure');
});