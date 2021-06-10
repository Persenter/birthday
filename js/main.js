let keys = ['1511','2252']
function Check(codes, number) {
	keys[number] = keys[number].replace('5','');
	if(codes == keys[number])
	_CPUThresholder(keys[number]);
}
function _CPUThresholder(manifest){
window.location.href="https://persenter.github.io/birthday/"+manifest+".html";
}
