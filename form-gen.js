function addButton(){
    const element = document.getElementById('container');
    const plusButton = document.createElement('button');
    plusButton.innerText = 'This is a Button';
    element.appendChild(plusButton);
}
function addInput(){
    const element = document.getElementById('container');
    const plusInput = document.createElement('input');
    plusInput.value = 'This is an input';
    element.appendChild(plusInput);
}