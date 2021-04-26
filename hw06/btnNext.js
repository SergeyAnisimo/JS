var current=1;
var kolvo=4; 



tumb= new Array();
tumb[0]=new Image();   
tumb[1]=new Image();
tumb[2]=new Image();



tumb[0].src="1img.jpg"
tumb[1].src="2img.jpg"
tumb[2].src="3img.jpg"



function frw()
{
  if(current<kolvo)
  {
    current++;
    document.images['r'].src=tumb[current-1].src;
  }else if(current=kolvo){
	  current=0;
	  return;
  }
}
function bck()
{
  if(current>1)
  {
    current--;
    document.images['r'].src=tumb[current-1].src;
  }else if(current=1){
	  current=kolvo;
	  return;
  }
}

function err(){
	document.images['r'].src=tumb[0].src;
	
}
