myFunction();
			
function myFunction(){
	const container = document.querySelector("#array_container");
	const array=[]
	for(let i=0;i<100;i+=1){
		array.push(Math.floor(Math.random()*150) + 1);
	}
	for(let i=0;i<100;i++){
		const bar = document.createElement("div");
		bar.style.height = `${array[i] * 3}px`;
		bar.classList.add("bar");                     
		container.appendChild(bar);
	}
}

function generate(){
	window.location.reload();
}

async function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubble(){
	var array = document.querySelectorAll(".bar");
	for (let i = 0; i < array.length; i++) {
 		for (let j = 0; j < array.length-1-i; j++) {
 			array[j].style.background="red";
    		array[j+1].style.background="red";
    		var y=delay(10);
            	await y;
    		var value1 = parseInt(array[j].style.height);
            var value2 = parseInt(array[j + 1].style.height);
            if (value1>value2) {
                var temp = array[j].style.height;
        		array[j].style.height = array[j+1].style.height;
        		array[j+1].style.height = temp;
            }
            array[j].style.backgroundColor = "#6b5b95";
            array[j + 1].style.backgroundColor = "#6b5b95";
        }
        array[array.length - i - 1].style.backgroundColor = "#13CE66";
    }
}

async function insertion(){
	var array = document.querySelectorAll(".bar");
	for(let i=1;i<array.length;i++){
		var key=parseInt(array[i].style.height);
		var j=i-1;
		array[i].style.background="red"
		array[j].style.background="pink";
    	//array[j+1].style.background="red";
    	var z=delay(10);
         	await z;
    	var height=array[i].style.height;
		while(j>=0 && parseInt(array[j].style.height) > key){
			var y=delay(10);
         		await y;
			array[j].style.background="pink";
			array[j+1].style.height=array[j].style.height;
			j=j-1;

		}
		for(var k=i;k>=0;k--){
        		array[k].style.backgroundColor = "green";
      		}
		array[j+1].style.height=height;

	}
}

async function quick_sort(array,low,high){
	if(low<high){
		var pivot=parseInt(array[high].style.height);
		var i=low-1;
		array[high].style.background="red";
		for(let j=low;j<high;j++){
			if(parseInt(array[j].style.height)<pivot){
				i++;
				
				array[j].style.background="pink";
				var y=delay(100);
         		await y;
				var temp=array[i].style.height;
				array[i].style.height=array[j].style.height;
				array[j].style.height=temp;
				array[j].style.background="green";
			}
			else{
				array[j].style.background="green";
			}
		}
		var z=delay(100);
         		await z;
		var temp1=array[i+1].style.height;
		array[i+1].style.height=array[high].style.height;
		array[high].style.height=temp1;
		var x= i+1;
		array[high].style.background="green";
		quick_sort(array,low,x-1);
		quick_sort(array,x+1,high);
	}
}

function quick(){
	var array = document.querySelectorAll(".bar");
	quick_sort(array,0,array.length-1);
}

async function merge(array,l,m,r){

	var n1=m-l+1;
	var n2=r-m;
	
	var lar=[];
	var rar=[];
	var z=delay(100);
    for(let i=l;i<=r;i++){
			array[i].style.background="yellow";
		}	
	for(let i=0;i<n1;i++){
		lar.push(array[l+i].style.height);
	}
	for(let i=0;i<n2;i++){
		rar.push(array[m+i+1].style.height);
	}
	var i=0,j=0,k=l;
	while(i<n1 && j<n2){
		if(parseInt(lar[i]) < parseInt(rar[j])){
			array[k].style.height=lar[i];
			await z;
			i++;
		}
		else{
			array[k].style.height=rar[j];
			await z;
			j++;
		}
		k++;
	}
	while(i<n1){
		array[k].style.height=lar[i];
		await z;
		i++;
		k++;
	}
	while(j<n2){
		array[k].style.height=rar[j];
		await z;
		j++;
		k++;
	}
}

 async function merge_sort(array,l,r){
	if(l<r){
		var m=((l+r) >> 1);
		await merge_sort(array,l,m);
		await merge_sort(array,m+1,r);
		await merge(array,l,m,r);
		for(let i=l;i<=r;i++){
			array[i].style.background="green";
		}
	}
}

function merges(){
	var array= document.querySelectorAll(".bar");
	merge_sort(array,0,array.length-1);
}

async function selection(){
	var array= document.querySelectorAll(".bar");
	for(let i=0;i<array.length;i++){
		var min=600;
		var idx=i,j;
		for(j=i;j<array.length;j++){
			if(min>parseInt(array[j].style.height)){
				if(idx!=i){
				array[idx].style.background="#6b5b95";
			}
				var y=delay(10);
         		await y;
				min=parseInt(array[j].style.height);
				idx=j;
				array[idx].style.background="red";
			}
			else{
				array[j].style.background="#6b5b95";
			}
		}
		if(i!=idx){
			var z=delay(25);
         		await z;
			var temp=array[i].style.height;
			array[i].style.height=array[idx].style.height;
			array[idx].style.height=temp;
			array[idx].style.background="#6b5b95";
			array[i].style.background="green";
		}
		array[i].style.background="green";
	}
}