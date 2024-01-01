document.addEventListener('DOMContentLoaded', function () {
    
    const onlineElem = document.querySelector('.online');
    const classRoomElem = document.querySelector('.classRoom');
    const coursesElem = document.querySelector('.courses');
    const demoTypes = Array.from(document.getElementsByClassName('demo-type'));

    const demoImage = document.getElementById('demo-image');

    onlineElem.onclick = function(){
        demoTypes.forEach(demo => demo.classList.remove('active'));
        onlineElem.classList.add('active');
        demoImage.src = './images/education-5600987_640.png';
    }
    classRoomElem.onclick = function(){
        demoTypes.forEach(demo => demo.classList.remove('active'));
        classRoomElem.classList.add('active');
        demoImage.src = './images/training-3185170_640.jpg'
    }
    coursesElem.onclick = function(){
        demoTypes.forEach(demo => demo.classList.remove('active'));
        coursesElem.classList.add('active');
        demoImage.src = './images/training-course-3250007_640.jpg'
    }

    const cevrons = Array.from(document.getElementsByClassName('cevron'));
    cevrons.forEach(cevron => cevron.addEventListener('click', function(e){
        e.target.classList.toggle('active')
    }))

});
