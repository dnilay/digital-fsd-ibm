const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected successfully');
});
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
});
const Course = mongoose.model('Course', courseSchema);
//findFirst And Update
const course = new Course({
    name: 'Spring',
    author: 'Jane',
    tags: ['Spring', 'Middleware'],
    isPublished: true,
    price: 34
});

async function createCourse() {
    const result = await course.save();
    console.log('Course created');
}/*
async function updateCourse(id)
{

    const course = await Course.findById(id);
    console.log(course);
    if (!course) return;
    course.name='Spring', course.author='Jane';
   // course.set({ name: 'Learning React',author: 'Mosh',_v: 2});
    course.save();
    console.log(course);


}

updateCourse('5f7ff1028abe7c16e32b8b90').then(()=>{
    console.log('course update success');
});*/

//update first
//update and updateMany methods return void
/*
async function updateCourse() {
    let result = await Course.updateMany({author: 'Mosh'}, {
        $set: {name: 'Learning Volley'}
    });
    console.log(result);
}
updateCourse().then(() => {
    console.log('success');
});
*/
//update first
async function updateCourse(id)
{
    let course = await Course.findByIdAndUpdate({_id: id}, {
       $set: {name: 'Learning Angular', author: 'Mr. Balaguruswamy'}
    },{new:false});
    console.log(course);
}

updateCourse('5f7ff1028abe7c16e32b8b94').then(() => {
    console.log('success');
})

