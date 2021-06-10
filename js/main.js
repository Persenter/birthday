let keys = ['510','1511','2252']
function Check(codes, number) {
	keys[number] = keys[number].replace('5','');
	if(codes == keys[number])
	_CPUThresholder(keys[number]);
}
function _CPUThresholder(manifest){
window.location.href="https://persenter.github.io/birthday/"+manifest+".html";
}

var countDownDate = new Date("Aug 31, 2021 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("Timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("Timer").innerHTML = "EXPIRED";
    }
}, 1000);