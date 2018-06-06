/**================================
 * Date Created: 06/06/2018
 * Author: Kelly Wong
 ==================================*/


/**
Desc: Return back to previous page
*/
function returnBack() {
    window.history.back()
}


/**
Desc: Filter lecturers' name
*/
function namesFilter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("namesList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}