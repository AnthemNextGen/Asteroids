/*
Setup and Teardown code for tests.  Any canvas components that need to exist
before calling functions must be defined here;
*/
beforeEach(function() {
     canvas = document.createElement('canvas');
     canvas.id = 'splash';
     document.body.appendChild(canvas);
     splashScreen = document.getElementById(canvas.id);
     videoTag = document.createElement('video')
     videoTag.id = 'video'
     document.body.appendChild(videoTag)
     video = document.getElementById('video')
 });
