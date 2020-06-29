

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "../test.txt");
oReq.send();

function reqListener() {
  var obj = this.responseText;
  console.log(obj);

}


// document.querySelector("#file-input").addEventListener('change', function () {
//   // files that user has chosen
//   var all_files = this.files;
//   if (all_files.length == 0) {
//     alert('Error : No file selected');
//     return;
//   }

//   // first file selected by user
//   var file = all_files[0];

//   // files types allowed
//   var allowed_types = ['text/plain'];
//   if (allowed_types.indexOf(file.type) == -1) {
//     alert('Error : Incorrect file type');
//     return;
//   }



  
//   var reader = new FileReader();

//   // file reading started
//   reader.addEventListener('loadstart', function () {
//     document.querySelector("#file-input-label").style.display = 'none';
//   });

//   // file reading finished successfully
//   reader.addEventListener('load', function (e) {

//     var data = e.target.result;
//     console.log(data)
 




//   });

//   // file reading failed
//   reader.addEventListener('error', function () {
//     alert('Error : Failed to read file');
//   });

//   // file read progress 
//   reader.addEventListener('progress', function (e) {
//     if (e.lengthComputable == true) {
//       document.querySelector("#file-progress-percent").innerHTML = Math.floor((e.loaded / e.total) * 100);
//       document.querySelector("#file-progress-percent").style.display = 'block';
//     }
//   });

//   // read as text file
//   reader.readAsText(file);
// });